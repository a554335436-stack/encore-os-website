import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dictionary } from "@/lib/i18n";

export function CaseStudies({ dict }: { dict: Dictionary }) {
  return (
    <section id="case-studies" className="anchor-offset py-24">
      <div className="section-shell">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            {dict.cases.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {dict.cases.items.map((item, index) => (
            <Reveal key={item.brand} delay={index * 0.06}>
              <article className="hairline-card flex h-full min-h-[360px] flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
                <div className="mb-12 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-black/40">Brand / Category</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-normal">{item.brand}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-black/35" />
                </div>
                <dl className="grid gap-4 text-sm">
                  <div>
                    <dt className="text-black/[0.38]">Market</dt>
                    <dd className="mt-1 font-medium">{item.market}</dd>
                  </div>
                  <div>
                    <dt className="text-black/[0.38]">Platform</dt>
                    <dd className="mt-1 font-medium">{item.platform}</dd>
                  </div>
                  <div>
                    <dt className="text-black/[0.38]">Campaign Type</dt>
                    <dd className="mt-1 font-medium">{item.type}</dd>
                  </div>
                  <div>
                    <dt className="text-black/[0.38]">Key Result</dt>
                    <dd className="mt-1 font-medium">{item.result}</dd>
                  </div>
                </dl>
                <p className="mt-auto pt-8 text-sm leading-6 text-black/[0.54]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
