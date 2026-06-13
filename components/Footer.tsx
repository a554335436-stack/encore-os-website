import Link from "next/link";
import { Instagram, Linkedin, Music2 } from "lucide-react";
import { Dictionary, Locale } from "@/lib/i18n";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#ai-engine`, label: dict.nav.ai },
    { href: `/${locale}#case-studies`, label: dict.nav.cases },
    { href: `/${locale}#contact`, label: dict.nav.contact }
  ];

  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="text-lg font-semibold">Encore Influence</div>
          <div className="mt-1 text-sm text-black/[0.48]">安可互动</div>
          <p className="mt-5 max-w-sm leading-7 text-black/[0.55]">{dict.footer.tagline}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-semibold text-black/45">Navigation</div>
            <nav className="grid gap-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-black/[0.62] hover:text-black">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold text-black/45">Contact</div>
            <div className="grid gap-3 text-sm text-black/[0.62]">
              <a href="mailto:hello@encoreInfluence.com" className="hover:text-black">
                {dict.footer.email}
              </a>
              <span>{dict.footer.whatsapp}</span>
              <div className="flex items-center gap-2 pt-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10">
                  <Instagram className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10">
                  <Music2 className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-black/10 pt-6 text-xs text-black/[0.38]">
        © 2026 Encore Influence. All rights reserved.
      </div>
    </footer>
  );
}
