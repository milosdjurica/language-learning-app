import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-1/3">
      <Link href="/">Home</Link>
      <Link href="/context">Words</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/chat">Chat</Link>
    </nav>
  );
}
