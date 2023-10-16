import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between w-1/3">
      <Link href="/">Home</Link>
      <Link href="/translate">Translate</Link>
      <Link href="/context">Meaning</Link>
      <Link href="/chat">Chat</Link>
    </div>
  );
}
