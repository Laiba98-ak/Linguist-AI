import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Check,
  X,
  Mic,
  BookOpen,
  Sparkles,
  Zap,
  MessageSquare,
  Globe,
  TrendingUp,
  Clipboard,
  Volume2,
} from "lucide-react";
import robot from "@/assets/robot-mascot.png";
import bearAsset from "@/assets/bear.png.asset.json";
import skyBg from "@/assets/sky-bg.jpg";

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[280px] md:w-[340px] aspect-[9/19] rounded-[42px] bg-white p-3 shadow-2xl ring-1 ring-black/5 ${className}`}>
      <div className="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-28 bg-black rounded-full z-10" />
      <div className="relative h-full w-full rounded-[32px] bg-white overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-semibold text-black">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-300 to-orange-300" />
            <div>
              <div className="text-[9px] text-slate-500">Welcome Back 👋</div>
              <div className="text-sm font-bold text-slate-900">Karina</div>
            </div>
          </div>
          <div className="h-7 w-7 rounded-full bg-slate-100 grid place-items-center text-slate-500 text-xs">🔔</div>
        </div>
        <div className="mx-4 mt-3 rounded-2xl bg-[color:var(--sky-deep)] p-3 relative overflow-hidden flex-1">
          <div className="text-white font-display font-bold text-base leading-tight max-w-[55%]">
            Continue your lessons with excited.
          </div>
          <img src={bearAsset.url} alt="" className="absolute right-1 bottom-6 w-[58%] object-contain" />
          <div className="absolute left-3 bottom-3 flex items-end gap-2">
            <div className="relative h-10 w-10 rounded-full bg-white/20 grid place-items-center text-white text-[10px] font-bold border-2 border-white/60">72%</div>
            <div className="relative h-10 w-10 rounded-full bg-white/20 grid place-items-center text-white text-[10px] font-bold border-2 border-white/60">30</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2.5">
          {[["💼","Work"],["☕","Daily Life"],["🏠","Family"]].map(([e,l])=>(
            <span key={l} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-[9px] font-medium text-slate-700">{e} {l}</span>
          ))}
        </div>
        <div className="mx-4 mb-3 rounded-xl bg-slate-100 p-2 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-slate-300" />
          <div className="text-[10px] font-semibold text-slate-700">Business Communication</div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Nav() {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
      <a href="#" className="flex items-center gap-2 text-white">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur">
          <img src={robot} alt="" className="h-7 w-7 object-contain" />
        </span>
        <span className="font-display font-bold text-lg">Linguist // AI</span>
      </a>
      <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/20 backdrop-blur px-2 py-1.5 border border-white/30">
        {["Home", "About us", "Pricing", "Blog"].map((l, i) => (
          <a key={l} href="#" className={`text-sm px-4 py-1.5 rounded-full text-white/90 hover:text-white ${i === 0 ? "bg-white/25" : ""}`}>{l}</a>
        ))}
      </nav>
      <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-white text-sm font-medium underline underline-offset-4">
        Start for free <ArrowRight className="h-4 w-4" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={skyBg} alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.55_0.13_240)/0.15] via-transparent to-white/40" />
      <div className="relative">
        <Nav />
        <div className="relative px-6 md:px-12 pt-8 pb-40 md:pb-56 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <a href="#" className="inline-flex items-center gap-2 text-white/95 text-sm font-medium underline underline-offset-4">
              Top #1 language learning platform <ArrowRight className="h-4 w-4" />
            </a>
            <h1 className="mt-6 font-display font-bold text-white text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Speak any language <br className="hidden md:block" />
              <span>10x faster with AI</span>
            </h1>
            <p className="mt-6 text-white/90 text-lg max-w-lg">
              LingAI uses advanced conversational AI to give you real-time speaking practice, personalized lessons.
            </p>
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-[color:var(--ink)] rounded-full px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow">
                Start learning for free <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white font-medium">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/25 backdrop-blur border border-white/30">
                  <Play className="h-4 w-4 fill-white text-white" />
                </span>
                Watch demo video
              </a>
            </div>
          </div>

          {/* Robot mascot */}
          <div className="hidden md:block absolute right-24 top-24 animate-float">
            <div className="relative">
              <div className="absolute -top-8 -left-14 bg-white/85 backdrop-blur rounded-2xl rounded-bl-sm px-3 py-1.5 text-xs font-medium text-[color:var(--ink)] shadow">
                Hello!
              </div>
              <img src={robot} alt="AI mascot" className="w-28 h-28 object-contain drop-shadow-2xl" width={112} height={112} />
            </div>
          </div>
        </div>

        {/* Phone + floating feature cards */}
        <div className="relative -mt-32 md:-mt-48 px-6 md:px-12 max-w-7xl mx-auto pb-8">
          <div className="relative flex justify-center">
            <PhoneMockup className="relative z-10" />

            {/* Left cards */}
            <FloatCard className="left-0 md:left-8 top-12" solid>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-100 text-orange-500"><Sparkles className="h-4 w-4" /></span>
              Access personalized courses and learning paths designed for every skill level.
            </FloatCard>
            <FloatCard className="left-0 md:left-4 top-56 hidden md:flex">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-100 text-sky-600"><Zap className="h-4 w-4" /></span>
              Learn anytime with quick lessons and seamless progress syncing.
            </FloatCard>
            <FloatCard className="left-0 md:left-16 bottom-8 hidden md:flex">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-600"><TrendingUp className="h-4 w-4" /></span>
              Track your growth with smart analytics, achievements and daily learning goals.
            </FloatCard>

            {/* Right cards */}
            <FloatCard className="right-0 md:right-8 top-8">
              Simple and distraction-free interface built for smooth mobile learning.
            </FloatCard>
            <FloatCard className="right-0 md:right-4 top-40" solid>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-100 text-indigo-600"><Globe className="h-4 w-4" /></span>
              Secure cloud-based learning progress with instant access across all QR.
            </FloatCard>
            <FloatCard className="right-0 md:right-16 bottom-8 hidden md:flex">
              Explore courses across business, design, coding, languages.
            </FloatCard>
          </div>
        </div>

        {/* Torn bottom edge */}
        <div className="torn-bottom h-16 bg-white -mb-1 relative z-20" />
      </div>
    </section>
  );
}

function FloatCard({ children, className = "", solid = false }: { children: React.ReactNode; className?: string; solid?: boolean }) {
  return (
    <div className={`absolute z-20 max-w-[240px] rounded-2xl px-4 py-3 text-xs md:text-sm text-[color:var(--ink)] shadow-xl flex items-start gap-3 ${solid ? "bg-white" : "bg-white/60 backdrop-blur border border-white/60"} ${className}`}>
      {children}
    </div>
  );
}

function LogoStrip() {
  const logos = [
    { name: "Hexagon", icon: "◇" },
    { name: "ByteBoost", icon: "⌘" },
    { name: "Hexagon", icon: "◯" },
    { name: "Codelink", icon: "◐" },
    { name: "Netdot", icon: "N" },
    { name: "Codelink", icon: "◑" },
    { name: "Webgear", icon: "W" },
  ];
  return (
    <div className="bg-white py-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 flex-wrap opacity-60">
        {logos.map((l, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-500 font-semibold text-lg">
            <span className="text-2xl">{l.icon}</span> {l.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  const cards = [
    {
      title: "AI pronunciation correction",
      body: "Get instant, phoneme-level feedback on your pronunciation. Our AI identifies exactly where your accent differs and guides you.",
      visual: (
        <div className="rounded-xl bg-white shadow-sm p-4 space-y-3 border border-slate-100">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Sentiment analysis</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">😊 Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-slate-200" />
            <div className="text-xs font-medium">Sven Kramer</div>
          </div>
          <div className="text-[11px] text-slate-500 leading-relaxed">As we 100k ahead, let's forecast our sales for Q2. I realize Jane wasn't...</div>
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rose-50 text-rose-600 font-medium">😕 Negative</span>
            <div className="flex gap-1 text-slate-400">
              <Volume2 className="h-3 w-3" /><Clipboard className="h-3 w-3" />
            </div>
          </div>
        </div>
      ),
    },
    { title: "Real-time voice conversations", body: "Talk with an AI that responds like a native speaker — in real-time.", icon: <Mic className="h-5 w-5" /> },
    { title: "Personalized learning paths", body: "Your curriculum adapts daily based on your pace, mistakes, and goals.", icon: <BookOpen className="h-5 w-5" /> },
    { title: "Smart grammar feedback", body: "Every sentence you say is analyzed and gently corrected on the fly.", icon: <MessageSquare className="h-5 w-5" /> },
    { title: "Spaced repetition engine", body: "Never forget a word. Our SRS surfaces vocabulary right before you'd forget.", icon: <X className="h-5 w-5" /> },
    {
      title: "50+ languages supported",
      body: "From Japanese to Portuguese, Arabic to Dutch — LinguistAI covers over 50 languages.",
      visual: (
        <div className="flex flex-wrap gap-2">
          {[
            ["🇨🇳", "Chinese", "bg-rose-50"],
            ["🇵🇹", "Portuguese", "bg-amber-50"],
            ["🇸🇦", "Arabic", "bg-emerald-50"],
            ["🇩🇪", "French", "bg-slate-100"],
          ].map(([f, n, c]) => (
            <span key={n} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${c}`}>{f} {n}</span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[oklch(0.97_0.005_240)] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-start justify-between gap-8 flex-wrap mb-14">
          <div>
            <a className="text-sm font-medium text-[color:var(--ink)] underline underline-offset-4 inline-flex items-center gap-1.5">
              AI powered features <Sparkles className="h-4 w-4" />
            </a>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[color:var(--ink)] leading-[1.05]">
              Everything you need to <br />
              <span className="text-[color:var(--sky-deep)]">become truly fluent</span>
            </h2>
          </div>
          <img src={robot} alt="" className="w-28 h-28 object-contain opacity-90" loading="lazy" width={112} height={112} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 min-h-[280px]">
              <div className="flex-1 flex items-start">
                {c.visual ? c.visual : (
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-[color:var(--ink)]">
                    {c.icon}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[color:var(--ink)]">{c.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{c.body}</p>
                {!c.visual && (
                  <a className="mt-3 inline-flex items-center gap-1 text-sm text-[color:var(--sky-deep)] font-medium underline underline-offset-4">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Time to conversational", "2-3 Years", "3-6 Month"],
    ["Personalization", "One-size-fits-all", "Adapt every session"],
    ["Speaking practice", "Limited, scheduled", "Unlimited anytime"],
    ["Availability", "Fixed class times", "24/7, any devices"],
    ["Cost (monthly)", "$50-$300+", "From $0-$15"],
    ["Real-time feedback", "Delayed, infrequent", "Instant, every time"],
  ];
  return (
    <section className="relative bg-[oklch(0.97_0.005_240)]">
      <div className="torn-top h-16 bg-[color:var(--sky-deep)]" />
      <div className="bg-[color:var(--sky-deep)] relative">
        <img src={skyBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-start justify-between gap-8 flex-wrap mb-12">
            <div>
              <a className="text-sm font-medium text-white underline underline-offset-4 inline-flex items-center gap-1.5">
                The difference <Clipboard className="h-4 w-4" />
              </a>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-[1.05]">
                Old way vs. <br />the LinguistAI way
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-white/85 text-sm">Traditional language learning is slow, expensive, and passive. LingAI flips the script entirely.</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 bg-white text-[color:var(--ink)] rounded-full px-5 py-2.5 text-sm font-medium">
                Start learning with LinguistAI <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Traditional Learning", sub: "Textbooks, Classes, Apps", color: "text-rose-500", icon: <BookOpen className="h-5 w-5" />, side: "old" },
              { label: "Linguist // AI", sub: "AI Powered, Adaptive", color: "text-[color:var(--sky-deep)]", icon: <Sparkles className="h-5 w-5" />, side: "new" },
            ].map((col, ci) => (
              <div key={ci} className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-2">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100">{col.icon}</span>
                  <div>
                    <div className={`font-bold text-lg ${col.color}`}>{col.label}</div>
                    <div className="text-xs text-slate-500">{col.sub}</div>
                  </div>
                </div>
                {rows.map((r, ri) => (
                  <div key={ri} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <span className="text-sm font-medium text-[color:var(--ink)]">{r[0]}</span>
                    {col.side === "old" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-500 text-xs font-medium">
                        <X className="h-3 w-3" /> {r[1]}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[color:var(--sky-deep)] text-xs font-medium">
                        <Check className="h-3 w-3" /> {r[2]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="torn-bottom h-16 bg-[color:var(--sky-deep)] -mt-1" />
    </section>
  );
}

function Journey() {
  const days = [30, 55, 45, 70, 95, 60, 50];
  return (
    <section className="bg-[oklch(0.97_0.005_240)] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-xs text-slate-500 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Daily streak</div>
              <div className="mt-2 text-3xl font-bold text-[color:var(--sky-deep)]">42 Days</div>
              <div className="mt-2 h-1.5 bg-slate-100 rounded-full"><div className="h-full w-2/3 bg-[color:var(--sky-deep)] rounded-full" /></div>
            </div>
            <div>
              <div className="text-xs text-slate-500 flex items-center gap-1"><Sparkles className="h-3 w-3" /> Fluency score</div>
              <div className="mt-2 text-3xl font-bold">B2</div>
              <div className="text-xs text-slate-500">Upper Intermediate</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">XP This Week</div>
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-[color:var(--sky-deep)]">↑ 24%</span>
          </div>
          <div className="flex items-end gap-3 h-40">
            {days.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full rounded-t-lg ${i === 3 ? "bg-[color:var(--sky-deep)]" : "bg-slate-100"}`} style={{ height: `${h}%` }} />
                <span className="text-[10px] text-slate-500 uppercase">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <a className="text-sm font-medium text-[color:var(--ink)] underline underline-offset-4 inline-flex items-center gap-1.5">
            AI powered data tracking <Sparkles className="h-4 w-4" />
          </a>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Visualize your journey <br />
            <span className="text-[color:var(--sky-deep)]">to Linguist.AI</span>
          </h2>
          <p className="mt-5 text-slate-600 max-w-md">
            Data-driven insights help you focus on what matters most. Track your vocabulary growth and grammar accuracy.
          </p>
          <ul className="mt-6 space-y-3">
            {["CEFR Standard Alignment", "Speech Pattern Recognition", "Predictive Fluency Milestones"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-[color:var(--sky-deep)]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free forever",
      price: "$0",
      desc: "Perfect for casual learners who want to explore AI language learning.",
      cta: "Get started free",
      dark: false,
      features: ["1 language of your choice", "10 AI conversion/month", "Basic pronunciation feedback", "Core value lessons", "Progress streak lessons tracking"],
      icon: <BookOpen className="h-5 w-5 text-[color:var(--sky-deep)]" />,
    },
    {
      name: "Pro learner",
      price: "$11",
      desc: "For serious learners who want real results and full AI power.",
      cta: "Start pro free",
      dark: true,
      features: ["Up to 5 lessons", "Unlimited AI conversations", "Advanced pronunciation AI", "Smart grammar correction", "Full weekly analysis", "Offline mode"],
      icon: <Sparkles className="h-5 w-5 text-[color:var(--sky-deep)]" />,
    },
    {
      name: "Team & power",
      price: "$23",
      desc: "For professionals, teams, and power learners who need it all.",
      cta: "Get unlimited",
      dark: false,
      features: ["All 50+ languages", "Unlimited everything", "Business vocabulary packs", "API access & integrations", "Team dashboards", "Priority AI model access"],
      icon: <Zap className="h-5 w-5 text-orange-500" />,
    },
  ];
  return (
    <section className="bg-[oklch(0.97_0.005_240)] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <a className="text-sm font-medium text-[color:var(--ink)] underline underline-offset-4 inline-flex items-center gap-1.5">
              Pricing <Sparkles className="h-4 w-4" />
            </a>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05]">
              Simple, transparent pricing <br />
              <span className="text-[color:var(--sky-deep)]">for every learner</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-slate-600">
            Start free and upgrade when you're ready. No hidden fees, no contracts. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl text-[color:var(--sky-deep)]">{p.name}</h3>
                {p.icon}
              </div>
              <p className="mt-3 text-sm text-slate-600 min-h-[48px]">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-bold text-[color:var(--sky-deep)]">{p.price}</span>
                  <span className="text-slate-500 text-sm">/ month</span>
                </div>
                <a href="#" className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${p.dark ? "bg-[color:var(--ink)] text-white" : "bg-slate-100 text-[color:var(--ink)]"}`}>
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-sky-50 text-[color:var(--sky-deep)]"><Check className="h-3 w-3" /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative">
      <div className="torn-top h-16 bg-[color:var(--sky-deep)]" />
      <div className="bg-[color:var(--sky-deep)] relative overflow-hidden">
        <img src={skyBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <a className="text-sm font-medium text-white underline underline-offset-4 inline-flex items-center gap-1.5">
              CTA <Clipboard className="h-4 w-4" />
            </a>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-[1.02]">
              Your first conversation starts in under 60 seconds
            </h2>
            <p className="mt-5 text-white/85 max-w-md">
              LingAI uses advanced conversational AI to give you real-time speaking practice, personalized lessons.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-[color:var(--ink)] rounded-full px-6 py-3 font-medium">
                Start learning for free <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white font-medium">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/25 border border-white/30">
                  <Play className="h-4 w-4 fill-white text-white" />
                </span>
                Watch demo video
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.97_0.005_240)] pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={robot} alt="" className="h-8 w-8 object-contain" loading="lazy" />
            <span className="font-display font-bold text-lg">Linguist // AI</span>
          </div>
          <p className="mt-4 text-sm text-slate-600 max-w-xs">
            Real-time conversational AI that turns anyone into a confident speaker.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {["AI Speaking Practice","Interactive Lessons","Vocabulary Builder","Progress Tracking"].map(l=><li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {["About Us","Success Stories","Learning Blog","Pricing"].map(l=><li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100 text-sm space-y-3">
          <div><div className="text-slate-500 text-xs">Address</div><div>[Street Address], Chicago, IL [ZIP]</div></div>
          <div><div className="text-slate-500 text-xs">Phone</div><div>(312) XXX-XXXX</div></div>
          <div><div className="text-slate-500 text-xs">Email</div><div>hello@linguistai.com</div></div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-slate-500 text-xs">Social</span>
            <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-xs">Twitter</a>
            <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-xs">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="font-display font-bold text-[14vw] leading-none text-slate-200 select-none">
          Linguist // AI
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <LogoStrip />
      <Features />
      <Comparison />
      <Journey />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
