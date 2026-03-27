import { useProductsQuery } from "@/components/table/use-products-query";
import { columns } from "./columns";
import { DataTable } from "./DataTable";

export function TableWidget() {
  const productsQuery = useProductsQuery();

  const data = productsQuery.data;

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className="">
      <DataTable columns={columns} data={data.products} />
    </div>
  );
}
