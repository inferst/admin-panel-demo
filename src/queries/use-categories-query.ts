import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => getCategories(),
    select: (data) =>
      new Map(data.map((category) => [category.slug, category.name])),
  });
};
