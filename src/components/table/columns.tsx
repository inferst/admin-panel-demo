import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DotsIcon } from "@/icons/DotsIcon";
import { PlusIcon } from "@/icons/PlusIcon";
import { type ColumnDef } from "@tanstack/react-table";

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  brand: string;
  sku: string;
  rating: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border border-[#B2B3B9] shadow-none size-5.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border border-[#B2B3B9] shadow-none size-5.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left">Наименование</div>,
    enableSorting: true,
    cell: ({ row, getValue }) => {
      return (
        <div className="flex">
          <img
            src={row.original.thumbnail}
            className="w-[48px] h-[48px] rounded-lg border border-[#ECECEB] mr-[18px]"
          />
          <div className="flex flex-col justify-between overflow-hidden">
            <strong className="truncate">{getValue<string>()}</strong>
            <span className="text-sm text-left text-[#B2B3B9] truncate">
              {row.original.category}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Вендор",
    cell: ({ cell }) => {
      return <strong>{cell.getValue<string>()}</strong>;
    },
  },
  {
    accessorKey: "sku",
    header: "Артикул",
  },
  {
    accessorKey: "rating",
    header: "Оценка",
    cell: ({ cell }) => {
      const rating = cell.getValue<number>();
      return (
        <>
          <span className={rating < 3.5 ? "text-destructive" : ""}>
            {rating.toFixed(1)}
          </span>
          /5
        </>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Цена, ₽",
    cell: ({ cell }) => {
      const formatted = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(cell.getValue<number>());

      return <span className="text-[#999]">{formatted}</span>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div className="flex items-center gap-6">
          <Button
            size={"icon"}
            className="h-auto py-px w-[52px] h-[27px] rounded-full border-none"
          >
            <PlusIcon />
          </Button>
          <Button variant={"link"}>
            <DotsIcon />
          </Button>
        </div>
      );
    },
  },
];
