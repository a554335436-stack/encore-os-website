import { BrainCircuit, Network, ScanSearch, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

const icons = [ScanSearch, BrainCircuit, Network, Workflow];

export function AIEngine({ dict }: { dict: Dictionary }) {
  return (
    <section id="ai-engine" className="anchor-offset bg-black py-24 text-white">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/[0.42]">
            AI Engine
          </p>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.ai.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/[0.58]">{dict.ai.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dict.ai.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-40" />
                  <CardContent className="p-6">
                    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/[0.58]">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
