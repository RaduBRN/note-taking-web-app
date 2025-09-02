"use client";

import IconArchive from "@/components/icons/IconArchive";
import IconTag from "@/components/icons/IconTag";
import IconSettings from "../icons/IconSettings";
import IconHome from "../icons/IconHome";
import IconSearch from "../icons/IconSearch";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = [
  {
    id: 0,
    icon: <IconHome />,
    label: "Home",
    href: "/dashboard/notes",
  },
  {
    id: 1,
    icon: <IconSearch />,
    label: "Search",
    href: "/dashboard/search",
  },
  {
    id: 2,
    icon: <IconArchive className="w-6 h-6" />,
    label: "Archived",
    href: "/dashboard/archived",
  },
  {
    id: 3,
    icon: <IconTag />,
    label: "Tags",
    href: "/dashboard/tags",
  },
  {
    id: 4,
    icon: <IconSettings />,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

const BottomNavigationMenuItem = ({ index, href, icon, label }) => {
  const path = usePathname();
  const pathSeperation = path.split("/");
  const match = pathSeperation.includes(label.toLowerCase());
  const isActive = path === href || match;
  return (
    <>
      <Link
        href={href}
        className={`flex flex-col gap-1 items-center justify-center w-[68px] sm:w-[80px] h-[32px] sm:h-[50px] rounded ${
          isActive
            ? "bg-blue-50 dark:bg-neutral-800 text-blue-500"
            : "dark:text-neutral-400"
        }`}
      >
        <div>{icon}</div>
        <div className="text-xs hidden sm:block">{label}</div>
      </Link>
      {index !== menuList.length - 1 ? (
        <div className="border-l dark:border-neutral-800 h-full w-[1px] hidden sm:block" />
      ) : null}
    </>
  );
};

const BottomNavigationTemplateComponent = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 block lg:hidden bg-white dark:bg-neutral-950 border-t dark:border-neutral-800">
      <div className="flex justify-between items-center px-5 sm:px-10 h-[56px] sm:h-[74px]">
        {menuList?.map((item, index) => (
          <BottomNavigationMenuItem
            key={index}
            index={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNavigationTemplateComponent;
