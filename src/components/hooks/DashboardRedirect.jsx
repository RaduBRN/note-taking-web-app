"use client";

import { useRouter } from "next/navigation";

const DashboardRedirect = () => {
  const router = useRouter();
  router.push("/dashboard/notes");
};

export default DashboardRedirect;
