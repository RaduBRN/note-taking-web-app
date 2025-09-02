"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import IconPlus from "@/components/icons/IconPlus";
import ButtonAtomComponent from "@/components/atoms/Button";
import BottomButton from "@/components/atoms/BottomButton";
import NotesItemMoleculeComponent from "@/components/molecules/NotesItem";
import notes from "@/static/notes";

const TagPage = ({ params }) => {
  const { tag } = params;

  const tagNotes = notes.notes.filter((item) =>
    item.tags.some(
      (secondItem) => secondItem.toLowerCase() === tag.toLowerCase()
    )
  );

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window?.innerWidth : null
  );
  const router = useRouter();

  useEffect(() => {
    function resize() {
      if (typeof window !== "undefined") {
        setWidth(window?.innerWidth);
      }
    }
    if (typeof window !== "undefined") {
      window?.addEventListener("resize", resize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window?.removeEventListener("resize", resize);
      }
    };
  }, []);

  useEffect(() => {
    if (width > 1024) {
      router.push(`/dashboard/tags/${tag}/${tagNotes[0]?.id}`);
    }
  }, [width]);

  return (
    <div className="flex divide-x dark:divide-neutral-800 h-[calc(100vh-65px)] bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full rounded-tl-2xl rounded-tr-2xl lg:rounded-none bg-white dark:bg-neutral-950 lg:max-w-[272px] px-5 overflow-y-auto hide-scrollbar">
        <div className="hidden lg:block sticky top-0 left-0 right-0 bg-white dark:bg-neutral-950 pt-10 py-5">
          <ButtonAtomComponent
            icon={<IconPlus className="w-4 h-4" />}
            label="Create New Note"
            className="text-sm"
            href="/dashboard/notes/create"
          />
        </div>
        <div className="flex flex-col gap-3 mb-20 lg:mb-5">
          {tagNotes?.length
            ? tagNotes?.map((item) => (
                <NotesItemMoleculeComponent
                  key={item.id}
                  item={item}
                  page="tags"
                  tag={tag}
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

export default TagPage;
