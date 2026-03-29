import { Loader2Icon } from "lucide-react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/use-auth";

export function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-svh w-full flex justify-center items-center">
        <Loader2Icon className="size-8 animate-spin" />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
