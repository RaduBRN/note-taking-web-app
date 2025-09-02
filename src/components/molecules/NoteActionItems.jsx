"use client";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconDelete from "../icons/IconDelete";
import IconArchive from "../icons/IconArchive";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NoteActionItemsMoleculeComponent = () => {
  const router = useRouter();
  return (
    <div className="flex lg:hidden justify-between items-center gap-5 border-b pb-5 dark:border-neutral-800">
      <div
        className="flex gap-1 items-center text-neutral-600 cursor-pointer dark:text-neutral-300"
        onClick={() => router?.back()}
      >
        <IconChevronLeft className="w-5 h-5" />
        <div className="text-sm">Go Back</div>
      </div>
      <div className="flex gap-4 items-center text-sm text-neutral-600 dark:text-neutral-300">
        <Link href="/dashboard/notes">
          <IconDelete className="w-5 h-5" />
        </Link>
        <Link href="/dashboard/notes">
          <IconArchive className="w-5 h-5" />
        </Link>
        <Link href="/dashboard/notes">Cancel</Link>
        <Link href="/dashboard/notes" className="text-blue-500">
          Save Note
        </Link>
      </div>
    </div>
  );
};

export default NoteActionItemsMoleculeComponent;
