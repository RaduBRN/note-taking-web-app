"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MenuItemMoleculeComponent from "@/components/molecules/TagItem";
import IconSun from "@/components/icons/IconSun";
import IconFont from "@/components/icons/IconFont";
import IconLock from "@/components/icons/IconLock";
import IconLogout from "@/components/icons/IconLogout";
import IconChevronLeft from "@/components/icons/IconChevronLeft";
import Link from "next/link";
import PageTitle from "@/components/atoms/PageTitle";

const SettingsLayout = ({ children }) => {
  const router = useRouter();
  const path = usePathname();
  const [width, setWidth] = useState(window?.innerWidth);

  useEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const logout = () => {
    router.push(`/auth`);
  };

  const hideSidebar =
    path !== "/dashboard/settings" && width < 1024 ? true : false;

  const hideSettings =
    path === "/dashboard/settings" && width < 1024 ? true : false;

  return (
    <div className="flex divide-x dark:divide-neutral-800 h-[calc(100vh-65px)] bg-neutral-50 dark:bg-neutral-950">
      <div
        aria-hidden={hideSidebar}
        className="w-full aria-hidden:hidden rounded-tl-2xl rounded-tr-2xl lg:rounded-none bg-white dark:bg-neutral-950 lg:max-w-[272px] px-5 overflow-y-auto hide-scrollbar"
      >
        <div className="block lg:hidden mt-5 mb-3 text-2xl font-bold dark:text-white">
          <PageTitle />
        </div>
        <div className="flex flex-col gap-3 mt-5 mb-20 lg:my-5">
          <MenuItemMoleculeComponent
            href="/dashboard/settings/theme"
            label="Color Theme"
            icon={<IconSun />}
          />
          <MenuItemMoleculeComponent
            href="/dashboard/settings/font"
            label="Font Theme"
            icon={<IconFont />}
          />
          <MenuItemMoleculeComponent
            href="/dashboard/settings/password"
            label="Change Password"
            icon={<IconLock />}
          />
          <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800" />
          <MenuItemMoleculeComponent
            label="Logout"
            icon={<IconLogout />}
            onClick={() => logout()}
          />
        </div>
      </div>
      <div
        aria-hidden={hideSettings}
        className="grow aria-hidden:hidden flex flex-col gap-3 h-full bg-white dark:bg-neutral-950 py-5 lg:py-10 px-5 lg:px-10"
      >
        <Link
          href="/dashboard/settings"
          className="flex lg:hidden gap-1 items-center text-neutral-600 dark:text-neutral-300"
        >
          <IconChevronLeft className="w-5 h-5" />
          <div className="text-sm">Go Back</div>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
