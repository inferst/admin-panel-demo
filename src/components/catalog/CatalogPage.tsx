import {
  AddProductDialog,
  type AddProductFormValues,
} from "@/components/catalog/AddProductDialog";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { CatalogMain } from "@/components/catalog/Catalog";
import { useCatalogSearchStore } from "@/stores/use-catalog-search-store";
import { toast } from "sonner";

export const CatalogPage = () => {
  const isAddDialogOpen = useCatalogSearchStore(
    (state) => state.isAddDialogOpen,
  );
  const setIsAddDialogOpen = useCatalogSearchStore(
    (state) => state.setIsAddDialogOpen,
  );

  const handleAddProduct = (values: AddProductFormValues) => {
    setIsAddDialogOpen(false);
    toast.success(`Товар "${values.title}" добавлен`);
  };

  return (
    <div className="flex py-5 flex-col gap-7.5 h-full">
      <CatalogHeader />
      <CatalogMain />
      <AddProductDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};
