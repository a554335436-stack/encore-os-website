import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

export function BrandPhilosophy({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24">
      <Reveal className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white">
            <Quote className="h-5 w-5" />
          </div>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.philosophy.title}
          </h2>
        </div>
        <div className="space-y-6 text-xl leading-9 text-black/[0.62]">
          {dict.philosophy.body.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
