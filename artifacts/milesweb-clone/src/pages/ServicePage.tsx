import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import NotFound from "@/pages/not-found";
import { services, type ServiceData } from "@/data/services";
import {
  Globe, Mail, Server, Users, Code, Search, Palette,
  LayoutTemplate, Zap, ShieldCheck, HardDrive, RefreshCw, Headphones,
  Lock, Settings, Cpu, Smartphone, Calendar, Archive,
  Tag, Layers, GitBranch, Cloud, FileText, Link2, MapPin, PenTool,
  BarChart2, Image as ImageIcon, Video,
  Check, ChevronDown, ArrowRight, Sparkles, Star, Phone,
} from "lucide-react";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Globe, Mail, Server, Users, Code, Search, Palette,
  LayoutTemplate, Zap, ShieldCheck, HardDrive, RefreshCw, Headphones,
  Lock, Settings, Cpu, Smartphone, Calendar, Archive,
  Tag, Layers, GitBranch, Cloud, FileText, Link2, MapPin, PenTool,
  BarChart2, Image: ImageIcon, Video,
};

const heroIconMap: Record<ServiceData["iconKey"], React.FC<{ size?: number; className?: string }>> = {
  globe: Globe, wordpress: LayoutTemplate, domain: Globe, server: Server,
  mail: Mail, users: Users, code: Code, software: Cpu, search: Search, design: Palette,
};

const SIGNUP = "https://kharkan.com/dash/index.php";

function buildJsonLd(s: ServiceData) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      description: s.shortDesc,
      provider: {
        "@type": "Organization",
        name: "Kharkan Technology",
        url: "https://kharkantechnology.in",
      },
      areaServed: { "@type": "Country", name: "India" },
      offers: s.plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace(/[^0-9]/g, ""),
        priceCurrency: "INR",
        description: p.features.join(", "),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://kharkantechnology.in/" },
        { "@type": "ListItem", position: 2, name: s.name, item: `https://kharkantechnology.in/${s.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export default function ServicePage() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug ?? "";
  const data = services[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!data) return <NotFound />;

  const HeroIcon = heroIconMap[data.iconKey];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.seoKeywords}
        canonical={`/${data.slug}`}
        jsonLd={buildJsonLd(data)}
      />
      <TopBar />
      <Header />

      {/* HERO */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${data.gradient} text-white`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${data.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Sparkles size={14} /> {data.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-95 mb-4">{data.tagline}</p>
            <p className="text-base opacity-85 mb-7 max-w-xl">{data.shortDesc}</p>
            <div className="flex flex-wrap gap-3">
              <a href={SIGNUP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-lg font-bold hover:scale-105 transition shadow-xl">
                Get Started <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 px-7 py-3.5 rounded-lg font-bold hover:bg-white/20 transition">
                Talk to an Expert <Phone size={18} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border-2 border-white/20 shadow-2xl">
              <HeroIcon size={140} className="text-white" />
            </div>
          </div>
        </div>
        {/* Stats strip */}
        <div className="relative bg-black/20 backdrop-blur border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.stats.map((st) => (
              <div key={st.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold">{st.val}</div>
                <div className="text-sm opacity-80 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
            What is Kharkan {data.name}?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{data.longDesc}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.accent }}>Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Everything you need, included
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => {
              const Icon = iconMap[f.icon] || Sparkles;
              return (
                <div key={f.title} className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${data.accent}, ${data.accent}cc)` }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS LIST */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.accent }}>Why customers love it</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Built to give your business an unfair advantage
            </h2>
            <p className="text-gray-700 mb-6">
              Every Kharkan {data.name} plan ships with everything you need to launch, scale and succeed — no hidden fees, no upsells, no surprises.
            </p>
            <a href={SIGNUP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white shadow-lg hover:scale-105 transition" style={{ background: data.accent }}>
              View All Plans <ArrowRight size={18} />
            </a>
          </div>
          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
            <ul className="space-y-3">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: data.accent }} />
                  <span className="text-gray-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.accent }}>Pricing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Pick the perfect plan
            </h2>
            <p className="text-gray-600 mt-3">Transparent pricing. No setup fees. 30-day money-back guarantee.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.plans.map((p) => (
              <div key={p.name} className={`relative bg-white rounded-2xl border-2 p-7 transition-all hover:-translate-y-1 hover:shadow-2xl ${p.highlight ? "shadow-xl" : "border-gray-200"}`} style={p.highlight ? { borderColor: data.accent } : {}}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1" style={{ background: data.accent }}>
                    <Star size={12} className="fill-white" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-extrabold" style={{ color: data.accent }}>{p.price}</span>
                  <span className="text-gray-500 text-sm">{p.per}</span>
                </div>
                {p.oldPrice && <div className="text-sm text-gray-400 line-through mb-4">{p.oldPrice}{p.per}</div>}
                <ul className="space-y-2.5 my-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: data.accent }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={SIGNUP} target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-lg font-bold transition ${p.highlight ? "text-white shadow-lg hover:shadow-xl" : "border-2 hover:text-white"}`}
                  style={p.highlight ? { background: data.accent } : { borderColor: data.accent, color: data.accent }}
                  onMouseEnter={(e) => { if (!p.highlight) (e.currentTarget as HTMLAnchorElement).style.background = data.accent; }}
                  onMouseLeave={(e) => { if (!p.highlight) (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.accent }}>Why Kharkan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              The Kharkan Technology difference
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.whyUs.map((w, i) => (
              <div key={w.title} className="p-7 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white mb-4 shadow" style={{ background: data.accent }}>
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.accent }}>FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {data.faqs.map((f, i) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition">
                  <span>{f.q}</span>
                  <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} style={{ color: data.accent }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Explore our other services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.values(services).filter((s) => s.slug !== data.slug).slice(0, 4).map((s) => {
              const Icon = heroIconMap[s.iconKey];
              return (
                <Link key={s.slug} href={`/${s.slug}`}
                  className="group p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-transparent hover:shadow-xl transition-all">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-3 shadow" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)` }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:underline">{s.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{s.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 md:py-20 px-4 bg-gradient-to-br ${data.gradient} text-white text-center`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8">Join 10 lakh+ businesses that trust Kharkan Technology. 30-day money-back guarantee, no questions asked.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={SIGNUP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:scale-105 transition shadow-xl">
              Get Started Now <ArrowRight size={18} />
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
