"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <Link href="/">Home </Link>
      <Link href="/">Translate</Link>
      <button onClick={() => signOut()}>Sign Out</button>
      {/* // ! add dark mode picker */}
      {/* // ! Name Surname dropdown for options and log out */}
    </div>
  );
}
