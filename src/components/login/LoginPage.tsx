import {
  LoginInputGroup,
  LoginInputGroupAddon,
  LoginInputGroupInput,
} from "@/components/login/LoginInputGroup";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CrossIcon } from "@/icons/CrossIcon";
import { EyeOffIcon } from "@/icons/EyeOffIcon";
import { LockIcon } from "@/icons/LockIcon";
import { UserIcon } from "@/icons/UserIcon";
import { useLoginMutation } from "@/mutations/use-login-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { SignInIcon } from "../../icons/SignInIcon";

const LoginSchema = z.object({
  username: z.string().min(1, "Логин обязателен"),
  password: z.string().min(1, "Пароль обязателен"),
  remember: z.boolean(),
});

type LoginForm = z.infer<typeof LoginSchema>;

export function LoginPage() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginForm) => {
    if (loginMutation.isPending) {
      return;
    }

    try {
      setLoginError("");
      await loginMutation.mutateAsync(data);
      navigate("/");
    } catch (err) {
      setLoginError("Неправильные логин или пароль");

      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <main className="flex py-45.5 px-0 justify-center items-center bg-background min-h-screen">
      <section
        aria-labelledby="login-title"
        className="p-1.5 rounded-[40px] bg-white shadow-[0_24px_32px_rgba(0,0,0,0.04)] w-131.25"
      >
        <div className="rounded-[34px] p-px bg-linear-[180deg,rgb(237,237,237,1)20%,rgb(237,237,237,0)100%]">
          <div className="bg-white rounded-[34px]">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex p-12 flex-col items-center gap-8 rounded-[34px] bg-linear-[180deg,rgba(35,35,35,0.03)0%,rgba(35,35,35,0.00)50%]"
            >
              <SignInIcon aria-hidden="true" />
              <div className="flex flex-col justify-center items-center gap-3">
                <h1
                  id="login-title"
                  className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.015em]"
                >
                  Добро пожаловать!
                </h1>
                <p className="text-[#E0E0E0] text-lg font-medium">
                  Пожалуйста, авторизируйтесь
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 w-99.75">
                <div className="flex flex-col items-start gap-4 w-full">
                  <Controller
                    name="username"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label
                          htmlFor="username"
                          className="text-[#232323] text-lg font-medium tracking-[-0.015em]"
                        >
                          Логин
                        </label>
                        <LoginInputGroup>
                          <LoginInputGroupInput
                            {...field}
                            id="username"
                            autoComplete="username"
                            className="text-black"
                            disabled={loginMutation.isPending}
                            aria-invalid={fieldState.invalid}
                            aria-describedby={
                              fieldState.invalid ? "username-error" : undefined
                            }
                            onChange={(event) => {
                              if (loginError) {
                                setLoginError("");
                              }

                              field.onChange(event);
                            }}
                          />
                          <LoginInputGroupAddon>
                            <UserIcon aria-hidden="true" />
                          </LoginInputGroupAddon>
                          {field.value && (
                            <LoginInputGroupAddon
                              align="inline-end"
                              className="pr-4"
                            >
                              <Button
                                type="button"
                                variant="link"
                                className="p-0"
                                disabled={loginMutation.isPending}
                                aria-label="Очистить логин"
                                onClick={() => {
                                  if (loginError) {
                                    setLoginError("");
                                  }

                                  field.onChange("");
                                }}
                              >
                                <CrossIcon aria-hidden="true" />
                              </Button>
                            </LoginInputGroupAddon>
                          )}
                        </LoginInputGroup>
                        {fieldState.invalid && (
                          <p id="username-error" className="text-destructive">
                            Логин обязателен
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label
                          htmlFor="password"
                          className="text-[#232323] text-lg font-medium tracking-[-0.015em]"
                        >
                          Пароль
                        </label>
                        <LoginInputGroup>
                          <LoginInputGroupInput
                            {...field}
                            id="password"
                            type={passwordVisibility ? "text" : "password"}
                            autoComplete="current-password"
                            className="text-black"
                            disabled={loginMutation.isPending}
                            aria-invalid={fieldState.invalid}
                            aria-describedby={
                              fieldState.invalid ? "password-error" : undefined
                            }
                            onChange={(event) => {
                              if (loginError) {
                                setLoginError("");
                              }

                              field.onChange(event);
                            }}
                          />
                          <LoginInputGroupAddon>
                            <LockIcon aria-hidden="true" />
                          </LoginInputGroupAddon>
                          <LoginInputGroupAddon
                            align="inline-end"
                            className="pr-4"
                          >
                            <Button
                              type="button"
                              variant="link"
                              className="p-0"
                              disabled={loginMutation.isPending}
                              aria-label={
                                passwordVisibility
                                  ? "Скрыть пароль"
                                  : "Показать пароль"
                              }
                              aria-pressed={passwordVisibility}
                              onClick={() => {
                                setPasswordVisibility((value) => !value);
                              }}
                            >
                              <EyeOffIcon aria-hidden="true" />
                            </Button>
                          </LoginInputGroupAddon>
                        </LoginInputGroup>
                        {fieldState.invalid && (
                          <p id="password-error" className="text-destructive">
                            Пароль обязателен
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-2.5">
                  <Controller
                    name="remember"
                    control={form.control}
                    render={({ field }) => (
                      <>
                        <Checkbox
                          id="remember"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={loginMutation.isPending}
                          className="border-2 border-muted shadow-none size-5 m-0.5"
                        />
                        <label
                          htmlFor="remember"
                          className="text-[#9C9C9C] font-medium"
                        >
                          Запомнить данные
                        </label>
                      </>
                    )}
                  />
                </div>
                <p
                  role="alert"
                  aria-live="assertive"
                  className="text-destructive"
                >
                  {loginError}
                </p>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full">
                    <Button
                      type="submit"
                      disabled={loginMutation.isPending}
                      className="cursor-pointer w-full rounded-xl text-lg py-4 px-2 h-13.5 border border-[#367AFF] bg-linear-[180deg,rgba(255,255,255,0.12)-100%,rgba(255,255,255,0.12),#242EDB]"
                    >
                      Войти
                    </Button>
                  </div>
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-2.5 w-full"
                  >
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
              <p className="text-[#6C6C6C] text-lg font-semibold w-full text-center">
                Нет аккаунта?{" "}
                <a href="" className="text-[#242EDB] underline">
                  Создать
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
