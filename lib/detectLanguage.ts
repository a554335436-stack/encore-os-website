import { NextRequest } from "next/server";
import { defaultLocale, Locale } from "@/lib/i18n";

const zhRegions = new Set(["CN", "HK", "MO", "TW"]);
const zhLanguages = ["zh-CN", "zh-HK", "zh-MO", "zh-TW", "zh"];

function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const lower = value.toLowerCase();
  if (lower === "zh" || lower.startsWith("zh-")) return "zh";
  if (lower === "en" || lower.startsWith("en-")) return "en";
  return null;
}

export function detectLanguage(request?: NextRequest): Locale {
  const saved = request?.cookies.get("encore_locale")?.value;
  const savedLocale = normalizeLocale(saved);
  if (savedLocale) return savedLocale;

  const country =
    (request as { geo?: { country?: string } } | undefined)?.geo?.country ||
    request?.headers.get("x-vercel-ip-country") ||
    request?.headers.get("cf-ipcountry");

  if (country && zhRegions.has(country.toUpperCase())) {
    return "zh";
  }

  const acceptLanguage = request?.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((entry) => entry.split(";")[0]?.trim())
      .find(Boolean);
    const browserLocale = normalizeLocale(preferred);
    if (browserLocale) return browserLocale;
  }

  if (typeof navigator !== "undefined") {
    const language = navigator.languages?.[0] || navigator.language;
    if (zhLanguages.some((item) => language?.toLowerCase().startsWith(item.toLowerCase()))) {
      return "zh";
    }
  }

  return defaultLocale;
}
