import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { login, getMe } from "./authApi";
import { tokenManager } from "@/api/tokenManager";

export function useAuth() {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: getMe,
    enabled: !!tokenManager.getAccess(),
    staleTime: Infinity,
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user && !isError,
    login: loginMutation.mutateAsync,
    loginError: loginMutation.error,
    loginPending: loginMutation.isPending,
  };
}
