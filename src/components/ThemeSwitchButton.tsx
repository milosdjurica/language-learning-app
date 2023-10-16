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
    <div className="flex space-x-5">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <SunIcon />
        </button>
      )}
    </div>
  );
}
