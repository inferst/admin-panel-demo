import { Button } from "@/components/ui/button";
import { CaretLeftIcon } from "@/icons/CaretLeftIcon";
import { CaretRightIcon } from "@/icons/CaretRightIcon";
import { cn } from "@/lib/utils";
import { memo } from "react";

type PaginationProps = {
  pages: number[];
  selected: number;
  onChange: (page: number) => void;
};

export const Pagination = memo((props: PaginationProps) => {
  const { pages, selected = 1, onChange } = props;

  return (
    <div className="flex gap-4">
      <Button
        disabled={selected <= 1}
        onClick={() => onChange(selected - 1)}
        variant="link"
        className="w-7.5 h-7.5 border-none"
      >
        <CaretLeftIcon />
      </Button>
      <div className="flex gap-2">
        {pages.map((page) => {
          return selected == page ? (
            <Button
              key={page}
              onClick={() => onChange(page)}
              className={cn("min-w-7.5 h-7.5 border-none rounded bg-[#797FEA]")}
            >
              {page}
            </Button>
          ) : (
            <Button
              key={page}
              variant={"secondary"}
              onClick={() => onChange(page)}
              className="text-[#B2B3B9] shadow-none border-[#ECECEB] bg-white min-w-7.5 h-7.5 rounded"
            >
              {page}
            </Button>
          );
        })}
      </div>
      <Button
        disabled={selected >= pages.length}
        onClick={() => onChange(selected + 1)}
        variant="link"
        className="w-7.5 h-7.5 border-none"
      >
        <CaretRightIcon />
      </Button>
    </div>
  );
});
