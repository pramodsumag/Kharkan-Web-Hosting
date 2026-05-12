export interface ServicePlan {
  name: string;
  price: string;
  oldPrice?: string;
  per: string;
  features: string[];
  highlight?: boolean;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  heroImage: string;
  gradient: string;
  accent: string;
  badge: string;
  iconKey:
    | "globe"
    | "wordpress"
    | "domain"
    | "server"
    | "mail"
    | "users"
    | "code"
    | "software"
    | "search"
    | "design";
  stats: { val: string; label: string }[];
  features: { title: string; desc: string; icon: string }[];
  benefits: string[];
  plans: ServicePlan[];
  whyUs: { title: string; desc: string }[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
}

export const services: Record<string, ServiceData> = {
  "web-hosting": {
    slug: "web-hosting",
    name: "Web Hosting",
    tagline: "Lightning-fast Linux hosting trusted by 10 lakh+ Indian websites",
    shortDesc:
      "Premium shared web hosting on LiteSpeed servers with free SSL, free domain, daily backups and 24/7 expert support — starting at just ₹29/mo.",
    longDesc:
      "Kharkan Technology's web hosting is engineered to give your website the speed, security and reliability it deserves. Powered by LiteSpeed web servers, NVMe SSD storage and our 6 globally distributed Tier-3 data centres, every site loads up to 20x faster than traditional Apache hosting. Whether you're launching your first blog, a portfolio, a small business site or a high-traffic eCommerce store, our shared hosting plans scale with you — backed by a 30-day money-back guarantee, free migration and our award-winning Indian support team available round the clock.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    gradient: "from-[#1a237e] via-[#1565c0] to-[#0288d1]",
    accent: "#1565c0",
    badge: "Most Popular",
    iconKey: "globe",
    stats: [
      { val: "20x", label: "Faster Load Time" },
      { val: "99.99%", label: "Uptime SLA" },
      { val: "₹29/mo", label: "Starting Price" },
      { val: "24/7", label: "Indian Support" },
    ],
    features: [
      { icon: "Zap", title: "LiteSpeed Web Server", desc: "Up to 20x faster than Apache with built-in LSCache for instant page loads." },
      { icon: "ShieldCheck", title: "Free SSL Certificate", desc: "Auto-installed Let's Encrypt SSL on every domain — secure your site for free, forever." },
      { icon: "Globe", title: "Free .com Domain", desc: "Get a free domain registration worth ₹999 on all annual plans." },
      { icon: "HardDrive", title: "NVMe SSD Storage", desc: "Pure NVMe drives — 10x faster than standard SSDs for blazing database performance." },
      { icon: "RefreshCw", title: "Daily Auto Backups", desc: "Automated daily backups with 30-day retention. Restore in 1 click — no charges, ever." },
      { icon: "Headphones", title: "24/7 Indian Support", desc: "Real engineers in Madhepura ready to help via chat, email & phone — average response 90 seconds." },
    ],
    benefits: [
      "Free domain name on annual plans",
      "1-click WordPress, Joomla & Drupal install",
      "Free SSL certificate (Let's Encrypt) on all domains",
      "Free site migration by our experts within 24 hours",
      "Unmetered bandwidth on all plans",
      "Cloudflare CDN integration included",
      "DDoS protection & malware scanning",
      "30-day money-back guarantee — no questions asked",
    ],
    plans: [
      {
        name: "Starter",
        price: "₹29",
        oldPrice: "₹145",
        per: "/mo",
        features: [
          "Host 1 Website",
          "30 GB NVMe SSD Storage",
          "Unmetered Bandwidth",
          "Free .com / .in Domain (1st year)",
          "Free SSL Certificate (Let's Encrypt)",
          "3 Professional Email Accounts",
          "10 GB Email Storage",
          "5 MySQL Databases",
          "5 Sub-domains & Parked Domains",
          "LiteSpeed Web Server + LSCache",
          "PHP 8.3 with OPcache",
          "Free Cloudflare CDN",
          "Free Daily Auto Backups",
          "1-Click WordPress Installer",
          "1-Click 450+ App Installer (Softaculous)",
          "Free Website Migration",
          "cPanel Control Panel",
          "Free Email Forwarding",
          "Free Anti-Spam & Anti-Virus",
          "Free Webmail Access",
          "FTP & SFTP Access",
          "DDoS Protection",
          "ImunifyAV Malware Scanner",
          "99.95% Uptime SLA",
          "24/7 Indian Support (Chat, Email, Phone)",
          "30-Day Money-Back Guarantee",
          "GST Invoice Included",
        ],
      },
      {
        name: "Advanced",
        price: "₹49",
        oldPrice: "₹245",
        per: "/mo",
        highlight: true,
        features: [
          "Host 10 Websites",
          "50 GB NVMe SSD Storage",
          "Unmetered Bandwidth",
          "Free .com / .in Domain (1st year)",
          "Free SSL Certificate (Let's Encrypt)",
          "Unlimited Professional Email Accounts",
          "25 GB Email Storage per Account",
          "Unlimited MySQL Databases",
          "Unlimited Sub-domains & Parked Domains",
          "LiteSpeed Web Server + LSCache",
          "PHP 8.3 with OPcache & JIT",
          "Free Cloudflare CDN (Premium)",
          "Free Daily Auto Backups (JetBackup)",
          "1-Click WordPress Installer + Auto Updates",
          "1-Click 450+ App Installer (Softaculous)",
          "Free Website Migration (within 24 hrs)",
          "cPanel Control Panel + Site Tools",
          "Free Email Forwarding & Auto-Responders",
          "Free Anti-Spam, Anti-Virus & Anti-Phishing",
          "Free Webmail Access (3 clients)",
          "FTP, SFTP & SSH Access",
          "Free DDoS Protection (1 Tbps)",
          "ImunifyAV+ Malware Scanner & Cleanup",
          "Free Staging Environment",
          "Free Cron Jobs",
          "WP-CLI & Git Version Control",
          "99.95% Uptime SLA",
          "Priority 24/7 Indian Support",
          "30-Day Money-Back Guarantee",
          "GST Invoice Included",
        ],
      },
      {
        name: "Ultimate",
        price: "₹99",
        oldPrice: "₹495",
        per: "/mo",
        features: [
          "Host Unlimited Websites",
          "Unlimited NVMe SSD Storage",
          "Unmetered Premium Bandwidth",
          "Free .com / .in / .net Domain (1st year)",
          "Free Wildcard SSL Certificate",
          "Unlimited Professional Email Accounts",
          "50 GB Email Storage per Account",
          "Unlimited MySQL Databases",
          "Unlimited Sub-domains & Parked Domains",
          "LiteSpeed Enterprise + LSCache + CloudLinux",
          "PHP 8.3 with OPcache, JIT & Selectable Versions",
          "Free Premium CDN (StackPath + Cloudflare)",
          "Daily + On-Demand Backups (JetBackup Pro)",
          "1-Click WordPress + Managed Auto Updates",
          "1-Click 450+ App Installer (Softaculous Pro)",
          "Free Premium Migration (Same-day)",
          "cPanel + WHM + Advanced Site Tools",
          "Free Email Forwarding, Auto-Responders & Archiving",
          "Premium Anti-Spam (SpamExperts) + Anti-Virus",
          "Free Webmail Access + Mobile Apps",
          "FTP, SFTP, SSH & Git Deploy",
          "Free DDoS Protection (1 Tbps Always-On)",
          "ImunifyAV+ + Malware Cleanup + WAF",
          "Free Staging + Cloning Environments",
          "Free Cron Jobs & Task Scheduler",
          "WP-CLI, Composer, Node.js & Python Support",
          "Free Dedicated IP Address",
          "Free Spam Experts Email Filtering",
          "Site Acceleration + Object Cache",
          "99.99% Uptime SLA (Money-Back if Missed)",
          "Dedicated Indian Support Manager (24/7)",
          "30-Day Money-Back Guarantee",
          "GST Invoice + Free Tax Consultation",
        ],
      },
    ],
    whyUs: [
      { title: "Built on LiteSpeed", desc: "We're one of India's largest LiteSpeed hosts — pages load in under 0.5 seconds for visitors across India." },
      { title: "Indian Data Centre", desc: "Our Mumbai data centre delivers <20ms latency to 80% of Indian internet users." },
      { title: "No Hidden Renewal Hike", desc: "What you pay today is what you pay forever. We never raise renewal prices on existing customers." },
    ],
    faqs: [
      { q: "What is web hosting?", a: "Web hosting is a service that stores your website files on a server and makes them accessible to visitors over the internet 24 hours a day. With Kharkan Technology web hosting, your site is stored on enterprise-grade NVMe SSD servers in India for fastest possible load times." },
      { q: "Do you offer a free domain?", a: "Yes — every annual plan from Power upwards includes a free .com, .in or .net domain registration for the first year (worth up to ₹999)." },
      { q: "Can I migrate my existing website to Kharkan?", a: "Absolutely. Our migration team will move your existing website, emails and databases for free within 24 hours — with zero downtime guaranteed." },
      { q: "Is there a money-back guarantee?", a: "Yes. We offer a 30-day no-questions-asked money-back guarantee on all shared hosting plans." },
      { q: "What kind of support do you provide?", a: "24/7/365 expert support via live chat, email and phone — staffed by certified engineers in our Madhepura office. Average chat response time is under 90 seconds." },
    ],
    seoTitle: "Best Web Hosting in India — From ₹29/mo with Free Domain & SSL",
    seoDesc: "India's fastest LiteSpeed web hosting starting at just ₹29/mo. Free domain, free SSL, daily backups, 99.99% uptime & 24/7 Indian support. 30-day money-back guarantee.",
    seoKeywords: "web hosting India, cheap web hosting, LiteSpeed hosting, free SSL hosting, best Indian hosting, hosting with free domain, ₹29 hosting",
  },

  "domain-registration": {
    slug: "domain-registration",
    name: "Domain Registration",
    tagline: "Register your perfect .in, .com & 400+ TLDs at India's lowest prices",
    shortDesc:
      "Find, register and manage your domain in seconds. Free WHOIS privacy, free DNS management, easy transfers — all from a single dashboard.",
    longDesc:
      "Your domain is your identity on the internet. At Kharkan Technology we make domain registration effortless and affordable — with over 400 TLDs to choose from, including .in, .com, .org, .net, .co, .io, .store and country-specific extensions. Every domain comes with free lifetime WHOIS privacy protection, an intuitive DNS manager, free email forwarding, theft protection lock, and one-click integration with our hosting plans. Whether you're registering your first .in domain or transferring 500 domains from another registrar, our team makes the process seamless and secure.",
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop",
    gradient: "from-[#0d47a1] via-[#1976d2] to-[#42a5f5]",
    accent: "#1976d2",
    badge: "Best Value",
    iconKey: "domain",
    stats: [
      { val: "400+", label: "TLDs Available" },
      { val: "₹99", label: ".in Domain" },
      { val: "Free", label: "WHOIS Privacy" },
      { val: "60s", label: "Activation Time" },
    ],
    features: [
      { icon: "Search", title: "Bulk Domain Search", desc: "Check availability of up to 500 domains at once — perfect for resellers and agencies." },
      { icon: "ShieldCheck", title: "Free WHOIS Privacy", desc: "Hide your personal info from the public WHOIS database — included free for life." },
      { icon: "Lock", title: "Domain Theft Protection", desc: "Registrar lock, two-factor authentication and EPP-code protection prevent unauthorised transfers." },
      { icon: "Settings", title: "Advanced DNS Manager", desc: "Manage A, AAAA, CNAME, MX, TXT, SRV records with global Anycast DNS for lightning lookups." },
      { icon: "Mail", title: "Free Email Forwarding", desc: "Forward unlimited emails from your domain to any inbox — no email hosting required." },
      { icon: "RefreshCw", title: "Easy Auto-Renewal", desc: "Never lose your domain to expiry — set auto-renew once and forget." },
    ],
    benefits: [
      "Lowest prices in India — .in from ₹99, .com from ₹699",
      "400+ TLDs including .in, .com, .org, .net, .co, .io, .store",
      "Free lifetime WHOIS privacy on every domain",
      "1-click integration with hosting & email plans",
      "Free domain transfer with 1-year extension",
      "Bulk registration & bulk DNS editing",
      "Premium domain marketplace with 1M+ listings",
      "Indian Rupee billing & GST invoicing",
    ],
    plans: [
      { name: ".in", price: "₹99", oldPrice: "₹699", per: "/yr", features: ["Free WHOIS Privacy", "Free DNS Manager", "Free Email Forwarding", "Theft Protection Lock", "Auto Renewal"] },
      { name: ".com", price: "₹699", oldPrice: "₹999", per: "/yr", highlight: true, features: ["Free WHOIS Privacy", "Free DNS Manager", "Free Email Forwarding", "Theft Protection Lock", "Auto Renewal", "Premium Support"] },
      { name: ".store", price: "₹299", oldPrice: "₹2999", per: "/yr", features: ["Perfect for eCommerce", "Free WHOIS Privacy", "Free DNS Manager", "Theft Protection", "Free Email Forwarding"] },
    ],
    whyUs: [
      { title: "ICANN Accredited Registrar", desc: "We're an officially ICANN-accredited registrar — your domain is registered directly, not through resellers." },
      { title: "INR Pricing, GST Invoicing", desc: "Pay in Indian Rupees with proper GST invoices — perfect for Indian businesses & startups." },
      { title: "1-Click Hosting Setup", desc: "Connect your domain to Kharkan hosting in one click — DNS auto-configured." },
    ],
    faqs: [
      { q: "How long does it take to register a domain?", a: "Most domains are activated within 60 seconds of payment. Country-specific TLDs like .in are usually live within 5–15 minutes." },
      { q: "Is WHOIS privacy really free?", a: "Yes — completely free for the lifetime of your domain on every TLD that supports privacy. No upsells, no fine print." },
      { q: "Can I transfer my domain from GoDaddy or BigRock?", a: "Yes. Domain transfers are free with Kharkan Technology, and you receive an additional 1-year extension on top of your existing expiry date." },
      { q: "Do I need to buy hosting from Kharkan to use the domain?", a: "No. You can use the domain anywhere. We provide free DNS management so you can point it at any host, email service or third-party platform." },
      { q: "What happens if I forget to renew?", a: "We send 5 reminder emails starting 60 days before expiry. After expiry, you have a 30-day grace period to renew at standard price before the domain enters redemption." },
    ],
    seoTitle: ".in Domain at ₹99 — Cheapest Domain Registration in India",
    seoDesc: "Register .in, .com, .org, .net & 400+ domains at India's lowest prices. Free WHOIS privacy, free DNS, free email forwarding. .in from ₹99/yr, .com from ₹699/yr.",
    seoKeywords: "domain registration India, cheap .in domain, ₹99 domain, buy .com domain, domain registration with WHOIS privacy, ICANN accredited registrar India",
  },

  "wordpress-hosting": {
    slug: "wordpress-hosting",
    name: "WordPress Hosting",
    tagline: "Managed WordPress hosting optimised for speed, security & scale",
    shortDesc:
      "Purpose-built WordPress hosting with LiteSpeed, LSCache, free Jetpack, automatic core & plugin updates and one-click staging — from ₹89/mo.",
    longDesc:
      "WordPress powers 43% of the web — and Kharkan Technology powers WordPress for over 4 lakh Indian websites. Our managed WordPress hosting is fine-tuned at every layer: LiteSpeed web server with LSCache, server-level Object Cache, Brotli compression, HTTP/3 support and PHP 8.3 by default. We handle the boring stuff — automatic WordPress core updates, plugin updates, daily backups, malware scans and uptime monitoring — so you can focus on creating amazing content. One-click staging environments let you safely test changes before pushing to production, and our WordPress experts are on call 24/7 to help with everything from theme issues to performance tuning.",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop",
    gradient: "from-[#311b92] via-[#5e35b1] to-[#7e57c2]",
    accent: "#5e35b1",
    badge: "WordPress Optimised",
    iconKey: "wordpress",
    stats: [
      { val: "4 Lakh+", label: "WP Sites Hosted" },
      { val: "0.4s", label: "Avg Load Time" },
      { val: "1-Click", label: "Staging" },
      { val: "Auto", label: "Updates" },
    ],
    features: [
      { icon: "Zap", title: "LiteSpeed + LSCache", desc: "Server-level WordPress caching — 3x faster than W3 Total Cache or WP Rocket." },
      { icon: "RefreshCw", title: "Auto WordPress Updates", desc: "Core, themes and plugins updated automatically with safe rollback if anything breaks." },
      { icon: "GitBranch", title: "1-Click Staging", desc: "Spin up an exact replica of your live site, test changes, then push live with one click." },
      { icon: "ShieldCheck", title: "Free Jetpack Security", desc: "Real-time malware scanning, brute-force protection and automated security fixes." },
      { icon: "HardDrive", title: "Daily Off-Site Backups", desc: "Encrypted daily backups stored off-site for 30 days — restore any version instantly." },
      { icon: "Headphones", title: "WordPress Experts", desc: "Our support team includes certified WordPress engineers — not generic L1 reps." },
    ],
    benefits: [
      "Pre-installed WordPress with WP-CLI access",
      "PHP 8.3 with OPcache & JIT enabled",
      "Free Jetpack Security plugin license",
      "Free SSL + free CDN by Cloudflare",
      "1-click staging & cloning environments",
      "Automatic WP core, theme & plugin updates",
      "Server-level LSCache (no caching plugin needed)",
      "WordPress-specific malware scanning & cleanup",
    ],
    plans: [
      { name: "WP Starter", price: "₹89", oldPrice: "₹299", per: "/mo", features: ["1 WordPress Site", "10 GB NVMe SSD", "Free SSL & CDN", "Auto Updates", "Daily Backups", "1-Click Staging"] },
      { name: "WP Pro", price: "₹199", oldPrice: "₹599", per: "/mo", highlight: true, features: ["Unlimited WP Sites", "50 GB NVMe SSD", "Free SSL & CDN", "Free Domain", "Auto Updates", "Daily Backups", "1-Click Staging", "Jetpack Security"] },
      { name: "WP Business", price: "₹399", oldPrice: "₹1199", per: "/mo", features: ["Unlimited WP Sites", "100 GB NVMe SSD", "Free SSL & CDN", "Free Domain", "Auto Updates", "Hourly Backups", "Multi-Site Staging", "Jetpack Pro", "Dedicated IP"] },
    ],
    whyUs: [
      { title: "Faster than WP Engine", desc: "Independent benchmarks show our WordPress stack delivers TTFB of 180ms — beating WP Engine, Kinsta and Bluehost." },
      { title: "Made by WordPress Pros", desc: "Our team includes core WordPress contributors and WordCamp speakers — you're in expert hands." },
      { title: "Affordable for Indian Bloggers", desc: "Premium managed WP hosting at 1/10th the price of US providers — billed in INR with GST." },
    ],
    faqs: [
      { q: "What's different about WordPress hosting vs regular hosting?", a: "Managed WordPress hosting is optimised at every layer for WordPress — server-level caching (LSCache), automatic core/plugin updates, WP-specific firewalls, staging environments, and support staff trained specifically on WordPress." },
      { q: "Will my site be faster on Kharkan WP hosting?", a: "Yes — our average WordPress page load is 0.4 seconds. Most customers see 3–10x speed improvements when migrating from cPanel hosting like Bluehost or HostGator." },
      { q: "Do I need to install a caching plugin?", a: "No — LSCache runs at the server level and is 3x faster than any plugin-based cache. We pre-configure it for you." },
      { q: "Can I run WooCommerce on this?", a: "Absolutely. Our WP Pro and WP Business plans are tested for WooCommerce stores up to 10,000 products and 50,000 monthly visitors." },
      { q: "Is migration free?", a: "Yes. Our WordPress migration team will move your site, database, themes, plugins and emails for free within 24 hours." },
    ],
    seoTitle: "Managed WordPress Hosting India — From ₹89/mo with Auto Updates",
    seoDesc: "India's fastest managed WordPress hosting on LiteSpeed servers. Auto updates, 1-click staging, daily backups, free SSL & CDN. From ₹89/mo with free migration.",
    seoKeywords: "WordPress hosting India, managed WordPress hosting, cheap WordPress hosting, LiteSpeed WordPress, WooCommerce hosting India, fastest WP hosting",
  },

  "vps-hosting": {
    slug: "vps-hosting",
    name: "VPS Hosting",
    tagline: "Powerful, scalable VPS hosting with full root access — from ₹499/mo",
    shortDesc:
      "Self-managed and managed VPS hosting on enterprise NVMe SSDs with KVM virtualization, dedicated resources and instant scaling — deployed in 60 seconds.",
    longDesc:
      "When shared hosting isn't enough, our VPS hosting gives you the dedicated power, control and isolation of your own server — at a fraction of the cost. Every VPS runs on KVM virtualization (true hardware-level isolation, not OpenVZ) with guaranteed CPU cores, RAM and NVMe SSD storage. Choose between self-managed (full root, install anything) or fully managed (we handle OS updates, security patching, monitoring and 24/7 support). Deploy in 60 seconds with one-click installations for cPanel, Plesk, WordPress, Magento, Node.js, Docker and more. Scale CPU, RAM and storage in real-time without rebooting — perfect for growing apps and traffic spikes.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    gradient: "from-[#bf360c] via-[#e64a19] to-[#ff7043]",
    accent: "#e64a19",
    badge: "Enterprise Power",
    iconKey: "server",
    stats: [
      { val: "60s", label: "Deploy Time" },
      { val: "100%", label: "Dedicated CPU" },
      { val: "KVM", label: "Virtualization" },
      { val: "99.99%", label: "Uptime SLA" },
    ],
    features: [
      { icon: "Cpu", title: "Dedicated CPU Cores", desc: "Guaranteed 100% of allocated CPU cores — no noisy neighbours, no resource throttling." },
      { icon: "HardDrive", title: "Pure NVMe SSD", desc: "Enterprise NVMe drives with 200,000+ IOPS — perfect for databases & high-traffic sites." },
      { icon: "Server", title: "Full Root Access", desc: "Install any OS, any software, any configuration. SSH access from day one." },
      { icon: "Layers", title: "1-Click Apps", desc: "Deploy cPanel, Plesk, WordPress, Magento, Node.js, Docker or LAMP in one click." },
      { icon: "TrendingUp", title: "Instant Scaling", desc: "Add CPU, RAM or storage live — no reboot, no downtime, no migration." },
      { icon: "ShieldCheck", title: "Free DDoS Protection", desc: "Always-on DDoS mitigation up to 1 Tbps included on every VPS plan." },
    ],
    benefits: [
      "KVM hardware-level virtualization (not OpenVZ)",
      "Full root access — install anything",
      "100% dedicated CPU & RAM resources",
      "NVMe SSD storage with 200,000+ IOPS",
      "Free 1 Tbps DDoS protection",
      "Choice of CentOS, Ubuntu, Debian, AlmaLinux or Windows",
      "1-click cPanel, Plesk, WordPress, Docker installs",
      "Optional fully managed support add-on",
    ],
    plans: [
      { name: "VPS-2", price: "₹499", oldPrice: "₹999", per: "/mo", features: ["2 vCPU Cores", "4 GB RAM", "60 GB NVMe SSD", "2 TB Bandwidth", "1 IPv4 + IPv6", "Full Root Access"] },
      { name: "VPS-4", price: "₹999", oldPrice: "₹1999", per: "/mo", highlight: true, features: ["4 vCPU Cores", "8 GB RAM", "120 GB NVMe SSD", "4 TB Bandwidth", "1 IPv4 + IPv6", "Full Root Access", "Free Backups"] },
      { name: "VPS-8", price: "₹1999", oldPrice: "₹3999", per: "/mo", features: ["8 vCPU Cores", "16 GB RAM", "240 GB NVMe SSD", "8 TB Bandwidth", "2 IPv4 + IPv6", "Full Root Access", "Free Backups", "Free cPanel"] },
    ],
    whyUs: [
      { title: "True KVM Isolation", desc: "Unlike cheap OpenVZ VPS, our KVM hypervisor gives you true hardware isolation — no overselling, no shared kernel." },
      { title: "60-Second Deploy", desc: "From signup to root SSH access in under 60 seconds. No manual provisioning queue." },
      { title: "Indian Data Centre", desc: "Mumbai data centre with <20ms latency to most of India — perfect for Indian SaaS & gaming servers." },
    ],
    faqs: [
      { q: "What's the difference between KVM and OpenVZ VPS?", a: "KVM is true hardware virtualization — each VPS has its own kernel and hardware-level isolation. OpenVZ is container-based and shares the host kernel, leading to overselling and noisy-neighbour issues. Kharkan only uses KVM." },
      { q: "Do I need technical knowledge for a VPS?", a: "Self-managed VPS requires Linux command-line experience. If you prefer to focus on your business, our Managed VPS add-on (₹999/mo) handles OS updates, security patching and monitoring for you." },
      { q: "Can I install cPanel/WHM?", a: "Yes — cPanel/WHM is available as a 1-click install on all VPS plans. cPanel licensing is included free on the VPS-8 plan and above." },
      { q: "How fast can I scale up?", a: "Live scaling of CPU and RAM happens instantly without reboot. Storage upgrades take under 30 seconds with zero downtime." },
      { q: "Is the VPS in India?", a: "Yes — your VPS is hosted in our Tier-3 Mumbai data centre by default. UK, US, Singapore and Sydney locations are also available on request." },
    ],
    seoTitle: "VPS Hosting India — KVM VPS from ₹499/mo with NVMe SSD",
    seoDesc: "True KVM VPS hosting from ₹499/mo. Full root access, NVMe SSD, free DDoS protection, instant deploy, optional managed support. Mumbai data centre.",
    seoKeywords: "VPS hosting India, cheap VPS, KVM VPS, NVMe VPS, managed VPS India, root access VPS, Mumbai VPS hosting",
  },

  "business-email": {
    slug: "business-email",
    name: "Business Email",
    tagline: "Professional email @yourdomain.com — secure, ad-free & spam-protected",
    shortDesc:
      "Premium business email hosting with 50 GB per mailbox, world-class anti-spam, calendar sync, mobile apps and 99.9% uptime — from ₹49/user/mo.",
    longDesc:
      "First impressions matter. A professional email address like yourname@yourcompany.com builds instant trust with customers — far more than @gmail or @yahoo. Kharkan Technology Business Email gives you enterprise-grade email hosting at a fraction of Microsoft 365 or Google Workspace pricing. Each mailbox includes 50 GB storage, world-class anti-spam (powered by SpamExperts blocking 99.99% of spam), calendar & contact sync via CalDAV/CardDAV, full IMAP/POP3/SMTP support, mobile apps for iOS and Android, and an elegant browser webmail. Set up in 5 minutes with our domain integration — your email runs on India's most reliable mail infrastructure with 99.9% guaranteed uptime.",
    heroImage:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop",
    gradient: "from-[#4a148c] via-[#7b1fa2] to-[#ab47bc]",
    accent: "#7b1fa2",
    badge: "Professional",
    iconKey: "mail",
    stats: [
      { val: "50 GB", label: "Per Mailbox" },
      { val: "99.99%", label: "Spam Blocked" },
      { val: "₹49", label: "Per User/mo" },
      { val: "5 min", label: "Setup Time" },
    ],
    features: [
      { icon: "Mail", title: "Professional Webmail", desc: "Beautiful modern webmail with dark mode, snooze, schedule send and undo send." },
      { icon: "ShieldCheck", title: "World-Class Anti-Spam", desc: "SpamExperts blocks 99.99% of spam, phishing & malware before it reaches your inbox." },
      { icon: "Smartphone", title: "iOS & Android Apps", desc: "Native mobile apps with push notifications, offline mode and biometric unlock." },
      { icon: "Calendar", title: "Calendar & Contacts Sync", desc: "Full CalDAV/CardDAV support — sync seamlessly across all devices." },
      { icon: "Lock", title: "End-to-End Encryption", desc: "TLS in transit, AES-256 at rest, and optional PGP encryption support." },
      { icon: "Archive", title: "Email Archiving", desc: "Tamper-proof email archiving for compliance — retain emails for up to 10 years." },
    ],
    benefits: [
      "50 GB storage per mailbox (vs 15 GB on free Gmail)",
      "Email at @yourdomain.com — not @kharkan.com",
      "Free anti-spam, anti-virus & anti-phishing",
      "Native iOS, Android, Windows, Mac apps",
      "IMAP, POP3, SMTP, Exchange ActiveSync",
      "Calendar, contacts & tasks sync",
      "Out-of-office auto-responders",
      "Free email migration from any provider",
    ],
    plans: [
      { name: "Email Lite", price: "₹49", oldPrice: "₹99", per: "/user/mo", features: ["10 GB Storage", "Webmail Access", "IMAP/POP3/SMTP", "Anti-Spam Filter", "Mobile Apps"] },
      { name: "Email Pro", price: "₹99", oldPrice: "₹199", per: "/user/mo", highlight: true, features: ["50 GB Storage", "Webmail + Mobile", "Calendar & Contacts", "Anti-Spam + Anti-Virus", "Email Archiving (1yr)", "Auto-Responders"] },
      { name: "Email Premium", price: "₹199", oldPrice: "₹399", per: "/user/mo", features: ["100 GB Storage", "Webmail + Mobile", "Calendar & Contacts", "Anti-Spam + Anti-Virus", "Email Archiving (10yr)", "PGP Encryption", "Priority Support"] },
    ],
    whyUs: [
      { title: "Cheaper than Workspace", desc: "Get Workspace-level features at 1/3rd the price — perfect for Indian SMBs and startups." },
      { title: "Indian Data Residency", desc: "Your email is stored in our Mumbai data centre — DPDP Act compliant for Indian businesses." },
      { title: "Free Migration", desc: "We migrate your emails from Gmail, Outlook, Zoho or any provider for free within 24 hours." },
    ],
    faqs: [
      { q: "Can I use my existing domain?", a: "Yes — Business Email works with any domain you own. Just point your MX records to us (we provide step-by-step instructions or do it for you free)." },
      { q: "How is this different from free Gmail?", a: "You get email at @yourdomain.com instead of @gmail.com — far more professional. Plus 50 GB storage, no ads, no inbox tabs forced on you, business-grade anti-spam, and full email ownership (we never read your emails for advertising)." },
      { q: "Will my emails work on the iPhone Mail app?", a: "Yes — full IMAP/SMTP and Exchange ActiveSync support means it works flawlessly on iPhone Mail, Apple Mail, Outlook, Thunderbird and our own Kharkan Mail app." },
      { q: "Can I migrate from Google Workspace?", a: "Absolutely. Our migration tool moves all your emails, contacts, calendars and labels from Google Workspace, Microsoft 365, Zoho or any IMAP provider — for free." },
      { q: "Is this DPDP Act compliant?", a: "Yes — your email data is stored in our Mumbai data centre with full encryption at rest and in transit, meeting DPDP Act 2023 requirements for Indian businesses." },
    ],
    seoTitle: "Business Email Hosting — Professional Email @yourdomain from ₹49",
    seoDesc: "Professional business email hosting from ₹49/user/mo. 50 GB per mailbox, 99.99% spam protection, mobile apps, calendar sync. DPDP-compliant Indian data centre.",
    seoKeywords: "business email India, professional email hosting, custom domain email, cheap business email, alternative to Google Workspace, email at yourdomain India",
  },

  "reseller-hosting": {
    slug: "reseller-hosting",
    name: "Reseller Hosting",
    tagline: "Launch your own white-label hosting business with zero infrastructure",
    shortDesc:
      "Sell hosting under your own brand with WHMCS, free WHM/cPanel, free SSL, white-label DNS and 24/7 backend support — start earning from day one.",
    longDesc:
      "Become a hosting provider without buying servers. Kharkan Technology Reseller Hosting gives you a complete turn-key hosting business — LiteSpeed-powered cPanel servers, free WHMCS billing platform, free SSL on every customer account, white-labeled DNS nameservers (ns1.yourbrand.com), unlimited cPanel accounts, and our 24/7 expert team handling all your backend technical issues. Set your own pricing, brand everything in your colours, and keep 100% of your customer relationships. Perfect for web designers, developers, agencies and anyone wanting to build a recurring revenue hosting business with zero capital expenditure.",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
    gradient: "from-[#006064] via-[#0097a7] to-[#26c6da]",
    accent: "#0097a7",
    badge: "Earn Recurring",
    iconKey: "users",
    stats: [
      { val: "Free", label: "WHMCS License" },
      { val: "100%", label: "White Label" },
      { val: "Unlimited", label: "cPanel Accounts" },
      { val: "60%", label: "Avg Margin" },
    ],
    features: [
      { icon: "Tag", title: "White-Label Branding", desc: "Your brand, your nameservers, your control panel — customers never see Kharkan." },
      { icon: "Layers", title: "Free WHMCS Billing", desc: "Industry-standard billing & automation platform included free (worth ₹2000/mo)." },
      { icon: "Server", title: "Free WHM/cPanel", desc: "Industry-standard hosting control panel for you and your customers — no extra license fees." },
      { icon: "ShieldCheck", title: "Free SSL on All Sites", desc: "Auto-installed AutoSSL Let's Encrypt on every customer account — no setup, no charges." },
      { icon: "RefreshCw", title: "Free Daily Backups", desc: "JetBackup with 30-day retention on every reseller plan — restore in 1 click." },
      { icon: "Headphones", title: "24/7 Backend Support", desc: "Our team handles your technical escalations — you focus on selling, we handle the servers." },
    ],
    benefits: [
      "White-label nameservers (ns1.yourbrand.com)",
      "Free WHMCS license (worth ₹2000/mo)",
      "Free WHM + cPanel for all customer accounts",
      "Auto SSL on every customer domain",
      "Unlimited cPanel accounts (Pro plan)",
      "JetBackup daily off-site backups",
      "Free migration of your existing reseller business",
      "24/7 expert backend support included",
    ],
    plans: [
      { name: "Reseller Start", price: "₹599", oldPrice: "₹1499", per: "/mo", features: ["50 cPanel Accounts", "100 GB NVMe SSD", "1 TB Bandwidth", "Free WHM/cPanel", "Free AutoSSL", "Free WHMCS"] },
      { name: "Reseller Pro", price: "₹1199", oldPrice: "₹2999", per: "/mo", highlight: true, features: ["Unlimited cPanel Accounts", "300 GB NVMe SSD", "Unmetered Bandwidth", "Free WHM/cPanel", "Free AutoSSL", "Free WHMCS", "JetBackup", "Free Migration"] },
      { name: "Reseller Max", price: "₹2399", oldPrice: "₹4999", per: "/mo", features: ["Unlimited cPanel Accounts", "1 TB NVMe SSD", "Unmetered Bandwidth", "Free WHM/cPanel", "Free AutoSSL", "Free WHMCS", "JetBackup", "Free Migration", "Dedicated IP"] },
    ],
    whyUs: [
      { title: "Built for Indian Resellers", desc: "INR pricing, GST invoicing and a dedicated reseller success manager — exclusive to Indian resellers." },
      { title: "100% White Label", desc: "Customers see your brand only — your logo on cPanel, your nameservers, your invoices." },
      { title: "60% Profit Margins", desc: "Most resellers achieve 60–80% gross margins by reselling our infrastructure under their brand." },
    ],
    faqs: [
      { q: "Do I need technical skills to run a reseller business?", a: "Not really. WHMCS automates customer signups, billing, renewals and cPanel provisioning. Our 24/7 support team handles all server-side technical escalations from your customers (white-labeled, of course)." },
      { q: "Will my customers know I'm using Kharkan?", a: "No. With white-label nameservers (ns1.yourbrand.com), branded cPanel skins and Kharkan's branding completely hidden, your customers see your brand only." },
      { q: "Can I set my own pricing?", a: "Absolutely. You decide the pricing, packages, currencies and add-ons. Most resellers charge 2–4x what they pay us — that's your margin." },
      { q: "Is WHMCS really free?", a: "Yes — a fully-licensed WHMCS installation is included free with every reseller plan, worth ₹2000/mo on its own." },
      { q: "Can you migrate my existing reseller business?", a: "Yes. We provide free migration of unlimited cPanel accounts from your existing reseller host (HostGator, ResellerClub, GoDaddy, etc) within 24 hours." },
    ],
    seoTitle: "Reseller Hosting India — White Label cPanel from ₹599/mo with WHMCS",
    seoDesc: "Start your own hosting business with white-label reseller hosting from ₹599/mo. Free WHMCS, free WHM/cPanel, free AutoSSL, unlimited cPanel accounts. Earn 60%+ margins.",
    seoKeywords: "reseller hosting India, white label hosting, WHMCS reseller, cPanel reseller, start hosting business India, cheap reseller hosting",
  },

  "web-development": {
    slug: "web-development",
    name: "Web Development",
    tagline: "Custom website & web app development by India's top engineering team",
    shortDesc:
      "From corporate websites to complex SaaS platforms — we design, build and ship modern, blazing-fast web applications. Starting from ₹14,999.",
    longDesc:
      "Kharkan Technology's in-house web development studio has designed and built over 2,000 websites and web apps for clients across India and 40 countries. We don't use templates — every project is custom-designed and hand-coded by our 80-person engineering team using the latest stack: React, Next.js, Node.js, TypeScript, Tailwind CSS, Postgres and modern DevOps. Whether you need a 5-page corporate website, a 50,000-product eCommerce store, a multi-tenant SaaS platform, or a complex internal business tool, we deliver pixel-perfect designs and bulletproof code on time and on budget. Every project includes free hosting for the first year, free SSL, free CDN, and 90 days of post-launch support.",
    heroImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=600&fit=crop",
    gradient: "from-[#1b5e20] via-[#388e3c] to-[#66bb6a]",
    accent: "#388e3c",
    badge: "Custom Built",
    iconKey: "code",
    stats: [
      { val: "2000+", label: "Sites Delivered" },
      { val: "80", label: "Engineers" },
      { val: "40+", label: "Countries Served" },
      { val: "4.9/5", label: "Client Rating" },
    ],
    features: [
      { icon: "Code", title: "Modern Tech Stack", desc: "React, Next.js, TypeScript, Tailwind CSS — built for 2026 and beyond." },
      { icon: "Smartphone", title: "Mobile-First Design", desc: "Every site is designed mobile-first and tested across 50+ device/browser combinations." },
      { icon: "Zap", title: "Sub-Second Load Times", desc: "Lighthouse scores >95 guaranteed — we obsess over Core Web Vitals & SEO performance." },
      { icon: "Search", title: "SEO-Ready Out of the Box", desc: "Schema.org markup, sitemaps, OG tags, semantic HTML — ready to rank from day one." },
      { icon: "Layers", title: "Headless CMS Options", desc: "Sanity, Strapi, Contentful or WordPress — we'll recommend the right CMS for your team." },
      { icon: "ShieldCheck", title: "Secure & Compliant", desc: "OWASP Top 10 compliance, GDPR/DPDP-ready and enterprise-grade security audits." },
    ],
    benefits: [
      "Custom design — no templates, no themes",
      "Built by India's top React & Next.js engineers",
      "Mobile-responsive across all devices",
      "Lighthouse score >95 guaranteed",
      "SEO-optimised semantic HTML & schema",
      "Free hosting for the first year (worth ₹12,000)",
      "90 days free post-launch bug fixes & support",
      "Source code & full ownership delivered",
    ],
    plans: [
      { name: "Starter Site", price: "₹14,999", oldPrice: "₹29,999", per: "one-time", features: ["5 Pages", "Custom Design", "Mobile Responsive", "Contact Form", "SEO Setup", "Free Hosting (1 yr)"] },
      { name: "Business Site", price: "₹49,999", oldPrice: "₹89,999", per: "one-time", highlight: true, features: ["15 Pages", "Custom Design + CMS", "Blog + Newsletter", "Live Chat Integration", "Advanced SEO", "Free Hosting (1 yr)", "90 Days Support"] },
      { name: "Custom App", price: "₹1,49,999+", per: "project", features: ["Unlimited Pages/Screens", "Custom Web App", "Database & Backend", "User Authentication", "Payment Integration", "API Development", "1 Year Support"] },
    ],
    whyUs: [
      { title: "In-House Team, Not Freelancers", desc: "Our 80 engineers are full-time employees — no outsourced freelancers, no language barriers, no surprises." },
      { title: "Fixed Price, Fixed Timeline", desc: "We give you a binding fixed quote and timeline upfront. No scope-creep surprises mid-project." },
      { title: "Source Code Ownership", desc: "You own 100% of the source code, designs and IP. Hosted in your GitHub from day one." },
    ],
    faqs: [
      { q: "How long does a typical website take?", a: "A 5-page Starter Site takes 2 weeks. A 15-page Business Site takes 4–5 weeks. Custom web apps typically take 8–16 weeks depending on complexity." },
      { q: "Do you provide design or just development?", a: "Both. Our team includes full-time UI/UX designers who create custom mockups in Figma, which you approve before any code is written." },
      { q: "Will I own the source code?", a: "Yes — 100%. We deliver the full source code, designs (Figma files), database, and complete documentation. Hosted in your GitHub from day one." },
      { q: "What technologies do you use?", a: "Modern, future-proof stack: React, Next.js, TypeScript, Tailwind CSS for frontend; Node.js, Express, Postgres, Redis for backend; AWS or Kharkan Cloud for hosting." },
      { q: "What if I want changes after launch?", a: "We include 90 days of free bug fixes and minor tweaks post-launch. After that, we offer monthly retainer plans starting at ₹9,999/mo for ongoing development." },
    ],
    seoTitle: "Web Development Company India — Custom Websites from ₹14,999",
    seoDesc: "India's top web development company. Custom websites, eCommerce stores & web apps built on React, Next.js & WordPress. Fixed price, fixed timeline. From ₹14,999.",
    seoKeywords: "web development company India, custom website development, React Next.js development, web app development India, ecommerce development India, hire web developer",
  },

  "software-development": {
    slug: "software-development",
    name: "Software Development",
    tagline: "Custom software, SaaS platforms & enterprise applications — built to scale",
    shortDesc:
      "End-to-end software development for startups & enterprises — SaaS, ERP, CRM, mobile apps, AI/ML and DevOps. From MVP in 8 weeks to enterprise-grade systems.",
    longDesc:
      "Kharkan Technology's software development division builds mission-critical software for over 300 enterprises and 1,500 startups across India, the US, UK, and Singapore. From rapid MVPs that get funded, to multi-tenant SaaS platforms serving millions of users, to enterprise ERP systems integrating with SAP and Oracle — our 120-person engineering team has the breadth and depth to deliver. We specialise in cloud-native architectures (AWS, GCP, Azure), microservices, containerisation (Docker, Kubernetes), AI/ML integration, real-time systems and DevOps. Engagements range from fixed-price MVPs to dedicated long-term engineering teams (squad-as-a-service). Every project follows agile methodology with weekly demos, full code reviews, automated testing and CI/CD pipelines.",
    heroImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=600&fit=crop",
    gradient: "from-[#01579b] via-[#0288d1] to-[#4fc3f7]",
    accent: "#0288d1",
    badge: "Enterprise Grade",
    iconKey: "software",
    stats: [
      { val: "1500+", label: "Startups Served" },
      { val: "300+", label: "Enterprise Clients" },
      { val: "120", label: "Engineers" },
      { val: "ISO 27001", label: "Certified" },
    ],
    features: [
      { icon: "Code", title: "Full-Stack Engineering", desc: "Frontend, backend, mobile, infrastructure — one team, one accountable delivery." },
      { icon: "Cloud", title: "Cloud-Native Architecture", desc: "Microservices on AWS, GCP or Azure with auto-scaling, multi-region failover and 99.99% uptime." },
      { icon: "Cpu", title: "AI & ML Integration", desc: "OpenAI, Anthropic, custom LLM fine-tuning, computer vision, recommendation engines." },
      { icon: "Smartphone", title: "Mobile Apps", desc: "Native iOS (Swift), native Android (Kotlin), cross-platform (React Native, Flutter) — your choice." },
      { icon: "GitBranch", title: "DevOps & CI/CD", desc: "Automated testing, GitHub Actions, Docker, Kubernetes — from commit to production in minutes." },
      { icon: "ShieldCheck", title: "Security & Compliance", desc: "ISO 27001 certified processes, SOC 2 ready code, GDPR/DPDP/HIPAA compliance built-in." },
    ],
    benefits: [
      "ISO 27001 certified development processes",
      "Agile delivery with weekly demos & sprint reviews",
      "Dedicated project manager + tech lead",
      "Full source code, IP & infrastructure ownership",
      "Automated testing (>90% coverage) on every project",
      "CI/CD pipelines & DevOps included",
      "Post-launch SLA & 24/7 incident response",
      "Flexible engagement: fixed price, T&M or dedicated squad",
    ],
    plans: [
      { name: "MVP Sprint", price: "₹4,99,999", per: "8 weeks", features: ["Discovery + Design", "Core MVP Build", "Cloud Deployment", "User Auth & Payments", "Admin Dashboard", "Source Code Ownership", "30 Days Support"] },
      { name: "Full Product", price: "₹14,99,999+", per: "project", highlight: true, features: ["Full Discovery + UX", "Web + Mobile App", "Backend + APIs", "AI/ML Integration", "DevOps & CI/CD", "Load & Security Testing", "90 Days Support"] },
      { name: "Dedicated Squad", price: "₹6,99,999", per: "/mo", features: ["1 Tech Lead", "3 Senior Engineers", "1 QA Engineer", "1 DevOps Engineer", "1 Designer", "Daily Standups", "Long-term Engagement"] },
    ],
    whyUs: [
      { title: "Senior Engineers, Not Juniors", desc: "Our average engineer has 7+ years of experience. We never staff projects with bootcamp grads or interns." },
      { title: "ISO 27001 Certified", desc: "Our development processes, source-code handling and data security are independently audited and certified." },
      { title: "Funding-Ready Code", desc: "Code quality high enough to pass technical due diligence by Sequoia, Accel and Tiger Global — proven on 200+ startup rounds." },
    ],
    faqs: [
      { q: "Can you build an MVP in 8 weeks?", a: "Yes — our MVP Sprint delivers a working product in 8 weeks for a fixed price of ₹4,99,999. We've used this process for 600+ funded startups." },
      { q: "Do you sign NDAs?", a: "Always. NDAs are signed before any technical discussion, and our employees sign individual NDAs as well. ISO 27001 process audits guarantee enforcement." },
      { q: "Who owns the IP and source code?", a: "You do — 100%. Source code is hosted in your GitHub from day one. We retain zero rights to your IP, codebase or business logic." },
      { q: "What's the difference between fixed price and dedicated squad?", a: "Fixed price is best for well-defined projects with clear scope (MVP, redesign, migration). Dedicated squad is best for long-term product development where requirements evolve — gives you a full team for 6+ months." },
      { q: "Do you have references?", a: "Yes — we provide 5+ client references on request, including conversations with their CTOs about our work, communication, and delivery quality." },
    ],
    seoTitle: "Software Development Company India — SaaS, MVP & Enterprise Apps",
    seoDesc: "ISO 27001 certified software development for startups & enterprises. SaaS, MVP, mobile apps, AI/ML & DevOps. From ₹4.99 lakh MVP to dedicated engineering squads.",
    seoKeywords: "software development company India, SaaS development, MVP development India, custom software development, hire software developers India, dedicated development team",
  },

  "seo-services": {
    slug: "seo-services",
    name: "SEO Services",
    tagline: "Get to page 1 of Google with India's most data-driven SEO agency",
    shortDesc:
      "Full-stack SEO services — technical audits, on-page optimisation, link building, local SEO and content. Average client ranks on page 1 within 6 months.",
    longDesc:
      "Kharkan Technology's SEO division has helped over 800 Indian businesses rank #1 on Google for their most valuable keywords. We don't sell SEO packages — we sell results. Every engagement starts with a deep technical audit (Core Web Vitals, crawl errors, schema, mobile-first indexing), followed by a custom 12-month roadmap covering on-page optimisation, content strategy, technical fixes, high-authority link building, and local SEO. Our team includes Google-certified specialists, ex-Google engineers and content strategists who have ranked clients across 40+ industries from SaaS to eCommerce to real estate. Monthly transparent reporting with real keyword ranks, organic traffic growth and revenue attribution — no vanity metrics.",
    heroImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=600&fit=crop",
    gradient: "from-[#e65100] via-[#f57c00] to-[#ffb74d]",
    accent: "#f57c00",
    badge: "Rank #1",
    iconKey: "search",
    stats: [
      { val: "800+", label: "Clients Ranked" },
      { val: "6 mo", label: "Avg Time to P1" },
      { val: "187%", label: "Avg Traffic Lift" },
      { val: "40+", label: "Industries Served" },
    ],
    features: [
      { icon: "Search", title: "Technical SEO Audit", desc: "200-point audit covering Core Web Vitals, schema, indexing, sitemap, robots.txt and crawl health." },
      { icon: "FileText", title: "On-Page Optimisation", desc: "Title tags, meta, heading structure, internal linking, image alt text and schema markup." },
      { icon: "Link2", title: "Authority Link Building", desc: "High-DA backlinks from real Indian publications, guest posts and digital PR campaigns." },
      { icon: "MapPin", title: "Local & GMB SEO", desc: "Google Business Profile optimisation, local citations and review management for local businesses." },
      { icon: "PenTool", title: "Content Strategy", desc: "Keyword research, content calendars and SEO-optimised long-form content writing." },
      { icon: "BarChart2", title: "Transparent Reporting", desc: "Monthly reports showing real keyword ranks, organic traffic, leads and revenue attribution." },
    ],
    benefits: [
      "Free 200-point technical SEO audit",
      "Custom 12-month SEO roadmap",
      "Google-certified SEO specialists",
      "Real keyword tracking (no vanity metrics)",
      "High-authority backlinks from DA 50+ sites",
      "Local SEO + Google Business Profile management",
      "Monthly transparent reporting with revenue attribution",
      "No long-term lock-in contracts",
    ],
    plans: [
      { name: "SEO Starter", price: "₹19,999", oldPrice: "₹29,999", per: "/mo", features: ["10 Target Keywords", "Technical Audit", "On-Page SEO (10 pages)", "5 Backlinks/mo", "Monthly Report", "Email Support"] },
      { name: "SEO Growth", price: "₹49,999", oldPrice: "₹79,999", per: "/mo", highlight: true, features: ["30 Target Keywords", "Technical Audit", "On-Page SEO (30 pages)", "20 Backlinks/mo", "Content Writing (4 articles)", "GMB Optimisation", "Bi-weekly Reports", "Dedicated Manager"] },
      { name: "SEO Enterprise", price: "₹1,49,999", per: "/mo", features: ["100+ Target Keywords", "Full Technical Audit", "Unlimited On-Page SEO", "60 Backlinks/mo", "Content (10 articles)", "Local SEO", "Digital PR", "Weekly Reports", "Dedicated Team"] },
    ],
    whyUs: [
      { title: "Result-Based Engagements", desc: "We commit to specific keyword rankings in writing. If we miss targets, you don't pay the next month." },
      { title: "Google-Certified Team", desc: "Our specialists hold Google Analytics, Google Ads and Search Console certifications, plus SEMrush and Ahrefs." },
      { title: "No Black-Hat Shortcuts", desc: "We follow Google's E-E-A-T guidelines strictly. Your rankings will survive every Google algorithm update." },
    ],
    faqs: [
      { q: "How long until I see results?", a: "Most clients see meaningful keyword movement within 60–90 days. Page-1 rankings for competitive keywords typically take 4–8 months. We provide weekly progress updates." },
      { q: "Do you guarantee #1 rankings?", a: "We guarantee specific rank improvements in writing for non-branded competitive keywords. Anyone promising #1 in a month is selling fake SEO — Google doesn't work that way." },
      { q: "What industries do you serve?", a: "40+ industries including SaaS, eCommerce, real estate, healthcare, education, finance, legal and B2B services." },
      { q: "Do you do local SEO?", a: "Yes — Google Business Profile optimisation, local citations, review management and local landing pages are included in our Growth and Enterprise plans." },
      { q: "What's included in monthly reporting?", a: "Real keyword rank tracking (SEMrush + Ahrefs), organic traffic growth, top landing pages, backlinks acquired, content published, and revenue attribution via Google Analytics 4." },
    ],
    seoTitle: "SEO Services India — Rank #1 on Google with Data-Driven SEO Agency",
    seoDesc: "India's leading SEO agency. Technical SEO, on-page optimisation, link building & local SEO. 800+ clients ranked. Average client on page 1 in 6 months. From ₹19,999/mo.",
    seoKeywords: "SEO services India, SEO agency India, best SEO company India, hire SEO expert, local SEO services, ecommerce SEO India, technical SEO audit",
  },

  "web-design": {
    slug: "web-design",
    name: "Web Design",
    tagline: "Beautiful, conversion-focused web design that wins customers",
    shortDesc:
      "Award-winning custom web design, branding, UI/UX and motion design — crafted by India's top creative studio. From ₹19,999.",
    longDesc:
      "Great design isn't decoration — it's the difference between visitors and customers. Kharkan Technology's design studio combines world-class craft with conversion psychology to create websites that don't just look stunning, they sell. Our 25-person design team includes ex-Apple, ex-Adobe and ex-Razorpay designers, and we've shipped award-winning work for over 600 brands across India and 30 countries. Every project starts with deep brand discovery, followed by mood boards, low-fi wireframes, high-fidelity Figma mockups, prototype testing with real users, and finally pixel-perfect HTML/CSS handoff to our development team. We specialise in branding, web design, mobile UI/UX, motion design and design systems for SaaS, eCommerce and consumer brands.",
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&h=600&fit=crop",
    gradient: "from-[#880e4f] via-[#c2185b] to-[#ec407a]",
    accent: "#c2185b",
    badge: "Award Winning",
    iconKey: "design",
    stats: [
      { val: "600+", label: "Brands Designed" },
      { val: "25", label: "Designers" },
      { val: "12", label: "Awwwards Won" },
      { val: "4.9/5", label: "Client Rating" },
    ],
    features: [
      { icon: "Palette", title: "Brand Identity Design", desc: "Logos, colour systems, typography, brand guidelines — a complete identity that scales." },
      { icon: "LayoutTemplate", title: "Conversion-Focused Web Design", desc: "Beautiful designs engineered for conversion using A/B-tested patterns and psychology." },
      { icon: "Layers", title: "UI/UX Design Systems", desc: "Scalable design systems in Figma with components, tokens and developer handoff." },
      { icon: "Smartphone", title: "Mobile App Design", desc: "Pixel-perfect iOS & Android UI/UX with Material Design and Human Interface Guidelines." },
      { icon: "Image", title: "Social Media Creatives", desc: "Branded creatives for Instagram, LinkedIn, YouTube — content calendars included." },
      { icon: "Video", title: "Motion & Animation", desc: "Lottie animations, micro-interactions, hero videos and brand animation reels." },
    ],
    benefits: [
      "Award-winning design team (12 Awwwards wins)",
      "Custom design — never templated",
      "User research & A/B testing built into process",
      "Figma design system with developer handoff",
      "Mobile-first responsive design",
      "Brand guidelines document delivered",
      "3 rounds of revisions included",
      "100% IP & source files ownership",
    ],
    plans: [
      { name: "Logo + Brand", price: "₹19,999", oldPrice: "₹39,999", per: "one-time", features: ["Custom Logo (3 concepts)", "Colour Palette", "Typography System", "Brand Guidelines (10 pages)", "Social Media Kit", "Source Files (Ai/Figma)"] },
      { name: "Website Design", price: "₹49,999", oldPrice: "₹89,999", per: "one-time", highlight: true, features: ["Up to 10 Page Designs", "Mobile + Desktop", "User Research", "High-Fidelity Figma Mockups", "Interactive Prototype", "Design System", "3 Revision Rounds"] },
      { name: "Full Brand + Web", price: "₹99,999", oldPrice: "₹1,79,999", per: "one-time", features: ["Logo + Brand Identity", "20 Page Web Design", "Mobile + Desktop", "Mobile App UI (10 screens)", "Design System in Figma", "Motion Design", "Social Media Templates", "Brand Guidelines (30 pages)"] },
    ],
    whyUs: [
      { title: "Award-Winning Studio", desc: "12 Awwwards, 8 CSS Design Awards and Featured by Behance, Dribbble and Adobe Live." },
      { title: "Designers from Top Brands", desc: "Our team includes ex-Apple, ex-Adobe, ex-Razorpay and ex-CRED designers — world-class talent in your corner." },
      { title: "Conversion-Focused", desc: "We design for results, not awards. Every design decision is backed by user research, A/B testing and conversion psychology." },
    ],
    faqs: [
      { q: "How long does a typical design project take?", a: "Logo + Brand: 2–3 weeks. Website Design: 4–5 weeks. Full Brand + Web: 6–8 weeks. We give a fixed timeline upfront in writing." },
      { q: "How many revisions do I get?", a: "All packages include 3 rounds of revisions per phase (concept, draft, final). Additional rounds are available at ₹4,999/round." },
      { q: "Do you do mobile app design?", a: "Yes — our Full Brand + Web package includes 10 mobile app screens. Standalone mobile app UI/UX projects start at ₹39,999." },
      { q: "Will I get the source files?", a: "Yes — you receive all source files (Figma, Adobe Illustrator, Photoshop), brand guidelines PDF and complete IP ownership." },
      { q: "Can your designers work with our development team?", a: "Absolutely. We provide developer-ready Figma files with components, design tokens, spacing specs, asset exports and a dedicated handoff session." },
    ],
    seoTitle: "Web Design Services India — Award-Winning Design Studio from ₹19,999",
    seoDesc: "Award-winning web design, branding, UI/UX & motion design from India's top creative studio. 600+ brands designed. 12 Awwwards. From ₹19,999. 100% custom.",
    seoKeywords: "web design India, web design agency, UI UX design India, logo design India, branding services India, custom website design, mobile app design India",
  },
};

export const serviceList = Object.values(services);
