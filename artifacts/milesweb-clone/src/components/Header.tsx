import { useState, useRef, useEffect } from "react";
import {
  ChevronDown, Menu, X,
  Globe, LayoutTemplate, Briefcase, Users, Cloud,
  Shield, ShoppingCart, Server, HardDrive, Zap,
  Mail, AtSign, RefreshCw, Headphones, BookOpen,
  MessageCircle, Phone, Info, UserSquare, Award, Rss,
  ArrowRight, Sparkles, Star,
  Search, FileText, Settings, MapPin, Link2,
  Palette, Layers, Image, Video, PenTool, Code,
  TrendingUp, Share2, MousePointer, BarChart2, Send,
} from "lucide-react";

/* ─────────────────────────── types ─────────────────────────── */
type Badge = "Popular" | "New" | "Best Value" | "Fast";
interface NavItem {
  icon: React.FC<{ size?: number; className?: string }>;
  label: string;
  desc: string;
  href: string;
  badge?: Badge;
  iconBg?: string;
}

/* ────────────────────────── menu data ──────────────────────── */
const hostingItems: NavItem[] = [
  { icon: Globe,          label: "Web Hosting",       desc: "Perfect for new websites & blogs",     href: "/web-hosting",       badge: "Popular",    iconBg: "from-blue-500 to-blue-600" },
  { icon: LayoutTemplate, label: "WordPress Hosting", desc: "Blazing-fast WP with 1-click install", href: "/wordpress-hosting", badge: "Best Value", iconBg: "from-purple-500 to-purple-600" },
  { icon: Briefcase,      label: "Business Email",    desc: "Professional @yourdomain email",       href: "/business-email",                       iconBg: "from-indigo-500 to-indigo-600" },
  { icon: Users,          label: "Reseller Hosting",  desc: "Launch your own hosting business",     href: "/reseller-hosting",                     iconBg: "from-cyan-500 to-cyan-600" },
  { icon: Cloud,          label: "VPS Hosting",       desc: "Full root access, SSD-powered",        href: "/vps-hosting",       badge: "New",        iconBg: "from-sky-500 to-sky-600" },
];

const wordpressItems: NavItem[] = [
  { icon: Shield,         label: "Managed WordPress",   desc: "Auto-updates, backups & staging",     href: "/wordpress-hosting", badge: "Popular",    iconBg: "from-blue-600 to-indigo-600" },
  { icon: LayoutTemplate, label: "WordPress Hosting",   desc: "LiteSpeed-powered, ultra-affordable", href: "/wordpress-hosting", badge: "Best Value", iconBg: "from-purple-500 to-purple-600" },
  { icon: ShoppingCart,   label: "WooCommerce Hosting", desc: "Built for high-traffic online stores", href: "/wordpress-hosting",                    iconBg: "from-green-500 to-emerald-600" },
];

const vpsItems: NavItem[] = [
  { icon: Server,    label: "VPS Hosting",       desc: "Full root access, SSD-powered",    href: "/vps-hosting", iconBg: "from-orange-500 to-orange-600" },
  { icon: HardDrive, label: "Dedicated Servers", desc: "Maximum power & isolation",        href: "/vps-hosting", iconBg: "from-red-500 to-red-600" },
  { icon: Zap,       label: "Cloud VPS",         desc: "Elastic cloud virtual servers",    href: "/vps-hosting", iconBg: "from-yellow-500 to-amber-600" },
];

const domainItems: NavItem[] = [
  { icon: Globe,     label: "Domain Registration", desc: "Find your perfect .in, .com & more", href: "/domain-registration", iconBg: "from-blue-500 to-blue-600" },
  { icon: RefreshCw, label: "Domain Transfer",     desc: "Move your domain, keep your price",  href: "/domain-registration", iconBg: "from-teal-500 to-teal-600" },
  { icon: Mail,      label: "Business Email",      desc: "Professional @yourdomain email",     href: "/business-email",      iconBg: "from-purple-500 to-purple-600" },
  { icon: AtSign,    label: "G Suite / Workspace", desc: "Google Workspace at great prices",   href: "/business-email",      iconBg: "from-red-400 to-red-500" },
];

const supportItems: NavItem[] = [
  { icon: BookOpen,       label: "Help Center",    desc: "Guides, FAQs & tutorials",        href: "#",        iconBg: "from-blue-500 to-blue-600" },
  { icon: MessageCircle,  label: "Contact Us",     desc: "Chat, email or call our team",    href: "/contact", iconBg: "from-green-500 to-green-600" },
  { icon: Headphones,     label: "Live Chat",      desc: "Instant support, 24/7/365",       href: "#",        iconBg: "from-purple-500 to-purple-600" },
  { icon: Phone,          label: "Knowledge Base", desc: "Step-by-step technical articles", href: "#",        iconBg: "from-cyan-500 to-cyan-600" },
];

const aboutItems: NavItem[] = [
  { icon: Info,        label: "About Kharkan",  desc: "Our story, mission & values",    href: "/about",       iconBg: "from-blue-500 to-blue-600" },
  { icon: UserSquare,  label: "Our Team",       desc: "Meet the leadership behind us",  href: "/about#team",  iconBg: "from-indigo-500 to-indigo-600" },
  { icon: Award,       label: "Careers",        desc: "Join our 500-person strong team", href: "#",           iconBg: "from-amber-500 to-orange-500" },
  { icon: Rss,         label: "Blog",           desc: "Hosting tips & company news",    href: "#",            iconBg: "from-green-500 to-green-600" },
];

const seoItems: NavItem[] = [
  { icon: Search,    label: "SEO Services",       desc: "Full website health & ranking analysis",     href: "/seo-services", badge: "Popular",   iconBg: "from-orange-500 to-red-500" },
  { icon: FileText,  label: "On-Page SEO",        desc: "Keywords, meta tags & content optimisation", href: "/seo-services",                     iconBg: "from-amber-500 to-orange-500" },
  { icon: Settings,  label: "Technical SEO",      desc: "Speed, schema markup & crawlability",        href: "/seo-services",                     iconBg: "from-slate-500 to-gray-600" },
  { icon: MapPin,    label: "Local SEO",          desc: "Google My Business & local citations",       href: "/seo-services", badge: "New",       iconBg: "from-green-500 to-emerald-600" },
  { icon: Link2,     label: "Link Building",      desc: "High-authority backlinks & DA boost",        href: "/seo-services",                     iconBg: "from-purple-500 to-indigo-600" },
];

const designItems: NavItem[] = [
  { icon: LayoutTemplate, label: "Web Design",       desc: "Custom responsive website design",       href: "/web-design",          badge: "Popular",  iconBg: "from-blue-500 to-cyan-500" },
  { icon: Code,           label: "Web Development",  desc: "React, Next.js & WordPress development", href: "/web-development",                        iconBg: "from-green-500 to-emerald-600" },
  { icon: Palette,        label: "Logo & Branding",  desc: "Professional logo & brand identity kit", href: "/web-design",                             iconBg: "from-pink-500 to-rose-500" },
  { icon: Layers,         label: "Software Dev",     desc: "Custom SaaS, MVP & enterprise apps",     href: "/software-development", badge: "New",     iconBg: "from-violet-500 to-purple-600" },
  { icon: Image,          label: "Social Graphics",  desc: "Branded creatives for all platforms",    href: "/web-design",                             iconBg: "from-teal-500 to-cyan-600" },
  { icon: Video,          label: "Motion & Video",   desc: "Animated ads, reels & brand videos",     href: "/web-design",                             iconBg: "from-red-500 to-orange-500" },
];

const marketingItems: NavItem[] = [
  { icon: MousePointer,  label: "Google Ads / PPC",       desc: "ROI-focused search & display campaigns",  href: "/contact", badge: "Popular",  iconBg: "from-blue-600 to-blue-500" },
  { icon: Share2,        label: "Social Media Marketing", desc: "Facebook, Instagram, LinkedIn growth",     href: "/contact",                  iconBg: "from-pink-600 to-purple-600" },
  { icon: PenTool,       label: "Content Marketing",      desc: "SEO blogs, articles & copywriting",       href: "/contact", badge: "New",      iconBg: "from-emerald-500 to-teal-600" },
  { icon: Send,          label: "Email Marketing",        desc: "Campaigns, drip sequences & automation",  href: "/contact",                  iconBg: "from-amber-500 to-yellow-500" },
  { icon: BarChart2,     label: "Analytics & Reporting",  desc: "GA4 dashboards & monthly ROI reports",    href: "/contact",                  iconBg: "from-slate-600 to-gray-700" },
];

/* ─────────────── badge component ─────────────── */
const badgeStyles: Record<Badge, string> = {
  Popular:    "bg-blue-100 text-blue-700",
  "Best Value":"bg-amber-100 text-amber-700",
  New:        "bg-green-100 text-green-700",
  Fast:       "bg-purple-100 text-purple-700",
};
function Badge({ type }: { type: Badge }) {
  return (
    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide ${badgeStyles[type]}`}>
      {type}
    </span>
  );
}

/* ─────────────── single menu row ─────────────── */
function MenuRow({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group transition-all duration-150"
    >
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.iconBg ?? "from-blue-500 to-blue-600"} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-150`}>
        <item.icon size={15} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] font-semibold text-gray-800 group-hover:text-[#1565c0] transition-colors leading-tight">
            {item.label}
          </span>
          {item.badge && <Badge type={item.badge} />}
        </div>
        <div className="text-[11px] text-gray-400 mt-0.5 leading-tight truncate">{item.desc}</div>
      </div>
      <ArrowRight size={12} className="text-gray-300 group-hover:text-[#1565c0] group-hover:translate-x-0.5 transition-all shrink-0" />
    </a>
  );
}

/* ────────────── hosting mega menu ────────────── */
function HostingMegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] border border-gray-100 z-50 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#1565c0] to-blue-400 w-full" />
      <div className="flex">
        {/* Left — items */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hosting Solutions</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="space-y-0.5">
            {hostingItems.map((item) => <MenuRow key={item.label} item={item} />)}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 px-1">
            <a href="https://kharkan.com/dash/index.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#1565c0] hover:text-[#1251a3] transition-colors">
              <span>View all hosting plans</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
        {/* Right — featured card */}
        <div className="w-[200px] bg-gradient-to-br from-[#1a237e] to-[#1565c0] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={13} className="text-yellow-300" />
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Featured Deal</span>
            </div>
            <div className="text-white text-sm font-bold leading-tight mb-1">Starter Hosting</div>
            <div className="text-blue-200 text-[11px] leading-relaxed mb-3">Free domain + SSL included</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-yellow-300 text-xl font-black">₹39</span>
              <span className="text-blue-300 text-xs">/mo</span>
            </div>
            <div className="text-blue-300 text-[10px] line-through mb-3">₹199/mo</div>
            <div className="inline-flex items-center gap-1 bg-yellow-400 text-[#1a237e] text-[10px] font-black px-2 py-0.5 rounded-full">
              <Star size={9} fill="currentColor" />
              80% OFF
            </div>
          </div>
          <a
            href="https://kharkan.com/dash/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-white text-[#1565c0] text-[12px] font-bold py-2.5 rounded-xl text-center hover:bg-blue-50 transition-colors flex items-center justify-center gap-1.5"
          >
            Get Started <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────── wordpress mega menu ────────────── */
function WordPressMegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] border border-gray-100 z-50 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[#21759b] via-purple-500 to-indigo-500 w-full" />
      <div className="flex">
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WordPress Solutions</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="space-y-0.5">
            {wordpressItems.map((item) => <MenuRow key={item.label} item={item} />)}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 px-1">
            <a href="https://kharkan.com/dash/index.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#1565c0] hover:text-[#1251a3] transition-colors">
              <span>Explore WordPress plans</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
        {/* Right — WP card */}
        <div className="w-[190px] bg-gradient-to-br from-[#21759b] to-purple-700 p-5 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <LayoutTemplate size={20} className="text-white" />
            </div>
            <div className="text-white text-sm font-bold leading-tight mb-1">Managed WordPress</div>
            <div className="text-blue-200 text-[11px] leading-relaxed mb-3">Auto-updates, staging & daily backups</div>
            <div className="flex items-baseline gap-1">
              <span className="text-yellow-300 text-xl font-black">₹69</span>
              <span className="text-blue-300 text-xs">/mo</span>
            </div>
          </div>
          <a
            href="https://kharkan.com/dash/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-white text-purple-700 text-[12px] font-bold py-2.5 rounded-xl text-center hover:bg-purple-50 transition-colors flex items-center justify-center gap-1.5"
          >
            Try Now <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────── SEO & Design mega menu ────────────── */
function SeoDesignMegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] border border-gray-100 z-50 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 w-full" />
      <div className="flex">
        {/* SEO column */}
        <div className="flex-1 p-4 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Search size={10} className="text-white" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SEO Services</span>
          </div>
          <div className="space-y-0.5">
            {seoItems.map((item) => <MenuRow key={item.label} item={item} />)}
          </div>
        </div>
        {/* Design column */}
        <div className="flex-1 p-4 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <Palette size={10} className="text-white" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Design Services</span>
          </div>
          <div className="space-y-0.5">
            {designItems.map((item) => <MenuRow key={item.label} item={item} />)}
          </div>
        </div>
        {/* Marketing column */}
        <div className="flex-1 p-4 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <TrendingUp size={10} className="text-white" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Marketing</span>
          </div>
          <div className="space-y-0.5">
            {marketingItems.map((item) => <MenuRow key={item.label} item={item} />)}
          </div>
        </div>
        {/* Right promo panel */}
        <div className="w-[190px] bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 p-5 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={13} className="text-yellow-300" />
              <span className="text-[10px] font-bold text-pink-200 uppercase tracking-widest">Free Consultation</span>
            </div>
            <div className="text-white text-sm font-bold leading-tight mb-2">Grow your business online</div>
            <div className="text-pink-200 text-[11px] leading-relaxed mb-4">SEO + Design + Marketing — all under one roof at Kharkan Technology.</div>
            <ul className="space-y-1.5">
              {["Free SEO Audit", "30-min Strategy Call", "No commitment"].map((t) => (
                <li key={t} className="flex items-center gap-1.5 text-[11px] text-pink-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/contact"
            className="mt-4 w-full bg-white text-purple-700 text-[12px] font-bold py-2.5 rounded-xl text-center hover:bg-purple-50 transition-colors flex items-center justify-center gap-1.5"
          >
            Get Free Audit <ArrowRight size={12} />
          </a>
        </div>
      </div>
      {/* Bottom strip */}
      <div className="border-t border-gray-100 bg-gray-50 px-5 py-2.5 flex items-center justify-between">
        <span className="text-[11px] text-gray-400">Trusted by 10,000+ businesses across India</span>
        <a href="/contact" className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 hover:text-purple-800 transition-colors">
          View all services <ArrowRight size={10} />
        </a>
      </div>
    </div>
  );
}

/* ────────────── standard drop menu ────────────── */
function StandardMenu({ items, accentFrom, accentTo }: { items: NavItem[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[270px] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] border border-gray-100 z-50 overflow-hidden">
      <div className={`h-1 bg-gradient-to-r ${accentFrom} ${accentTo} w-full`} />
      <div className="p-3 space-y-0.5">
        {items.map((item) => <MenuRow key={item.label} item={item} />)}
      </div>
    </div>
  );
}

/* ─────────────────── nav config ─────────────────── */
type MenuType = "hosting" | "wordpress" | "standard" | "seodesign" | "link";
interface NavConfig {
  label: string;
  type: MenuType;
  items?: NavItem[];
  accentFrom?: string;
  accentTo?: string;
  href?: string;
}

const navConfig: NavConfig[] = [
  { label: "Hosting",         type: "hosting" },
  { label: "WordPress",       type: "wordpress" },
  { label: "VPS & Dedicated", type: "standard",   items: vpsItems,    accentFrom: "from-orange-500", accentTo: "to-red-500" },
  { label: "Domain & Email",  type: "standard",   items: domainItems, accentFrom: "from-blue-400",   accentTo: "to-teal-500" },
  { label: "SEO & Design",    type: "seodesign" },
  { label: "Support",         type: "standard",   items: supportItems, accentFrom: "from-green-500", accentTo: "to-cyan-500" },
  { label: "About Us",        type: "standard",   items: aboutItems,   accentFrom: "from-indigo-500", accentTo: "to-purple-500" },
];

/* ─────────────────── header ─────────────────── */
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 100);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 xl:px-4 flex items-center justify-between h-14 xl:h-16 gap-2">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 min-w-0 group" data-testid="link-logo">
          {/* KT logomark */}
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-sm sm:text-base xl:text-[17px] font-extrabold text-[#1a237e] whitespace-nowrap tracking-tight">
              Kharkan Technology
            </span>
            <span className="hidden sm:block text-[8px] xl:text-[9px] font-semibold text-emerald-500 tracking-wide whitespace-nowrap">
              Your Web Hosting, Our Responsibility.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center">
          {navConfig.map((nav) => (
            <div
              key={nav.label}
              className="relative"
              onMouseEnter={() => nav.type !== "link" && handleMouseEnter(nav.label)}
              onMouseLeave={handleMouseLeave}
            >
              {nav.type === "link" ? (
                <a
                  href={nav.href ?? "#"}
                  className="flex items-center px-3 py-2 text-[13px] text-gray-700 font-medium hover:text-[#1565c0] transition-colors rounded-lg hover:bg-blue-50 whitespace-nowrap"
                  data-testid={`nav-${nav.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {nav.label}
                </a>
              ) : (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors rounded-lg whitespace-nowrap ${
                    openMenu === nav.label
                      ? "text-[#1565c0] bg-blue-50"
                      : "text-gray-700 hover:text-[#1565c0] hover:bg-blue-50"
                  }`}
                  data-testid={`nav-${nav.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {nav.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${openMenu === nav.label ? "rotate-180 text-[#1565c0]" : "text-gray-400"}`}
                  />
                </button>
              )}

              {/* Dropdown panels */}
              {openMenu === nav.label && (
                <div
                  onMouseEnter={() => handleMouseEnter(nav.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {nav.type === "hosting"   && <HostingMegaMenu />}
                  {nav.type === "wordpress" && <WordPressMegaMenu />}
                  {nav.type === "seodesign" && <SeoDesignMegaMenu />}
                  {nav.type === "standard"  && nav.items && (
                    <StandardMenu items={nav.items} accentFrom={nav.accentFrom!} accentTo={nav.accentTo!} />
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA — desktop */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a
            href="https://kharkan.com/dash/index.php?rp=/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1a237e] border border-[#1a237e]/20 bg-blue-50 hover:bg-blue-100 hover:border-[#1a237e]/40 transition-all px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-sm"
            data-testid="link-my-account"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            My Account
          </a>
          <a
            href="https://kharkan.com/dash/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#1a237e] to-[#1565c0] text-white text-[13px] font-semibold px-5 py-2 rounded-xl hover:from-[#1251a3] hover:to-[#0d47a1] transition-all shadow-sm hover:shadow-md whitespace-nowrap flex items-center gap-1.5"
            data-testid="button-get-started"
          >
            Get Started <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile: condensed CTA + hamburger */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          <a
            href="https://kharkan.com/dash/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-[#1a237e] to-[#1565c0] text-white text-xs font-semibold px-3.5 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            data-testid="button-tablet-get-started"
          >
            Get Started
          </a>
          <button
            className="p-2 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5">
            {navConfig.map((nav) => (
              <div key={nav.label}>
                {nav.type === "link" ? (
                  <a
                    href={nav.href ?? "#"}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    {nav.label}
                  </a>
                ) : (
                  <>
                    <button
                      className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-xl flex items-center justify-between transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === nav.label ? null : nav.label)}
                    >
                      <span>{nav.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 text-gray-400 ${mobileExpanded === nav.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpanded === nav.label && (
                      <div className="ml-3 mt-1 mb-1 border-l-2 border-blue-100 pl-3 space-y-0.5">
                        {(nav.type === "hosting" ? hostingItems : nav.type === "wordpress" ? wordpressItems : nav.type === "seodesign" ? [...seoItems, ...designItems, ...marketingItems] : nav.items ?? []).map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:text-[#1565c0] hover:bg-blue-50 transition-colors"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.iconBg ?? "from-blue-500 to-blue-600"} flex items-center justify-center shrink-0`}>
                              <item.icon size={11} className="text-white" />
                            </div>
                            <span>{item.label}</span>
                            {item.badge && <Badge type={item.badge} />}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
              <a
                href="https://kharkan.com/dash/index.php?rp=/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-[#1a237e] bg-blue-50 border border-[#1a237e]/20 rounded-xl hover:bg-blue-100 transition-colors"
                data-testid="link-mobile-my-account"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                My Account
              </a>
              <a
                href="https://kharkan.com/dash/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a237e] to-[#1565c0] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
                data-testid="button-mobile-get-started"
                onClick={() => setMobileOpen(false)}
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
