"use client";
import moment from "moment";
import { useParams } from "next/navigation";
import Link from "next/link";

const NotesItemMoleculeComponent = ({ item, page = "notes", tag }) => {
  const params = useParams();
  const { id } = params;

  const selected = Number(id) === Number(item.id);

  return (
    <Link
      className={`flex flex-col gap-2 dark:text-white ${
        selected
          ? "bg-neutral-100 dark:bg-neutral-800 rounded-md"
          : "border-b dark:border-neutral-800"
      } px-2 py-2`}
      href={`/dashboard/${page}${tag ? `/${tag}` : ""}/${item.id}`}
    >
      <div className="font-bold">{item.title}</div>
      <div className="flex gap-1">
        {item?.tags?.length
          ? item?.tags?.map((tagItem, index) => (
              <div
                key={index}
                className="text-xs bg-neutral-200 dark:bg-neutral-600 rounded px-2 py-[2px]"
              >
                {tagItem}
              </div>
            ))
          : null}
      </div>
      <div className="text-xs dark:text-neutral-300">
        {moment(item.lastEdited).format("DD MMM YYYY")}
      </div>
    </Link>
  );
};

export default NotesItemMoleculeComponent;
