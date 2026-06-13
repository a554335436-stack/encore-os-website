import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

export function WhyEncore({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <h2 className="sticky top-28 text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.why.title}
          </h2>
        </Reveal>
        <div className="space-y-3">
          {dict.why.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="flex gap-5 rounded-lg border border-black/[0.08] bg-white/60 p-5 backdrop-blur transition hover:bg-white">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-black" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-black/[0.56]">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
