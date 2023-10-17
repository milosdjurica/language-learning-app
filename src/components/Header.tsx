"use client";

import { signOut } from "next-auth/react";
import React from "react";
import NavBar from "./NavBar";
import { ThemeSwitchButton } from "./ThemeSwitchButton";

export default function Header() {
  return (
    <header className="flex justify-around">
      <NavBar />
      <ThemeSwitchButton />
      <button onClick={() => signOut()}>Sign Out</button>
      {/* // ! Name Surname dropdown for options and log out */}
    </header>
  );
}
