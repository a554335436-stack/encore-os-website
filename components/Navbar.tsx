import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Dictionary, Locale } from "@/lib/i18n";

export function Navbar({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#ai-engine`, label: dict.nav.ai },
    { href: `/${locale}#case-studies`, label: dict.nav.cases },
    { href: `/${locale}#contact`, label: dict.nav.contact }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/[0.72] backdrop-blur-2xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-normal">Encore Influence</span>
            <span className="block text-xs text-black/45">安可互动</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black/[0.58] transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={`/${locale}#contact`}>{dict.common.book}</Link>
          </Button>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
