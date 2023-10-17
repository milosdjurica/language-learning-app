"use client";

import { signOut } from "next-auth/react";
import React from "react";
import NavBar from "./NavBar";
import { ThemeSwitchButton } from "./ThemeSwitchButton";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-2 items-center border-b border-border">
      <NavBar />
      <DropdownMenuDemo />
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </header>
  );
}
