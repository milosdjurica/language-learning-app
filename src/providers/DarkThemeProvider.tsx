"use client";

import { ReactNode, useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function DarkThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
