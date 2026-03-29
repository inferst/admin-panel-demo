import { create } from "zustand";

type CatalogSearchState = {
  search: string;
  isAddDialogOpen: boolean;
  setSearch: (search: string) => void;
  resetSearch: () => void;
  setIsAddDialogOpen: (value: boolean) => void;
};

export const useCatalogSearchStore = create<CatalogSearchState>()((set) => ({
  search: "",
  isAddDialogOpen: false,
  setSearch: (search) => {
    set({ search });
  },
  resetSearch: () => {
    set({
      search: "",
    });
  },
  setIsAddDialogOpen: (value: boolean) => {
    set({ isAddDialogOpen: value });
  },
}));
