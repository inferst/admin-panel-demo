import { SignIn } from "@/SignIn";
import "./App.css";
import { Items } from "@/Items";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section id="main">
        <SignIn />
        {/* <Items /> */}
      </section>
    </QueryClientProvider>
  );
}

export default App;
