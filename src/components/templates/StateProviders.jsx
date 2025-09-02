"use client";

import localFont from "next/font/local";
import { useAtomValue } from "jotai";
import { fontState } from "../states/fontState";
import { themeState } from "../states/themeState";

const inter = localFont({
  src: "../../assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

const notoSerif = localFont({
  src: "../../assets/fonts/noto-serif/NotoSerif-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-serif",
});

const sourceCodePro = localFont({
  src: "../../assets/fonts/source-code-pro/SourceCodePro-VariableFont_wght.ttf",
  variable: "--font-source-code-pro",
});

const StateProviders = ({ children }) => {
  const font = useAtomValue(fontState);
  const theme = useAtomValue(themeState);
  const getFont = () => {
    if (font === "inter") return "font-inter";
    if (font === "notoSerif") return "font-notoSerif";
    if (font === "sourceCodePro") return "font-sourceCodePro";
  };
  console.log(getFont());
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
  return (
    <body
      className={`${inter.variable} ${notoSerif.variable} ${
        sourceCodePro.variable
      } ${getFont()} ${getTheme()}`}
    >
      {children}
    </body>
  );
};

export default StateProviders;
