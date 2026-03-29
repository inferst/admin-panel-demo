import {
  type Cell,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type Header,
  type OnChangeFn,
  type Row,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { type CSSProperties, useCallback } from "react";
import type { Product } from "@/components/catalog/table/columns";

type DataTableProps<TValue> = {
  columns: ColumnDef<Product, TValue>[];
  data: Product[];
  sorting: SortingState;
  onSortingChange: OnChangeFn<SortingState>;
};

export function DataTable<TValue>({
  columns,
  data,
  sorting,
  onSortingChange,
}: DataTableProps<TValue>) {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable<Product>({
    data,
    columns,
    state: { sorting },
    onSortingChange,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  const renderHeader = useCallback(<T,>(header: Header<T, unknown>) => {
    switch (header.id) {
      case "select": {
        return (
          <TableHead key={header.id} className="pr-[18px]">
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        );
      }
      default: {
        return (
          <TableHead key={header.id} className="pl-0">
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        );
      }
    }
  }, []);

  const renderCell = useCallback(<T,>(cell: Cell<T, unknown>, row: Row<T>) => {
    switch (cell.column.id) {
      case "select": {
        return (
          <TableCell
            key={cell.id}
            className={cn(
              "pl-[15px] pr-[18px] h-[73px]",
              cell.column.getIndex() == 0 && "border-l-3 border-transparent ",
              cell.column.getIndex() == 0 &&
                row.getIsSelected() &&
                "border-l-3 border-[#3C538E]",
            )}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      }
      case "title": {
        return (
          <TableCell key={cell.id} className="pl-0">
            {/* <img src={''} className="w-[48px] h-[48px] rounded-lg"/> */}
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      }
      default: {
        return (
          <TableCell key={cell.id} className="pl-0">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      }
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Table>
        <colgroup>
          <col style={{ width: "56px" } as CSSProperties} />
          <col style={{ width: "30%" } as CSSProperties} />
          <col style={{ width: "20%" } as CSSProperties} />
          <col style={{ width: "20%" } as CSSProperties} />
          <col style={{ width: "10%" } as CSSProperties} />
          <col style={{ width: "10%" } as CSSProperties} />
          <col style={{ width: "10%" } as CSSProperties} />
        </colgroup>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return renderHeader(header);
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => renderCell(cell, row))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
