"use client";

import React from "react";
import { ThemeSwitchButton } from "./ThemeSwitchButton";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-2 items-center border-b border-border">
      <ThemeSwitchButton />
      <Button
        variant="outline"
        className="border border-primary"
        onClick={() => signOut()}
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </Button>

      {/* // TODO change to this when add other functionalities */}
      {/* <NavBar /> */}
      {/* <DropdownMenuDemo /> */}
    </header>
  );
}
