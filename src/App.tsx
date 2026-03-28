import { Items } from "@/Items";
import { PrivateRoute } from "@/PrivateRoute";
import { SignIn } from "@/SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Items />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
