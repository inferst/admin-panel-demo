import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useDebounceValue } from "@/hooks/use-debounce-value";
import { SearchIcon } from "@/icons/SearchIcon";
import { useCatalogSearchStore } from "@/stores/use-catalog-search-store";
import { usePaginationStore } from "@/stores/use-pagination-store";
import { useEffect, useState } from "react";

export const CatalogHeader = () => {
  const setSearch = useCatalogSearchStore((state) => state.setSearch);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounceValue(inputValue, 300);

  useEffect(() => {
    setCurrentPage(1);
    setSearch(debouncedSearch);
  }, [debouncedSearch, setCurrentPage, setSearch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative flex px-7.5 items-center rounded-[10px] bg-[#FFF] h-26.25">
      <div className="text-[#202020] font-cairo text-2xl font-bold">Товары</div>
      <InputGroup className="absolute w-[54%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#F3F3F3] border-none shadow-none h-auto">
        <InputGroupInput
          id="search"
          value={inputValue}
          onChange={handleSearch}
          placeholder="Найти"
          className="h-12 p-0! text-black"
        />
        <InputGroupAddon className="pl-5 py-3 pr-2">
          <div className="w-6 h-6">
            <SearchIcon />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
