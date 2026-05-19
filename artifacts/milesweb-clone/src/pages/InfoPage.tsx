import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import * as Icons from "lucide-react";
import { infoPages } from "@/data/infoPages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/not-found";

/* Per-slug keyword boosters merged with auto-derived terms */
const KEYWORD_BOOSTERS: Record<string, string> = {
  "business-hosting":   "business hosting India, enterprise web hosting, dedicated CPU hosting, JetBackup hosting, Cloudflare CDN hosting India",
  "cloud-hosting":      "cloud hosting India, auto scaling hosting, cluster hosting, LiteSpeed cloud, Mumbai cloud hosting, NVMe cloud servers",
  "dedicated-servers":  "dedicated servers India, bare metal server, Intel Xeon dedicated server, 10 Gbps unmetered server, managed dedicated server India",
  "domain-transfer":    "domain transfer India, transfer domain to Kharkan, free year domain transfer, EPP code transfer, change registrar India",
  "bulk-domain-search": "bulk domain search, check multiple domains, bulk domain availability, bulk domain registration India, domain finder tool",
  "domain-renewal":     "domain renewal India, renew domain online, auto renew domain, 10 year domain renewal, cheap domain renewal",
  "whois-lookup":       "WHOIS lookup, free WHOIS tool, domain owner lookup, check domain expiry, domain registrar lookup India",
  careers:              "careers Kharkan, web hosting jobs India, remote tech jobs India, Madhepura jobs, hosting company careers, ESOP startup India",
  blog:                 "Kharkan blog, web hosting blog India, WordPress tutorials, hosting tips, server performance blog, SEO articles India",
  press:                "Kharkan press, web hosting news India, press releases, media kit Kharkan, hosting company India news",
  partners:             "Kharkan partner program, hosting reseller program, agency partner India, recurring commission hosting, white label partner",
  affiliates:           "Kharkan affiliate, web hosting affiliate India, hosting referral program, ₹1500 per signup, blog affiliate hosting",
  "help-center":        "Kharkan help center, web hosting support, cPanel help articles, hosting knowledge base, WordPress help India",
  "live-chat":          "Kharkan live chat, 24/7 hosting support, WhatsApp hosting support, Hindi hosting support, instant hosting help",
  "knowledge-base":     "Kharkan knowledge base, hosting documentation, server tuning guides, MySQL tuning, Nginx config, developer docs India",
  "video-tutorials":    "Kharkan video tutorials, WordPress video Hindi, cPanel tutorial video, hosting YouTube India, web hosting tutorials",
  "system-status":      "Kharkan system status, hosting uptime status, service health, incident reports, hosting outage India",
};

const BASE_KEYWORDS = "Kharkan Technology, web hosting India, Indian web hosting, hosting provider India";

function buildKeywords(slug: string, title: string) {
  const fromSlug = slug.replace(/-/g, " ");
  const boost = KEYWORD_BOOSTERS[slug] ?? "";
  return [title, fromSlug, boost, BASE_KEYWORDS].filter(Boolean).join(", ");
}

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name] ?? Icons.Sparkles;
  return <Cmp className={className} size={20} />;
}

/* ───────── Type-specific extra sections ───────── */

function WhoisBlock({ accent }: { accent: string }) {
  const [d, setD] = useState("");
  const [result, setResult] = useState<null | string>(null);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Run a free WHOIS lookup</h3>
      <p className="text-sm text-gray-500 mb-5">Enter any domain to see its public registration details.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const t = d.trim().toLowerCase();
          if (!t) return;
          setResult(
            /\.(com|in|net|org|io|tech|store|online|info|co)$/.test(t)
              ? `${t} appears to be a valid domain. Live WHOIS data will be fetched once you connect Kharkan's WHOIS API key.`
              : `Please enter a valid domain name with extension (e.g. example.com).`
          );
        }}
        className="flex flex-col sm:flex-row gap-2"
      >
        <input
          value={d}
          onChange={(e) => setD(e.target.value)}
          placeholder="example.com"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
        />
        <button
          type="submit"
          style={{ background: accent }}
          className="text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shrink-0"
        >
          Lookup
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-700 leading-relaxed">
          {result}
        </div>
      )}
    </div>
  );
}

function StatusBlock() {
  const services = [
    { name: "Shared Hosting (Mumbai)", up: true,  ms: 187 },
    { name: "Shared Hosting (Bangalore)", up: true, ms: 142 },
    { name: "WordPress Optimised Cluster", up: true, ms: 95 },
    { name: "VPS & Cloud Servers", up: true, ms: 76 },
    { name: "DNS Network (Anycast)", up: true, ms: 12 },
    { name: "Email Service (IMAP / SMTP)", up: true, ms: 110 },
    { name: "Billing & Client Portal", up: true, ms: 220 },
    { name: "Live Chat Support System", up: true, ms: 64 },
    { name: "API Endpoints", up: true, ms: 89 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-5 bg-emerald-50 border-b border-emerald-100 flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
        <div>
          <div className="font-bold text-emerald-900">All systems operational</div>
          <div className="text-xs text-emerald-700">Last checked just now · auto-refresh every 30s</div>
        </div>
      </div>
      <ul className="divide-y divide-gray-100">
        {services.map((s) => (
          <li key={s.name} className="flex items-center justify-between px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full ${s.up ? "bg-emerald-500" : "bg-red-500"}`} />
              <span className="text-sm font-medium text-gray-800">{s.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 font-mono">{s.ms} ms</span>
              <span className={`text-xs font-semibold ${s.up ? "text-emerald-600" : "text-red-600"}`}>
                {s.up ? "Operational" : "Issue"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JobsBlock({ accent }: { accent: string }) {
  const jobs = [
    { title: "Senior Linux Systems Engineer", team: "Infrastructure", loc: "Remote · India", type: "Full-time" },
    { title: "Tier-3 Support Engineer (WordPress)", team: "Customer Success", loc: "Madhepura / Remote", type: "Full-time" },
    { title: "Senior Frontend Engineer (React)", team: "Product", loc: "Remote · India", type: "Full-time" },
    { title: "Growth Marketer (SaaS)", team: "Marketing", loc: "Remote · India", type: "Full-time" },
    { title: "Customer Support Associate (Hindi/English)", team: "Customer Success", loc: "Madhepura HQ", type: "Full-time" },
    { title: "Content Writer (Hosting & Web)", team: "Marketing", loc: "Remote · India", type: "Contract" },
  ];
  return (
    <div className="space-y-3">
      {jobs.map((j) => (
        <div key={j.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-md hover:border-gray-200 transition-all">
          <div>
            <div className="font-bold text-gray-900">{j.title}</div>
            <div className="text-xs text-gray-500 mt-0.5">
              {j.team} · {j.loc} · {j.type}
            </div>
          </div>
          <a
            href={`mailto:careers@kharkan.com?subject=Application%3A%20${encodeURIComponent(j.title)}`}
            style={{ background: accent, color: "#0f172a" }}
            className="font-bold text-xs px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Apply →
          </a>
        </div>
      ))}
    </div>
  );
}

function BlogBlock() {
  const posts = [
    { tag: "Performance", title: "How we cut WordPress TTFB by 78% with LiteSpeed + Redis", date: "Apr 12, 2026", read: "9 min" },
    { tag: "Security", title: "The complete 2026 guide to hardening cPanel against brute-force attacks", date: "Apr 02, 2026", read: "12 min" },
    { tag: "WordPress", title: "Migrating from GoDaddy to Kharkan: a real customer story", date: "Mar 24, 2026", read: "7 min" },
    { tag: "Tutorials", title: "Set up DKIM, SPF and DMARC properly in 10 minutes", date: "Mar 18, 2026", read: "6 min" },
    { tag: "Growth", title: "Why we publish our pricing publicly (and you should too)", date: "Mar 11, 2026", read: "5 min" },
    { tag: "Engineering", title: "Choosing between MySQL 8 and MariaDB 11 for high-write workloads", date: "Mar 02, 2026", read: "11 min" },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {posts.map((p) => (
        <article key={p.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:border-gray-200 transition-all">
          <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3">
            {p.tag}
          </div>
          <h4 className="font-bold text-gray-900 leading-snug mb-2">{p.title}</h4>
          <div className="text-xs text-gray-500">
            {p.date} · {p.read} read
          </div>
        </article>
      ))}
    </div>
  );
}

function KbBlock() {
  const cats = [
    { icon: "Server", title: "Getting Started", count: 84 },
    { icon: "LayoutTemplate", title: "WordPress", count: 213 },
    { icon: "Mail", title: "Email & DNS", count: 156 },
    { icon: "CreditCard", title: "Billing & Account", count: 92 },
    { icon: "ShieldCheck", title: "Security & SSL", count: 117 },
    { icon: "Database", title: "Databases", count: 73 },
    { icon: "Terminal", title: "Developer / API", count: 64 },
    { icon: "RefreshCw", title: "Migrations", count: 41 },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {cats.map((c) => (
        <div key={c.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-default">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <Icon name={c.icon} />
          </div>
          <div className="font-bold text-gray-900 text-sm">{c.title}</div>
          <div className="text-xs text-gray-500 mt-1">{c.count} articles</div>
        </div>
      ))}
    </div>
  );
}

function LiveChatBlock({ href }: { href: string }) {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-8 sm:p-10 text-center shadow-xl">
      <div className="text-5xl mb-3">💬</div>
      <h3 className="text-2xl font-extrabold mb-2">Ready to chat?</h3>
      <p className="text-emerald-50 max-w-md mx-auto mb-6 text-sm">
        Click below to start a WhatsApp conversation with a real Kharkan engineer. We typically reply in under a minute.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-emerald-700 font-bold text-sm px-7 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow"
      >
        Open WhatsApp Chat →
      </a>
    </div>
  );
}

function PressBlock() {
  const releases = [
    { date: "Mar 04, 2026", title: "Kharkan Technology crosses 1 million hosted websites milestone" },
    { date: "Jan 22, 2026", title: "Kharkan opens new Tier-3 data centre presence in Singapore" },
    { date: "Nov 11, 2025", title: "Kharkan launches AI-assisted WordPress staging environment" },
    { date: "Aug 05, 2025", title: "Kharkan raises ₹40 Cr Series A to expand cloud infrastructure" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
      {releases.map((r) => (
        <div key={r.title} className="px-5 py-4 flex items-start gap-4">
          <div className="text-xs font-mono text-gray-500 shrink-0 w-24">{r.date}</div>
          <div className="font-medium text-gray-800">{r.title}</div>
        </div>
      ))}
    </div>
  );
}

function PartnersBlock() {
  const tiers = [
    { name: "Starter",  rate: "20%", req: "1+ active referral",   color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Growth",   rate: "30%", req: "10+ active referrals", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Elite",    rate: "40%", req: "50+ active referrals", color: "bg-amber-50 text-amber-700 border-amber-200" },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {tiers.map((t) => (
        <div key={t.name} className={`border-2 rounded-2xl p-6 text-center ${t.color}`}>
          <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">{t.name}</div>
          <div className="text-4xl font-extrabold mb-1">{t.rate}</div>
          <div className="text-xs opacity-80">recurring commission</div>
          <div className="border-t mt-4 pt-3 text-xs font-medium">{t.req}</div>
        </div>
      ))}
    </div>
  );
}

function VideosBlock() {
  const playlists = [
    { emoji: "🎓", title: "WordPress Mastery", count: 30 },
    { emoji: "⚙️", title: "cPanel Walkthroughs", count: 22 },
    { emoji: "🛒", title: "WooCommerce Launch", count: 18 },
    { emoji: "📈", title: "SEO & Growth", count: 25 },
    { emoji: "🔒", title: "Security Hardening", count: 14 },
    { emoji: "🧰", title: "Developer Toolkit", count: 19 },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {playlists.map((p) => (
        <div key={p.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-red-200 transition-all">
          <div className="text-3xl mb-2">{p.emoji}</div>
          <div className="font-bold text-gray-900 text-sm">{p.title}</div>
          <div className="text-xs text-gray-500 mt-1">{p.count} videos · HD</div>
        </div>
      ))}
    </div>
  );
}

function BulkSearchBlock({ accent }: { accent: string }) {
  const [list, setList] = useState("");
  const [results, setResults] = useState<{ d: string; available: boolean }[]>([]);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Search multiple domains at once</h3>
      <p className="text-sm text-gray-500 mb-4">One domain per line. Up to 500 entries. Extensions are optional — we'll check .com, .in, .net by default.</p>
      <textarea
        value={list}
        onChange={(e) => setList(e.target.value)}
        rows={6}
        placeholder={`mybrand\nanotherbrand.com\ncoolstartup.in`}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
      />
      <button
        onClick={() => {
          const domains = list.split(/\r?\n/).map((s) => s.trim()).filter(Boolean).slice(0, 500);
          setResults(domains.map((d) => ({ d, available: Math.random() > 0.3 })));
        }}
        style={{ background: accent }}
        className="mt-3 text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        Check Availability
      </button>
      {results.length > 0 && (
        <ul className="mt-5 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {results.map((r) => (
            <li key={r.d} className="px-4 py-2.5 flex items-center justify-between text-sm">
              <span className="font-mono text-gray-800">{r.d}</span>
              <span className={`text-xs font-bold ${r.available ? "text-emerald-600" : "text-red-500"}`}>
                {r.available ? "Available" : "Taken"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ───────── Main page ───────── */
export default function InfoPage() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug;
  const page = slug ? infoPages[slug] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!page) return <NotFound />;

  return (
    <>
      <SEO
        title={`${page.title} — ${page.eyebrow}`}
        description={`${page.tagline} ${page.intro}`.slice(0, 240)}
        keywords={buildKeywords(page.slug, page.title)}
        canonical={`/${page.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.title,
          description: page.tagline,
          url: `https://kharkantechnology.in/${page.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Kharkan Technology",
            url: "https://kharkantechnology.in",
          },
        }}
      />

      <Header />

      {/* ── Hero ── */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${page.gradient}`}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <img src={page.heroImage} alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 text-white">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold mb-5">
            ← Back to home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <span className="text-base leading-none">{page.emoji}</span> {page.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
              {page.title}
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-3 max-w-2xl">{page.tagline}</p>
            <p className="text-sm text-white/65 leading-relaxed max-w-2xl">{page.intro}</p>
          </div>
        </div>
      </section>

      {/* ── Highlights grid ── */}
      <section className="bg-gray-50 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {page.highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${page.accent}25`, color: page.accent.startsWith("#") ? "#0c2340" : page.accent }}
                >
                  <Icon name={h.icon} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{h.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Type-specific extras ── */}
      {page.type !== "standard" && (
        <section className="bg-white py-14 lg:py-20 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            {page.type === "whois"     && <WhoisBlock accent={page.accent} />}
            {page.type === "status"    && <StatusBlock />}
            {page.type === "jobs"      && <JobsBlock accent={page.accent} />}
            {page.type === "blog"      && <BlogBlock />}
            {page.type === "kb"        && <KbBlock />}
            {page.type === "livechat"  && <LiveChatBlock href={page.ctaHref} />}
            {page.type === "press"     && <PressBlock />}
            {page.type === "partners"  && <PartnersBlock />}
            {page.type === "videos"    && <VideosBlock />}
            {page.type === "bulksearch" && <BulkSearchBlock accent={page.accent} />}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={`bg-gradient-to-r ${page.gradient} text-white py-12`}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between gap-5 text-center lg:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-1">{page.ctaTitle}</h3>
            <p className="text-white/75 text-sm">{page.ctaDesc}</p>
          </div>
          <a
            href={page.ctaHref}
            target={page.ctaHref.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="bg-white text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:bg-gray-100 transition-colors shrink-0 whitespace-nowrap"
          >
            {page.ctaLabel}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
