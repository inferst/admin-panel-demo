import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/sign-in-input-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CrossIcon } from "@/icons/CrossIcon";
import { EyeOffIcon } from "@/icons/EyeOffIcon";
import { LockIcon } from "@/icons/LockIcon";
import { UserIcon } from "@/icons/UserIcon";
import { SignInIcon } from "./icons/SignInIcon";

export function SignIn() {
  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div className="flex py-45.5 px-0 justify-center items-center bg-background min-h-screen">
      <div className="p-1.5 rounded-[40px] bg-white shadow-[0_24px_32px_rgba(0,0,0,0.04)] w-131.25">
        <div className="rounded-[34px] p-px bg-linear-[180deg,rgb(237,237,237,1)20%,rgb(237,237,237,0)100%]">
          <div className="bg-white rounded-[34px]">
            <div className="flex p-12 flex-col items-center gap-8 rounded-[34px] bg-linear-[180deg,rgba(35,35,35,0.03)0%,rgba(35,35,35,0.00)50%]">
              <SignInIcon />
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.015em]">
                  Добро пожаловать!
                </p>
                <p className="text-[#E0E0E0] text-lg font-medium">
                  Пожалуйста, авторизируйтесь
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 w-[399px]">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <p className="text-[#232323] text-lg font-medium tracking-[-0.015em]">
                      Логин
                    </p>
                    <InputGroup>
                      <InputGroupInput
                        defaultValue="test"
                        className="text-black"
                      />
                      <InputGroupAddon>
                        <UserIcon />
                      </InputGroupAddon>
                      <InputGroupAddon align="inline-end">
                        <CrossIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <p className="text-[#232323] text-lg font-medium tracking-[-0.015em]">
                      Пароль
                    </p>
                    <InputGroup>
                      <InputGroupInput
                        defaultValue="test"
                        type="password"
                        className="text-black"
                      />
                      <InputGroupAddon>
                        <LockIcon />
                      </InputGroupAddon>
                      <InputGroupAddon align="inline-end" className="pr-4">
                        <EyeOffIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="border-2 border-muted shadow-none size-5 m-0.5" />
                  <p className="text-[#9C9C9C] font-medium">Запомнить данные</p>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full">
                    <Button
                      type="submit"
                      className="cursor-pointer w-full rounded-xl text-lg py-4 px-2 h-[54px] border border-[#367AFF] bg-linear-[180deg,rgba(255,255,255,0.12)-100%,rgba(255,255,255,0.12)100%),#242EDB]"
                      onClick={handleLogin}
                    >
                      Войти
                    </Button>
                  </div>
                  <div className="flex items-center gap-2.5 w-full">
                    <svg
                      width="175"
                      height="1"
                      viewBox="0 0 175 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full "
                    >
                      <path d="M175 0.5H0" stroke="#EDEDED" />
                    </svg>
                    <p className="text-[#EBEBEB] font-medium">или</p>
                    <svg
                      width="175"
                      height="1"
                      viewBox="0 0 175 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full "
                    >
                      <path d="M175 0.5H0" stroke="#EDEDED" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-[#6C6C6C] font-inter text-lg font-semibold w-full text-center">
                Нет аккаунта?{" "}
                <a href="" className="text-[#242EDB] underline">
                  Создать
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
