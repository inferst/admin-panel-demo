import { TableWidget } from "@/components/table/TableWidget";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { ArrowsClockwise } from "@/icons/ArrowsClockwise";
import { CaretLeftIcon } from "@/icons/CaretLeftIcon";
import { CaretRightIcon } from "@/icons/CaretRightIcon";
import { PlusCircleIcon } from "@/icons/PlusCircleIcon";
import { SearchIcon } from "@/icons/SearchIcon";

export function Items() {
  return (
    <div className="flex py-5 flex-col gap-[30px] h-full">
      <div className="relative flex px-[30px] items-center rounded-[10px] bg-[#FFF] h-[105px]">
        <div className="text-[#202020] font-cairo text-2xl font-bold">
          Товары
        </div>
        <InputGroup className="absolute w-[54%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#F3F3F3] border-none shadow-none h-auto">
          <InputGroupInput
            placeholder="Найти"
            className="text-[#999] h-auto p-0!"
          />
          <InputGroupAddon className="pl-[20px] py-[12px] pr-[8px]">
            <div className="w-6 h-6">
              <SearchIcon />
            </div>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex p-[30px] flex-col gap-10 rounded-xl bg-[#FFF] w-full">
          <div className="flex justify-between items-center">
            <p className="text-[#333] font-cairo text-xl font-bold leading-5">
              Все позиции
            </p>
            <div className="flex items-start gap-2 w-fit">
              <Button
                variant="outline"
                className="size-11 shadow-none border-[#ECECEB] bg-white rounded-lg p-0 [&_svg:not([class*='size-'])]:size-5.5"
              >
                <ArrowsClockwise />
              </Button>
              <Button
                size={"lg"}
                className="border-none font-semibold font-cairo"
              >
                <PlusCircleIcon />
                Добавить
              </Button>
            </div>
          </div>
          <TableWidget />
          <div className="flex py-[11px] justify-between">
            <p className="text-[#969B9F] font-roboto text-lg">
              Показано <span className="text-[#333]">1-20</span> из{" "}
              <span className="text-[#333]">120</span>
            </p>
            <div className="flex gap-4">
              <Button variant="link" className="w-7.5 h-7.5 border-none">
                <CaretLeftIcon />
              </Button>
              <div className="flex gap-2">
                <Button className="min-w-7.5 h-7.5 border-none rounded bg-[#797FEA]">
                  1
                </Button>
                <Button
                  variant={"secondary"}
                  className="text-[#B2B3B9] shadow-none border-[#ECECEB] bg-white min-w-7.5 h-7.5 rounded"
                >
                  2
                </Button>
              </div>
              <Button variant="link" className="w-7.5 h-7.5 border-none">
                <CaretRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
