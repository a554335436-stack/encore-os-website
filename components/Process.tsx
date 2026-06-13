import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.process.title}
          </h2>
        </Reveal>
        <div className="mt-14 hidden grid-cols-6 gap-3 lg:grid">
          {dict.process.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-black/10 bg-neutral-50 p-5">
                <div className="mb-8 text-sm text-black/40">0{index + 1}</div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-black/[0.38]">
                  {item.label}
                </div>
                <h3 className="text-lg font-semibold leading-6">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/[0.52]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 space-y-4 lg:hidden">
          {dict.process.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="relative border-l border-black/15 pl-6">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-black" />
                <div className="rounded-lg border border-black/10 bg-neutral-50 p-5">
                  <div className="mb-2 text-sm text-black/40">0{index + 1}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-black/[0.56]">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
