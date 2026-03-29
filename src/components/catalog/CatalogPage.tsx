import {
  AddProductDialog,
  type AddProductFormValues,
} from "@/components/catalog/AddProductDialog";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { CatalogMain } from "@/components/catalog/Catalog";
import { useAddProductMutation } from "@/mutations/use-add-product-mutation";
import { useCatalogSearchStore } from "@/stores/use-catalog-search-store";
import { toast } from "sonner";

export const CatalogPage = () => {
  const isAddDialogOpen = useCatalogSearchStore(
    (state) => state.isAddDialogOpen,
  );
  const setIsAddDialogOpen = useCatalogSearchStore(
    (state) => state.setIsAddDialogOpen,
  );
  const addProductMutation = useAddProductMutation();

  const handleAddProduct = async (values: AddProductFormValues) => {
    await addProductMutation.mutateAsync(values);
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
        isSubmitting={addProductMutation.isPending}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};
