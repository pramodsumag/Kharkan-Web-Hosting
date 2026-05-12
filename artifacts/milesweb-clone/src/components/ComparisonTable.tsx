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
    <section className="py-16 bg-[#0d1240]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 font-semibold text-sm px-5 py-2 rounded-full mb-5">
            ⚔️ Head-to-Head
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Kharkan Technology vs Hostinger vs GoDaddy
          </h2>
          <p className="text-blue-300 text-base max-w-xl mx-auto">
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
                href="https://kharkan.com/dash/index.php"
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
