"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode ? "dark" : "light";
};

export default useDarkMode;
