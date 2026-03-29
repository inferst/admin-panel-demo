import {
  getProducts,
  searchProducts,
  type SearchProductsParams,
} from "@/api/api";
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
    queryFn: async () => (params.q ? searchProducts(params) : getProducts(params)),
    placeholderData: keepPreviousData,
  });
};
