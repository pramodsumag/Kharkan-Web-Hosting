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
    children: ["Help Center", "Contact Us", "Live Chat", "Knowledge Base"],
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
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-[#1a237e]">Kharkan Technology</span>
            <span className="text-[9px] text-gray-500 tracking-wide">Your Hosting, Our Responsibility.</span>
          </div>
          <span className="text-lg">🇮🇳</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 font-medium hover:text-[#1565c0] transition-colors rounded-md hover:bg-blue-50"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown size={14} />}
              </button>
              {item.children.length > 0 && openMenu === item.label && (
                <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-xl min-w-48 py-2 mt-1">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1565c0] transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#1565c0] transition-colors px-3 py-2"
            data-testid="link-my-account"
          >
            My Account
          </a>
          <a
            href="#plans"
            className="bg-[#1565c0] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#1251a3] transition-colors"
            data-testid="button-get-started"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1565c0] flex items-center justify-between"
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown size={14} />}
              </button>
              {openMenu === item.label && item.children.length > 0 && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block py-1.5 text-sm text-gray-600 hover:text-[#1565c0]"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#plans"
            className="block text-center bg-[#1565c0] text-white text-sm font-semibold px-5 py-2.5 rounded-md mt-4"
            data-testid="button-mobile-get-started"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
