import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20">
      <div className="section-shell">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.testimonials.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {dict.testimonials.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <figure className="rounded-lg border border-black/10 bg-white/[0.72] p-7 backdrop-blur">
                <Quote className="mb-8 h-5 w-5 text-black/35" />
                <blockquote className="text-2xl leading-9 tracking-normal text-black/[0.72]">
                  “{item}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
