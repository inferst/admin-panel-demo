import { CatalogPage } from "@/components/catalog/CatalogPage";
import { LoginPage } from "@/components/login/LoginPage";
import { PrivateRoute } from "@/components/PrivateRoute";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<CatalogPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster richColors position="top-right" />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
