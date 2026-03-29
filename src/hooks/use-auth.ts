import { useLoginQuery } from "@/queries/use-login-query";

export function useAuth() {
  const { data: user, isLoading, isError } = useLoginQuery();

  return {
    user,
    isLoading,
    isAuthenticated: !!user && !isError,
  };
}
