"use client";

import React from "react";
import { NavBar } from "./NavBar";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-2 items-center border-b border-border">
      <NavBar />
      <DropdownMenuDemo />
    </header>
  );
}
