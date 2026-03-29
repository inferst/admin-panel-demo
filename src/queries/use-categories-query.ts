import { getCategories } from "@/api/authApi";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return getCategories();
    },
    select: (data) =>
      new Map(data.map((category) => [category.slug, category.name])),
  });
};
