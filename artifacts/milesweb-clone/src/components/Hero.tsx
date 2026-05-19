import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import heroWebHosting from "@assets/Hosting_web_1779215950816.png";

const slides = [
  /* ── 1. Web Hosting ── deep orange-red */
  {
    id: 0,
    icon: "🌐",
    tabLabel: "Web Hosting",
    badge: "🚀 #1 Hosting in India",
    title: "Web Hosting",
    subtitleStart: "Launch your website",
    highlights: ["in minutes", "right now", "today"],
    desc: "Blazing-fast shared hosting powered by LiteSpeed with 99.99% uptime, free SSL, and a free domain for 1 year.",
    price: "₹29",
    priceLabel: "/mo",
    discount: "80% OFF",
    cta: "Start Now — ₹29/mo",
    ctaHref: "https://kharkan.com/user/login",
    perks: ["Free SSL Certificate", "Free Domain for 1 Year", "24/7 Expert Support"],
    gradient: "from-[#7c2d00] via-[#c2410c] to-[#f97316]",
    accentColor: "#fed7aa",
    badgeBg: "bg-orange-300/20 text-orange-100",
    discountBg: "bg-yellow-400 text-yellow-900",
    imgUrl: heroWebHosting,
    imgFit: "contain" as const,
    stats: [{ v: "99.99%", l: "Uptime" }, { v: "1M+", l: "Websites" }, { v: "24/7", l: "Support" }],
  },
  /* ── 2. Domain Registration ── deep teal-cyan */
  {
    id: 1,
    icon: "🔗",
    tabLabel: "Domain Registration",
    badge: "🌍 500+ Extensions Available",
    title: "Domain Registration",
    subtitleStart: "Claim your perfect",
    highlights: ["domain today", "web address", "brand name"],
    desc: "Search from 500+ TLDs — .in, .com, .net, .org and more — with free DNS management and WHOIS privacy included.",
    price: "₹99",
    priceLabel: "/yr",
    discount: ".IN ₹99",
    cta: "Search Your Domain",
    ctaHref: "https://kharkan.com/user/login",
    perks: ["Free DNS Management", "WHOIS Privacy Guard", "Auto-renewal Alerts"],
    gradient: "from-[#042f2e] via-[#0f766e] to-[#14b8a6]",
    accentColor: "#5eead4",
    badgeBg: "bg-teal-300/20 text-teal-100",
    discountBg: "bg-teal-200 text-teal-900",
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=620&fit=crop&q=80",
    stats: [{ v: "500+", l: "Extensions" }, { v: "Free", l: "DNS Mgmt" }, { v: "Instant", l: "Activation" }],
  },
  /* ── 3. WordPress Hosting ── royal purple-indigo */
  {
    id: 2,
    icon: "🔷",
    tabLabel: "WordPress Hosting",
    badge: "⚡ Most Popular Choice",
    title: "WordPress Hosting",
    subtitleStart: "Purpose-built",
    highlights: ["for WordPress", "for bloggers", "for speed"],
    desc: "Optimised WordPress stack with auto-updates, staging environment, and Jetpack pre-installed. Go live in one click.",
    price: "₹69",
    priceLabel: "/mo",
    discount: "75% OFF",
    cta: "Get WordPress Hosting",
    ctaHref: "https://kharkan.com/user/login",
    perks: ["1-click WordPress Install", "Free Site Migration", "Automatic Core Updates"],
    gradient: "from-[#1e0a3c] via-[#4c1d95] to-[#7c3aed]",
    accentColor: "#c4b5fd",
    badgeBg: "bg-violet-400/20 text-violet-100",
    discountBg: "bg-orange-400 text-orange-900",
    imgUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=620&fit=crop&q=80",
    stats: [{ v: "3×", l: "Faster WP" }, { v: "Free", l: "Migration" }, { v: "100%", l: "WP Ready" }],
  },
  /* ── 5. Business Email ── warm amber-gold */
  {
    id: 4,
    icon: "📧",
    tabLabel: "Business Email",
    badge: "📧 Professional Identity",
    title: "Business Email",
    subtitleStart: "Email that",
    highlights: ["means business", "builds trust", "wins clients"],
    desc: "Custom domain email with 50 GB mailbox, enterprise spam protection, shared calendar, and collaboration tools.",
    price: "₹29",
    priceLabel: "/user/mo",
    discount: "50% OFF",
    cta: "Get Business Email",
    ctaHref: "https://kharkan.com/user/login",
    perks: ["50 GB Mailbox Storage", "Anti-spam & Antivirus", "Calendar & Contacts Sync"],
    gradient: "from-[#451a03] via-[#92400e] to-[#d97706]",
    accentColor: "#fde68a",
    badgeBg: "bg-amber-300/20 text-amber-100",
    discountBg: "bg-yellow-300 text-yellow-900",
    imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=620&fit=crop&q=80",
    stats: [{ v: "50 GB", l: "Mailbox" }, { v: "99.9%", l: "Delivery" }, { v: "256-bit", l: "Encryption" }],
  },
  /* ── 7. Web Development ── ocean blue-sky */
  {
    id: 6,
    icon: "💻",
    tabLabel: "Web Development",
    badge: "🎨 Custom Web Solutions",
    title: "Web Development",
    subtitleStart: "Beautiful websites",
    highlights: ["that convert", "that impress", "that rank #1"],
    desc: "From landing pages to enterprise portals — our expert team builds fast, responsive, SEO-ready websites on time.",
    price: "₹9,999",
    priceLabel: " onwards",
    discount: "Free SEO",
    cta: "Get a Free Quote",
    ctaHref: "/contact",
    perks: ["Custom Design & Development", "Mobile-Responsive UI", "Free 1-Year Maintenance"],
    gradient: "from-[#0c2340] via-[#1e40af] to-[#0ea5e9]",
    accentColor: "#bae6fd",
    badgeBg: "bg-sky-300/20 text-sky-100",
    discountBg: "bg-cyan-300 text-cyan-900",
    imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=620&fit=crop&q=80",
    stats: [{ v: "100+", l: "Projects" }, { v: "Free", l: "SEO Setup" }, { v: "1 Yr", l: "Support" }],
  },
  /* ── 8. Software Development ── rose-crimson */
  {
    id: 7,
    icon: "🧩",
    tabLabel: "Software Development",
    badge: "🧩 End-to-End Tech Solutions",
    title: "Software Development",
    subtitleStart: "Custom software,",
    highlights: ["built to scale", "made for you", "delivered fast"],
    desc: "We build SaaS products, mobile apps, APIs, and enterprise software tailored precisely to your business.",
    price: "₹24,999",
    priceLabel: " onwards",
    discount: "Free Demo",
    cta: "Discuss Your Project",
    ctaHref: "/contact",
    perks: ["Full-stack Development", "iOS & Android Apps", "Dedicated Project Manager"],
    gradient: "from-[#4c0519] via-[#9f1239] to-[#e11d48]",
    accentColor: "#fda4af",
    badgeBg: "bg-rose-300/20 text-rose-100",
    discountBg: "bg-rose-200 text-rose-900",
    imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&h=620&fit=crop&q=80",
    stats: [{ v: "50+", l: "Apps Built" }, { v: "Agile", l: "Process" }, { v: "NDA", l: "Protected" }],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning || idx === current) return;
      setTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setTransitioning(false), 500);
    },
    [transitioning, current]
  );

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  // Reset highlight when slide changes
  useEffect(() => {
    setHighlightIdx(0);
  }, [current]);

  // Cycle highlighted words every 1.8s
  useEffect(() => {
    const t = setInterval(() => setHighlightIdx((i) => i + 1), 1800);
    return () => clearInterval(t);
  }, [current]);

  const s = slides[current % slides.length];

  return (
    <section className="relative overflow-hidden">
      {/* ── Gradient background ── */}
      <div className={`relative bg-gradient-to-br ${s.gradient} transition-all duration-700`}>
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white opacity-[0.04]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white opacity-[0.04]" />
          <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] rounded-full bg-white opacity-[0.03] -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-5 sm:pt-8 lg:pt-0 pb-3 sm:pb-4 lg:pb-0 lg:min-h-[550px] grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center">
          {/* ── MOBILE: compact visual card shown FIRST (above text) ── */}
          <div
            key={`right-mob-${current}`}
            className="lg:hidden order-1"
            style={{ animation: "heroFadeIn 0.6s ease both" }}
          >
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-xl bg-black/20">
              <div className={`relative h-32 sm:h-44 overflow-hidden ${s.imgFit === "contain" ? "bg-gradient-to-b from-white/10 to-white/0" : ""}`}>
                <img
                  key={`img-mob-${current}`}
                  src={s.imgUrl}
                  alt={s.title}
                  className={`hero-img w-full h-full ${s.imgFit === "contain" ? "object-contain object-bottom p-1" : "object-cover"}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base shadow"
                    style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">{s.title}</div>
                    <div className="text-white/60 text-[10px]">by Kharkan Technology</div>
                  </div>
                </div>
                <div className={`absolute top-2.5 right-2.5 font-bold text-[11px] px-2 py-0.5 rounded-md shadow ${s.discountBg}`}>
                  {s.discount}
                </div>
              </div>
              {/* Mobile stats row */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5">
                {s.stats.map((st) => (
                  <div key={st.l} className="py-2 text-center">
                    <div className="text-white font-extrabold text-sm sm:text-base">{st.v}</div>
                    <div className="text-white/55 text-[10px] leading-tight">{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── LEFT: text content ── */}
          <div
            key={`left-${current}`}
            className="space-y-3 sm:space-y-4 lg:space-y-5 order-2 lg:order-1"
            style={{ animation: "heroFadeIn 0.55s ease both" }}
          >
            <span className={`inline-block text-[11px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full ${s.badgeBg}`}>
              {s.badge}
            </span>

            <div>
              <p
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-1"
                style={{ color: s.accentColor }}
              >
                {s.title}
              </p>
              <h1 className="text-[26px] leading-[1.15] sm:text-3xl lg:text-5xl font-extrabold text-white">
                {s.subtitleStart}{" "}
                <span
                  className="inline-block align-bottom overflow-hidden"
                  style={{ height: "1.15em" }}
                >
                  <span
                    key={`hl-${current}-${highlightIdx}`}
                    className="block marquee-word"
                    style={{ color: s.accentColor }}
                  >
                    {s.highlights[highlightIdx % s.highlights.length]}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-[13px] sm:text-sm lg:text-base text-white/75 leading-relaxed max-w-lg">
              {s.desc}
            </p>

            <ul className="space-y-1.5 sm:space-y-2">
              {s.perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[12px] sm:text-sm text-white/90">
                  <CheckCircle2 size={13} style={{ color: s.accentColor }} className="shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Price row */}
            <div className="flex items-end gap-2 flex-wrap">
              <span className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-none">
                {s.price}
              </span>
              <span className="text-white/60 text-[11px] sm:text-sm mb-0.5 sm:mb-1">{s.priceLabel}</span>
              <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg mb-0.5 sm:mb-1 ${s.discountBg}`}>
                {s.discount}
              </span>
            </div>

            {/* CTAs — side-by-side on mobile */}
            <div className="flex flex-row gap-2 sm:gap-3">
              <a
                href={s.ctaHref}
                className="flex-1 inline-flex justify-center items-center bg-white font-bold text-[13px] sm:text-sm px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
                style={{ color: "#1a237e" }}
                data-testid="button-start-now"
              >
                {s.cta}
              </a>
              <a
                href="https://kharkan.com/user/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center border-2 border-white/35 text-white font-bold text-[13px] sm:text-sm px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                View Plans
              </a>
            </div>

            <p className="text-[10px] sm:text-xs text-white/50">
              30-day money-back guarantee · No setup fees · Cancel anytime
            </p>
          </div>

          {/* Desktop: full card */}
          <div
            key={`right-${current}`}
            className="hidden lg:block lg:order-2"
            style={{ animation: "heroFadeIn 0.65s ease both" }}
          >
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
              <div className={`relative h-[390px] overflow-hidden ${s.imgFit === "contain" ? "bg-gradient-to-b from-white/10 to-white/0" : ""}`}>
                <img
                  key={`img-desk-${current}`}
                  src={s.imgUrl}
                  alt={s.title}
                  className={`hero-img w-full h-full ${s.imgFit === "contain" ? "object-contain object-bottom p-3" : "object-cover"}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-lg leading-tight">{s.title}</div>
                    <div className="text-white/60 text-xs">by Kharkan Technology</div>
                  </div>
                </div>
                <div className={`absolute top-4 right-4 font-extrabold text-sm px-3 py-1.5 rounded-xl shadow-md ${s.discountBg}`}>
                  {s.discount}
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5">
                {s.stats.map((st) => (
                  <div key={st.l} className="py-4 text-center">
                    <div className="text-white font-extrabold text-xl">{st.v}</div>
                    <div className="text-white/55 text-xs mt-0.5">{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation: arrows + dots + counter ── */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-4 sm:pb-5 flex items-center justify-between gap-2 sm:gap-3">
          {/* Counter */}
          <span className="text-white/35 text-[10px] sm:text-xs font-mono w-10 sm:w-12 shrink-0">
            {String(current + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </span>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 justify-center">
            {slides.map((sl, i) => (
              <button
                key={sl.id}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 sm:w-6 sm:h-2 bg-white"
                    : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to ${sl.tabLabel}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors shrink-0"
            aria-label="Next"
          >
            <ChevronRight size={14} />
          </button>

          {/* Spacer to balance counter */}
          <span className="w-10 sm:w-12 shrink-0" />
        </div>
      </div>

      {/* ── Tab strip — scrollable on mobile ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div
          className="max-w-7xl mx-auto px-2 flex overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              onClick={() => goTo(i)}
              className={`flex items-center gap-1 px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                i === current
                  ? "border-[#1565c0] text-[#1565c0]"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200"
              }`}
            >
              <span className="text-sm sm:text-base leading-none">{sl.icon}</span>
              <span>{sl.tabLabel}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateX(40px); filter: blur(6px); }
          to   { opacity: 1; transform: translateX(0);    filter: blur(0); }
        }
        @keyframes heroSlideInLeft {
          from { opacity: 0; transform: translateX(-40px); filter: blur(6px); }
          to   { opacity: 1; transform: translateX(0);     filter: blur(0); }
        }
        @keyframes heroImageZoom {
          0%   { transform: scale(1.18); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: scale(1.0);  opacity: 1; }
        }
        @keyframes heroKenBurns {
          0%   { transform: scale(1.0)  translate(0, 0); }
          100% { transform: scale(1.08) translate(-12px, -8px); }
        }
        @keyframes marqueeWordIn {
          from { opacity: 0; transform: translateY(110%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .marquee-word {
          animation: marqueeWordIn 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }
        .hero-img {
          animation: heroImageZoom 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both,
                     heroKenBurns 12s ease-in-out 0.9s infinite alternate;
        }
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
