import Image from "next/image";
import ImageLogo from "../images/ImageLogo";
import IconTag from "../icons/IconTag";
import IconArchive from "../icons/IconArchive";
import IconHome from "../icons/IconHome";
import tags from "@/static/tags";
import MenuItemMoleculeComponent from "../molecules/TagItem";

const SidebarTemplateComponent = () => {
  return (
    <div className="min-w-[275px] border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hidden lg:flex flex-col gap-5 min-h-screen px-5 py-7 text-white">
      <ImageLogo className="text-black dark:text-white" />
      <div className="flex flex-col gap-3">
        <MenuItemMoleculeComponent
          href="/dashboard/notes"
          label="All Notes"
          icon={<IconHome />}
          isActive
        />
        <MenuItemMoleculeComponent
          href="/dashboard/archived"
          label="Archived Notes"
          icon={<IconArchive />}
        />
        <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800" />
        <div className="text-sm text-neutral-500">Tags</div>
        {tags?.tags?.map((item) => (
          <MenuItemMoleculeComponent
            key={item.id}
            href={item.href}
            label={item.title}
            icon={<IconTag />}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarTemplateComponent;
