import { tokenManager } from "@/api/token-manager";
import type { Product } from "@/components/catalog/table/columns";
import { apiFetch } from "./api-fetch";

type PostLoginParams = {
  username: string;
  password: string;
  remember: boolean;
};

export async function login(params: PostLoginParams) {
  const result = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: params.username,
      password: params.password,
      expiresInMins: 30,
    }),
  });

  if (!result.ok) throw new Error("Failed to login");

  const data = await result.json();

  tokenManager.setPersist(params.remember);
  tokenManager.setTokens(data.accessToken, data.refreshToken);

  return data;
}

export type GetProductsParams = {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: "asc" | "desc";
};

function paramsToQuery(params: Record<string, number | string>): string {
  const array = [];

  for (const key in params) {
    if (params[key] != undefined) {
      array.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  }

  return `?${array.join("&")}`;
}

export type GetProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts(
  params: GetProductsParams,
): Promise<GetProductsResponse> {
  return apiFetch(`/products${paramsToQuery(params)}`);
}

export type SearchProductsParams = GetProductsParams & { q?: string };

export async function searchProducts(
  params: SearchProductsParams,
): Promise<GetProductsResponse> {
  return apiFetch(`/products/search${paramsToQuery(params)}`);
}

export type Category = {
  slug: string;
  name: string;
};

export type GetCategoriesResponse = Category[];

export async function getCategories(): Promise<GetCategoriesResponse> {
  return apiFetch("/products/categories");
}

export async function getMe() {
  return apiFetch("/auth/me");
}
