"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import IconPlus from "@/components/icons/IconPlus";
import ButtonAtomComponent from "@/components/atoms/Button";
import BottomButton from "@/components/atoms/BottomButton";
import NotesItemMoleculeComponent from "@/components/molecules/NotesItem";
import PageTitle from "@/components/atoms/PageTitle";
import notes from "@/static/notes";

export default function NotesPage() {
  const [width, setWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 1024 && notes?.notes?.length) {
      router.replace(`/dashboard/notes/${notes.notes[0].id}`);
    }
  }, [width, router]);

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
        <div className="mt-5 mb-3 text-2xl font-bold dark:text-white">
          <PageTitle />
        </div>
        <div className="flex flex-col gap-3 mb-20 lg:mb-5">
          {notes?.notes?.length
            ? notes.notes.map((item) => (
                <NotesItemMoleculeComponent key={item.id} item={item} />
              ))
            : null}
        </div>
      </div>
      <div className="grow hidden lg:block h-full">Empty</div>
      <BottomButton />
    </div>
  );
}
