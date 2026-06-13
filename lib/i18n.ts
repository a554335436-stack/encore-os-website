import en from "@/locales/en.json";
import zh from "@/locales/zh.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionaries = {
  en,
  zh
};

export type Dictionary = typeof en;

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "zh";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}
