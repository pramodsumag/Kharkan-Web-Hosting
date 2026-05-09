import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 0,
    icon: "🌐",
    tabLabel: "Web Hosting",
    badge: "🚀 #1 Hosting in India",
    title: "Web Hosting",
    subtitle: "Launch your website in minutes",
    desc: "Blazing-fast shared hosting powered by LiteSpeed with 99.99% uptime, free SSL, and a free domain for 1 year.",
    price: "₹39",
    priceLabel: "/mo",
    discount: "80% OFF",
    cta: "Start Now — ₹39/mo",
    ctaHref: "#plans",
    perks: ["Free SSL Certificate", "Free Domain for 1 Year", "24/7 Expert Support"],
    gradient: "from-[#0d1b5e] via-[#1a3a8f] to-[#1565c0]",
    accentColor: "#93c5fd",
    badgeBg: "bg-blue-400/20 text-blue-100",
    discountBg: "bg-yellow-400 text-yellow-900",
    imgUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=360&fit=crop&crop=top",
    stats: [{ v: "99.99%", l: "Uptime" }, { v: "1M+", l: "Websites" }, { v: "24/7", l: "Support" }],
  },
  {
    id: 1,
    icon: "🔗",
    tabLabel: "Domain Name",
    badge: "🌍 500+ Extensions Available",
    title: "Domain Name",
    subtitle: "Claim your perfect domain today",
    desc: "Search from 500+ TLDs including .in, .com, .net and more — with free DNS management and WHOIS privacy protection.",
    price: "₹99",
    priceLabel: "/yr",
    discount: ".IN ₹99",
    cta: "Search Your Domain",
    ctaHref: "#domain",
    perks: ["Free DNS Management", "WHOIS Privacy Guard", "Auto-renewal Alerts"],
    gradient: "from-[#134e4a] via-[#0f766e] to-[#0d9488]",
    accentColor: "#5eead4",
    badgeBg: "bg-teal-400/20 text-teal-100",
    discountBg: "bg-teal-200 text-teal-900",
    imgUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=360&fit=crop",
    stats: [{ v: "500+", l: "Extensions" }, { v: "Free", l: "DNS Mgmt" }, { v: "Instant", l: "Activation" }],
  },
  {
    id: 2,
    icon: "🔷",
    tabLabel: "WordPress Hosting",
    badge: "⚡ Most Popular Choice",
    title: "WordPress Hosting",
    subtitle: "Purpose-built for WordPress",
    desc: "Optimised WordPress stack with auto-updates, staging, and Jetpack pre-installed. Go live in one click.",
    price: "₹69",
    priceLabel: "/mo",
    discount: "75% OFF",
    cta: "Get WordPress Hosting",
    ctaHref: "#plans",
    perks: ["1-click WordPress Install", "Free Migration", "Automatic Updates"],
    gradient: "from-[#2d1b69] via-[#4c1d95] to-[#6d28d9]",
    accentColor: "#c4b5fd",
    badgeBg: "bg-purple-400/20 text-purple-100",
    discountBg: "bg-orange-400 text-orange-900",
    imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop",
    stats: [{ v: "3×", l: "Faster WP" }, { v: "Free", l: "Migration" }, { v: "100%", l: "WP Ready" }],
  },
  {
    id: 3,
    icon: "⚡",
    tabLabel: "VPS Hosting",
    badge: "⚙️ Full Root Access",
    title: "VPS Hosting",
    subtitle: "Dedicated power, cloud flexibility",
    desc: "SSD NVMe-powered VPS with full root access, choice of OS, and instant horizontal scaling. No shared resources.",
    price: "₹299",
    priceLabel: "/mo",
    discount: "60% OFF",
    cta: "Configure Your VPS",
    ctaHref: "#plans",
    perks: ["Full Root Access", "NVMe SSD Storage", "Scalable on Demand"],
    gradient: "from-[#064e3b] via-[#065f46] to-[#047857]",
    accentColor: "#6ee7b7",
    badgeBg: "bg-emerald-400/20 text-emerald-100",
    discountBg: "bg-lime-400 text-lime-900",
    imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop",
    stats: [{ v: "NVMe", l: "SSD Storage" }, { v: "10Gbps", l: "Network" }, { v: "IPv6", l: "Ready" }],
  },
  {
    id: 4,
    icon: "☁️",
    tabLabel: "Cloud Hosting",
    badge: "☁️ Auto-Scaling Infrastructure",
    title: "Cloud Hosting",
    subtitle: "Scale without limits, pay as you grow",
    desc: "Enterprise-grade cloud infrastructure with auto-scaling, load balancing, and 100% resource isolation.",
    price: "₹199",
    priceLabel: "/mo",
    discount: "65% OFF",
    cta: "Start Cloud Hosting",
    ctaHref: "#plans",
    perks: ["Auto-Scaling Resources", "99.99% Uptime SLA", "Load Balancer Included"],
    gradient: "from-[#1e3a5f] via-[#1e40af] to-[#2563eb]",
    accentColor: "#bfdbfe",
    badgeBg: "bg-sky-400/20 text-sky-100",
    discountBg: "bg-sky-300 text-sky-900",
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&fit=crop",
    stats: [{ v: "Auto", l: "Scaling" }, { v: "99.99%", l: "Uptime" }, { v: "Zero", l: "Downtime" }],
  },
  {
    id: 5,
    icon: "🖥️",
    tabLabel: "Dedicated Server",
    badge: "🏆 Maximum Performance",
    title: "Dedicated Server",
    subtitle: "Your entire server, yours alone",
    desc: "Bare-metal dedicated servers with Intel Xeon processors, NVMe RAID storage, and unmetered bandwidth.",
    price: "₹4,999",
    priceLabel: "/mo",
    discount: "40% OFF",
    cta: "Get Dedicated Server",
    ctaHref: "#plans",
    perks: ["Intel Xeon Processors", "NVMe RAID Storage", "Unmetered Bandwidth"],
    gradient: "from-[#1c1917] via-[#292524] to-[#44403c]",
    accentColor: "#fcd34d",
    badgeBg: "bg-amber-400/20 text-amber-100",
    discountBg: "bg-amber-400 text-amber-900",
    imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=360&fit=crop",
    stats: [{ v: "Xeon", l: "Processor" }, { v: "NVMe", l: "RAID" }, { v: "1Tbps", l: "Uplink" }],
  },
  {
    id: 6,
    icon: "📧",
    tabLabel: "Business Email",
    badge: "📧 Professional Identity",
    title: "Business Email",
    subtitle: "Email that means business",
    desc: "Custom domain email with 50 GB mailbox, spam protection, calendar, and collaboration tools built in.",
    price: "₹29",
    priceLabel: "/user/mo",
    discount: "50% OFF",
    cta: "Get Business Email",
    ctaHref: "#plans",
    perks: ["50 GB Mailbox Storage", "Anti-spam Shield", "Calendar & Contacts Sync"],
    gradient: "from-[#7c2d12] via-[#9a3412] to-[#c2410c]",
    accentColor: "#fdba74",
    badgeBg: "bg-orange-400/20 text-orange-100",
    discountBg: "bg-yellow-300 text-yellow-900",
    imgUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=360&fit=crop",
    stats: [{ v: "50 GB", l: "Mailbox" }, { v: "99.9%", l: "Delivery" }, { v: "256-bit", l: "Encryption" }],
  },
  {
    id: 7,
    icon: "🔄",
    tabLabel: "Reseller Hosting",
    badge: "💼 Start Your Hosting Business",
    title: "Reseller Hosting",
    subtitle: "Build your own hosting brand",
    desc: "White-label reseller hosting with WHM/cPanel, free WHMCS license, and private nameservers included.",
    price: "₹499",
    priceLabel: "/mo",
    discount: "55% OFF",
    cta: "Start Reselling",
    ctaHref: "#plans",
    perks: ["White-label Branding", "Free WHMCS License", "Private Nameservers"],
    gradient: "from-[#3b0764] via-[#581c87] to-[#7e22ce]",
    accentColor: "#e9d5ff",
    badgeBg: "bg-fuchsia-400/20 text-fuchsia-100",
    discountBg: "bg-pink-300 text-pink-900",
    imgUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&fit=crop",
    stats: [{ v: "WHM", l: "Control Panel" }, { v: "Free", l: "WHMCS" }, { v: "Unlimited", l: "Accounts" }],
  },
  {
    id: 8,
    icon: "💻",
    tabLabel: "Web Development",
    badge: "🎨 Custom Web Solutions",
    title: "Web Development",
    subtitle: "Beautiful websites that convert",
    desc: "From landing pages to enterprise portals — our expert team builds fast, responsive, SEO-optimised websites.",
    price: "₹9,999",
    priceLabel: " onwards",
    discount: "Free SEO",
    cta: "Get a Free Quote",
    ctaHref: "/contact",
    perks: ["Custom Design & Development", "Mobile-Responsive UI", "Free 1-Year Maintenance"],
    gradient: "from-[#0c4a6e] via-[#075985] to-[#0369a1]",
    accentColor: "#7dd3fc",
    badgeBg: "bg-cyan-400/20 text-cyan-100",
    discountBg: "bg-cyan-300 text-cyan-900",
    imgUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=360&fit=crop",
    stats: [{ v: "100+", l: "Projects" }, { v: "Free", l: "SEO Setup" }, { v: "1 Yr", l: "Support" }],
  },
  {
    id: 9,
    icon: "🧩",
    tabLabel: "Software Development",
    badge: "🧩 End-to-End Tech Solutions",
    title: "Software Development",
    subtitle: "Custom software, built to scale",
    desc: "We build SaaS products, mobile apps, APIs, and enterprise software tailored to your business requirements.",
    price: "₹24,999",
    priceLabel: " onwards",
    discount: "Free Demo",
    cta: "Discuss Your Project",
    ctaHref: "/contact",
    perks: ["Full-stack Development", "iOS & Android Apps", "Dedicated Project Manager"],
    gradient: "from-[#831843] via-[#9d174d] to-[#be185d]",
    accentColor: "#fbcfe8",
    badgeBg: "bg-pink-400/20 text-pink-100",
    discountBg: "bg-rose-200 text-rose-900",
    imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=360&fit=crop",
    stats: [{ v: "50+", l: "Apps Built" }, { v: "Agile", l: "Process" }, { v: "NDA", l: "Protected" }],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

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

  const s = slides[current];

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

        <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* ── LEFT: text content ── */}
          <div
            key={`left-${current}`}
            className="space-y-5"
            style={{ animation: "heroFadeIn 0.55s ease both" }}
          >
            <span
              className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full ${s.badgeBg}`}
            >
              {s.badge}
            </span>

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5"
                style={{ color: s.accentColor }}
              >
                {s.title}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {s.subtitle}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-lg">
              {s.desc}
            </p>

            <ul className="space-y-2.5">
              {s.perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 size={16} style={{ color: s.accentColor }} className="shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Price row */}
            <div className="flex items-end gap-2 pt-1">
              <span className="text-5xl sm:text-6xl font-extrabold text-white leading-none">
                {s.price}
              </span>
              <span className="text-white/60 text-sm mb-1.5">{s.priceLabel}</span>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-lg mb-1.5 ${s.discountBg}`}
              >
                {s.discount}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={s.ctaHref}
                className="inline-flex justify-center items-center bg-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "#1a237e" }}
                data-testid="button-start-now"
              >
                {s.cta}
              </a>
              <a
                href="#plans"
                className="inline-flex justify-center items-center border-2 border-white/35 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                View All Plans
              </a>
            </div>

            <p className="text-xs text-white/50">
              30-day money-back guarantee · No setup fees · Cancel anytime
            </p>
          </div>

          {/* ── RIGHT: visual card (desktop only) ── */}
          <div
            key={`right-${current}`}
            className="hidden lg:block"
            style={{ animation: "heroFadeIn 0.65s ease both" }}
          >
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={s.imgUrl}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Service badge bottom-left */}
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

                {/* Discount top-right */}
                <div
                  className={`absolute top-4 right-4 font-extrabold text-sm px-3 py-1.5 rounded-xl shadow-md ${s.discountBg}`}
                >
                  {s.discount}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5">
                {s.stats.map((st) => (
                  <div key={st.l} className="py-4 text-center">
                    <div className="text-white font-extrabold text-xl">{st.v}</div>
                    <div className="text-white/55 text-xs mt-0.5">{st.l}</div>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="p-4 flex items-center justify-between bg-white/5">
                <div>
                  <div className="text-white/55 text-xs">Starting from</div>
                  <div className="text-white font-extrabold text-2xl leading-tight">
                    {s.price}
                    <span className="text-white/55 text-sm font-normal">{s.priceLabel}</span>
                  </div>
                </div>
                <a
                  href={s.ctaHref}
                  className="bg-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow"
                  style={{ color: "#1a237e" }}
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation: dots + arrows + counter ── */}
        <div className="relative max-w-7xl mx-auto px-4 pb-6">
          <div className="flex items-center justify-center gap-1.5">
            {slides.map((sl, i) => (
              <button
                key={sl.id}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to ${sl.tabLabel}`}
              />
            ))}
          </div>

          <div className="absolute right-4 top-0 flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="absolute left-4 top-1 text-white/35 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* ── Tab strip ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 flex">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              onClick={() => goTo(i)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                i === current
                  ? "border-[#1565c0] text-[#1565c0]"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200"
              }`}
            >
              <span className="text-base">{sl.icon}</span>
              <span>{sl.tabLabel}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
