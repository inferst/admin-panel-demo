import { getMe } from "@/api/authApi";
import { tokenManager } from "@/api/tokenManager";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getMe,
    enabled: tokenManager.isLoggedIn(),
    staleTime: Infinity,
    retry: false,
  });
}
