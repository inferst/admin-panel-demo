import { usePaginationStore } from "@/stores/use-pagination-store";
import type { OnChangeFn, SortingState, Updater } from "@tanstack/react-table";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CatalogSearchState = {
  search: string;
  sorting: SortingState;
  isAddDialogOpen: boolean;
  setSearch: (search: string) => void;
  setSorting: OnChangeFn<SortingState>;
  resetSearch: () => void;
  setIsAddDialogOpen: (value: boolean) => void;
};

const resolveSorting = (
  updaterOrValue: Updater<SortingState>,
  currentSorting: SortingState,
) => {
  return typeof updaterOrValue === "function"
    ? updaterOrValue(currentSorting)
    : updaterOrValue;
};

export const useCatalogSearchStore = create<CatalogSearchState>()(
  persist(
    (set) => ({
      search: "",
      sorting: [],
      isAddDialogOpen: false,
      setSearch: (search) => {
        usePaginationStore.getState().setCurrentPage(1);
        set({ search });
      },
      setSorting: (updaterOrValue) => {
        usePaginationStore.getState().setCurrentPage(1);
        set((state) => ({
          sorting: resolveSorting(updaterOrValue, state.sorting),
        }));
      },
      resetSearch: () => {
        usePaginationStore.getState().setCurrentPage(1);
        set({
          search: "",
          sorting: [],
        });
      },
      setIsAddDialogOpen: (value: boolean) => {
        set({ isAddDialogOpen: value });
      },
    }),
    {
      name: "catalog-search-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sorting: state.sorting,
      }),
    },
  ),
);
