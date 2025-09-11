import IconChevronLeft from "@/components/icons/IconChevronLeft";
import IconDelete from "@/components/icons/IconDelete";
import IconTag from "@/components/icons/IconTag";
import IconClock from "@/components/icons/IconClock";
import IconArchive from "@/components/icons/IconArchive";
import IconPlus from "@/components/icons/IconPlus";
import SaveNoteMolecule from "@/components/molecules/SaveNote";
import ButtonAtomComponent from "@/components/atoms/Button";
import NotesItemMoleculeComponent from "@/components/molecules/NotesItem";
import NoteInput from "@/components/atoms/NoteInput";
import notes from "@/static/notes";
import moment from "moment";
import Link from "next/link";

const DynamicNotePageCreate = ({ params }) => {
  const { id } = params;

  let data = notes?.notes?.filter((item) => Number(item.id) === Number(id));

  if (data) {
    data = data[0];
  }

  const tags = data?.tags.join(", ");

  return (
    <div className="flex divide-x dark:divide-neutral-800 min-h-[calc(100vh-65px)] bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full hidden rounded-tl-2xl rounded-tr-2xl lg:rounded-none bg-white dark:bg-neutral-950 lg:block max-w-[272px] px-5 overflow-y-auto hide-scrollbar">
        <div className="sticky top-0 left-0 right-0 pt-10 py-5 bg-white dark:bg-neutral-950">
          <ButtonAtomComponent
            icon={<IconPlus className="w-4 h-4" />}
            label="Create New Note"
            className="text-sm"
            href="/dashboard/notes/create"
          />
        </div>
        <div className="flex flex-col gap-3">
          {notes?.notes?.length
            ? notes?.notes?.map((item) => (
                <NotesItemMoleculeComponent key={item.id} item={item} />
              ))
            : null}
        </div>
      </div>
      <div className="grow block h-full bg-white dark:bg-neutral-950 rounded-tl-2xl rounded-tr-2xl lg:rounded-none">
        <div className="flex divide-x dark:divide-neutral-800 gap-5 h-full">
          <div className="flex flex-col gap-5 grow px-5 py-5 lg:py-10">
            <div className="flex lg:hidden justify-between items-center gap-5 border-b pb-5 dark:border-neutral-800">
              <Link
                href="/dashboard/notes"
                className="flex gap-1 items-center text-neutral-600 dark:text-neutral-300"
              >
                <IconChevronLeft className="w-5 h-5" />
                <div className="text-sm">Go Back</div>
              </Link>
              <div className="flex gap-4 items-center text-sm text-neutral-600 dark:text-neutral-300">
                <Link href="/dashboard/notes">Cancel</Link>
                <Link href="/dashboard/notes" className="text-blue-500">
                  Save Note
                </Link>
              </div>
            </div>
            <div>
              <NoteInput
                className="text-[24px] font-bold leading-[120%] w-full focus:outline-0 placeholder:text-neutral-950 dark:text-white placeholder:dark:text-white dark:bg-neutral-950"
                placeholder="Enter a title..."
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center dark:text-neutral-300">
                <div className="flex items-center gap-2 min-w-[150px]">
                  <div>
                    <IconTag className="w-4 h-4" />
                  </div>
                  <div>Tags</div>
                </div>
                <div>
                  <NoteInput
                    className="w-full focus:outline-0 dark:text-white dark:bg-neutral-950"
                    placeholder="Add tags separated by commas (e.g Work, Planning)"
                  />
                </div>
              </div>
              <div className="flex items-center dark:text-neutral-300">
                <div className="flex items-center gap-2 min-w-[150px]">
                  <div>
                    <IconClock className="w-4 h-4" />
                  </div>
                  <div>Last Edited</div>
                </div>
                <div className="text-neutral-400">Not yet saved</div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-neutral-600 dark:bg-neutral-800" />
            <div>
              <textarea
                className="w-full focus:outline-0 dark:bg-neutral-950 dark:text-neutral-100"
                rows="20"
                placeholder="Start typing your note here..."
              />
            </div>
            <SaveNoteMolecule />
          </div>
          <div className="hidden lg:block min-w-[272px] px-5 py-10">
            <div className="flex flex-col gap-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicNotePageCreate;
