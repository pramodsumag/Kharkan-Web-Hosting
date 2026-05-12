import {
  Sparkles,
  Wand2,
  Rocket,
  ShieldCheck,
  Database,
  Zap,
  GitBranch,
  Globe2,
  LineChart,
  Headphones,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    icon: Wand2,
    title: "AI Website Builder",
    desc: "Describe your business in one line and our AI assembles a fully responsive, SEO-ready website in under 60 seconds — complete with copy, images and brand colours.",
    bullets: ["120+ industry templates", "Auto-generated content", "1-click publish to your domain"],
    color: "from-fuchsia-500 to-pink-500",
    bg: "from-fuchsia-50 to-pink-50",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
  {
    icon: Rocket,
    title: "1-Click WordPress",
    desc: "Launch a fully optimised WordPress site with LiteSpeed cache, Cloudflare CDN and security hardening pre-configured — no plugins to set up, no settings to tweak.",
    bullets: ["Auto-updates & rollback", "Free premium themes", "Staging → Production push"],
    color: "from-blue-500 to-indigo-500",
    bg: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Performance Optimiser",
    desc: "Smart caching, image WebP conversion, lazy-loading and database tuning — all happening automatically. Your site loads in under 1 second across India.",
    bullets: ["LiteSpeed + Brotli compression", "Auto WebP & lazy load", "Real-time speed insights"],
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Security Suite",
    desc: "Enterprise-grade Imunify360 firewall, daily malware scans, brute-force protection and free Let's Encrypt SSL — all included and always running.",
    bullets: ["DDoS & WAF protection", "Malware auto-cleanup", "Free wildcard SSL"],
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Database,
    title: "Daily Auto Backups",
    desc: "JetBackup creates a fresh copy of your entire site every 24 hours and keeps 30 restore points. Restore your full site or a single file in 2 clicks.",
    bullets: ["30 days of restore points", "1-click full restore", "Off-site secure storage"],
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: GitBranch,
    title: "Staging Environment",
    desc: "Test plugin updates, theme changes or new content in a private clone of your live site. Push to production with one click when you're happy.",
    bullets: ["Free unlimited stagings", "Selective push (DB / files)", "No DNS changes needed"],
    color: "from-violet-500 to-purple-500",
    bg: "from-violet-50 to-purple-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Globe2,
    title: "Global CDN by Cloudflare",
    desc: "Your content is served from 300+ edge locations worldwide so your visitors — wherever they are — get blazing-fast load times and lower bounce rates.",
    bullets: ["300+ edge POPs", "Auto image optimisation", "Free DDoS protection"],
    color: "from-sky-500 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: LineChart,
    title: "Built-in Analytics",
    desc: "See traffic, top pages, referrers and Core Web Vitals right inside your dashboard — no Google Analytics setup, fully GDPR-compliant.",
    bullets: ["Real-time visitor stats", "Core Web Vitals monitor", "Export PDF reports"],
    color: "from-rose-500 to-red-500",
    bg: "from-rose-50 to-red-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Headphones,
    title: "24/7 Indian Experts",
    desc: "Real humans in Mumbai, Bangalore and Pune — never offshore. Average chat response under 60 seconds, with WordPress, cPanel and DNS specialists on hand.",
    bullets: ["Hindi + English + 4 regional", "Avg. response < 60 sec", "Free site fixes & migrations"],
    color: "from-lime-500 to-green-500",
    bg: "from-lime-50 to-green-50",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
  },
];

export default function SmarterTools() {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-100 to-blue-100 border border-fuchsia-200/50 text-fuchsia-700 font-bold text-xs px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={14} className="text-fuchsia-600" />
            ALL-IN-ONE HOSTING SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1240] mb-4 leading-tight">
            Smarter tools.{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Expert results.
            </span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            Every Kharkan Technology hosting plan ships with the same professional tools the agencies use — built in, automatic and free for the lifetime of your account.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                data-testid={`smarter-tool-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Gradient hover wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${t.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={t.iconColor} size={24} />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0d1240] mb-2">
                    {t.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                    {t.desc}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[12px] text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${t.color} mt-1.5 shrink-0`} />
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Accent strip */}
                  <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${t.color} group-hover:w-16 transition-all duration-300`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 relative bg-gradient-to-r from-[#1a237e] via-[#1565c0] to-[#7c3aed] rounded-2xl p-7 lg:p-9 overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full mb-3">
                <Sparkles size={12} /> EVERYTHING INCLUDED
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-1.5">
                Get all 9 expert tools — from just ₹29/mo
              </h3>
              <p className="text-blue-100/90 text-sm">
                Free domain · Free SSL · Free migration · 30-day money-back guarantee
              </p>
            </div>
            <a
              href="https://kharkan.com/user/login"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#1a237e] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
              data-testid="button-smarter-tools-cta"
            >
              Start Your Site <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
