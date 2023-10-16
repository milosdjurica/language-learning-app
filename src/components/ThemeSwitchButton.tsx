"use client";
import { useEffect, useState } from "react";

import React from "react";
import { useTheme } from "next-themes";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export default function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button
          className="p-2 rounded-xl bg-gray-800"
          onClick={() => setTheme("light")}
        >
          <MoonIcon />
        </button>
      ) : (
        <button
          className="p-2 rounded-xl bg-gray-200"
          onClick={() => setTheme("dark")}
        >
          <SunIcon />
        </button>
      )}
    </>
  );
}
