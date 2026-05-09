import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

const features = [
  "Up to 20x faster website performance",
  "Free SSL, email & daily backups",
  "Build your website instantly with AI",
];

const flags = [
  { code: "🇮🇳", label: "India" },
  { code: "🇺🇸", label: "US" },
  { code: "🇬🇧", label: "UK" },
  { code: "🇦🇺", label: "AU" },
  { code: "🇸🇬", label: "SG" },
  { code: "🇨🇦", label: "CA" },
];

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Mobile social proof banner */}
      <div className="lg:hidden bg-gradient-to-r from-[#1a237e] to-[#1565c0] px-4 py-3">
        <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-white text-xs font-semibold">4.8/5 Trustpilot</span>
          </div>
          <div className="w-px h-4 bg-white/20 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xl">🌐</span>
            <span className="text-white text-xs font-semibold">1M+ Sites</span>
          </div>
          <div className="w-px h-4 bg-white/20 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xl">🇮🇳</span>
            <span className="text-white text-xs font-semibold">Indian Company</span>
          </div>
          <div className="w-px h-4 bg-white/20 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-white text-xs font-semibold">99.99% Uptime</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Get <span className="text-[#f57c00] font-bold text-base sm:text-lg">80%</span> Off Hosting with{" "}
            <span className="underline decoration-dotted">Free Domain</span>
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a237e] leading-tight">
            Launch your website in minutes
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Fast, secure &amp; reliable hosting built for Indian websites. Powered by LiteSpeed with 99.99% uptime.
          </p>

          <ul className="space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                <CheckCircle2 size={17} className="text-green-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-end gap-1">
              <span className="text-base text-gray-600 font-medium">₹</span>
              <span className="text-5xl sm:text-6xl font-extrabold text-[#1a237e]">39.00</span>
              <span className="text-gray-500 text-base mb-1">/mo</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#plans"
              className="inline-flex justify-center items-center bg-[#1565c0] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-[#1251a3] transition-colors shadow-md"
              data-testid="button-start-now"
            >
              Start Now — ₹39/mo
            </a>
            <a
              href="#plans"
              className="inline-flex justify-center items-center border-2 border-[#1565c0] text-[#1565c0] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              View All Plans
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <ShieldCheck size={15} className="text-green-500 shrink-0" />
            30-day money-back guarantee • Cancel anytime
          </div>

          {/* Mobile: Rating strip */}
          <div className="flex items-center gap-3 lg:hidden pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 font-medium">4.8/5 from 13,345 reviews</span>
          </div>
        </div>

        {/* Right Visual — hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex relative justify-center">
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-100 p-5 w-full max-w-xl shadow-lg">
            {/* WWW bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white border border-dashed border-gray-300 rounded px-3 py-1.5 text-xs font-mono text-gray-400">
                www
              </div>
              <div className="flex-1 h-px border-t border-dashed border-gray-200" />
            </div>

            {/* SALE watermark */}
            <div className="absolute top-5 right-5 text-4xl font-black text-gray-100 tracking-widest select-none pointer-events-none">
              SALE
            </div>

            {/* Girl with laptop image */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-amber-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop&crop=top"
                alt="Happy girl working on laptop"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/10" />

              {/* 80% OFF badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 text-center">
                <div className="text-3xl font-black text-[#1a237e]">
                  80<span className="text-lg align-super">%</span>
                </div>
                <div className="text-xs font-bold text-[#1565c0] tracking-widest">OFF</div>
              </div>
            </div>

            {/* 1M+ trust badge */}
            <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-lg">⭐</div>
              <div>
                <div className="text-sm font-bold text-gray-800">1 million +</div>
                <div className="text-xs text-gray-500">Websites Trust Us</div>
              </div>
            </div>

            {/* Global data centers */}
            <div className="mt-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">Global data center</div>
              <div className="grid grid-cols-3 gap-2">
                {flags.map((f) => (
                  <div key={f.label} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <span>{f.code}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only: compact visual card */}
        <div className="lg:hidden">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=340&fit=crop&crop=top"
              alt="Professional working on laptop"
              className="w-full h-48 object-cover object-top"
            />
            {/* Overlay badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="text-white">
                <div className="text-xs text-blue-200 mb-0.5">Starting at</div>
                <div className="text-3xl font-black">₹39<span className="text-base font-semibold text-blue-200">/mo</span></div>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 text-center shadow-lg">
                <div className="text-2xl font-black text-[#1a237e]">80%</div>
                <div className="text-xs font-bold text-[#1565c0]">OFF</div>
              </div>
            </div>
          </div>

          {/* Mobile trust strip */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-lg font-black text-[#1565c0]">99.99%</div>
              <div className="text-xs text-gray-500">Uptime</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-lg font-black text-[#1565c0]">24/7</div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-lg font-black text-[#1565c0]">1M+</div>
              <div className="text-xs text-gray-500">Websites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
