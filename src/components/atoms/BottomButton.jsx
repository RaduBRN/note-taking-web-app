import IconPlus from "../icons/IconPlus";
import Link from "next/link";

function BottomButton() {
  return (
    <Link
      href="/dashboard/notes/create"
      className="block lg:hidden fixed right-5 bottom-24 rounded-full bg-blue-500 p-3 z-50 shadow-xl"
    >
      <div className="text-white">
        <IconPlus className="h-9 w-9" />
      </div>
    </Link>
  );
}

export default BottomButton;
