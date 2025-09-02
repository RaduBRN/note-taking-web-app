"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PageTitle = () => {
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (document) {
      setTitle(document.title);
    }
  }, [searchParams]);

  return title;
};

export default PageTitle;
