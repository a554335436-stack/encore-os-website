import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe2,
  Instagram,
  LineChart,
  Linkedin,
  LockKeyhole,
  Music2,
  PlaySquare,
  Radar,
  Send,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Youtube,
  Zap
} from "lucide-react";
import { isLocale } from "@/lib/i18n";

const shell = "mx-auto w-[min(1180px,calc(100%-72px))]";

const modules = [
  {
    icon: Radar,
    title: "AI 发现引擎",
    text: "全球扫描社媒平台，实时发现高潜力创作者与内容趋势。"
  },
  {
    icon: Target,
    title: "智能匹配系统",
    text: "多维度评估创作者与品牌契合度，预测合作效果与 ROI。"
  },
  {
    icon: ShieldCheck,
    title: "创作者情报中心",
    text: "深度分析创作者的内容、受众、历史合作与舆情风险。"
  },
  {
    icon: PlaySquare,
    title: "内容授权管理",
    text: "标准化授权流程，保障内容合规、追踪使用范围与期限。"
  },
  {
    icon: Send,
    title: "自动化执行工作流",
    text: "自动触达、跟进、提醒与协作，提升团队执行效率。"
  },
  {
    icon: LineChart,
    title: "效果监控与优化",
    text: "实时监控活动数据，AI 驱动洞察，持续优化投放策略。"
  }
];

const integrations = [
  ["OpenAI", "◎", "text-black"],
  ["Make", "▰", "text-[#6b39ff]"],
  ["Instantly", "ϟ", "text-[#1683ff]"],
  ["Notion", "N", "text-black"],
  ["TikTok", "♪", "text-black"],
  ["Instagram", "◎", "text-[#f0447b]"],
  ["YouTube", "▶", "text-[#ff1616]"],
  ["WhatsApp", "●", "text-[#25d366]"]
];

const workflow = [
  { icon: FileText, title: "Brief 需求", text: "明确目标与要求" },
  { icon: FileText, title: "Plan 规划", text: "制定策略与名单" },
  { icon: Workflow, title: "Execute 执行", text: "自动触达与协作" },
  { icon: Zap, title: "Monitor 监控", text: "实时追踪与预警" },
  { icon: BarChart3, title: "Optimize 优化", text: "分析复盘与迭代" }
];

const stats = [
  ["1M+", "全球创作者资源"],
  ["100+", "覆盖国家和地区"],
  ["500+", "成功合作项目"],
  ["95%", "客户留存率"],
  ["24h", "平均发现响应时间"]
];

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-black">
      <Header locale={rawLocale} />
      <main>
        <Hero locale={rawLocale} />
        <Modules />
        <ConnectedIntelligence />
        <ResultsBand />
        <CaseStudies />
        <TrustCards />
        <FinalCta locale={rawLocale} />
      </main>
      <Footer locale={rawLocale} />
    </div>
  );
}

function Header({ locale }: { locale: string }) {
  const nav = [
    ["Home", "home"],
    ["Solutions", "modules"],
    ["Cases", "results"],
    ["Encore OS", "os"],
    ["About", "trust"],
    ["Resources", "contact"]
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#fbfaf7]/90 backdrop-blur-md">
      <div className={`${shell} flex h-[64px] items-center justify-between`}>
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-black text-sm font-semibold text-white">OS</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">Encore Influence</span>
            <span className="block text-xs text-black/50">Global Creator Marketing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={label}
              href={`/${locale}#${href}`}
              className="relative flex items-center gap-1 text-xs font-medium text-black/75 hover:text-black"
            >
              {label}
              {label === "Encore OS" && <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-black" />}
              {(label === "Solutions" || label === "Resources") && <ChevronDown className="h-3 w-3" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}#contact`}
            className="hidden h-9 items-center gap-2 rounded-md bg-[#081109] px-4 text-xs font-semibold text-white sm:flex"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={locale === "zh" ? "/en" : "/zh"}
            className="flex h-9 items-center gap-1 rounded-md border border-black/10 bg-white px-3 text-xs font-semibold"
          >
            EN
            <ChevronDown className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero({ locale }: { locale: string }) {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className={`${shell} grid items-center gap-10 pb-14 pt-8 lg:grid-cols-[0.92fr_1.08fr]`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">Encore OS</p>
          <h1 className="mt-6 max-w-[620px] text-[54px] font-semibold leading-[1.08] tracking-normal text-black">
            The Operating System Behind Global Creator Marketing.
          </h1>
          <p className="mt-6 max-w-[620px] text-sm leading-7 text-black/50">
            Encore OS 是我们自主研发的营销操作系统，整合 AI 能力、数据智能与自动化工作流，帮助品牌更快发现、更准匹配、更好协作，让每一次营销都更可控、更可复利、更高效。
          </p>
          <div className="mt-8 flex gap-4">
            <Link href={`/${locale}#contact`} className="flex h-10 items-center gap-3 rounded-md bg-[#081109] px-5 text-xs font-semibold text-white">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}#modules`} className="flex h-10 items-center rounded-md border border-black/10 bg-white px-5 text-xs font-semibold text-black">
              Explore System Modules
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-7 text-sm text-black/55">
            {["AI 驱动", "数据智能", "自动化执行", "人机协同", "全球覆盖"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#657148]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <OsGraphic />
      </div>
    </section>
  );
}

function OsGraphic() {
  const labels = [
    ["Intelligence Layer", "AI & Data"],
    ["Automation Layer", "Workflows"],
    ["Data Layer", "Global Creator Graph"],
    ["Execution Layer", "Human Expertise"]
  ];

  return (
    <div id="os" className="relative h-[430px]">
      <div className="absolute inset-x-10 top-3 h-[360px] rounded-[50%] border border-[#7b8268]/10" />
      <div className="absolute inset-x-24 top-10 h-[290px] rounded-[50%] border border-[#7b8268]/10" />
      <div className="absolute right-[11%] top-0 grid h-12 w-12 place-items-center rounded-full bg-white text-base font-semibold text-[#566139] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">AI</div>
      <div className="absolute right-[2%] top-[37%] grid h-12 w-12 place-items-center rounded-full bg-white text-[#566139] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <Users className="h-5 w-5" />
      </div>
      <div className="absolute bottom-[17%] right-[17%] grid h-11 w-11 place-items-center rounded-full bg-white text-[#566139] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <Zap className="h-5 w-5" />
      </div>
      <div className="absolute bottom-[12%] left-[35%] grid h-11 w-11 place-items-center rounded-full bg-white text-[#566139] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <Globe2 className="h-5 w-5" />
      </div>
      <div className="absolute left-[31%] top-[5%] grid h-11 w-11 place-items-center rounded-full bg-white text-[#566139] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <BarChart3 className="h-5 w-5" />
      </div>

      <div className="absolute left-[44%] top-[14%] h-[285px] w-[330px]">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="os-layer absolute left-1/2 h-[94px] w-[250px] rounded-[26px] border border-white/70 bg-[#909880]/55 shadow-[0_24px_45px_rgba(28,34,20,0.18)]"
            style={{ top: item * 54, zIndex: 8 - item }}
          >
            {item === 0 && (
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-white/80 text-xl font-semibold shadow-inner">OS</span>
              </div>
            )}
            {item === 1 && <div className="absolute inset-7 os-dots" />}
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[18%] w-[300px] space-y-8">
        {labels.map(([title, text]) => (
          <div key={title} className="grid grid-cols-[1fr_112px] items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-semibold text-black">{title}</p>
              <p className="mt-1 text-xs text-black/45">{text}</p>
            </div>
            <span className="relative h-px bg-[#7f876b]/45 before:absolute before:-left-1 before:-top-1 before:h-2 before:w-2 before:rounded-full before:bg-[#566139]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Modules() {
  return (
    <section id="modules" className={`${shell} rounded-xl border border-black/[0.05] bg-white/70 p-7 shadow-[0_18px_60px_rgba(20,22,14,0.04)]`}>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">System Modules</p>
          <h2 className="mt-2 text-2xl font-semibold">强大的模块，支撑全流程营销</h2>
        </div>
        <Link href="#contact" className="flex items-center gap-2 text-sm font-medium text-[#566139]">
          View All Modules
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {modules.map((item) => (
          <article key={item.title} className="rounded-lg border border-black/[0.07] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.025)]">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[#f1f2ea] text-[#566139]">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-sm font-semibold">{item.title}</h3>
            <p className="mt-3 min-h-[70px] text-xs leading-6 text-black/52">{item.text}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#657148]">
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConnectedIntelligence() {
  return (
    <section className={`${shell} mt-8 grid overflow-hidden rounded-xl border border-black/[0.05] bg-white/60 shadow-[0_18px_60px_rgba(20,22,14,0.035)] lg:grid-cols-[1fr_1.1fr]`}>
      <div className="relative min-h-[300px] border-r border-black/[0.06] p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">Connected Intelligence</p>
        <h2 className="mt-2 text-2xl font-semibold">连接顶尖工具，形成智能闭环</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
          Encore OS 整合全球领先的 AI 与自动化工具，打通数据孤岛，让信息自由流动，决策更快更准。
        </p>
        <div className="mt-6 grid max-w-[430px] grid-cols-2 gap-3 sm:grid-cols-4">
          {integrations.map(([name, mark, color]) => (
            <div key={name} className="flex h-10 items-center justify-center gap-2 rounded-md border border-black/[0.08] bg-white text-xs font-semibold">
              <span className={`text-lg leading-none ${color}`}>{mark}</span>
              {name}
            </div>
          ))}
          <div className="flex h-10 items-center justify-center rounded-md border border-black/[0.08] bg-white text-xs text-black/55">
            and more...
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-14 right-[-42px] z-10 hidden h-[118px] w-[118px] place-items-center rounded-full border border-[#7f876b]/20 lg:grid">
          <span className="absolute inset-3 rounded-full border border-[#7f876b]/25" />
          <span className="absolute right-2 top-5 h-2 w-2 rounded-full bg-[#657148]" />
          <span className="grid h-[76px] w-[76px] place-items-center rounded-full bg-[#10170d] text-2xl font-semibold text-white ring-1 ring-[#566139]/20">
            OS
          </span>
        </div>
      </div>

      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">Intelligent Workflow</p>
        <h2 className="mt-2 text-2xl font-semibold">智能工作流，让协作更高效</h2>
        <p className="mt-4 max-w-lg text-sm leading-7 text-black/55">
          从需求到复盘，Encore OS 提供标准化流程与自动化支持，让团队专注于创意与策略。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-5">
          {workflow.map((item, index) => (
            <div key={item.title} className="relative text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-black/[0.07] bg-white text-[#566139] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <item.icon className="h-5 w-5" />
              </div>
              {index < workflow.length - 1 && <ArrowRight className="absolute -right-4 top-5 hidden h-4 w-4 text-[#657148] sm:block" />}
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs text-black/45">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsBand() {
  return (
    <section id="results" className={`${shell} mt-8 overflow-hidden rounded-lg bg-[#071007] p-7 text-white shadow-[0_18px_40px_rgba(6,14,6,0.18)]`}>
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#c5cdae]">Built for Results</p>
          <h2 className="mt-2 text-2xl font-semibold">用系统化能力，创造真实增长</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            Encore OS 帮助品牌在全球范围内更高效地开展红人营销，实现可衡量、可复利的增长。
          </p>
          <Link href="#contact" className="mt-6 inline-flex h-10 items-center gap-2 rounded-md border border-white/25 px-4 text-sm font-semibold">
            View Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([value, label]) => (
            <div key={label} className="border-l border-white/15 pl-8">
              <div className="text-3xl font-semibold text-[#d6ddb8]">{value}</div>
              <div className="mt-3 text-xs text-white/68">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      label: "Consumer Electronics",
      brand: "Shokz | Germany",
      value: "+320%",
      metric: "Engagement Increase",
      variant: "case-card-shokz"
    },
    {
      label: "Skincare",
      brand: "Anua | Global",
      value: "+185%",
      metric: "Sales Lift",
      variant: "case-card-skincare"
    },
    {
      label: "Travel",
      brand: "Klook | Southeast Asia",
      value: "+250%",
      metric: "Content Views",
      variant: "case-card-travel"
    }
  ];

  return (
    <section className="mx-auto mt-8 w-[min(1320px,calc(100%-72px))]">
      <div className="mb-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/35">Case Studies</p>
        <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-normal">他们的增长，值得被看见</h2>
      </div>

      <div className="grid items-center gap-5 lg:grid-cols-[1fr_1fr_1fr_58px]">
        {cases.map((item) => (
          <article
            key={item.brand}
            className={`${item.variant} relative h-[176px] overflow-hidden rounded-xl border border-black/[0.06] shadow-[0_16px_38px_rgba(20,22,14,0.08)]`}
          >
            <div className="absolute left-6 top-[22px] z-10">
              <span className="inline-flex rounded-md bg-white/55 px-3 py-1 text-[9px] font-semibold uppercase leading-none text-black/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] backdrop-blur-sm">
                {item.label}
              </span>
              <h3 className="mt-[17px] text-[18px] font-semibold leading-none tracking-normal text-black/82">{item.brand}</h3>
              <div className="mt-[16px] text-[30px] font-medium leading-none tracking-normal text-black/88">{item.value}</div>
              <p className="mt-[11px] text-[11px] font-medium leading-none text-black/52">{item.metric}</p>
            </div>
            <CaseVisual variant={item.variant} />
          </article>
        ))}

        <div className="hidden flex-col items-center gap-5 lg:flex">
          <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black/65 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black/65 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CaseVisual({ variant }: { variant: string }) {
  if (variant === "case-card-skincare") {
    return (
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%]">
        <span className="absolute inset-y-0 left-0 w-24 bg-white/25 blur-xl" />
        <span className="absolute bottom-5 left-8 h-[90px] w-[42px] rounded-md bg-white/82 shadow-[0_16px_24px_rgba(0,0,0,0.12)]">
          <span className="absolute left-2 top-8 h-8 w-7 rounded-sm bg-white/70" />
        </span>
        <span className="absolute bottom-5 left-[5.4rem] h-[128px] w-[50px] rounded-b-lg rounded-t-xl bg-[#f0bbaa]/72 shadow-[0_16px_24px_rgba(0,0,0,0.14)]">
          <span className="absolute left-2 top-2 h-8 w-8 rounded-sm bg-white/65" />
          <span className="absolute left-3 top-14 h-10 w-7 rounded-sm bg-white/40" />
        </span>
        <span className="absolute bottom-5 left-[8.7rem] h-[142px] w-[56px] rounded-b-lg rounded-t-xl bg-white/82 shadow-[0_16px_24px_rgba(0,0,0,0.14)]">
          <span className="absolute left-3 top-12 h-12 w-8 rounded-sm bg-white/50" />
        </span>
        <span className="absolute left-[5.95rem] top-2 h-20 w-2 rounded-full bg-white/82" />
        <span className="absolute left-[9.35rem] top-1 h-24 w-2 rounded-full bg-white/82" />
      </div>
    );
  }

  if (variant === "case-card-travel") {
    return (
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute inset-x-0 top-0 h-[42%] bg-[#d7e1f0]/65" />
        <span className="absolute bottom-0 right-0 h-[58%] w-[78%] rounded-tl-[88px] bg-[#c99551]/65" />
        <span className="absolute bottom-0 right-0 h-16 w-full bg-[#704d28]/18" />
        <span className="absolute bottom-7 right-12 h-px w-[55%] bg-[#6f4c24]/18" />
        {[22, 47, 68, 84].map((left, index) => (
          <span key={left} className="absolute" style={{ left: `${left}%`, top: `${24 - index * 2}px` }}>
            <span
              className="block rounded-full bg-[#9d4f2e] shadow-[0_7px_18px_rgba(70,42,24,0.22)]"
              style={{
                width: `${25 - index * 3}px`,
                height: `${32 - index * 3}px`
              }}
            />
            <span className="mx-auto block h-3 w-px bg-[#6f3d23]/60" />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[56%]">
      <span className="absolute bottom-3 right-8 h-[78px] w-[174px] rounded-[50%] bg-white/62 shadow-[inset_0_10px_24px_rgba(255,255,255,0.65),0_16px_24px_rgba(0,0,0,0.12)]" />
      <span className="absolute bottom-4 right-16 h-[58px] w-[124px] rounded-[48%] border-[8px] border-black/18" />
      <span className="absolute right-[6.7rem] top-3 h-[112px] w-[78px] rounded-full border-[7px] border-[#181a19]/82" />
      <span className="absolute right-[3.9rem] top-3 h-[112px] w-[78px] rounded-full border-[7px] border-[#181a19]/82" />
      <span className="absolute right-[8.6rem] top-[5.1rem] h-[50px] w-[50px] rounded-full border-[7px] border-[#181a19]/82" />
      <span className="absolute right-[5.55rem] top-[2.55rem] h-[78px] w-[7px] rotate-[-2deg] rounded-full bg-[#181a19]/82" />
      <span className="absolute right-[8.1rem] top-[4.55rem] h-[64px] w-[7px] rotate-[12deg] rounded-full bg-[#181a19]/82" />
    </div>
  );
}

function TrustCards() {
  return (
    <section id="trust" className={`${shell} mt-8 grid gap-4 lg:grid-cols-2`}>
      <article className="rounded-xl border border-black/[0.05] bg-white/70 p-7 shadow-[0_18px_60px_rgba(20,22,14,0.035)]">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">Security & Trust</p>
        <h2 className="mt-2 text-2xl font-semibold">安全合规，值得信赖</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
          我们重视数据安全与隐私保护，严格遵循国际标准，确保每一次合作都安全可控。
        </p>
        <div className="mt-8 grid gap-4 text-xs font-medium text-black/58 sm:grid-cols-4">
          {["数据加密存储", "隐私合规保障", "权限分级管理", "合同内容审核"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <LockKeyhole className="h-4 w-4 text-[#657148]" />
              {item}
            </div>
          ))}
        </div>
      </article>
      <article className="rounded-xl border border-black/[0.05] bg-white/70 p-7 shadow-[0_18px_60px_rgba(20,22,14,0.035)]">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#566139]">Human Expertise</p>
        <h2 className="mt-2 text-2xl font-semibold">人机协同，专业判断不可替代</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
          AI 提供效率与洞察，专业团队提供策略与判断。系统负责处理信息，人负责做出最终决策。
        </p>
        <div className="mt-7 flex items-center">
          {["张", "林", "S", "王", "陈"].map((name, index) => (
            <div
              key={index}
              className="-mr-2 grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-[#d8dccf] text-sm font-semibold text-[#566139]"
            >
              {name}
            </div>
          ))}
          <div className="ml-8 grid h-14 min-w-[86px] place-items-center rounded-full border border-black/[0.07] bg-white px-5 text-center">
            <span className="text-lg font-semibold">+50</span>
            <span className="-mt-1 text-[10px] text-black/45">全球专家团队</span>
          </div>
        </div>
      </article>
    </section>
  );
}

function FinalCta({ locale }: { locale: string }) {
  return (
    <section id="contact" className={`${shell} mt-8 overflow-hidden rounded-xl border border-black/[0.05] bg-white/75 p-7 shadow-[0_18px_60px_rgba(20,22,14,0.035)]`}>
      <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/45">Ready to experience Encore OS?</p>
          <h2 className="mt-2 text-2xl font-semibold">体验 Encore OS 如何为您的品牌创造影响力</h2>
        </div>
        <Link href={`/${locale}#home`} className="inline-flex h-11 items-center justify-center gap-3 rounded-md bg-[#081109] px-7 text-sm font-semibold text-white">
          Book a Demo
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a href="mailto:hello@encoreinfluence.com" className="inline-flex h-11 items-center justify-center gap-3 rounded-md border border-black/10 bg-white px-7 text-sm font-semibold">
          Contact Sales
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer({ locale }: { locale: string }) {
  const columns = [
    ["Navigation", ["Home", "Solutions", "Cases", "Encore OS", "About", "Resources"]],
    ["Solutions", ["Influencer Marketing", "Content Licensing", "Global Campaign Management"]],
    ["Company", ["About Us", "Our Team", "Careers", "Press Kit"]]
  ];

  return (
    <footer className="mt-6 border-t border-black/[0.06] bg-white/65 py-7">
      <div className={`${shell} grid gap-10 lg:grid-cols-[1.35fr_2fr_1fr]`}>
        <div>
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-black text-sm font-semibold text-white">OS</span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Encore Influence</span>
              <span className="block text-xs text-black/45">Global Creator Marketing</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-black/54">
            用系统化能力，让全球创作者营销更简单、更高效、更有价值。
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Instagram, Music2, Youtube].map((Icon, index) => (
              <span key={index} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/55">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map(([title, items]) => (
            <div key={title as string}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-black/42">{title}</h3>
              <div className="mt-4 grid gap-2">
                {(items as string[]).map((item) => (
                  <Link href={`/${locale}#home`} key={item} className="text-xs text-black/58 hover:text-black">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-black/42">Contact</h3>
          <div className="mt-4 grid gap-2 text-xs text-black/58">
            <a href="mailto:hello@encoreinfluence.com">hello@encoreinfluence.com</a>
            <span>WhatsApp: +86 166 8888 8888</span>
            <span>LinkedIn / Instagram / TikTok</span>
          </div>
        </div>
      </div>
      <div className={`${shell} mt-8 flex justify-between border-t border-black/[0.06] pt-5 text-xs text-black/38`}>
        <span>© 2025 Encore Influence. All rights reserved.</span>
        <span>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms of Service</span>
      </div>
    </footer>
  );
}
