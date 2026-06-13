import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Dictionary, Locale } from "@/lib/i18n";

export function FinalCTA({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="contact" className="anchor-offset py-24">
      <Reveal className="section-shell overflow-hidden rounded-lg bg-black px-6 py-16 text-center text-white sm:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-normal sm:text-6xl">{dict.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">{dict.cta.subtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-white text-black hover:bg-white/[0.86]">
              <Link href="mailto:hello@encoreInfluence.com">
                {dict.common.book}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <Link href={`/${locale}#contact`}>
                <Mail className="h-4 w-4" />
                {dict.common.contact}
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
