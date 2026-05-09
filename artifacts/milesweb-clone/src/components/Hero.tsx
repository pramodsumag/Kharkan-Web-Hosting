import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 0,
    badge: "🚀 #1 Hosting in India",
    title: "Shared Hosting",
    subtitle: "Launch your website in minutes",
    desc: "Fast, secure & reliable hosting built for Indian websites. Powered by LiteSpeed with 99.99% uptime.",
    price: "₹39",
    priceLabel: "/mo",
    discount: "80% OFF",
    cta: "Start Now — ₹39/mo",
    ctaHref: "#plans",
    perks: ["Free SSL Certificate", "Free Domain for 1 Year", "24/7 Expert Support"],
    gradient: "from-[#0d1b5e] via-[#1a3a8f] to-[#1565c0]",
    accentColor: "#60a5fa",
    badgeBg: "bg-blue-400/20 text-blue-200",
    discountBg: "bg-yellow-400 text-yellow-900",
    icon: "🌐",
    visual: {
      bg: "from-blue-400/20 to-blue-600/10",
      emoji: "🖥️",
      stat1: { value: "99.99%", label: "Uptime SLA" },
      stat2: { value: "1M+", label: "Websites" },
      stat3: { value: "24/7", label: "Support" },
      imgUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&h=340&fit=crop&crop=top",
    },
  },
  {
    id: 1,
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
    badgeBg: "bg-purple-400/20 text-purple-200",
    discountBg: "bg-orange-400 text-orange-900",
    icon: "🔷",
    visual: {
      bg: "from-purple-400/20 to-purple-600/10",
      emoji: "🔷",
      stat1: { value: "3×", label: "Faster WP" },
      stat2: { value: "Free", label: "Migration" },
      stat3: { value: "100%", label: "WP Ready" },
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=340&fit=crop",
    },
  },
  {
    id: 2,
    badge: "⚙️ Full Root Access",
    title: "VPS Hosting",
    subtitle: "Dedicated power, cloud flexibility",
    desc: "SSD-powered VPS with full root access, choice of OS, and instant scaling. No shared resources.",
    price: "₹299",
    priceLabel: "/mo",
    discount: "60% OFF",
    cta: "Configure Your VPS",
    ctaHref: "#plans",
    perks: ["Full Root Access", "SSD NVMe Storage", "Scalable Resources"],
    gradient: "from-[#064e3b] via-[#065f46] to-[#047857]",
    accentColor: "#6ee7b7",
    badgeBg: "bg-emerald-400/20 text-emerald-200",
    discountBg: "bg-lime-400 text-lime-900",
    icon: "⚡",
    visual: {
      bg: "from-emerald-400/20 to-emerald-600/10",
      emoji: "⚡",
      stat1: { value: "NVMe", label: "SSD Storage" },
      stat2: { value: "10Gbps", label: "Network" },
      stat3: { value: "IPv6", label: "Ready" },
      imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=340&fit=crop",
    },
  },
  {
    id: 3,
    badge: "📧 Professional Email",
    title: "Business Email",
    subtitle: "Email that means business",
    desc: "Custom domain email with 50 GB mailbox, spam protection, and collaboration tools — all in one place.",
    price: "₹29",
    priceLabel: "/user/mo",
    discount: "50% OFF",
    cta: "Get Business Email",
    ctaHref: "#plans",
    perks: ["50 GB Mailbox", "Anti-spam Protection", "Mobile Sync"],
    gradient: "from-[#7c2d12] via-[#9a3412] to-[#c2410c]",
    accentColor: "#fdba74",
    badgeBg: "bg-orange-400/20 text-orange-200",
    discountBg: "bg-yellow-300 text-yellow-900",
    icon: "📧",
    visual: {
      bg: "from-orange-400/20 to-orange-600/10",
      emoji: "📧",
      stat1: { value: "50 GB", label: "Mailbox" },
      stat2: { value: "99.9%", label: "Delivery" },
      stat3: { value: "256-bit", label: "Encryption" },
      imgUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=340&fit=crop",
    },
  },
  {
    id: 4,
    badge: "🌍 500+ Domain Extensions",
    title: "Domain Registration",
    subtitle: "Claim your perfect domain today",
    desc: "Search from 500+ extensions. .in, .com, .net and more — with free DNS management and WHOIS privacy.",
    price: "₹99",
    priceLabel: "/yr",
    discount: ".IN ₹99",
    cta: "Search Domains",
    ctaHref: "#domain",
    perks: ["Free DNS Management", "WHOIS Privacy Guard", "Auto-renewal"],
    gradient: "from-[#831843] via-[#9d174d] to-[#be185d]",
    accentColor: "#f9a8d4",
    badgeBg: "bg-pink-400/20 text-pink-200",
    discountBg: "bg-pink-200 text-pink-900",
    icon: "🌍",
    visual: {
      bg: "from-pink-400/20 to-pink-600/10",
      emoji: "🌍",
      stat1: { value: "500+", label: "Extensions" },
      stat2: { value: "Free", label: "DNS Mgmt" },
      stat3: { value: "Instant", label: "Activation" },
      imgUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=340&fit=crop",
    },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 500);
  }, [animating]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      {/* Slide background */}
      <div
        className={`bg-gradient-to-br ${slide.gradient} transition-all duration-700`}
        style={{ minHeight: 520 }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10 bg-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Content */}
          <div
            key={`content-${current}`}
            className="space-y-5 animate-fade-in"
            style={{ animation: "fadeSlideIn 0.5s ease forwards" }}
          >
            {/* Badge */}
            <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full ${slide.badgeBg}`}>
              {slide.badge}
            </span>

            {/* Title */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: slide.accentColor }}>
                {slide.title}
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {slide.subtitle}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              {slide.desc}
            </p>

            {/* Perks */}
            <ul className="space-y-2">
              {slide.perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 size={16} style={{ color: slide.accentColor }} className="shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Price + CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
              <div className="flex items-end gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">{slide.price}</span>
                <span className="text-white/70 text-sm mb-1.5">{slide.priceLabel}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg mb-1.5 ${slide.discountBg}`}>
                  {slide.discount}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={slide.ctaHref}
                className="inline-flex justify-center items-center bg-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "#1a237e" }}
                data-testid="button-start-now"
              >
                {slide.cta}
              </a>
              <a
                href="#plans"
                className="inline-flex justify-center items-center border-2 border-white/40 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                View All Plans
              </a>
            </div>

            <p className="text-xs text-white/60">30-day money-back guarantee · No setup fees</p>
          </div>

          {/* RIGHT: Visual card */}
          <div
            key={`visual-${current}`}
            className="hidden lg:block"
            style={{ animation: "fadeSlideIn 0.6s ease forwards" }}
          >
            <div className={`relative bg-gradient-to-br ${slide.visual.bg} backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl`}>
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={slide.visual.imgUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Service label overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{slide.icon}</span>
                    <div>
                      <div className="text-white font-extrabold text-lg leading-tight">{slide.title}</div>
                      <div className="text-white/70 text-xs">by Kharkan Technology</div>
                    </div>
                  </div>
                </div>
                {/* Discount badge */}
                <div className={`absolute top-4 right-4 ${slide.discountBg} font-extrabold text-sm px-3 py-1.5 rounded-xl shadow-md`}>
                  {slide.discount}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5 px-2">
                {[slide.visual.stat1, slide.visual.stat2, slide.visual.stat3].map((s) => (
                  <div key={s.label} className="py-4 text-center px-2">
                    <div className="text-white font-extrabold text-lg leading-tight">{s.value}</div>
                    <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Price card */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-xs">Starting from</div>
                  <div className="text-white font-extrabold text-2xl">{slide.price}<span className="text-white/60 text-sm font-normal">{slide.priceLabel}</span></div>
                </div>
                <a
                  href={slide.ctaHref}
                  className="bg-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow"
                  style={{ color: "#1a237e" }}
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows + dots */}
        <div className="relative max-w-7xl mx-auto px-4 pb-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2 mx-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute right-4 bottom-0 flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Slide counter */}
          <div className="absolute left-4 bottom-0 text-white/40 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Slide tab strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 flex">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                i === current
                  ? "border-[#1565c0] text-[#1565c0]"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200"
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
