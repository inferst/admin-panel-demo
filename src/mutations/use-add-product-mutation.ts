import {
  addProduct,
  type AddProductParams,
  type GetProductsResponse,
} from "@/api/api";
import type { Product } from "@/components/catalog/table/columns";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ProductsQueryContext = {
  previousEntries: Array<[readonly unknown[], GetProductsResponse | undefined]>;
};

const buildProduct = (params: AddProductParams): Product => {
  return {
    id: crypto.randomUUID(),
    title: params.title,
    thumbnail: "https://dummyjson.com/image/48",
    category: "local",
    price: params.price,
    brand: params.brand,
    sku: params.sku,
    rating: 0,
  };
};

export const useAddProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: AddProductParams) => addProduct(params),
    onMutate: async (params): Promise<ProductsQueryContext> => {
      const optimisticProduct = buildProduct(params);
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const previousEntries = queryClient.getQueriesData<GetProductsResponse>({
        queryKey: ["products"],
      });

      queryClient.setQueriesData<GetProductsResponse>(
        { queryKey: ["products"] },
        (current) => {
          if (!current) {
            return current;
          }

          return {
            ...current,
            products: [optimisticProduct, ...current.products],
            total: current.total + 1,
          };
        },
      );

      return { previousEntries };
    },
    onError: (_error, _params, context) => {
      context?.previousEntries.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },
  });
};
