"use client";
import Image from "next/image";
import IconSettings from "../icons/IconSettings";
import ImageLogo from "../images/ImageLogo";
import PageTitle from "../atoms/PageTitle";
import SearchMoleculeComponent from "../molecules/Search";
import Link from "next/link";

const NavbarTemplateComponent = () => {
  return (
    <div className="flex justify-between items-center px-8 py-5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 lg:bg-white">
      <div className="hidden lg:block dark:text-white">
        <PageTitle />
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <SearchMoleculeComponent />
        <Link
          className="dark:text-neutral-400"
          href="/dashboard/settings/theme"
        >
          <IconSettings />
        </Link>
      </div>
      <div className="block lg:hidden dark:text-white">
        <ImageLogo />
      </div>
    </div>
  );
};

export default NavbarTemplateComponent;
