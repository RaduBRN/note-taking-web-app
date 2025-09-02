"use client";

import { useAtomValue } from "jotai";
import Image from "next/image";
import LogoDark from "@/assets/images/logo-dark.svg";
import Logo from "@/assets/images/logo.svg";
import { themeState } from "@/components/states/themeState";

const AuthLayout = ({ children }) => {
  const theme = useAtomValue(themeState);
  const getTheme = () => {
    if (theme === "system") {
      if (window?.matchMedia("(prefers-color-scheme: dark)")?.matches) {
        return "dark";
      } else {
        return "light";
      }
    }
    if (theme === "dark") return "dark";
    if (theme === "light") return "light";
  };
  const logoSrc = getTheme() === "dark" ? LogoDark : Logo;
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col gap-5 w-full max-w-[343px] md:max-w-[522px] lg:max-w-[540px] mx-auto bg-neutral-0 py-20 px-5 md:px-10 rounded-lg dark:bg-neutral-950">
        <div className="flex items-center justify-center">
          <div className="relative w-[95px] h-[28px]">
            <Image className="object-cover" src={logoSrc} alt="Logo" fill />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
