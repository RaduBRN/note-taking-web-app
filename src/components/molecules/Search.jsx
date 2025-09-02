"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import IconSearch from "../icons/IconSearch";

const SearchMoleculeComponent = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (!search || !search.length) return;
    if (e.code === "Enter") {
      router.push(`/dashboard/search?query=${search}`);
      return;
    }
  };

  return (
    <div className="w-full lg:w-72 relative">
      <input
        ref={inputRef}
        className="border border-neutral-300 dark:border-neutral-600 dark:text-neutral-400 placeholder:dark:text-neutral-400 focus:bg-neutral-50 focus:dark:bg-neutral-800 dark:bg-neutral-950 hover:dark:bg-neutral-800 rounded-md pl-10 px-6 h-[52px] lg:h-[44px] w-full text-sm placeholder:text-neutral-500 text-neutral-950 outline-none cursor-pointer"
        placeholder="Search by title, content, or tags…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <div
        className="absolute left-3 top-[14px] lg:top-[10px]"
        onClick={() => inputRef.current.focus()}
      >
        <IconSearch className="text-neutral-500 dark:text-neutral-400 select-none cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchMoleculeComponent;
