"use client";
import { ReactNode, useEffect } from "react";
import { useLanguageStore } from "@/zustandStore/languageStore";

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  useEffect(() => {
    const persistedLanguage =
      (localStorage.getItem("language") as "ru" | "en") || "en";
    setLanguage(persistedLanguage);
  }, []);

  return <>{children}</>;
};

export default LanguageProvider;
