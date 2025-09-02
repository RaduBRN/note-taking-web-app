import IconSun from "@/components/icons/IconSun";
import IconMoon from "@/components/icons/IconMoon";
import IconSystem from "@/components/icons/IconSystem";

export default {
  colors: [
    {
      id: 0,
      icon: <IconSun />,
      label: "Light Mode",
      description: "Pick a clean and classic light theme",
      value: "light",
    },
    {
      id: 1,
      icon: <IconMoon />,
      label: "Dark Mode",
      description: "Select a sleek and modern dark theme",
      value: "dark",
    },
    {
      id: 2,
      icon: <IconSystem />,
      label: "System",
      description: "Adapts to your device's theme",
      value: "system",
    },
  ],
};
