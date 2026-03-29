import { getMe } from "@/api/api";
import { tokenManager } from "@/api/token-manager";
import { useQuery } from "@tanstack/react-query";

export const useLoginQuery = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: getMe,
    enabled: !!tokenManager.getAccess(),
    staleTime: Infinity,
    retry: false,
  });
};
