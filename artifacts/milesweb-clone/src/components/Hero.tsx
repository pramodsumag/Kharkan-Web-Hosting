import { CheckCircle2, ShieldCheck } from "lucide-react";

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
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-base font-medium text-gray-700">
            Get <span className="text-[#f57c00] font-bold text-lg">80%</span> Off Hosting with{" "}
            <span className="underline decoration-dotted">Free Domain</span>
          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a237e] leading-tight">
            Launch your website in minutes
          </h1>

          <p className="text-base text-gray-600">
            Fast, secure &amp; reliable hosting built for Indian websites.
          </p>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="space-y-1">
            <div className="flex items-end gap-1">
              <span className="text-base text-gray-600 font-medium">₹</span>
              <span className="text-5xl font-extrabold text-[#1a237e]">69.00</span>
              <span className="text-gray-500 text-base mb-1">/mo</span>
            </div>
            <a
              href="#plans"
              className="text-sm text-[#1565c0] font-medium underline decoration-dotted hover:text-[#1251a3]"
              data-testid="link-renewal-guarantee"
            >
              Same price at renewal – Guaranteed.
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="#plans"
              className="inline-block bg-[#1565c0] text-white font-bold text-base px-8 py-3.5 rounded-lg hover:bg-[#1251a3] transition-colors shadow-md"
              data-testid="button-start-now"
            >
              Start Now
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={16} className="text-green-500 shrink-0" />
              30-day money-back guarantee • Cancel anytime
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-100 p-6 w-full max-w-xl shadow-lg">
            {/* WWW bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white border border-dashed border-gray-300 rounded px-3 py-1.5 text-xs font-mono text-gray-400 flex items-center gap-1">
                <span>www</span>
              </div>
              <div className="flex-1 h-px border-t border-dashed border-gray-200" />
            </div>

            {/* SALE text large */}
            <div className="absolute top-6 right-6 text-4xl font-black text-gray-100 tracking-widest select-none">
              SALE
            </div>

            {/* Main image placeholder with discount badge */}
            <div className="relative h-56 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl overflow-hidden flex items-center justify-center border border-amber-100">
              {/* Simulated person silhouette */}
              <div className="absolute inset-0 flex items-end justify-center pb-0">
                <div className="w-40 h-48 bg-gradient-to-b from-amber-300 to-amber-500 rounded-t-full opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

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
      </div>
    </section>
  );
}
