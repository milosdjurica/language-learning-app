import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  // ADD CHECK ROUTE, IF PICKED PUT PRIMARY COLOR

  return (
    <nav className="flex justify-between w-9/12">
      <Link href="/" className="text-primary">
        Home
      </Link>
      {/* <Separator
        aria-orientation="vertical"
        className="text-primary bg-primary"
      /> */}
      <Link href="/context">Words</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/chat">Chat</Link>
    </nav>
  );
}
