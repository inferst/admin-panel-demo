import { create } from "zustand";

type PaginationState = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
  resetPagination: () => void;
};

export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  totalPages: 0,
  setCurrentPage: (page) => {
    set((state) => {
      const maxPage = state.totalPages > 0 ? state.totalPages : 1;

      return {
        currentPage: Math.min(Math.max(page, 1), maxPage),
      };
    });
  },
  setTotalPages: (pages) => {
    const totalPages = Math.max(0, pages);

    set((state) => {
      const maxPage = totalPages > 0 ? totalPages : 1;

      return {
        totalPages,
        currentPage: Math.min(state.currentPage, maxPage),
      };
    });
  },
  resetPagination: () => {
    set({ currentPage: 1, totalPages: 0 });
  },
}));
