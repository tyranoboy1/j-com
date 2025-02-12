"use client";

import React, { useEffect } from "react";
import style from "@/app/(auth)/_styles/main.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/login"); // ✅ useEffect 안에서 실행
  }, [router]);
  return (
    <>
      <div className={style.left}>
        <span>LOGO</span>
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={style.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={style.login}>
          로그인
        </Link>
      </div>
    </>
  );
};

export default Page;
