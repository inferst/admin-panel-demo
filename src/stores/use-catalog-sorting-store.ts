import type { OnChangeFn, SortingState, Updater } from "@tanstack/react-table";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CatalogSortingState = {
  sorting: SortingState;
  setSorting: OnChangeFn<SortingState>;
  resetSorting: () => void;
};

const resolveSorting = (
  updaterOrValue: Updater<SortingState>,
  currentSorting: SortingState,
) => {
  return typeof updaterOrValue === "function"
    ? updaterOrValue(currentSorting)
    : updaterOrValue;
};

export const useCatalogSortingStore = create<CatalogSortingState>()(
  persist(
    (set) => ({
      sorting: [],
      setSorting: (updaterOrValue) => {
        set((state) => ({
          sorting: resolveSorting(updaterOrValue, state.sorting),
        }));
      },
      resetSorting: () => {
        set({
          sorting: [],
        });
      },
    }),
    {
      name: "catalog-sorting-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
