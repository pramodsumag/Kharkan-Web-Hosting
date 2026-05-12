const features: { label: string; kt: boolean | string; hostinger: boolean | string; godaddy: boolean | string }[] = [
  { label: "Price starts at",              kt: "₹29/mo",     hostinger: "₹149/mo", godaddy: "₹249/mo" },
  { label: "Free Domain (1st Year)",        kt: true,         hostinger: "Annual only", godaddy: false },
  { label: "Free SSL Certificate",          kt: true,         hostinger: true,         godaddy: "Paid" },
  { label: "LiteSpeed Web Server",          kt: true,         hostinger: true,         godaddy: false },
  { label: "NVMe SSD Storage",              kt: "Up to ∞",    hostinger: "Up to 200 GB", godaddy: "100 GB HDD" },
  { label: "Free Daily Backups",            kt: true,         hostinger: "Weekly only", godaddy: "Paid add-on" },
  { label: "Free Website Migration",        kt: true,         hostinger: true,         godaddy: "Paid (₹1,499)" },
  { label: "99.99% Uptime SLA",             kt: true,         hostinger: "99.9%",      godaddy: "99.9%" },
  { label: "India Data Centre (Mumbai)",    kt: true,         hostinger: true,         godaddy: false },
  { label: "24/7 Indian Support",           kt: true,         hostinger: "Chat only",  godaddy: "Phone (US)" },
  { label: "Free Cloudflare CDN",           kt: true,         hostinger: true,         godaddy: false },
  { label: "Malware Scanner & Cleanup",     kt: true,         hostinger: "Scan only",  godaddy: "Paid" },
  { label: "Price Lock at Renewal",         kt: true,         hostinger: false,        godaddy: false },
  { label: "GST Invoice Included",          kt: true,         hostinger: true,         godaddy: true },
  { label: "30-Day Money-Back Guarantee",   kt: true,         hostinger: true,         godaddy: false },
];

function Cell({ val, brand }: { val: boolean | string; brand?: "kt" | "other" }) {
  if (val === true)
    return (
      <span className={brand === "kt" ? "text-green-600 font-bold text-xl" : "text-green-500 font-bold text-lg"}>
        ✓
      </span>
    );
  if (val === false)
    return <span className="text-red-400 font-bold text-lg">✗</span>;
  const tone = brand === "kt"
    ? "text-blue-700 bg-blue-100 border-blue-200"
    : "text-amber-700 bg-amber-50 border-amber-200";
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${tone}`}>{val}</span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0a0e2e] via-[#1a237e] to-[#312e81]">
      {/* Decorative animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-3xl animate-blob" />
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-500/25 to-violet-400/15 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Twinkling stars */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-[12%] left-[15%] w-1 h-1 rounded-full bg-white/80 animate-pulse" />
        <span className="absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-yellow-300/70 animate-pulse animation-delay-2000" />
        <span className="absolute top-[35%] left-[8%] w-1 h-1 rounded-full bg-cyan-200/70 animate-pulse animation-delay-4000" />
        <span className="absolute bottom-[18%] right-[12%] w-1.5 h-1.5 rounded-full bg-pink-200/70 animate-pulse" />
        <span className="absolute bottom-[28%] left-[25%] w-1 h-1 rounded-full bg-white/70 animate-pulse animation-delay-2000" />
        <span className="absolute top-[60%] right-[8%] w-1 h-1 rounded-full bg-blue-200/80 animate-pulse animation-delay-4000" />
      </div>

      {/* Top & bottom accent lines */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 font-semibold text-sm px-5 py-2 rounded-full mb-5 shadow-lg">
            <span className="text-base">⚔️</span> Head-to-Head Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Kharkan Technology <span className="text-blue-300/70 font-bold">vs</span> Hostinger <span className="text-blue-300/70 font-bold">vs</span> GoDaddy
          </h2>
          <p className="text-blue-200/90 text-base lg:text-lg max-w-2xl mx-auto">
            Who delivers more value for Indian businesses? See the real difference side by side.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-[#1a237e] text-white">
            <div className="p-5 font-bold text-sm text-blue-200">Feature</div>
            <div className="p-5 font-bold text-center border-x border-blue-900 bg-[#1565c0] relative">
              <span className="absolute top-1 right-1/2 translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                BEST VALUE
              </span>
              <div className="text-base font-black mt-3">Kharkan Technology</div>
              <div className="text-xs text-blue-200 mt-0.5">🇮🇳 Your Hosting Partner</div>
            </div>
            <div className="p-5 font-bold text-center border-r border-blue-900">
              <div className="text-base font-black text-blue-200">Hostinger</div>
              <div className="text-xs text-blue-300 mt-0.5">🇱🇹 Lithuania</div>
            </div>
            <div className="p-5 font-bold text-center">
              <div className="text-base font-black text-blue-200">GoDaddy</div>
              <div className="text-xs text-blue-300 mt-0.5">🇺🇸 United States</div>
            </div>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              } hover:bg-blue-50/30 transition-colors`}
            >
              <div className="p-4 text-sm text-gray-700 font-medium flex items-center">{f.label}</div>
              <div className="p-4 text-center flex items-center justify-center border-x border-gray-100 bg-blue-50/60">
                <Cell val={f.kt} brand="kt" />
              </div>
              <div className="p-4 text-center flex items-center justify-center border-r border-gray-100">
                <Cell val={f.hostinger} brand="other" />
              </div>
              <div className="p-4 text-center flex items-center justify-center">
                <Cell val={f.godaddy} brand="other" />
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-[#f0f4ff] border-t-2 border-[#1565c0]/20">
            <div className="p-5" />
            <div className="p-5 text-center border-x border-gray-200">
              <a
                href="https://kharkan.com/user/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1565c0] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-[#1251a3] transition-colors shadow-md"
                data-testid="button-comparison-cta"
              >
                Get Started →
              </a>
            </div>
            <div className="p-5 text-center border-r border-gray-200">
              <span className="text-xs text-gray-400">Paying more, getting less</span>
            </div>
            <div className="p-5 text-center">
              <span className="text-xs text-gray-400">Hidden renewal hikes</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-blue-400 mt-5">
          * Comparison based on publicly available shared hosting plans of Hostinger and GoDaddy as of 2025. All prices in INR, exclusive of GST.
        </p>
      </div>
    </section>
  );
}
