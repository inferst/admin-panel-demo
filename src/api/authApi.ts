import { tokenManager } from "@/api/tokenManager";
import { apiFetch } from "./apiFetch";

type LoginProps = {
  usename: string;
  password: string;
};

export async function login(props: LoginProps) {
  const result = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...props, expiresInMins: 30 }),
  });

  if (!result.ok) throw new Error("Failed to login");

  const data = await result.json();
  tokenManager.setTokens(data);

  return data;
}

type GetProductsParams = {
  limit: number;
  skip: number;
};

function paramsToQuery(params: Record<string, unknown>): string {
  const array = [];

  for (const key in params) {
    array.push(`${key}=${params[key]}`);
  }

  return `?${array.join("&")}`;
}

export async function getProducts(params: GetProductsParams) {
  return apiFetch(`/products?${paramsToQuery(params)}`);
}

type SearchProductsParams = GetProductsParams & { q: string };

export async function searchProducts(params: SearchProductsParams) {
  return apiFetch(`/products/search${paramsToQuery(params)}`);
}

export async function getCategories() {
  return apiFetch("/products/categories");
}

export async function getMe() {
  return apiFetch("/auth/me");
}
