"use client";

import { signOut } from "next-auth/react";
import React from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex justify-around">
      <NavBar />
      <ThemeSwitchButton />
      <button onClick={() => signOut()}>Sign Out</button>
      {/* // ! Name Surname dropdown for options and log out */}
    </div>
  );
}
