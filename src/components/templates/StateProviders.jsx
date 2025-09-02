"use client";

import { useEffect } from "react";
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

const fontClassFor = (f) => {
  if (f === "inter") return "font-inter";
  if (f === "notoSerif") return "font-notoSerif";
  if (f === "sourceCodePro") return "font-sourceCodePro";
  return "";
};

export default function StateProviders({ children }) {
  const font = useAtomValue(fontState);
  const theme = useAtomValue(themeState);

  useEffect(() => {
    const body = document.body;
    if (!body) return;

    body.classList.remove(
      "font-inter",
      "font-notoSerif",
      "font-sourceCodePro",
      "light",
      "dark"
    );

    const f = fontClassFor(font);
    if (f) body.classList.add(f);

    const applySystem = () => {
      if (typeof window !== "undefined") {
        const isDark =
          window?.matchMedia &&
          window?.matchMedia("(prefers-color-scheme: dark)").matches;
        body.classList.add(isDark ? "dark" : "light");
      }
    };

    if (theme === "dark") body.classList.add("dark");
    else if (theme === "light") body.classList.add("light");
    else applySystem();

    if (typeof window !== "undefined") {
      if (theme === "system" && window?.matchMedia) {
        const mql = window?.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
          body.classList.remove("light", "dark");
          body.classList.add(mql.matches ? "dark" : "light");
        };
        mql.addEventListener?.("change", handler);
        return () => mql.removeEventListener?.("change", handler);
      }
    }
  }, [font, theme]);

  return (
    <div
      className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable}`}
    >
      {children}
    </div>
  );
}
