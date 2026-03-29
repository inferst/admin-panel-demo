const ACCESS_KEY = "auth_access";
const REFRESH_KEY = "auth_refresh";
const PERSIST_KEY = "auth_persist";

class TokenStore {
  getAccess() {
    return (
      localStorage.getItem(ACCESS_KEY) ??
      sessionStorage.getItem(ACCESS_KEY) ??
      null
    );
  }

  getRefresh() {
    return (
      localStorage.getItem(REFRESH_KEY) ??
      sessionStorage.getItem(REFRESH_KEY) ??
      null
    );
  }

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.removeItem(REFRESH_KEY);
    sessionStorage.removeItem(REFRESH_KEY);

    const storage = this.getStorage();

    storage.setItem(ACCESS_KEY, accessToken);
    storage.setItem(REFRESH_KEY, refreshToken);
  }

  clear() {
    localStorage.removeItem(PERSIST_KEY);

    localStorage.removeItem(ACCESS_KEY);
    sessionStorage.removeItem(ACCESS_KEY);

    localStorage.removeItem(REFRESH_KEY);
    sessionStorage.removeItem(REFRESH_KEY);
  }

  setPersist(persist: boolean) {
    localStorage.setItem(PERSIST_KEY, persist ? "1" : "0");
  }

  getStorage() {
    return localStorage.getItem(PERSIST_KEY) === "1"
      ? localStorage
      : sessionStorage;
  }
}

export const tokenManager = new TokenStore();
