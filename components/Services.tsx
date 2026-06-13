import { BadgeCheck, Globe2, Handshake, Video } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

const icons = [Globe2, BadgeCheck, Video, Handshake];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="anchor-offset py-24">
      <div className="section-shell">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.services.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {dict.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="hairline-card group rounded-lg p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
                  <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-md bg-black text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-black/[0.56]">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
