"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dictionary, Locale } from "@/lib/i18n";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-black/10 bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(0,0,0,0.05)_62%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-32 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-black/[0.62] backdrop-blur">
            <Radar className="h-4 w-4" />
            {dict.hero.eyebrow}
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-black sm:text-6xl lg:text-7xl">
            {dict.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/[0.58] sm:text-xl">
            {dict.hero.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base font-medium text-black/[0.78]">
            {dict.hero.claim}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={`/${locale}#contact`}>
                {dict.common.book}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${locale}#case-studies`}>
                <Play className="h-4 w-4" />
                {dict.common.cases}
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {dict.hero.metrics.map((metric) => (
              <div key={metric.label} className="border-l border-black/10 pl-4">
                <div className="text-lg font-semibold">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-black/45">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[420px]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-black/10 bg-white/55 shadow-2xl shadow-black/10 backdrop-blur-2xl" />
          <div className="absolute inset-8 rounded-full border border-black/10" />
          <div className="absolute inset-16 rounded-full border border-black/10" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15 bg-black text-white shadow-glow">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-2xl font-semibold">AI</span>
              <span className="text-xs text-white/60">Engine</span>
            </div>
          </div>
          {dict.hero.cards.map((card, index) => (
            <motion.div
              key={card}
              animate={{ y: [0, index % 2 ? -12 : 12, 0] }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-lg border border-black/10 bg-white/[0.78] px-4 py-3 text-sm font-medium text-black/[0.72] shadow-xl shadow-black/10 backdrop-blur-xl"
              style={{
                left: ["5%", "54%", "18%"][index],
                top: ["18%", "28%", "68%"][index]
              }}
            >
              {card}
            </motion.div>
          ))}
          <div className="absolute inset-x-8 bottom-8 grid grid-cols-12 gap-1">
            {Array.from({ length: 48 }).map((_, index) => (
              <span
                key={index}
                className="h-1 rounded-full bg-black/15"
                style={{ opacity: 0.25 + ((index % 9) / 12) }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
