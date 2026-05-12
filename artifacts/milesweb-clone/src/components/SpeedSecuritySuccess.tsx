import { useState } from "react";
import {
  Zap, ShieldCheck, TrendingUp,
  Server, Cpu, Globe2, RefreshCw,
  Lock, Eye, Bug, KeyRound,
  BarChart3, Headphones, Star, Award,
  CheckCircle2, ArrowRight,
} from "lucide-react";

const pillars = [
  {
    id: "speed",
    icon: <Zap size={20} className="text-yellow-400" />,
    label: "Speed",
    color: "from-yellow-500 to-orange-500",
    lightBg: "bg-yellow-50",
    border: "border-yellow-200",
    activeBorder: "border-yellow-500",
    activeText: "text-yellow-600",
    dot: "bg-yellow-500",
    headline: "Blazing-Fast Performance at Every Layer",
    subhead: "From server hardware to CDN edge nodes — every component is tuned for speed, so your visitors never wait.",
    stats: [
      { val: "20×", label: "Faster than Apache" },
      { val: "< 50ms", label: "TTFB Target" },
      { val: "99.99%", label: "Uptime SLA" },
    ],
    features: [
      {
        icon: <Server size={22} className="text-yellow-500" />,
        title: "LiteSpeed Web Server",
        desc: "Our entire fleet runs LiteSpeed — the industry's fastest web server engine — delivering pages up to 20× faster than traditional Apache setups. Built-in HTTP/3 & QUIC support included.",
      },
      {
        icon: <Cpu size={22} className="text-orange-500" />,
        title: "NVMe SSD Storage",
        desc: "Every plan uses NVMe SSDs — not SATA — providing 5–7× faster read/write speeds compared to conventional SSDs. Your database queries, file loads, and CMS operations fly.",
      },
      {
        icon: <Globe2 size={22} className="text-amber-500" />,
        title: "Global CDN with 200+ PoPs",
        desc: "Static assets are cached at 200+ edge locations worldwide. Visitors in Mumbai, London, or São Paulo all get your content from the nearest node — sub-100ms response globally.",
      },
      {
        icon: <RefreshCw size={22} className="text-yellow-600" />,
        title: "LiteSpeed Cache & Object Cache",
        desc: "Full-page caching, object caching (Redis), and browser caching are configured out-of-the-box for WordPress, Magento, and custom PHP apps — zero setup needed.",
      },
    ],
  },
  {
    id: "security",
    icon: <ShieldCheck size={20} className="text-blue-400" />,
    label: "Security",
    color: "from-blue-600 to-indigo-600",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    activeBorder: "border-blue-600",
    activeText: "text-blue-700",
    dot: "bg-blue-600",
    headline: "Enterprise-Grade Security, Included Free",
    subhead: "Multi-layered protection shields your site, your customers, and your data — 24/7, without lifting a finger.",
    stats: [
      { val: "Free", label: "SSL for All Domains" },
      { val: "10 Gbps", label: "DDoS Protection" },
      { val: "Daily", label: "Automated Backups" },
    ],
    features: [
      {
        icon: <Lock size={22} className="text-blue-600" />,
        title: "Free SSL / TLS Certificates",
        desc: "Every domain — including subdomains — gets a free Let's Encrypt or Sectigo SSL certificate, auto-renewed before expiry. HTTPS is enforced by default on all plans.",
      },
      {
        icon: <Eye size={22} className="text-indigo-600" />,
        title: "ModSecurity WAF",
        desc: "A hardened Web Application Firewall inspects every incoming request, blocking SQL injections, XSS attacks, and malicious bots before they reach your application.",
      },
      {
        icon: <Bug size={22} className="text-red-500" />,
        title: "AI-Powered Malware Scanner",
        desc: "Automated daily scans detect and quarantine malware, backdoors, and suspicious code changes. One-click clean-up available from your control panel.",
      },
      {
        icon: <KeyRound size={22} className="text-violet-500" />,
        title: "2FA, IP Allowlisting & CSF Firewall",
        desc: "Two-factor authentication on all accounts. ConfigServer Security & Firewall (CSF) protects at the server level, and IP allowlisting locks down your control panel access.",
      },
    ],
  },
  {
    id: "success",
    icon: <TrendingUp size={20} className="text-emerald-400" />,
    label: "Success",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    activeBorder: "border-emerald-600",
    activeText: "text-emerald-700",
    dot: "bg-emerald-500",
    headline: "Tools & Support That Drive Real Results",
    subhead: "Hosting is just the start. We give you the tools, guidance, and human support to actually grow your online presence.",
    stats: [
      { val: "4.8★", label: "Customer Rating" },
      { val: "24/7", label: "Expert Support" },
      { val: "30-Day", label: "Money-Back" },
    ],
    features: [
      {
        icon: <BarChart3 size={22} className="text-emerald-600" />,
        title: "Built-in SEO & Analytics Tools",
        desc: "Every plan includes free SEO audit tools, Google Analytics integration guides, and a sitemap generator. Rank faster and track your traffic from day one.",
      },
      {
        icon: <Headphones size={22} className="text-teal-600" />,
        title: "24/7/365 Expert Support",
        desc: "Real engineers — not bots — available via live chat, phone, and ticketing every hour of every day. Average first response time under 2 minutes on chat.",
      },
      {
        icon: <Star size={22} className="text-amber-500" />,
        title: "Free Website Migration",
        desc: "Our migration team handles everything — files, databases, email, and DNS — with zero downtime. We migrate from any host, free of charge, within 24 hours.",
      },
      {
        icon: <Award size={22} className="text-orange-500" />,
        title: "30-Day Money-Back Guarantee",
        desc: "Not satisfied? Get a full refund within 30 days, no questions asked. We're confident in our service, but we also respect your peace of mind.",
      },
    ],
  },
];

export default function SpeedSecuritySuccess() {
  const [active, setActive] = useState(0);
  const p = pillars[active];

  return (
    <section className="py-16 lg:py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1565c0] bg-blue-100 px-3 py-1 rounded-full mb-3">
            Why Choose Kharkan Technology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#1a237e] leading-tight mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Speed, Security & Success
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Kharkan Technology combines cutting-edge infrastructure, enterprise-grade protection, and
            award-winning support into every hosting plan — starting from just ₹29/mo.
          </p>
        </div>

        {/* Pillar tab switcher */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {pillars.map((pl, i) => (
            <button
              key={pl.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 ${
                i === active
                  ? `bg-gradient-to-r ${pl.color} text-white border-transparent shadow-md`
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {pl.icon}
              {pl.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={p.id}
          className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
          style={{ animation: "sssIn 0.4s ease both" }}
        >
          {/* Panel header */}
          <div className={`bg-gradient-to-r ${p.color} px-6 sm:px-10 py-8 lg:py-10`}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                  {p.label}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
                {p.headline}
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                {p.subhead}
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
              {p.stats.map((st) => (
                <div key={st.label} className="bg-white/15 rounded-2xl px-4 py-3 text-center backdrop-blur-sm">
                  <div className="text-white font-extrabold text-lg sm:text-2xl leading-none">{st.val}</div>
                  <div className="text-white/70 text-[10px] sm:text-xs mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {p.features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 lg:p-8 ${i >= 2 ? "border-t border-gray-100" : ""} hover:bg-gray-50 transition-colors group`}
              >
                <div className={`w-11 h-11 ${p.lightBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  {f.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#1a237e] mb-2">{f.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                  <span className={`text-[11px] font-semibold ${p.activeText}`}>Included in all plans</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              {["No setup fees", "30-day money-back", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://kharkan.com/dash/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-md whitespace-nowrap`}
            >
              Get Started Today
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sssIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
