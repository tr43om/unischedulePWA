"use client";
import { useLanguageStore } from "@/zustandStore/languageStore";
import translations from "@/translations";
import { TranslationKeys } from "@/translations";
import { InterpolationOptions } from "node-polyglot";

const useTranslate = () => {
  const polyglot = useLanguageStore((state) => state.polyglot);
  console.log(polyglot);
  const translate = (key: TranslationKeys, options?: object) =>
    polyglot.t(key, options);
  return translate;
};

export default useTranslate;
