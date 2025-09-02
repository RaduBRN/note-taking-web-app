import IconFontSanSerif from "@/components/icons/IconFontSanSerif";
import IconFontSerif from "@/components/icons/IconFontSerif";
import IconFontMonospace from "@/components/icons/IconFontMonospace";

export default {
  fonts: [
    {
      id: 0,
      icon: <IconFontSanSerif />,
      label: "Sans-serif",
      description: "Clean and modern, easy to read.",
      value: "inter",
    },
    {
      id: 1,
      icon: <IconFontSerif />,
      label: "Serif",
      description: "Classic and elegant for a timeless feel.",
      value: "notoSerif",
    },
    {
      id: 2,
      icon: <IconFontMonospace />,
      label: "Monospace",
      description: "Code-like, great for a technical vibe.",
      value: "sourceCodePro",
    },
  ],
};
