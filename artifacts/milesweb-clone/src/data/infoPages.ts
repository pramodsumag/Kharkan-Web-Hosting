export type InfoPageType =
  | "standard"
  | "whois"
  | "status"
  | "jobs"
  | "blog"
  | "kb"
  | "livechat"
  | "press"
  | "partners"
  | "videos"
  | "bulksearch";

export interface InfoHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface InfoPageData {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  gradient: string;
  accent: string;
  emoji: string;
  heroImage: string;
  type: InfoPageType;
  highlights: InfoHighlight[];
  ctaTitle: string;
  ctaDesc: string;
  ctaLabel: string;
  ctaHref: string;
}

const LOGIN = "https://kharkan.com/user/login";

export const infoPages: Record<string, InfoPageData> = {
  /* ── HOSTING ── */
  "business-hosting": {
    slug: "business-hosting",
    title: "Business Hosting",
    eyebrow: "Enterprise-grade · Indian data centres",
    tagline: "Dedicated resources, blazing speed and white-glove support for growing businesses.",
    intro:
      "Business Hosting from Kharkan Technology is purpose-built for mission-critical websites that can't afford downtime. With dedicated CPU & RAM, JetBackup, free CDN and priority support, your business site stays fast, secure and online 24/7.",
    gradient: "from-[#0c2340] via-[#1e3a8a] to-[#1d4ed8]",
    accent: "#93c5fd",
    emoji: "💼",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop&q=80",
    type: "standard",
    highlights: [
      { icon: "Cpu", title: "Dedicated CPU & RAM", desc: "Isolated resources mean your site never slows down because of noisy neighbours." },
      { icon: "Database", title: "JetBackup Included", desc: "Daily off-site backups with 30-day retention and 1-click restore." },
      { icon: "Globe2", title: "Free Cloudflare Railgun", desc: "Premium CDN built into every plan — instant global performance." },
      { icon: "Headphones", title: "Priority Support", desc: "Skip the queue. Average response time under 60 seconds." },
      { icon: "ShieldCheck", title: "Free SSL + Sitelock", desc: "Enterprise SSL certificate plus daily malware scanning." },
      { icon: "Rocket", title: "Free Site Migration", desc: "Our engineers move your existing site for free — zero downtime." },
    ],
    ctaTitle: "Upgrade to Business Hosting today",
    ctaDesc: "30-day money-back guarantee · Free migration · Free domain",
    ctaLabel: "Choose a Business Plan",
    ctaHref: LOGIN,
  },
  "cloud-hosting": {
    slug: "cloud-hosting",
    title: "Cloud Hosting",
    eyebrow: "Auto-scaling · Pay-as-you-grow",
    tagline: "Elastic cloud infrastructure that scales the moment your traffic does.",
    intro:
      "Built on a redundant cluster of NVMe-powered servers, Kharkan Cloud Hosting auto-balances load, handles traffic spikes effortlessly and stays up even when individual servers go down. The future-proof choice for serious websites.",
    gradient: "from-[#082f49] via-[#075985] to-[#0284c7]",
    accent: "#7dd3fc",
    emoji: "☁️",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&q=80",
    type: "standard",
    highlights: [
      { icon: "Cloud", title: "True Cluster Architecture", desc: "Your site runs across multiple nodes — no single point of failure." },
      { icon: "TrendingUp", title: "Auto-scaling Resources", desc: "CPU & RAM scale up in real-time during traffic spikes." },
      { icon: "Globe2", title: "6 Global Data Centres", desc: "Mumbai, Bangalore, Singapore, London, NY, Toronto — pick yours." },
      { icon: "Zap", title: "LiteSpeed + LSCache", desc: "Up to 40× faster page loads than Apache on the same hardware." },
      { icon: "ShieldCheck", title: "DDoS Protection Included", desc: "Anycast-routed protection blocks attacks before they reach you." },
      { icon: "RefreshCw", title: "1-Click Daily Backups", desc: "Restore your site to any point in the last 30 days." },
    ],
    ctaTitle: "Move to Cloud Hosting in minutes",
    ctaDesc: "Free migration · Pay only for what you use · No long-term lock-in",
    ctaLabel: "Launch Cloud Hosting",
    ctaHref: LOGIN,
  },
  "dedicated-servers": {
    slug: "dedicated-servers",
    title: "Dedicated Servers",
    eyebrow: "Bare-metal power · Full root access",
    tagline: "Entire physical servers, configured exactly your way.",
    intro:
      "When shared, VPS or cloud just won't cut it, our enterprise dedicated servers give you the entire machine — full root access, choice of OS, RAID storage and unmetered bandwidth on a 10 Gbps line.",
    gradient: "from-[#1c0a0a] via-[#7f1d1d] to-[#dc2626]",
    accent: "#fecaca",
    emoji: "🖥️",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&q=80",
    type: "standard",
    highlights: [
      { icon: "Server", title: "Intel Xeon Processors", desc: "Latest-gen 16-core to 64-core CPUs with hyper-threading enabled." },
      { icon: "HardDrive", title: "Enterprise NVMe RAID", desc: "RAID 1/10 NVMe arrays with battery-backed write cache." },
      { icon: "Activity", title: "10 Gbps Unmetered", desc: "Pure 10 Gbps uplink. No bandwidth caps, no overage charges." },
      { icon: "Cpu", title: "Custom OS + cPanel", desc: "Choose CentOS, Ubuntu, Debian, AlmaLinux — with optional WHM/cPanel." },
      { icon: "Lock", title: "Hardware Firewall", desc: "Dedicated Fortinet appliance protects your server perimeter." },
      { icon: "Headphones", title: "Premium Managed Support", desc: "Server hardening, security patching and 24/7 monitoring included." },
    ],
    ctaTitle: "Get your dedicated server today",
    ctaDesc: "Provisioned in under 4 hours · Free setup · Free firewall",
    ctaLabel: "Configure Your Server",
    ctaHref: LOGIN,
  },

  /* ── DOMAINS ── */
  "domain-transfer": {
    slug: "domain-transfer",
    title: "Domain Transfer",
    eyebrow: "Free year added · Zero downtime",
    tagline: "Move your domain to Kharkan in 5 minutes — we add a free year to your registration.",
    intro:
      "Transfer your domain to Kharkan Technology and get an additional year of registration absolutely free. Our automated transfer system handles everything — DNS, email forwarding, WHOIS privacy — with zero downtime.",
    gradient: "from-[#042f2e] via-[#0f766e] to-[#14b8a6]",
    accent: "#5eead4",
    emoji: "🔄",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    type: "standard",
    highlights: [
      { icon: "Gift", title: "1 Year Free Added", desc: "Every transfer adds a free year to your existing expiration date." },
      { icon: "Zap", title: "5-Minute Transfer", desc: "Just paste your EPP code — our system handles the rest automatically." },
      { icon: "Shield", title: "Free WHOIS Privacy", desc: "Your personal contact details stay hidden — free forever." },
      { icon: "Mail", title: "Free Email Forwarding", desc: "Up to 100 forwarders included with every domain." },
      { icon: "RefreshCw", title: "Free DNS Management", desc: "Easy-to-use control panel with A, AAAA, CNAME, MX, TXT records." },
      { icon: "Lock", title: "Domain Lock Included", desc: "One-click lock prevents unauthorised transfers away." },
    ],
    ctaTitle: "Start your domain transfer",
    ctaDesc: "Free year added · Free WHOIS privacy · Free DNS",
    ctaLabel: "Transfer My Domain",
    ctaHref: LOGIN,
  },
  "bulk-domain-search": {
    slug: "bulk-domain-search",
    title: "Bulk Domain Search",
    eyebrow: "Check up to 500 domains at once",
    tagline: "Find every variation of your brand in one search.",
    intro:
      "Use Kharkan's bulk domain search to check the availability of up to 500 domains across 50+ TLDs simultaneously. Perfect for branding agencies, startups and portfolio builders.",
    gradient: "from-[#1e1b4b] via-[#3730a3] to-[#4f46e5]",
    accent: "#c7d2fe",
    emoji: "🔍",
    heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=600&fit=crop&q=80",
    type: "bulksearch",
    highlights: [
      { icon: "Layers", title: "500 Domains in One Search", desc: "Paste your list, hit search — get availability in under 10 seconds." },
      { icon: "Globe2", title: "50+ TLDs Supported", desc: ".in, .com, .net, .io, .tech, .store, .online & many more." },
      { icon: "Download", title: "Export Results to CSV", desc: "Download availability + price as CSV for offline review." },
      { icon: "ShoppingCart", title: "1-Click Bulk Cart", desc: "Add all available domains to cart in a single click." },
      { icon: "Tag", title: "Bulk Discount Pricing", desc: "Order 5+ domains and get tiered discounts up to 25% off." },
      { icon: "Bell", title: "Drop-catch Alerts", desc: "Set alerts on premium domains and grab them the moment they drop." },
    ],
    ctaTitle: "Search 500 domains in 10 seconds",
    ctaDesc: "Free to use · Export as CSV · Bulk discounts on checkout",
    ctaLabel: "Open Bulk Search",
    ctaHref: LOGIN,
  },
  "domain-renewal": {
    slug: "domain-renewal",
    title: "Domain Renewal",
    eyebrow: "Auto-renew · Lifetime price-lock",
    tagline: "Never lose your domain — renew up to 10 years in advance at today's price.",
    intro:
      "Kharkan offers transparent, fair-priced domain renewals with up to 10-year advance renewal and our exclusive Price-Lock Guarantee — pay today's price, never face a renewal hike.",
    gradient: "from-[#451a03] via-[#92400e] to-[#d97706]",
    accent: "#fde68a",
    emoji: "⏰",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop&q=80",
    type: "standard",
    highlights: [
      { icon: "Calendar", title: "Renew Up to 10 Years", desc: "Lock in your domain a full decade in advance — never worry again." },
      { icon: "RefreshCw", title: "Auto-Renew Enabled", desc: "Set it once. We renew before expiry — guaranteed." },
      { icon: "Lock", title: "Price-Lock Guarantee", desc: "Today's renewal price is locked in. No surprise hikes, ever." },
      { icon: "Bell", title: "30/15/7-Day Reminders", desc: "Email + SMS reminders so you never miss a renewal window." },
      { icon: "Gift", title: "Loyalty Renewal Discount", desc: "5%+ off renewal pricing for customers renewing 3+ years in a row." },
      { icon: "Shield", title: "Grace Period: 40 Days", desc: "Forgot to renew? You get a 40-day grace period to recover for free." },
    ],
    ctaTitle: "Renew your domains in seconds",
    ctaDesc: "Up to 10-year renewals · Price-lock guarantee · Loyalty discounts",
    ctaLabel: "Renew My Domains",
    ctaHref: LOGIN,
  },
  "whois-lookup": {
    slug: "whois-lookup",
    title: "WHOIS Lookup",
    eyebrow: "Free public WHOIS lookup tool",
    tagline: "Instantly check ownership, registrar and expiry of any domain.",
    intro:
      "Use Kharkan's free WHOIS lookup to retrieve the public registration details of any domain — registrar, registration date, expiry, nameservers and (where public) the registrant.",
    gradient: "from-[#0c1e3a] via-[#1e3a8a] to-[#2563eb]",
    accent: "#bfdbfe",
    emoji: "🕵️",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    type: "whois",
    highlights: [
      { icon: "Globe", title: "All 1,500+ TLDs", desc: "Lookup .in, .com, .net, .io, .tech, country code TLDs and more." },
      { icon: "Calendar", title: "Registration + Expiry", desc: "See exactly when a domain was registered and when it expires." },
      { icon: "Server", title: "Nameservers + DNS Records", desc: "Public nameservers, A/AAAA, MX and TXT records at a glance." },
      { icon: "Shield", title: "Privacy-Compliant", desc: "GDPR-compliant data masking on personal registrant details." },
      { icon: "Bell", title: "Drop-Watch Alerts", desc: "Get notified the moment a watched domain becomes available." },
      { icon: "Download", title: "Export as PDF / JSON", desc: "Save WHOIS records for audit, M&A or legal evidence." },
    ],
    ctaTitle: "Found a domain you love?",
    ctaDesc: "Register or transfer it in under 60 seconds at Kharkan Technology.",
    ctaLabel: "Search & Register Domains",
    ctaHref: LOGIN,
  },

  /* ── COMPANY ── */
  careers: {
    slug: "careers",
    title: "Careers at Kharkan",
    eyebrow: "We're hiring across India · Remote-first",
    tagline: "Help build India's most loved hosting company.",
    intro:
      "We're a fast-growing, profitable, employee-first hosting company headquartered in Madhepura, Bihar. We hire smart, kind, curious people — and give them real ownership.",
    gradient: "from-[#0a1f3d] via-[#1e3a8a] to-[#3b82f6]",
    accent: "#bfdbfe",
    emoji: "🚀",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80",
    type: "jobs",
    highlights: [
      { icon: "Home", title: "Remote-First Culture", desc: "Work from anywhere in India. Optional Madhepura HQ for those who love an office." },
      { icon: "Heart", title: "Top-Tier Health Cover", desc: "₹10 L family floater + dental + mental health support for you and dependents." },
      { icon: "TrendingUp", title: "ESOPs From Day One", desc: "Every full-time hire gets meaningful stock options that vest over 4 years." },
      { icon: "BookOpen", title: "Learning Budget", desc: "₹50,000/year for courses, conferences, books — no approval needed." },
      { icon: "Calendar", title: "Flexible Time-Off", desc: "Unlimited paid leave, mandatory 2-week annual break, and quarterly recharge Fridays." },
      { icon: "Users", title: "Friendly, No-BS Culture", desc: "No politics, no jargon, no overwork. Just thoughtful people doing great work." },
    ],
    ctaTitle: "Don't see your role?",
    ctaDesc: "We're always looking for exceptional people. Send us your CV and a note about how you'd add value.",
    ctaLabel: "Email careers@kharkan.com",
    ctaHref: "mailto:careers@kharkan.com",
  },
  blog: {
    slug: "blog",
    title: "Kharkan Blog",
    eyebrow: "Hosting tips · Tutorials · Company news",
    tagline: "Practical, jargon-free articles to help you build better websites.",
    intro:
      "Every week, our engineers and growth team publish in-depth articles on web hosting, WordPress, performance, security and entrepreneurship — written for real-world Indian web builders.",
    gradient: "from-[#1a1b3a] via-[#312e81] to-[#6366f1]",
    accent: "#c7d2fe",
    emoji: "📝",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop&q=80",
    type: "blog",
    highlights: [
      { icon: "FileText", title: "200+ In-Depth Guides", desc: "From 'launch your first WordPress site' to 'tune MySQL for 100k req/s'." },
      { icon: "Zap", title: "Performance Optimisation", desc: "Real benchmarks, Core Web Vitals walk-throughs and caching deep dives." },
      { icon: "ShieldCheck", title: "Security Playbooks", desc: "WAF rules, brute-force lockouts, SSL hardening — production-ready." },
      { icon: "TrendingUp", title: "Growth & SEO", desc: "How real Kharkan customers grew traffic 10× without paid ads." },
      { icon: "Mail", title: "Weekly Newsletter", desc: "1 short, useful email every Friday. 18,000+ readers. Zero spam." },
      { icon: "Rss", title: "Public RSS Feed", desc: "Subscribe in your reader of choice — Feedly, NetNewsWire, Reeder." },
    ],
    ctaTitle: "Get our weekly hosting newsletter",
    ctaDesc: "One short email each Friday. Actionable tips, real numbers. Unsubscribe anytime.",
    ctaLabel: "Subscribe Now",
    ctaHref: "mailto:hello@kharkan.com?subject=Subscribe%20to%20Newsletter",
  },
  press: {
    slug: "press",
    title: "Press & Media Kit",
    eyebrow: "For journalists & analysts",
    tagline: "Logos, screenshots, founder bios, fact sheet — everything you need.",
    intro:
      "Kharkan Technology is one of India's fastest-growing independent web hosting companies. This page contains everything press needs — logos, brand assets, executive bios, fact sheets and our most recent press releases.",
    gradient: "from-[#1a0f3d] via-[#5b21b6] to-[#8b5cf6]",
    accent: "#ddd6fe",
    emoji: "📰",
    heroImage: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=600&fit=crop&q=80",
    type: "press",
    highlights: [
      { icon: "Image", title: "Logo Pack (SVG + PNG)", desc: "Full-colour, monochrome, dark mode — all source files in one zip." },
      { icon: "FileText", title: "Company Fact Sheet", desc: "Founded 2012 · 500+ team · 1 M+ websites hosted · Profitable since year 1." },
      { icon: "Users", title: "Founder & Exec Bios", desc: "High-res headshots, professional bios in 100 / 300 / 500-word formats." },
      { icon: "Award", title: "Awards & Recognition", desc: "ET Best SMB Hosting (2023), Web Hosting Talk Editor's Choice (2022)." },
      { icon: "MessageCircle", title: "Press Enquiries", desc: "Direct line to our communications team — typical response time 4 hours." },
      { icon: "Download", title: "Recent Press Releases", desc: "Last 24 months of releases archived as PDF for offline reference." },
    ],
    ctaTitle: "Press enquiries",
    ctaDesc: "Write to press@kharkan.com — we respond to all media within 4 working hours.",
    ctaLabel: "Email press@kharkan.com",
    ctaHref: "mailto:press@kharkan.com",
  },
  partners: {
    slug: "partners",
    title: "Partner Program",
    eyebrow: "Agencies · Developers · Resellers",
    tagline: "Earn up to 40% recurring commission on every customer you bring.",
    intro:
      "The Kharkan Partner Program rewards agencies, freelancers and consultants who recommend our hosting. Earn meaningful, recurring commission while your clients get genuinely great service.",
    gradient: "from-[#3a0a3a] via-[#86198f] to-[#d946ef]",
    accent: "#f5d0fe",
    emoji: "🤝",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop&q=80",
    type: "partners",
    highlights: [
      { icon: "Percent", title: "Up to 40% Recurring", desc: "Tiered commission structure — the more clients you refer, the higher you earn." },
      { icon: "Calendar", title: "Lifetime Tracking", desc: "We track referrals for the lifetime of the customer, not just first payment." },
      { icon: "Users", title: "Dedicated Partner Manager", desc: "Tier 2+ partners get a named account manager and priority support." },
      { icon: "Gift", title: "Co-Marketing Budget", desc: "Joint webinars, blog posts and case studies — we share the spotlight." },
      { icon: "BarChart3", title: "Real-Time Dashboard", desc: "Track clicks, signups, conversions and earnings live." },
      { icon: "Wallet", title: "Monthly Payouts", desc: "Get paid every month via UPI, bank transfer or Wise (international)." },
    ],
    ctaTitle: "Apply to the Partner Program",
    ctaDesc: "Approval typically within 24 hours · No minimum referral requirement",
    ctaLabel: "Apply Now",
    ctaHref: "mailto:partners@kharkan.com?subject=Partner%20Program%20Application",
  },
  affiliates: {
    slug: "affiliates",
    title: "Affiliate Program",
    eyebrow: "₹1,500 per signup · 60-day cookie",
    tagline: "Refer customers, earn ₹1,500+ per signup — paid monthly.",
    intro:
      "Built for content creators, bloggers and influencers — the Kharkan Affiliate Program pays you handsomely for every paying customer you refer. No minimum threshold, no caps, monthly payouts.",
    gradient: "from-[#0a2e1f] via-[#047857] to-[#10b981]",
    accent: "#a7f3d0",
    emoji: "💸",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&q=80",
    type: "partners",
    highlights: [
      { icon: "Wallet", title: "₹1,500 per Signup", desc: "Flat ₹1,500 commission per paying customer — bonus tiers above 10/mo." },
      { icon: "Clock", title: "60-Day Cookie Window", desc: "Industry-leading 60-day attribution — most affiliate programs offer 30." },
      { icon: "Layers", title: "Unlimited Earnings", desc: "No cap on commissions. Top affiliates earn ₹2 L+ per month." },
      { icon: "Image", title: "Creative Asset Library", desc: "Banners, comparison tables, video assets — all ready to deploy." },
      { icon: "Link2", title: "Custom Tracking Links", desc: "Per-campaign tracking, UTM-friendly URLs and live click reporting." },
      { icon: "Wallet", title: "Monthly UPI / Bank Payouts", desc: "Get paid via UPI, NEFT or international wire — minimum ₹500." },
    ],
    ctaTitle: "Join the Affiliate Program",
    ctaDesc: "Sign-up is free · Approval typically within 24 hours · No website needed",
    ctaLabel: "Become an Affiliate",
    ctaHref: "mailto:affiliates@kharkan.com?subject=Affiliate%20Program%20Application",
  },

  /* ── SUPPORT ── */
  "help-center": {
    slug: "help-center",
    title: "Help Center",
    eyebrow: "1,200+ articles · Updated weekly",
    tagline: "Self-serve answers to every common hosting question.",
    intro:
      "Our Help Center is the fastest way to get answers. 1,200+ tutorial articles covering cPanel, WordPress, billing, DNS, email and security — written by real engineers, not chatbots.",
    gradient: "from-[#0a1f3d] via-[#1e3a8a] to-[#3b82f6]",
    accent: "#bfdbfe",
    emoji: "📚",
    heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop&q=80",
    type: "kb",
    highlights: [
      { icon: "Server", title: "cPanel & Hosting Basics", desc: "350+ articles on cPanel, file manager, databases, cron, SSH." },
      { icon: "LayoutTemplate", title: "WordPress Tutorials", desc: "210+ guides on install, plugins, themes, speed, security." },
      { icon: "Mail", title: "Email & DNS", desc: "180+ articles on MX records, SPF, DKIM, DMARC, IMAP setup." },
      { icon: "CreditCard", title: "Billing & Account", desc: "Manage invoices, upgrade plans, request refunds and update payment methods." },
      { icon: "ShieldCheck", title: "Security & SSL", desc: "Hardening guides, malware removal, SSL install, 2FA setup." },
      { icon: "Search", title: "Smart Search", desc: "Type a question — get the right article instantly. AI-suggested answers." },
    ],
    ctaTitle: "Can't find what you're looking for?",
    ctaDesc: "Our human support team responds in under 90 seconds, 24/7.",
    ctaLabel: "Contact Support",
    ctaHref: "/contact",
  },
  "live-chat": {
    slug: "live-chat",
    title: "Live Chat Support",
    eyebrow: "Average response: 47 seconds",
    tagline: "Real engineers, not chatbots, available 24/7/365.",
    intro:
      "Kharkan Live Chat connects you directly to a real, trained support engineer — never a bot. Available round the clock, every day of the year, with multilingual support in English, Hindi, Bengali and Tamil.",
    gradient: "from-[#0a2e1f] via-[#047857] to-[#10b981]",
    accent: "#a7f3d0",
    emoji: "💬",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop&q=80",
    type: "livechat",
    highlights: [
      { icon: "Headphones", title: "100% Human Agents", desc: "Every chat is answered by a trained Kharkan engineer — no chatbots." },
      { icon: "Clock", title: "47-Second Avg Response", desc: "We're benchmarked at 47s average pickup vs the industry's 3+ minutes." },
      { icon: "Globe2", title: "Multilingual Support", desc: "English, हिन्दी, বাংলা & தமிழ் — speak in the language you're comfortable in." },
      { icon: "FileText", title: "Chat Transcripts", desc: "Every session is emailed to you for reference — never lose a fix." },
      { icon: "ShieldCheck", title: "Screen-Share Available", desc: "Stuck? Our agents can join a Zoom/Meet and walk you through it." },
      { icon: "Star", title: "4.9/5 Satisfaction Score", desc: "Real, post-chat ratings from 50,000+ resolved tickets." },
    ],
    ctaTitle: "Start a chat with our team",
    ctaDesc: "Available 24/7/365 · Average response 47 seconds · 100% real humans",
    ctaLabel: "Open Live Chat",
    ctaHref: "https://wa.me/917011058947?text=Hi%2C%20I%20need%20help%20with%20Kharkan%20Technology%20hosting",
  },
  "knowledge-base": {
    slug: "knowledge-base",
    title: "Knowledge Base",
    eyebrow: "Deep-dive technical articles",
    tagline: "Engineering-grade documentation for power users and developers.",
    intro:
      "The Kharkan Knowledge Base is our engineering team's playbook — deep technical articles on Nginx tuning, PHP-FPM pool configuration, MySQL replication, Redis caching, Docker, CI/CD and more.",
    gradient: "from-[#1c0a3e] via-[#5b21b6] to-[#8b5cf6]",
    accent: "#ddd6fe",
    emoji: "🧠",
    heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=600&fit=crop&q=80",
    type: "kb",
    highlights: [
      { icon: "Code", title: "API References", desc: "Complete REST API documentation with cURL, Node, Python, PHP examples." },
      { icon: "Terminal", title: "Server Administration", desc: "SSH, sudo, systemd, cron, fail2ban — battle-tested configurations." },
      { icon: "Database", title: "Database Engineering", desc: "MySQL tuning, replication, sharding, backups and disaster recovery." },
      { icon: "Cpu", title: "Performance Optimisation", desc: "Nginx caching, OPcache, Redis, Varnish — with real benchmark data." },
      { icon: "ShieldCheck", title: "Security Hardening", desc: "WAF rules, SSL configurations, kernel hardening, brute-force defence." },
      { icon: "RefreshCw", title: "Migration Playbooks", desc: "Step-by-step migration from cPanel, Plesk, AWS, DigitalOcean, GoDaddy." },
    ],
    ctaTitle: "Need engineering help?",
    ctaDesc: "Our Tier-3 support engineers are available 24/7 for complex technical questions.",
    ctaLabel: "Contact Engineering Support",
    ctaHref: "/contact",
  },
  "video-tutorials": {
    slug: "video-tutorials",
    title: "Video Tutorials",
    eyebrow: "150+ HD tutorials · Hindi + English",
    tagline: "Learn by watching. Step-by-step, screen-recorded walkthroughs.",
    intro:
      "Our YouTube channel hosts 150+ free HD video tutorials covering everything from 'launch your first website' to 'set up Redis cache on cPanel'. All bilingual — Hindi and English subtitles available.",
    gradient: "from-[#3a0a0a] via-[#991b1b] to-[#ef4444]",
    accent: "#fecaca",
    emoji: "🎬",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop&q=80",
    type: "videos",
    highlights: [
      { icon: "Play", title: "150+ Free Tutorials", desc: "From beginner to advanced — every video is free to watch, no signup." },
      { icon: "Globe2", title: "Hindi + English", desc: "Native voiceovers in both languages plus closed captions in 8 languages." },
      { icon: "LayoutTemplate", title: "WordPress Mastery Series", desc: "30-video deep dive into WordPress from scratch to scale." },
      { icon: "Server", title: "cPanel Walkthroughs", desc: "Every cPanel section explained in 2-minute focused videos." },
      { icon: "ShoppingCart", title: "eCommerce Launch", desc: "Complete WooCommerce setup, payment gateways, GST, shipping configs." },
      { icon: "TrendingUp", title: "SEO & Growth", desc: "On-page SEO, Google Search Console, schema markup — by real practitioners." },
    ],
    ctaTitle: "Subscribe on YouTube",
    ctaDesc: "New tutorial every Tuesday · 80,000+ subscribers · Ring the bell for notifications.",
    ctaLabel: "Open YouTube Channel",
    ctaHref: "https://youtube.com/@kharkantechnology",
  },
  "system-status": {
    slug: "system-status",
    title: "System Status",
    eyebrow: "Real-time service health",
    tagline: "Live status of every Kharkan service — fully transparent.",
    intro:
      "We believe in radical transparency. This page shows the real-time operational status of every Kharkan service, including web hosting clusters, DNS, email, billing portal and support systems.",
    gradient: "from-[#0a2e1f] via-[#047857] to-[#10b981]",
    accent: "#a7f3d0",
    emoji: "🟢",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    type: "status",
    highlights: [
      { icon: "Activity", title: "Live Status Updates", desc: "Page auto-refreshes every 30 seconds with the latest service health." },
      { icon: "Bell", title: "Incident Notifications", desc: "Subscribe to email/SMS alerts the moment an incident is detected." },
      { icon: "FileText", title: "Post-Mortem Reports", desc: "Every Sev-1 incident gets a public root-cause analysis within 72 hours." },
      { icon: "Calendar", title: "90-Day Uptime History", desc: "See per-service uptime % for the last 90 days at a glance." },
      { icon: "ShieldCheck", title: "Scheduled Maintenance", desc: "All planned maintenance announced 7+ days in advance." },
      { icon: "Globe2", title: "Region-Specific View", desc: "Filter by data centre — Mumbai, Bangalore, Singapore, London, NY." },
    ],
    ctaTitle: "Subscribe to status updates",
    ctaDesc: "Get email or SMS alerts the moment something needs your attention.",
    ctaLabel: "Subscribe to Status Alerts",
    ctaHref: "mailto:status@kharkan.com?subject=Subscribe%20to%20Status%20Updates",
  },
};
