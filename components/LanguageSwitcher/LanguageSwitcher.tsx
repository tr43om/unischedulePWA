"use client";

import { useLanguageStore } from "@/zustandStore/languageStore";
import { ChangeEvent } from "react";

const languages = [
  { label: "Русский", value: "ru" },
  { label: "English", value: "en" },
];

const LanguageSwitcher = () => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value as "en" | "ru";
    setLanguage(language);
  };
  return (
    <select className="select w-full max-w-xs" onChange={handleChange}>
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
