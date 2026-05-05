const stats = [
  { value: "1M+", label: "Websites Hosted" },
  { value: "12+", label: "Years of Experience" },
  { value: "99.95%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
];

const reasons = [
  {
    title: "Made in India, Trusted Worldwide",
    desc: "Founded in 2012, Kharkan Technology is a proudly Indian company that serves over 1 million websites globally. Our servers in India ensure low latency for Indian visitors.",
    emoji: "🇮🇳",
  },
  {
    title: "Price Lock Guarantee",
    desc: "We believe in transparent pricing. Unlike competitors who double the price at renewal, your hosting price stays the same — forever. No surprise bills.",
    emoji: "🔒",
  },
  {
    title: "AI-Powered Website Builder",
    desc: "Create a professional website in minutes with our AI-powered builder — no coding skills required. Just describe your business and watch your site come to life.",
    emoji: "🤖",
  },
  {
    title: "Expert Managed Support",
    desc: "Our team of 500+ hosting experts is available 24/7/365 via live chat, phone, and email. We don't outsource support — every agent is trained in-house.",
    emoji: "🎧",
  },
];

export default function WhyKharkanTechnology() {
  return (
    <section className="py-16 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-[#1565c0] mb-1">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Why choose Kharkan Technology?
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We're not just another hosting company. Kharkan Technology is built around customer success — with the features, price, and support to prove it.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex gap-5"
            >
              <div className="text-3xl shrink-0">{r.emoji}</div>
              <div>
                <h3 className="text-base font-bold text-[#1a237e] mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
