import IconPlus from "@/components/icons/IconPlus";
import ButtonAtomComponent from "@/components/atoms/Button";
import BottomButton from "@/components/atoms/BottomButton";
import MenuItemMoleculeComponent from "@/components/molecules/TagItem";
import PageTitle from "@/components/atoms/PageTitle";
import tags from "@/static/tags";
import IconTag from "@/components/icons/IconTag";

const TagsPage = () => {
  return (
    <div className="flex divide-x h-[calc(100vh-65px)] bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full rounded-tl-2xl rounded-tr-2xl lg:rounded-none bg-white dark:bg-neutral-950 lg:max-w-[272px] px-5 overflow-y-auto hide-scrollbar">
        <div className="hidden lg:block sticky top-0 left-0 right-0 bg-white pt-10 py-5 dark:bg-neutral-950">
          <ButtonAtomComponent
            icon={<IconPlus className="w-4 h-4" />}
            label="Create New Note"
            className="text-sm"
            href="/dashboard/notes/create"
          />
        </div>
        <div className="mt-5 mb-3 text-2xl font-bold dark:text-white">
          <PageTitle />
        </div>
        <div className="flex flex-col gap-3 mb-20 lg:mb-5 divide-y">
          {tags?.tags?.length
            ? tags?.tags?.map((item) => (
                <MenuItemMoleculeComponent
                  key={item.id}
                  href={item.href}
                  label={item.title}
                  icon={<IconTag />}
                  className="!rounded-none !px-0 !py-0 !pt-4"
                />
              ))
            : null}
        </div>
      </div>
      <div className="grow hidden lg:block h-full">Empty</div>
      <BottomButton />
    </div>
  );
};

export default TagsPage;
