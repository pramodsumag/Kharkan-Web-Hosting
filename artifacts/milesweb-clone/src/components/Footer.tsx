const links = {
  Hosting: [
    "Shared Hosting|/web-hosting",
    "WordPress Hosting|/wordpress-hosting",
    "Business Hosting|/business-hosting",
    "Reseller Hosting|/reseller-hosting",
    "Cloud Hosting|/cloud-hosting",
    "VPS Hosting|/vps-hosting",
    "Dedicated Servers|/dedicated-servers",
  ],
  Domains: [
    "Domain Registration|/domain-registration",
    "Domain Transfer|/domain-transfer",
    "Bulk Domain Search|/bulk-domain-search",
    "Domain Renewal|/domain-renewal",
    "WHOIS Lookup|/whois-lookup",
    "Business Email|/business-email",
  ],
  Company: [
    "About Us|/about",
    "Our Team|/about#team",
    "Careers|/careers",
    "Blog|/blog",
    "Press|/press",
    "Partners|/partners",
    "Affiliates|/affiliates",
  ],
  Support: [
    "Help Center|/help-center",
    "Contact Us|/contact",
    "Live Chat|/live-chat",
    "Knowledge Base|/knowledge-base",
    "Video Tutorials|/video-tutorials",
    "System Status|/system-status",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1240] text-white">
      {/* CTA Strip */}
      <div className="bg-[#1565c0] py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-1">Ready to launch your website?</h3>
            <p className="text-blue-200 text-sm">Get started today with 80% off + free domain. Cancel anytime.</p>
          </div>
          <a
            href="https://kharkan.com/user/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1565c0] font-bold text-sm px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors shrink-0 w-full sm:w-auto text-center"
            data-testid="button-footer-cta"
          >
            Start Now — ₹29/mo
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-3">
              <div className="text-xl font-extrabold text-white">Kharkan Technology</div>
              <div className="text-xs text-blue-300 mt-0.5">Your Web Hosting, Our Responsibility.</div>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed mb-4 max-w-xs">
              India's leading web hosting company, serving over 1 million websites since 2012.
            </p>
            <div className="flex gap-2.5">
              {["📘", "🐦", "📸", "▶️", "💼"].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-white/20 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-white mb-3">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => {
                  const [label, href] = item.includes("|") ? item.split("|") : [item, "#"];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-xs text-blue-300 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods — beautiful section */}
      <div className="border-t border-white/10 bg-[#0a0f38]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              {/* Shield icon */}
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 16.42 7.42 20.55 12 22C16.58 20.55 20 16.42 20 12V6L12 2Z" fill="#10b981" opacity="0.3"/>
                  <path d="M12 2L4 6V12C4 16.42 7.42 20.55 12 22C16.58 20.55 20 16.42 20 12V6L12 2Z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">100% Secure Payments</p>
                <p className="text-blue-400 text-xs mt-0.5">256-bit SSL encrypted · PCI-DSS compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[11px] font-semibold">All transactions encrypted</span>
            </div>
          </div>

          {/* Payment cards grid */}
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">

            {/* VISA */}
            <div className="group relative h-12 w-[88px] bg-gradient-to-br from-[#1a1f71] to-[#12166b] rounded-xl border border-white/10 flex items-center justify-center hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/40 transition-all duration-200 cursor-default">
              <svg viewBox="0 0 72 24" width="48" height="16" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
                <text x="0" y="19" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fontStyle="italic" fill="white" letterSpacing="1">VISA</text>
              </svg>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Mastercard */}
            <div className="group relative h-12 w-[88px] bg-gradient-to-br from-[#1c1c1c] to-[#111] rounded-xl border border-white/10 flex items-center justify-center hover:border-white/30 hover:shadow-lg hover:shadow-black/40 transition-all duration-200 cursor-default">
              <svg width="40" height="26" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
                <circle cx="15" cy="13" r="11" fill="#EB001B"/>
                <circle cx="25" cy="13" r="11" fill="#F79E1B" opacity="0.9"/>
                <path d="M20 4.8a11 11 0 0 1 0 16.4A11 11 0 0 1 20 4.8z" fill="#FF5F00"/>
              </svg>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* RuPay */}
            <div className="group relative h-12 w-[88px] bg-gradient-to-br from-[#003580] to-[#002060] rounded-xl border border-white/10 flex items-center justify-center hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/40 transition-all duration-200 cursor-default">
              <div className="flex flex-col items-center leading-none">
                <span className="text-white font-extrabold text-[13px] tracking-tight">RuPay</span>
                <div className="flex gap-[2px] mt-0.5">
                  <div className="w-4 h-[3px] rounded-full bg-[#F7941D]" />
                  <div className="w-2 h-[3px] rounded-full bg-white/40" />
                </div>
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* UPI */}
            <div className="group relative h-12 w-[88px] bg-white rounded-xl border border-gray-100 flex items-center justify-center hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/30 transition-all duration-200 cursor-default">
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L7 7H10V17L12 19L14 17V7H17L12 2Z" fill="#6B2D8B"/>
                  <path d="M5 10L3 12L5 14" stroke="#6B2D8B" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M19 10L21 12L19 14" stroke="#00A0E3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-[13px] font-extrabold text-[#6B2D8B] tracking-wide">UPI</span>
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* PhonePe */}
            <div className="group relative h-12 w-[100px] bg-gradient-to-br from-[#5f259f] to-[#3d1669] rounded-xl border border-purple-500/20 flex items-center justify-center gap-1.5 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/40 transition-all duration-200 cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8.5C7 7.12 8.12 6 9.5 6H14.5C16.43 6 18 7.57 18 9.5C18 11.43 16.43 13 14.5 13H11V17.5H9V8.5ZM11 11H14.5C15.33 11 16 10.33 16 9.5C16 8.67 15.33 8 14.5 8H11V11Z" fill="white"/>
              </svg>
              <span className="text-white text-[12px] font-bold tracking-tight">PhonePe</span>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Paytm */}
            <div className="group relative h-12 w-[88px] bg-white rounded-xl border border-gray-100 flex items-center justify-center hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/30 transition-all duration-200 cursor-default">
              <span className="text-[14px] font-extrabold tracking-tight">
                <span className="text-[#00BAF2]">Pay</span><span className="text-[#002970]">tm</span>
              </span>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Google Pay */}
            <div className="group relative h-12 w-[100px] bg-white rounded-xl border border-gray-100 flex items-center justify-center gap-1.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-200 cursor-default">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 10.93v2.87h4.47c-.19 1.03-.77 1.9-1.63 2.48l2.63 2.04c1.53-1.41 2.41-3.49 2.41-5.97 0-.58-.05-1.14-.14-1.68L11.99 10.93z" fill="#4285F4"/>
                <path d="M5.84 14.3a6.98 6.98 0 0 1 0-4.6L3.2 7.66a10.02 10.02 0 0 0 0 8.68l2.64-2.04z" fill="#FBBC05"/>
                <path d="M11.99 5.5c1.78 0 3.37.61 4.63 1.82l2.45-2.45C17.07 2.92 14.73 2 11.99 2 8.04 2 4.61 4.18 2.8 7.44l2.64 2.04c.82-2.44 3.11-4 6.55-4z" fill="#EA4335"/>
                <path d="M5.84 14.3l-2.64 2.04C4.61 19.82 8.04 22 11.99 22c2.74 0 5.07-.9 6.77-2.45l-2.63-2.04c-.83.56-1.9.89-3.14.89-2.55 0-4.72-1.72-5.15-4.1z" fill="#34A853"/>
              </svg>
              <span className="text-[13px] font-bold text-gray-700">GPay</span>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Net Banking */}
            <div className="group relative h-12 w-[110px] bg-gradient-to-br from-[#1a3a5c] to-[#0d2540] rounded-xl border border-blue-500/20 flex items-center justify-center gap-1.5 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-200 cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="10" width="20" height="11" rx="2" stroke="#60a5fa" strokeWidth="1.5"/>
                <path d="M2 13H22" stroke="#60a5fa" strokeWidth="1.5"/>
                <path d="M6 7L12 3L18 7" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-blue-200 text-[11px] font-semibold">Net Banking</span>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0f38] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

          </div>

          {/* Bottom micro-text */}
          <p className="text-blue-500 text-[11px] mt-5 text-center sm:text-left">
            Your payment details are never stored on our servers. All transactions use industry-standard 256-bit SSL encryption.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2 items-center sm:flex-row sm:justify-between">
          <p className="text-xs text-blue-400 text-center sm:text-left">
            © {new Date().getFullYear()} Kharkan Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {["Privacy Policy", "Terms of Service", "Refund Policy", "GDPR"].map((item) => (
              <a key={item} href="#" className="text-xs text-blue-400 hover:text-white transition-colors whitespace-nowrap">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
