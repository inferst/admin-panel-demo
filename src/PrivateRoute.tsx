import { Navigate, Outlet } from "react-router";
import { useAuth } from "./api/useAuth";
import { Loader2Icon } from "lucide-react";

export function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader2Icon className="size-8 animate-spin" />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
