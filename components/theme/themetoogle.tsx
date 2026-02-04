"use client";

import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "./themeprovider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-10 h-10 rounded-lg
                 border border-[var(--color-border)]
                 bg-[var(--color-surface)]
                 hover:bg-[var(--color-surface)]/80
                 transition"
    >
      {theme === "light" && (
        <Sun className="h-5 w-5 text-[var(--color-secondary)]" />
      )}
      {theme === "dark" && (
        <Moon className="h-5 w-5 text-[var(--color-accent)]" />
      )}
      {theme === "system" && (
        <Laptop className="h-5 w-5 text-[var(--color-primary)]" />
      )}
    </button>
  );
}
