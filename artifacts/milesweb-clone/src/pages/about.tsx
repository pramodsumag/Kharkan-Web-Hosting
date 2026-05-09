import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const milestones = [
  { year: "2012", title: "Founded in Pune", desc: "Kharkan Technology was born in a small office in Pune with a team of 4 and a mission to make professional hosting affordable for every Indian business." },
  { year: "2014", title: "10,000 Customers", desc: "Within two years, we crossed 10,000 active hosting customers — fuelled entirely by word of mouth and zero downtime." },
  { year: "2016", title: "First India Data Center", desc: "We launched our own Tier-3 certified data center in Mumbai, offering ultra-low latency for Indian websites for the first time." },
  { year: "2018", title: "LiteSpeed Rollout", desc: "We became one of the first Indian hosts to migrate entirely to LiteSpeed servers, giving customers up to 20x faster page loads." },
  { year: "2020", title: "Global Expansion", desc: "Data centers launched in the US, UK, Singapore, and Australia — serving customers across 150+ countries without compromising on Indian pricing." },
  { year: "2022", title: "1 Million Websites", desc: "A decade of hard work paid off: Kharkan Technology crossed 1,000,000 active websites hosted — a milestone celebrated with our community." },
  { year: "2024", title: "AI Website Builder", desc: "We launched our proprietary AI-powered website builder, helping non-technical users go from idea to live site in under 30 minutes." },
  { year: "2025", title: "10,00,000+ & Growing", desc: "Today, Kharkan Technology powers over 10 lakh websites across India and globally, with 500+ employees and a 24/7 support team." },
];

const team = [
  {
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    name: "Rajiv Kharkan",
    role: "Founder & CEO",
    bio: "IIT Bombay alumnus with 15+ years in cloud infrastructure. Rajiv started Kharkan Technology with a vision to democratize web hosting for India.",
  },
  {
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    bio: "Former senior engineer at Amazon Web Services. Priya architected our LiteSpeed infrastructure and leads a team of 80+ engineers.",
  },
  {
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    name: "Ankit Mehta",
    role: "VP of Customer Success",
    bio: "10 years in SaaS customer experience. Ankit built our legendary 24/7 support team from scratch and maintains our 4.8/5 Trustpilot rating.",
  },
  {
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    name: "Divya Nair",
    role: "Head of Marketing",
    bio: "Ex-Flipkart growth strategist. Divya leads brand, partnerships and community — scaling Kharkan Technology's reach across 190+ countries.",
  },
  {
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    name: "Sameer Joshi",
    role: "Head of Infrastructure",
    bio: "Certified AWS & Google Cloud architect. Sameer manages our 6 global data centers and our 99.99% uptime guarantee round the clock.",
  },
  {
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    name: "Kavya Reddy",
    role: "Head of Product",
    bio: "Product designer turned PM. Kavya led the development of our AI website builder and cPanel-next control panel — used by 10L+ customers.",
  },
];

const values = [
  {
    icon: <Target size={28} className="text-[#1565c0]" />,
    title: "Customer First, Always",
    desc: "Every decision we make — pricing, features, support hours — starts with one question: is this good for our customers?",
  },
  {
    icon: <CheckCircle2 size={28} className="text-green-500" />,
    title: "Transparency Without Exceptions",
    desc: "No renewal price hikes, no hidden fees, no fine print. What you see on our pricing page is what you pay — forever.",
  },
  {
    icon: <Eye size={28} className="text-purple-500" />,
    title: "Built for India, Loved Globally",
    desc: "We build products with Indian businesses in mind — local currency, local language, local data centers — yet serve 190+ countries.",
  },
  {
    icon: <Heart size={28} className="text-red-500" />,
    title: "Community & Giving Back",
    desc: "We offer free hosting to NGOs, startups under 1 year, and open-source projects. Technology should be accessible to everyone.",
  },
];

const stats = [
  { val: "2012", label: "Founded" },
  { val: "500+", label: "Employees" },
  { val: "190+", label: "Countries" },
  { val: "10L+", label: "Websites" },
];

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Kharkan Technology",
    "url": "https://kharkantechnology.in/about",
    "description": "Learn about Kharkan Technology — India's trusted web hosting company founded in 2012 in Pune. Powering 10 lakh+ websites across 190+ countries with 500+ employees.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kharkan Technology",
      "foundingDate": "2012",
      "foundingLocation": "Pune, Maharashtra, India",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 500 },
      "areaServed": { "@type": "Place", "name": "Worldwide" },
      "knowsAbout": ["Web Hosting", "Domain Registration", "Cloud Hosting", "WordPress Hosting", "VPS Hosting"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kharkantechnology.in/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://kharkantechnology.in/about" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kharkan Technology Leadership Team",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@type": "Person", "name": "Rajiv Kharkan", "jobTitle": "Founder & CEO", "worksFor": { "@type": "Organization", "name": "Kharkan Technology" } } },
      { "@type": "ListItem", "position": 2, "item": { "@type": "Person", "name": "Priya Sharma", "jobTitle": "Co-Founder & CTO", "worksFor": { "@type": "Organization", "name": "Kharkan Technology" } } },
      { "@type": "ListItem", "position": 3, "item": { "@type": "Person", "name": "Ankit Mehta", "jobTitle": "VP of Customer Success", "worksFor": { "@type": "Organization", "name": "Kharkan Technology" } } },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us — India's Trusted Web Hosting Company Since 2012"
        description="Kharkan Technology was founded in Pune in 2012 with a mission to make world-class web hosting affordable for every Indian business. Today we power 10 lakh+ websites across 190+ countries."
        keywords="about Kharkan Technology, Indian hosting company, web hosting company India, Pune hosting company, trusted web hosting India"
        canonical="/about"
        jsonLd={aboutJsonLd}
      />
      <TopBar />
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a237e] to-[#1565c0] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="inline-block w-24 h-24 border border-white rounded-full m-4 opacity-30" />
          ))}
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 font-semibold text-sm px-5 py-2 rounded-full mb-6">
            🇮🇳 Proudly Indian since 2012
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            We're Kharkan Technology
          </h1>
          <p className="text-blue-200 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A bootstrapped, proudly Indian company that started with 4 people and a dream — to make world-class web hosting accessible to every business in India and beyond.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-[#1565c0]">{s.val}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565c0] font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              📖 Our Story
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-5 leading-tight">
              From a small Pune office to powering 10 lakh websites
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                It all started in 2012 when Rajiv Kharkan, frustrated with the overpriced and unreliable hosting options available to Indian small businesses, decided to build something better. With a co-founder, two engineers, and a rented office in Baner, Pune, Kharkan Technology was born.
              </p>
              <p>
                The founding principle was simple: <strong className="text-[#1a237e]">treat every customer like your only customer.</strong> That meant no dark patterns, no renewal price hikes, no outsourced support reading from scripts. Every support agent was hired in India, trained in India, and genuinely cared about the product they were supporting.
              </p>
              <p>
                Within two years, 10,000 customers trusted us with their websites — purely through word of mouth. By 2022, we crossed 1 million. Today, we power over 10 lakh websites across 190 countries, backed by 6 global data centers, 500+ employees, and the same founding philosophy that started it all.
              </p>
              <p>
                We've never taken outside funding. We're profitable, bootstrapped, and completely focused on what matters: <strong className="text-[#1a237e]">making you successful online.</strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
              alt="Kharkan Technology team at work"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-[#1565c0] text-white rounded-2xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-black">13+</div>
              <div className="text-sm text-blue-200">Years of excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">Our Mission & Values</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              The principles that guide every decision we make — from server upgrades to support conversations.
            </p>
          </div>

          {/* Mission + Vision cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-extrabold text-[#1a237e] mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower every Indian entrepreneur, freelancer, and business to succeed online by providing reliable, affordable, and world-class hosting — backed by genuine, round-the-clock human support.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-lg font-extrabold text-[#1a237e] mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the most trusted web hosting brand in Asia — known not just for our technology, but for our integrity, our transparency, and our unwavering commitment to customer success.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-sm font-bold text-[#1a237e] mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">Our Journey</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">13 years of milestones, one customer at a time.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-px" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 lg:max-w-[calc(50%-40px)] ${i % 2 === 0 ? "lg:pr-10 lg:text-right" : "lg:pl-10"} pl-14 lg:pl-0`}>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="text-xs font-bold text-[#1565c0] bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">{m.year}</div>
                      <h3 className="text-base font-bold text-[#1a237e] mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-5 w-5 h-5 bg-[#1565c0] rounded-full border-4 border-white shadow -translate-x-1/2 shrink-0" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">Meet the Leadership Team</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              The people behind Kharkan Technology — each one obsessed with making your website succeed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
                data-testid={`card-team-${t.name.split(" ")[0].toLowerCase()}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#1a237e]">{t.name}</h3>
                  <div className="text-xs font-semibold text-[#1565c0] mb-3">{t.role}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office photos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#1a237e] mb-3">Life at Kharkan Technology</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">A peek inside our offices across Pune, Mumbai, and Bengaluru.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] hover:shadow-md transition-shadow">
                <img src={src} alt={`Office ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-r from-[#1a237e] to-[#1565c0] text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Ready to be part of our story?</h2>
        <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
          Join 10 lakh+ websites that trust Kharkan Technology. Start your hosting journey today — risk-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#plans"
            className="bg-white text-[#1565c0] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            data-testid="button-about-cta-plans"
          >
            View Hosting Plans
          </a>
          <a
            href="/contact"
            className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-sm"
            data-testid="button-about-cta-contact"
          >
            Talk to Our Team
          </a>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
