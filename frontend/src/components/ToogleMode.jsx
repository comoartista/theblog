"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group w-10 h-10 flex items-center justify-center rounded-full transition cursor-pointer ">
      {isDark ? (
        <SunIcon className="w-5 h-5 text-whitw group-hover:rotate-20  transition ease-in duration-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-black  rotate-30  group-hover:-rotate-6  transition ease-in duration-200" />
      )}
    </button>
  );
}
