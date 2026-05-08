const reviews = [
  {
    name: "Rahul Sharma",
    role: "E-commerce Owner",
    stars: 5,
    text: "Kharkan Technology has been an absolute game changer for my online store. The server speeds are exceptional and I haven't experienced a single minute of downtime in over 2 years. Support team responds in under 2 minutes!",
    location: "Mumbai, India",
  },
  {
    name: "Priya Mehta",
    role: "Blogger",
    stars: 5,
    text: "Switched from another hosting provider after constant slowdowns. Kharkan Technology's LiteSpeed servers made my blog load 5x faster. My Google rankings improved within weeks. The price lock guarantee is a huge bonus.",
    location: "Bengaluru, India",
  },
  {
    name: "Vikram Singh",
    role: "Digital Agency",
    stars: 5,
    text: "We manage over 50 client websites on Kharkan Technology. The reliability and support are unmatched. Their reseller hosting is excellent and the control panel is easy for our clients to use too.",
    location: "Delhi, India",
  },
  {
    name: "Ananya Kapoor",
    role: "WordPress Developer",
    stars: 5,
    text: "The one-click WordPress installer and LiteSpeed cache made setup super easy. My sites score 95+ on PageSpeed Insights. Free SSL and daily backups give me complete peace of mind.",
    location: "Pune, India",
  },
  {
    name: "Siddharth Rao",
    role: "Startup Founder",
    stars: 5,
    text: "As a startup on a budget, Kharkan Technology's pricing was perfect. Starting at just ₹39/mo with all features included was incredible value. Scaling has been seamless as our traffic grew.",
    location: "Hyderabad, India",
  },
  {
    name: "Neha Gupta",
    role: "Small Business Owner",
    stars: 5,
    text: "The AI website builder helped me create a professional site in under 30 minutes without any technical knowledge. Customer support walked me through everything patiently. Highly recommend!",
    location: "Jaipur, India",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f59e0b] fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span>⭐</span>
            <span>Excellent 4.8/5 on Trustpilot</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            What our customers say
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Over 13,000+ verified reviews — here's what real customers think about Kharkan Technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-gray-50 rounded-2xl p-5 lg:p-6 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
              data-testid={`card-review-${r.name.split(" ")[0].toLowerCase()}`}
            >
              <Stars count={r.stars} />
              <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-[#1565c0] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a237e]">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role} · {r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
