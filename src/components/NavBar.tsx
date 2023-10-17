import Link from "next/link";
import React from "react";

export default function NavBar() {
  // ADD CHECK ROUTE, IF PICKED PUT PRIMARY COLOR

  return (
    <nav className="flex justify-between w-9/12">
      <Link href="/" className="text-primary">
        Home
      </Link>
      <Link href="/context">Words</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/chat">Chat</Link>
    </nav>
  );
}
