import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Hosting",
    children: ["Shared Hosting", "WordPress Hosting", "Business Hosting", "Reseller Hosting", "Cloud Hosting"],
  },
  {
    label: "WordPress",
    children: ["Managed WordPress", "WordPress Hosting", "WooCommerce Hosting"],
  },
  {
    label: "VPS & Dedicated",
    children: ["VPS Hosting", "Dedicated Servers", "Cloud VPS"],
  },
  {
    label: "Domain & Email",
    children: ["Domain Registration", "Domain Transfer", "Business Email", "G Suite"],
  },
  { label: "Pricing", children: [] },
  {
    label: "Support",
    children: ["Help Center", "Contact Us|/contact", "Live Chat", "Knowledge Base"],
  },
  {
    label: "About Us",
    children: ["About Kharkan Technology", "Our Team", "Careers", "Blog"],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 xl:px-4 flex items-center justify-between h-14 xl:h-16 gap-2">

        {/* Logo — scales down on smaller screens */}
        <a
          href="/"
          className="flex items-center gap-1.5 shrink-0 min-w-0"
          data-testid="link-logo"
        >
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-base sm:text-lg xl:text-xl font-bold text-[#1a237e] whitespace-nowrap">
              Kharkan Technology
            </span>
            <span className="hidden sm:block text-[8px] xl:text-[9px] text-gray-500 tracking-wide whitespace-nowrap">
              Your Hosting, Our Responsibility.
            </span>
          </div>
          <span className="text-base xl:text-lg shrink-0">🇮🇳</span>
        </a>

        {/* Desktop Nav — only shown on xl+ */}
        <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-0.5 px-2.5 py-2 text-[13px] text-gray-700 font-medium hover:text-[#1565c0] transition-colors rounded-md hover:bg-blue-50 whitespace-nowrap"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown size={12} />}
              </button>
              {item.children.length > 0 && openMenu === item.label && (
                <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-xl min-w-48 py-2 mt-1 z-50">
                  {item.children.map((child) => {
                    const [label, href] = child.includes("|") ? child.split("|") : [child, "#"];
                    return (
                      <a
                        key={label}
                        href={href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1565c0] transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
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

        {/* Tablet: show condensed "Get Started" button + hamburger */}
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

      {/* Mobile / Tablet dropdown menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-md flex items-center justify-between transition-colors"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  <span>{item.label}</span>
                  {item.children.length > 0 && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {openMenu === item.label && item.children.length > 0 && (
                  <div className="ml-4 mt-1 mb-1 border-l-2 border-blue-100 pl-3 space-y-0.5">
                    {item.children.map((child) => {
                      const [label, href] = child.includes("|") ? child.split("|") : [child, "#"];
                      return (
                        <a
                          key={label}
                          href={href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#1565c0] transition-colors"
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Divider */}
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
