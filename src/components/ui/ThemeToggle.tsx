import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors shadow-sm"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-800" />}
    </button>
  );
}