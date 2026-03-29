import { tokenManager } from "@/api/tokenManager";
import { apiFetch } from "./apiFetch";
import type { Product } from "@/components/table/columns";

type LoginProps = {
  username: string;
  password: string;
  remember: boolean;
};

export async function login(props: LoginProps) {
  const result = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: props.username,
      password: props.password,
      expiresInMins: 30,
    }),
  });

  if (!result.ok) throw new Error("Failed to login");

  const data = await result.json();

  tokenManager.setPersist(props.remember);
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
