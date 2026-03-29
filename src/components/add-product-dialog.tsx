import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddProductSchema = z.object({
  title: z.string().trim().min(1, "Введите наименование"),
  price: z.coerce
    .number({ error: "Введите цену" })
    .positive("Цена должна быть больше 0"),
  brand: z.string().trim().min(1, "Введите вендора"),
  sku: z.string().trim().min(1, "Введите артикул"),
});

export type AddProductFormValues = z.infer<typeof AddProductSchema>;
type AddProductFormInput = z.input<typeof AddProductSchema>;

type AddProductDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: AddProductFormValues) => void;
};

export function AddProductDialog(props: AddProductDialogProps) {
  const { open, onOpenChange, onSubmit } = props;

  const form = useForm<AddProductFormInput, undefined, AddProductFormValues>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      title: "",
      price: undefined,
      brand: "",
      sku: "",
    },
  });

  const handleOpenChange = (value: boolean) => {
    if (!value) {
      form.reset();
    }

    onOpenChange(value);
  };

  const handleSubmit = form.handleSubmit((values) => {
    onSubmit({
      title: values.title.trim(),
      price: values.price,
      brand: values.brand.trim(),
      sku: values.sku.trim(),
    });

    form.reset();
  });

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-140 rounded-xl bg-white p-8 shadow-none">
        <DialogHeader className="gap-3">
          <DialogTitle className="text-[#202020] font-cairo text-2xl font-bold">
            Добавить товар
          </DialogTitle>
          <DialogDescription className="text-[#969B9F] font-roboto text-base">
            Заполните основные поля товара
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FieldGroup className="gap-5">
            <Field className="gap-2">
              <FieldLabel
                htmlFor="title"
                className="text-[#333] font-cairo text-base font-semibold"
              >
                Наименование
              </FieldLabel>
              <Input
                id="title"
                placeholder="Например, Apple Watch SE"
                className="h-12 rounded-lg border-[#ECECEB] bg-[#F8F8F8] px-4 shadow-none"
                aria-invalid={!!form.formState.errors.title}
                {...form.register("title")}
              />
              <FieldError errors={[form.formState.errors.title]} />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field className="gap-2">
                <FieldLabel
                  htmlFor="price"
                  className="text-[#333] font-cairo text-base font-semibold"
                >
                  Цена
                </FieldLabel>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="19999"
                  className="h-12 rounded-lg border-[#ECECEB] bg-[#F8F8F8] px-4 shadow-none"
                  aria-invalid={!!form.formState.errors.price}
                  {...form.register("price")}
                />
                <FieldError errors={[form.formState.errors.price]} />
              </Field>

              <Field className="gap-2">
                <FieldLabel
                  htmlFor="brand"
                  className="text-[#333] font-cairo text-base font-semibold"
                >
                  Вендор
                </FieldLabel>
                <Input
                  id="brand"
                  placeholder="Apple"
                  className="h-12 rounded-lg border-[#ECECEB] bg-[#F8F8F8] px-4 shadow-none"
                  aria-invalid={!!form.formState.errors.brand}
                  {...form.register("brand")}
                />
                <FieldError errors={[form.formState.errors.brand]} />
              </Field>
            </div>

            <Field className="gap-2">
              <FieldLabel
                htmlFor="sku"
                className="text-[#333] font-cairo text-base font-semibold"
              >
                Артикул
              </FieldLabel>
              <Input
                id="sku"
                placeholder="AW-SE-44-BLK"
                className="h-12 rounded-lg border-[#ECECEB] bg-[#F8F8F8] px-4 shadow-none"
                aria-invalid={!!form.formState.errors.sku}
                {...form.register("sku")}
              />
              <FieldError errors={[form.formState.errors.sku]} />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-2 flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              className="h-11 rounded-lg border-[#ECECEB] bg-white px-5 font-cairo font-semibold shadow-none"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              size="lg"
              className="h-11 rounded-lg border-none px-5 font-cairo font-semibold"
            >
              Сохранить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
