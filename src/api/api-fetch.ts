import { tokenManager } from "./token-manager";

const BASE = "https://dummyjson.com";

type RefreshQueueItem = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
};

let isRefreshing = false;
let refreshQueue: RefreshQueueItem[] = [];

async function runRefresh() {
  if (isRefreshing) {
    return new Promise((resolve, reject) =>
      refreshQueue.push({ resolve, reject }),
    );
  }

  isRefreshing = true;

  try {
    const result = await fetch(`${BASE}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: tokenManager.getRefresh(),
        expiresInMins: 30,
      }),
    });

    if (!result.ok) throw new Error("Failed to refresh token");

    const data = await result.json();

    tokenManager.setTokens(data.accessToken, data.refreshToken);
    refreshQueue.forEach(({ resolve }) => resolve());
  } catch (e) {
    tokenManager.clear();
    refreshQueue.forEach(({ reject }) => reject(e));
    throw e;
  } finally {
    isRefreshing = false;
    refreshQueue = [];
  }
}

export async function apiFetch(path: string) {
  const doRequest = () => {
    const accessToken = tokenManager.getAccess();

    return fetch(`${BASE}${path}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  let result = await doRequest();

  if (result.status === 401 && tokenManager.getRefresh()) {
    await runRefresh();
    result = await doRequest();
  }

  if (!result.ok) {
    const error = await result.json().catch(() => ({}));

    throw Object.assign(new Error(error.message ?? "Request error"), {
      status: result.status,
    });
  }

  return result.json();
}
