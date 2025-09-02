import { Suspense } from "react";

import NotesItemMoleculeComponent from "@/components/molecules/NotesItem";
import SearchMoleculeComponent from "@/components/molecules/Search";
import PageTitle from "@/components/atoms/PageTitle";
import notes from "@/static/notes";

export const generateMetadata = (params) => {
  const { searchParams } = params;
  const { query } = searchParams;

  return {
    title: `Search ${query ? ` | ${query}` : ""}`,
  };
};

const NotesPage = (params) => {
  const { searchParams } = params; // /dashboard/notes?query=
  const { query } = searchParams;

  const searchItem = (item, query) => {
    const title = item.title;
    const content = item.content;
    const tags = item.tags;

    let matchTags = tags.map((item) => {
      if (item.search(new RegExp(query, "i")) !== -1) return true;
    });

    matchTags = matchTags.some((item) => item === true);

    if (title.search(new RegExp(query, "i")) !== -1) return true;
    if (content.search(new RegExp(query, "i")) !== -1) return true;
    if (matchTags) return true;

    return false;
  };

  const filteredNotes = notes.notes.filter((item) => searchItem(item, query));

  return (
    <div className="flex divide-x h-[calc(100vh-65px)] bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full rounded-tl-2xl rounded-tr-2xl lg:rounded-none bg-white dark:bg-neutral-950 lg:max-w-[272px] px-5 overflow-y-auto hide-scrollbar">
        <div className="block lg:hidden mt-5 mb-3 text-2xl font-bold dark:text-white">
          <Suspense>
            <PageTitle />
          </Suspense>
        </div>
        <div className="flex lg:hidden flex-col gap-3 mb-3">
          <SearchMoleculeComponent />
          {query ? (
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              All notes matching &quot;
              <span className="dark:text-white">{query}</span>&quot; are
              displayed below.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 mb-20 lg:mb-5">
          {filteredNotes?.length && query
            ? filteredNotes?.map((item) => (
                <NotesItemMoleculeComponent key={item.id} item={item} />
              ))
            : null}
        </div>
      </div>
      <div className="grow hidden lg:block h-full">Empty</div>
    </div>
  );
};

export default NotesPage;
