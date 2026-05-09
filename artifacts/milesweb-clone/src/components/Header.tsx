import { useState } from "react";
import {
  ChevronDown, Menu, X, Globe, LayoutTemplate, Briefcase, Users, Cloud,
  Shield, ShoppingCart, Server, HardDrive, Zap, Mail, AtSign, RefreshCw,
  Headphones, BookOpen, MessageCircle, Phone, Info, UserSquare, Award, Rss,
} from "lucide-react";

const hostingMenu = [
  { icon: Globe,          label: "Shared Hosting",     desc: "Perfect for new websites",       href: "#plans" },
  { icon: LayoutTemplate, label: "WordPress Hosting",  desc: "Optimized for WordPress",         href: "#plans" },
  { icon: Briefcase,      label: "Business Hosting",   desc: "For growing businesses",          href: "#plans" },
  { icon: Users,          label: "Reseller Hosting",   desc: "Start your hosting business",     href: "#plans" },
  { icon: Cloud,          label: "Cloud Hosting",      desc: "Scalable cloud solutions",        href: "#plans" },
];

const wordpressMenu = [
  { icon: Shield,        label: "Managed WordPress",   desc: "Fully managed & auto-updated",    href: "#plans" },
  { icon: LayoutTemplate,label: "WordPress Hosting",   desc: "Affordable & blazing fast",       href: "#plans" },
  { icon: ShoppingCart,  label: "WooCommerce Hosting", desc: "Built for online stores",         href: "#plans" },
];

const vpsMenu = [
  { icon: Server,    label: "VPS Hosting",       desc: "Full root access, scalable",     href: "#" },
  { icon: HardDrive, label: "Dedicated Servers", desc: "Maximum power & performance",    href: "#" },
  { icon: Zap,       label: "Cloud VPS",         desc: "Cloud-powered virtual servers",  href: "#" },
];

const domainMenu = [
  { icon: Globe,       label: "Domain Registration", desc: "Find your perfect domain",     href: "#" },
  { icon: RefreshCw,   label: "Domain Transfer",     desc: "Move your domain to us",       href: "#" },
  { icon: Mail,        label: "Business Email",      desc: "Professional email hosting",   href: "#" },
  { icon: AtSign,      label: "G Suite",             desc: "Google Workspace for business",href: "#" },
];

const supportMenu = [
  { icon: BookOpen,      label: "Help Center",    desc: "Browse guides & tutorials",      href: "#" },
  { icon: MessageCircle, label: "Contact Us",     desc: "Chat or email our team",         href: "/contact" },
  { icon: Headphones,    label: "Live Chat",      desc: "Talk to support instantly",      href: "#" },
  { icon: Phone,         label: "Knowledge Base", desc: "Step-by-step articles",          href: "#" },
];

const aboutMenu = [
  { icon: Info,        label: "About Kharkan Technology", desc: "Our story & mission",     href: "/about" },
  { icon: UserSquare,  label: "Our Team",                desc: "Meet the leadership",       href: "/about#team" },
  { icon: Award,       label: "Careers",                 desc: "Join our growing team",     href: "#" },
  { icon: Rss,         label: "Blog",                    desc: "Hosting tips & updates",    href: "#" },
];

type MenuItem = { icon: React.FC<{ size?: number; className?: string }>; label: string; desc: string; href: string };

function MegaDropdown({ items, wide = false }: { items: MenuItem[]; wide?: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 py-3 ${
        wide ? "min-w-[480px] grid grid-cols-2 gap-0.5 px-2" : "min-w-[240px] flex flex-col px-2"
      }`}
    >
      {items.map(({ icon: Icon, label, desc, href }) => (
        <a
          key={label}
          href={href}
          className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 group transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
            <Icon size={15} className="text-[#1565c0]" />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-gray-800 group-hover:text-[#1565c0] transition-colors leading-tight">
              {label}
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">{desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

const navConfig = [
  { label: "Hosting",       menu: hostingMenu,   wide: true  },
  { label: "WordPress",     menu: wordpressMenu, wide: false },
  { label: "VPS & Dedicated", menu: vpsMenu,     wide: false },
  { label: "Domain & Email",  menu: domainMenu,  wide: false },
  { label: "Pricing",       menu: null,          wide: false },
  { label: "Support",       menu: supportMenu,   wide: false },
  { label: "About Us",      menu: aboutMenu,     wide: false },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 xl:px-4 flex items-center justify-between h-14 xl:h-16 gap-2">

        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 shrink-0 min-w-0" data-testid="link-logo">
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-base sm:text-lg xl:text-xl font-bold text-[#1a237e] whitespace-nowrap">
              Kharkan Technology
            </span>
            <span className="hidden sm:block text-[8px] xl:text-[9px] text-gray-500 tracking-wide whitespace-nowrap">
              Your Web Hosting, Our Responsibility.
            </span>
          </div>
          <span className="text-base xl:text-lg shrink-0">🇮🇳</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center">
          {navConfig.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.menu && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-0.5 px-2.5 py-2 text-[13px] text-gray-700 font-medium hover:text-[#1565c0] transition-colors rounded-md hover:bg-blue-50 whitespace-nowrap"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                {item.menu && <ChevronDown size={12} className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />}
              </button>

              {item.menu && openMenu === item.label && (
                <MegaDropdown items={item.menu} wide={item.wide} />
              )}
            </div>
          ))}
        </nav>

        {/* Right actions — desktop */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a
            href="#"
            className="text-[13px] font-medium text-gray-700 hover:text-[#1565c0] transition-colors px-2.5 py-2 whitespace-nowrap"
            data-testid="link-my-account"
          >
            My Account
          </a>
          <a
            href="#plans"
            className="bg-[#1565c0] text-white text-[13px] font-semibold px-4 py-2 rounded-md hover:bg-[#1251a3] transition-colors whitespace-nowrap"
            data-testid="button-get-started"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: Get Started + hamburger */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          <a
            href="#plans"
            className="hidden sm:inline-block bg-[#1565c0] text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-[#1251a3] transition-colors whitespace-nowrap"
            data-testid="button-tablet-get-started"
          >
            Get Started
          </a>
          <button
            className="p-1.5 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navConfig.map((item) => (
              <div key={item.label}>
                {item.menu ? (
                  <>
                    <button
                      className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-md flex items-center justify-between transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 mb-1 border-l-2 border-blue-100 pl-3 space-y-0.5">
                        {item.menu.map(({ icon: Icon, label, href }) => (
                          <a
                            key={label}
                            href={href}
                            className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-[#1565c0] transition-colors"
                          >
                            <Icon size={13} className="text-[#1565c0] shrink-0" />
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
              <a
                href="#"
                className="block w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-md transition-colors"
                data-testid="link-mobile-my-account"
              >
                My Account
              </a>
              <a
                href="#plans"
                className="block text-center bg-[#1565c0] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#1251a3] transition-colors"
                data-testid="button-mobile-get-started"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
