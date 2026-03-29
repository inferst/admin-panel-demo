import { searchProducts, type SearchProductsParams } from "@/api/authApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useProductsQuery = (params: SearchProductsParams) => {
  return useQuery({
    queryKey: [
      "products",
      params.q,
      params.sortBy,
      params.order,
      params.limit,
      params.skip,
    ],
    queryFn: async () => searchProducts(params),
    placeholderData: keepPreviousData,
  });
};
