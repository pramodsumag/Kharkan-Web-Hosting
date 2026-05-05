const features = [
  { label: "Price Lock at Renewal",       kt: true,   others: false },
  { label: "LiteSpeed Web Server",         kt: true,   others: false },
  { label: "Free Domain (1st Year)",       kt: true,   others: "Partial" },
  { label: "Free SSL Certificate",         kt: true,   others: true },
  { label: "99.99% Uptime SLA",            kt: true,   others: false },
  { label: "24/7/365 Indian Support",      kt: true,   others: false },
  { label: "Daily Automatic Backups",      kt: true,   others: "Paid add-on" },
  { label: "AI Website Builder",           kt: true,   others: false },
  { label: "India Data Center",            kt: true,   others: false },
  { label: "NVMe SSD Storage",             kt: true,   others: false },
  { label: "Free Migration Service",       kt: true,   others: "Paid" },
  { label: "Price starts at",             kt: "₹39/mo", others: "₹199/mo+" },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-green-500 font-bold text-lg">✓</span>;
  if (val === false) return <span className="text-red-400 font-bold text-lg">✗</span>;
  return <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{val}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-[#0d1240]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 font-semibold text-sm px-5 py-2 rounded-full mb-5">
            ⚔️ Head-to-Head
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Kharkan Technology vs Others
          </h2>
          <p className="text-blue-300 text-base max-w-xl mx-auto">
            Who delivers more value? See the real difference side by side.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#1a237e] text-white">
            <div className="p-5 font-bold text-sm text-blue-200">Feature</div>
            <div className="p-5 font-bold text-center border-x border-blue-900">
              <div className="text-base font-black">Kharkan Technology</div>
              <div className="text-xs text-blue-300 mt-0.5">🇮🇳 Your Hosting Partner</div>
            </div>
            <div className="p-5 font-bold text-center">
              <div className="text-base font-black text-blue-300">Other Hosts</div>
              <div className="text-xs text-blue-400 mt-0.5">Typical competitors</div>
            </div>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`grid grid-cols-3 border-b border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              } hover:bg-blue-50/30 transition-colors`}
            >
              <div className="p-4 text-sm text-gray-700 font-medium flex items-center">{f.label}</div>
              <div className="p-4 text-center flex items-center justify-center border-x border-gray-100 bg-blue-50/40">
                <Cell val={f.kt} />
              </div>
              <div className="p-4 text-center flex items-center justify-center">
                <Cell val={f.others} />
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="grid grid-cols-3 bg-[#f0f4ff] border-t-2 border-[#1565c0]/20">
            <div className="p-5" />
            <div className="p-5 text-center border-x border-gray-200">
              <a
                href="#plans"
                className="inline-block bg-[#1565c0] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-[#1251a3] transition-colors"
                data-testid="button-comparison-cta"
              >
                Get Started →
              </a>
            </div>
            <div className="p-5 text-center">
              <span className="text-xs text-gray-400">Paying more, getting less</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-blue-400 mt-5">
          * Comparison based on publicly available plans of leading shared hosting providers as of 2025.
        </p>
      </div>
    </section>
  );
}
