"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";

const Page = () => {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
};

export default Page;
