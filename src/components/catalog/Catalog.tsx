import {
  AddProductDialog,
  type AddProductFormValues,
} from "@/components/catalog/AddProductDialog";
import { Pagination } from "@/components/catalog/Pagination";
import { columns } from "@/components/catalog/table/columns";
import { DataTable } from "@/components/catalog/table/DataTable";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useDebounceValue } from "@/hooks/use-debounce-value";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { ArrowsClockwise } from "@/icons/ArrowsClockwise";
import { PlusCircleIcon } from "@/icons/PlusCircleIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { useCategoriesQuery } from "@/queries/use-categories-query";
import { useProductsQuery } from "@/queries/use-products-query";
import { usePaginationStore } from "@/stores/use-pagination-store";
import type { SortingState } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const LIMIT = 20;

export function Items() {
  const [search, setSearch] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const setTotalPages = usePaginationStore((state) => state.setTotalPages);

  const [sorting, setSorting] = useLocalStorage<SortingState>("sorting", []);

  const debouncedSearch = useDebounceValue(search, 300);

  const skip = (currentPage - 1) * LIMIT;
  const limit = LIMIT;

  const productsQuery = useProductsQuery({
    q: debouncedSearch,
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

  const handleSearch = (event: React.InputEvent) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
    setCurrentPage(1);
  };

  const handleRefresh = () => {
    setSearch("");
    setCurrentPage(1);
    setSorting([]);
  };

  const handleAddProduct = (values: AddProductFormValues) => {
    setIsAddDialogOpen(false);
    toast.success(`Товар "${values.title}" добавлен`);
  };

  return (
    <div className="flex py-5 flex-col gap-[30px] h-full">
      <div className="relative flex px-[30px] items-center rounded-[10px] bg-[#FFF] h-[105px]">
        <div className="text-[#202020] font-cairo text-2xl font-bold">
          Товары
        </div>
        <InputGroup className="absolute w-[54%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#F3F3F3] border-none shadow-none h-auto">
          <InputGroupInput
            value={search}
            onInput={handleSearch}
            placeholder="Найти"
            className="text-[#999] h-auto p-0!"
          />
          <InputGroupAddon className="pl-[20px] py-[12px] pr-[8px]">
            <div className="w-6 h-6">
              <SearchIcon />
            </div>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex p-[30px] flex-col gap-10 rounded-xl bg-[#FFF] w-full">
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
            <DataTable
              columns={columns}
              data={products}
              sorting={sorting}
              onSortingChange={setSorting}
            />
            {isFetching && (
              <div className="top-0 left-0 absolute w-full h-full bg-muted/40 rounded-md" />
            )}
          </div>
          {products.length > 0 && (
            <div className="flex py-[11px] justify-between">
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
      </div>
      <AddProductDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddProduct}
      />
    </div>
  );
}
