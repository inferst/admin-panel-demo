const KEYS = {
  ACCESS: "auth_access_token",
  REFRESH: "auth_refresh_token",
};

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const tokenManager = {
  getAccess() {
    return localStorage.getItem(KEYS.ACCESS);
  },

  getRefresh() {
    return localStorage.getItem(KEYS.REFRESH);
  },

  setTokens({ accessToken, refreshToken }: Tokens) {
    localStorage.setItem(KEYS.ACCESS, accessToken);
    localStorage.setItem(KEYS.REFRESH, refreshToken);
  },

  clear() {
    localStorage.removeItem(KEYS.ACCESS);
    localStorage.removeItem(KEYS.REFRESH);
  },

  isLoggedIn() {
    return !!this.getAccess();
  },
};
