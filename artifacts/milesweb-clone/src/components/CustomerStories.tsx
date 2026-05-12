const stories = [
  {
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
    name: "Sneha Iyer",
    business: "Founder, SnehaDesigns.in",
    location: "Bengaluru",
    result: "3x more traffic in 60 days",
    resultColor: "text-green-600",
    story:
      "I switched to Kharkan Technology after my previous host caused 3 major outages. My design portfolio went from slow to lightning-fast. Within 60 days, I was getting 3x the enquiries because Google started ranking me higher thanks to the improved speed.",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Page Speed", value: "0.8s" },
      { label: "New clients", value: "+47" },
    ],
  },
  {
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=120&h=120&fit=crop&crop=face",
    name: "Arjun Malhotra",
    business: "CEO, TechSprint India",
    location: "Delhi",
    result: "₹12L saved in hosting costs",
    resultColor: "text-blue-600",
    story:
      "Moving 40+ client websites from expensive foreign hosts to Kharkan Technology saved us over ₹12 lakhs annually. The reseller plan is phenomenal — full WHM access, LiteSpeed caching, and support that actually picks up the phone at 2 AM.",
    stats: [
      { label: "Websites", value: "40+" },
      { label: "Cost saved", value: "₹12L" },
      { label: "Support score", value: "4.9/5" },
    ],
  },
  {
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&h=120&fit=crop&crop=face",
    name: "Pooja Nair",
    business: "Owner, OrganicRoots.co.in",
    location: "Kochi",
    result: "Sales doubled in 3 months",
    resultColor: "text-purple-600",
    story:
      "My WooCommerce store was struggling with slow checkouts on my old host. After migrating to Kharkan Technology, checkout speed improved by 80%. Cart abandonment dropped dramatically and my monthly sales literally doubled in 3 months.",
    stats: [
      { label: "Checkout speed", value: "+80%" },
      { label: "Cart abandonment", value: "-42%" },
      { label: "Monthly sales", value: "2x" },
    ],
  },
];

export default function CustomerStories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565c0] font-semibold text-sm px-5 py-2 rounded-full mb-5">
            🏆 Real Results
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Customer Success Stories
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Real businesses. Real results. See how Kharkan Technology helped these entrepreneurs transform their online presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((s) => (
            <div
              key={s.name}
              className="bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              data-testid={`card-story-${s.name.split(" ")[0].toLowerCase()}`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1a237e] to-[#1565c0] p-6 flex items-center gap-4">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <div className="text-white font-bold text-base">{s.name}</div>
                  <div className="text-blue-200 text-xs">{s.business}</div>
                  <div className="text-blue-300 text-xs mt-0.5">📍 {s.location}</div>
                </div>
              </div>

              {/* Result badge */}
              <div className="px-6 py-3 bg-white border-b border-gray-100">
                <span className={`text-sm font-bold ${s.resultColor}`}>✅ {s.result}</span>
              </div>

              {/* Story */}
              <div className="px-6 py-5">
                <p className="text-sm text-gray-600 leading-relaxed italic">"{s.story}"</p>
              </div>

              {/* Stats */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-3 bg-blue-50 rounded-xl p-4">
                  {s.stats.map((st) => (
                    <div key={st.label} className="text-center">
                      <div className="text-lg font-black text-[#1565c0]">{st.value}</div>
                      <div className="text-xs text-gray-500">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://kharkan.com/user/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1565c0] hover:bg-[#1251a3] text-white font-bold px-10 py-3.5 rounded-xl text-base transition-colors shadow-md"
          >
            Start Your Success Story →
          </a>
        </div>
      </div>
    </section>
  );
}
