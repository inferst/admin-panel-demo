import { Button } from "@/components/ui/button";
import { CaretLeftIcon } from "@/icons/CaretLeftIcon";
import { CaretRightIcon } from "@/icons/CaretRightIcon";
import { usePaginationStore } from "@/stores/use-pagination-store";
import { memo, useMemo } from "react";

const ELLIPSIS = "ellipsis";

export const Pagination = memo(() => {
  const currentPage = usePaginationStore((state) => state.currentPage);
  const totalPages = usePaginationStore((state) => state.totalPages);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  const items = useMemo(() => {
    if (totalPages <= 7) {
      return [...Array(totalPages).keys()].map((page) => page + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, `${ELLIPSIS}-right`, totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        `${ELLIPSIS}-left`,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      `${ELLIPSIS}-left`,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      `${ELLIPSIS}-right`,
      totalPages,
    ];
  }, [currentPage, totalPages]);

  const isFirstPage = currentPage <= 1;
  const isLastPage = totalPages <= 0 || currentPage >= totalPages;

  const handlePrevious = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-4">
      <Button
        disabled={isFirstPage}
        onClick={handlePrevious}
        variant="link"
        className="w-7.5 h-7.5 border-none"
      >
        <CaretLeftIcon />
      </Button>
      <div className="flex gap-2">
        {items.map((item) => {
          if (typeof item === "string") {
            return (
              <div
                key={item}
                className="flex min-w-7.5 h-7.5 items-center justify-center text-[#B2B3B9]"
              >
                ...
              </div>
            );
          }

          return currentPage === item ? (
            <Button
              key={item}
              onClick={() => setCurrentPage(item)}
              className="min-w-7.5 h-7.5 border-none rounded bg-[#797FEA]"
            >
              {item}
            </Button>
          ) : (
            <Button
              key={item}
              variant={"secondary"}
              onClick={() => setCurrentPage(item)}
              className="text-[#B2B3B9] shadow-none border-[#ECECEB] bg-white min-w-7.5 h-7.5 rounded"
            >
              {item}
            </Button>
          );
        })}
      </div>
      <Button
        disabled={isLastPage}
        onClick={handleNext}
        variant="link"
        className="w-7.5 h-7.5 border-none"
      >
        <CaretRightIcon />
      </Button>
    </div>
  );
});
