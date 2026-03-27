import type { Product } from "@/components/table/columns";
import { useQuery } from "@tanstack/react-query";

type ProductsResponse = {
  products: Product[];
};

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductsResponse> => {
      return fetch("https://dummyjson.com/products?limit=5").then((data) =>
        data.json(),
      );
    },
  });
};
