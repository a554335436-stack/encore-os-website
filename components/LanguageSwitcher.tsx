"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { Locale, alternateLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale = alternateLocale(locale);
  const nextPath = pathname.replace(/^\/(en|zh)/, `/${nextLocale}`);

  function persistLanguage() {
    localStorage.setItem("encore_locale", nextLocale);
    document.cookie = `encore_locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <Link
      href={nextPath}
      onClick={persistLanguage}
      aria-label="Switch language"
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md border border-black/10 bg-white/65 px-3 text-sm font-medium text-black/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
      )}
    >
      <Languages className="h-4 w-4" />
      <span>{locale === "en" ? "中文" : "English"}</span>
    </Link>
  );
}
