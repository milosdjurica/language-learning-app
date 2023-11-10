"use client";

import React from "react";
import { ThemeSwitchButton } from "./ThemeSwitchButton";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between px-4 py-2 items-center border-b border-border">
      <ThemeSwitchButton />
      <h3>
        Welcome back &#34;{session?.user?.name || session?.user?.email}&#34;
      </h3>
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
