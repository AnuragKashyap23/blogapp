import { useEffect, useState } from "react";

const useTheme = () => {
  // Optionally initialize based on localStorage or prefers-color-scheme
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
      // fallback to system preference
    //   return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    // return false; // default light mode if SSR
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleTheme };
};

export default useTheme;
