const ratingBreakdown = [
  { stars: 5, pct: 78, count: "10,389" },
  { stars: 4, pct: 14, count: "1,868" },
  { stars: 3, pct: 5,  count: "667" },
  { stars: 2, pct: 2,  count: "267" },
  { stars: 1, pct: 1,  count: "133" },
];

const categories = [
  { label: "Server Uptime",    score: 4.9 },
  { label: "Page Speed",       score: 4.8 },
  { label: "Customer Support", score: 4.7 },
  { label: "Value for Money",  score: 4.9 },
  { label: "Ease of Use",      score: 4.6 },
  { label: "Migration Help",   score: 4.8 },
];

const platformRatings = [
  { platform: "Trustpilot",   score: "4.8", stars: 4.8, reviews: "13,345", logo: "🟢" },
  { platform: "Google",       score: "4.7", stars: 4.7, reviews: "8,921",  logo: "🔵" },
  { platform: "G2",           score: "4.6", stars: 4.6, reviews: "2,104",  logo: "🟠" },
  { platform: "Capterra",     score: "4.8", stars: 4.8, reviews: "1,567",  logo: "🔷" },
];

function StarBar({ pct }: { pct: number }) {
  return (
    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-[#f59e0b] h-full rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function StarDisplay({ score }: { score: number }) {
  const full  = Math.floor(score);
  const half  = score % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-[#f59e0b]">★</span>
      ))}
      {half && <span className="text-[#f59e0b]">½</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-gray-200">★</span>
      ))}
    </div>
  );
}

export default function RatingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f0f4ff] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 font-semibold text-sm px-5 py-2 rounded-full mb-5">
            ⭐ Verified Reviews
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Rated #1 by Indian Website Owners
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Over 13,345 verified reviews across platforms. Here's exactly what customers rate us on.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Overall score */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 flex flex-col items-center justify-center text-center">
            <div className="text-7xl font-black text-[#1a237e] leading-none">4.8</div>
            <div className="flex gap-1 mt-3 text-2xl text-[#f59e0b]">★★★★★</div>
            <p className="text-sm text-gray-400 mt-2">out of 5.0</p>
            <div className="mt-5 bg-[#1a237e] text-white text-sm font-bold px-6 py-2.5 rounded-xl">
              Excellent
            </div>
            <p className="text-xs text-gray-400 mt-3">Based on 13,345 reviews</p>
          </div>

          {/* Star breakdown */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
            <h3 className="text-base font-bold text-[#1a237e] mb-5">Rating Breakdown</h3>
            <div className="space-y-3">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-600 w-4 shrink-0">{r.stars}</span>
                  <span className="text-[#f59e0b] text-sm shrink-0">★</span>
                  <StarBar pct={r.pct} />
                  <span className="text-xs text-gray-400 w-8 text-right shrink-0">{r.pct}%</span>
                  <span className="text-xs text-gray-300 shrink-0 hidden sm:block">({r.count})</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Recommendation rate</span>
                <span className="text-lg font-black text-green-600">96%</span>
              </div>
            </div>
          </div>

          {/* Category scores */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
            <h3 className="text-base font-bold text-[#1a237e] mb-5">Category Scores</h3>
            <div className="space-y-4">
              {categories.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-gray-600 font-medium">{c.label}</span>
                    <span className="text-sm font-bold text-[#1a237e]">{c.score}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#1565c0] to-[#22c55e] h-2 rounded-full transition-all"
                      style={{ width: `${(c.score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform ratings */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platformRatings.map((p) => (
            <div
              key={p.platform}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
              data-testid={`card-rating-${p.platform.toLowerCase()}`}
            >
              <span className="text-3xl">{p.logo}</span>
              <div>
                <div className="text-sm font-bold text-gray-800">{p.platform}</div>
                <StarDisplay score={p.stars} />
                <div className="text-xs text-gray-400 mt-0.5">{p.score}/5 · {p.reviews} reviews</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
