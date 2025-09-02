"use client";
import { usePathname, useRouter, useParams } from "next/navigation";
import Link from "next/link";
import IconChevronRight from "../icons/IconChevronRight";

const MenuItemMoleculeComponent = ({
  href,
  label,
  icon,
  className,
  onClick,
}) => {
  const path = usePathname();
  const params = useParams();
  const regex = new RegExp(`^${href}`, "g"); // /dashboard/notes/
  const isActive =
    path.match(regex) || params?.tag?.toLowerCase() === label?.toLowerCase();
  // /dashboard/notes/1 -> /dashboard/notes
  const router = useRouter();

  return (
    <button
      className={`flex relative gap-3 items-center ${
        isActive ? "bg-neutral-100 dark:bg-neutral-800" : ""
      } rounded-lg py-2 px-2 lg:px-4 text-sm text-start text-neutral-950 dark:text-neutral-200 ${
        className || null
      }`}
      onClick={() => (onClick ? onClick() : router.push(href))}
    >
      <div className={`${isActive ? "text-blue-500" : ""}`}>{icon}</div>
      <div className="grow">{label}</div>
      {isActive && (
        <div className="absolute right-2 top-[calc(50%-12px)]">
          <IconChevronRight />
        </div>
      )}
    </button>
  );
};

export default MenuItemMoleculeComponent;
