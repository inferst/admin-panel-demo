import { Pagination } from "@/components/catalog/Pagination";
import { columns } from "@/components/catalog/table/columns";
import { CatalogTable } from "@/components/catalog/table/CatalogTable";
import { Button } from "@/components/ui/button";
import { ArrowsClockwise } from "@/icons/ArrowsClockwise";
import { PlusCircleIcon } from "@/icons/PlusCircleIcon";
import { useCategoriesQuery } from "@/queries/use-categories-query";
import { useProductsQuery } from "@/queries/use-products-query";
import { useCatalogSearchStore } from "@/stores/use-catalog-search-store";
import { useCatalogSortingStore } from "@/stores/use-catalog-sorting-store";
import { usePaginationStore } from "@/stores/use-pagination-store";
import type { SortingState, Updater } from "@tanstack/react-table";
import { useEffect, useMemo } from "react";

const LIMIT = 20;

export const CatalogMain = () => {
  const search = useCatalogSearchStore((state) => state.search);
  const resetSearch = useCatalogSearchStore((state) => state.resetSearch);
  const sorting = useCatalogSortingStore((state) => state.sorting);
  const setSorting = useCatalogSortingStore((state) => state.setSorting);
  const resetSorting = useCatalogSortingStore((state) => state.resetSorting);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const setTotalPages = usePaginationStore((state) => state.setTotalPages);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const setIsAddDialogOpen = useCatalogSearchStore(
    (state) => state.setIsAddDialogOpen,
  );

  const skip = (currentPage - 1) * LIMIT;
  const limit = LIMIT;

  const productsQuery = useProductsQuery({
    q: search,
    limit,
    skip,
    sortBy: sorting[0]?.id,
    order: sorting[0]?.desc ? "desc" : "asc",
  });

  const productsData = productsQuery.data;
  const isFetching = productsQuery.isFetching;

  const categoriesQuery = useCategoriesQuery();
  const categoriesData = categoriesQuery.data;

  const products = useMemo(() => {
    return (
      productsData?.products.map((product) => {
        const category = categoriesData
          ? (categoriesData.get(product.category) ?? product.category)
          : product.category;

        return { ...product, category };
      }) ?? []
    );
  }, [productsData, categoriesData]);

  const total = productsData?.total ?? 0;

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(total / limit));
  }, [total, limit]);

  useEffect(() => {
    setTotalPages(totalPages);
  }, [setTotalPages, totalPages]);

  const handleRefresh = () => {
    resetSearch();
    resetSorting();
    setCurrentPage(1);
  };

  const handleSortingChange = (updaterOrValue: Updater<SortingState>) => {
    setCurrentPage(1);
    setSorting(updaterOrValue);
  };

  return (
    <div className="flex p-7.5 flex-col gap-10 rounded-xl bg-[#FFF] w-full">
      <div className="flex justify-between items-center">
        <p className="text-[#333] font-cairo text-xl font-bold leading-5">
          Все позиции
        </p>
        <div className="flex items-start gap-2 w-fit">
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="size-11 shadow-none border-[#ECECEB] bg-white rounded-lg p-0 [&_svg:not([class*='size-'])]:size-5.5"
          >
            <ArrowsClockwise />
          </Button>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            size={"lg"}
            className="border-none font-semibold font-cairo"
          >
            <PlusCircleIcon />
            Добавить
          </Button>
        </div>
      </div>
      <div className="relative">
        <CatalogTable
          columns={columns}
          data={products}
          sorting={sorting}
          onSortingChange={handleSortingChange}
        />
        {isFetching && (
          <div className="top-0 left-0 absolute w-full h-full bg-muted/40 rounded-md" />
        )}
      </div>
      {products.length > 0 && (
        <div className="flex py-2.75 justify-between">
          <p className="text-[#969B9F] font-roboto text-lg">
            Показано{" "}
            <span className="text-[#333]">
              {skip + 1}-{Math.min(total, skip + limit)}
            </span>{" "}
            из <span className="text-[#333]">{total}</span>
          </p>
          <Pagination />
        </div>
      )}
    </div>
  );
};
