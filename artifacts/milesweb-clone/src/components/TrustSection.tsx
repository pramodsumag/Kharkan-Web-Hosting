const trustedBy = [
  {
    photo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=280&fit=crop",
    category: "E-Commerce",
    businesses: "280,000+",
    desc: "Online stores from Shopify to WooCommerce trust us for fast checkouts and zero downtime.",
  },
  {
    photo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop",
    category: "Agencies & Freelancers",
    businesses: "95,000+",
    desc: "Digital agencies managing 10–500 client websites rely on our reseller plans and white-label support.",
  },
  {
    photo: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=280&fit=crop",
    category: "Bloggers & Content Creators",
    businesses: "310,000+",
    desc: "Content creators with high traffic choose us for LiteSpeed servers and unlimited bandwidth.",
  },
  {
    photo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=280&fit=crop",
    category: "Startups",
    businesses: "42,000+",
    desc: "Indian startups from seed to Series A host with us for affordable, scalable infrastructure.",
  },
  {
    photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=280&fit=crop",
    category: "Educational Institutes",
    businesses: "18,000+",
    desc: "Schools, colleges and EdTech platforms trust our 99.99% uptime SLA to never miss a class.",
  },
  {
    photo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=280&fit=crop",
    category: "Healthcare & Clinics",
    businesses: "24,000+",
    desc: "Hospitals and health clinics trust us for HIPAA-compliant hosting with daily encrypted backups.",
  },
];

const stats = [
  { val: "10,00,000+", label: "Active Websites" },
  { val: "190+",       label: "Countries Served" },
  { val: "12+",        label: "Years of Trust" },
  { val: "99.99%",     label: "Avg Uptime 2024" },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a237e] text-white font-semibold text-sm px-5 py-2 rounded-full mb-5">
            🌟 Trusted Globally
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Why 10,00,000+ Websites Trust<br />Kharkan Technology Hosting
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            From solo bloggers to Fortune 500 companies — here's who relies on us every day.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="text-3xl font-black text-[#1565c0]">{s.val}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Category cards with photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustedBy.map((t) => (
            <div
              key={t.category}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
              data-testid={`card-trust-${t.category.split(" ")[0].toLowerCase()}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="text-white font-black text-lg">{t.businesses}</div>
                  <div className="text-blue-200 text-xs">websites</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#1a237e] mb-2">{t.category}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust logos strip */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-6">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-6">
            Trusted by businesses across all industries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["🛒 E-Commerce","✍️ Blogging","🏥 Healthcare","📚 Education","🏗️ Real Estate","🎯 Marketing","💼 Finance","🍽️ Food & Beverage","✈️ Travel","🎨 Creative"].map((industry) => (
              <span key={industry} className="bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
