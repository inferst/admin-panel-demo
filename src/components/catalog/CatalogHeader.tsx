import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "@/icons/SearchIcon";
import { useCatalogSearchStore } from "@/stores/use-catalog-search-store";

export const CatalogHeader = () => {
  const search = useCatalogSearchStore((state) => state.search);
  const setSearch = useCatalogSearchStore((state) => state.setSearch);

  const handleSearch = (event: React.InputEvent) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };

  return (
    <div className="relative flex px-7.5 items-center rounded-[10px] bg-[#FFF] h-26.25">
      <div className="text-[#202020] font-cairo text-2xl font-bold">Товары</div>
      <InputGroup className="absolute w-[54%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#F3F3F3] border-none shadow-none h-auto">
        <InputGroupInput
          id="search"
          value={search}
          onInput={handleSearch}
          placeholder="Найти"
          className="text-[#999] h-12 p-0! text-black"
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
