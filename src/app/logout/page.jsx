"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/auth`);
  }, []);

  return null;
};

export default Logout;
