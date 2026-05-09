const links = {
  Hosting: ["Shared Hosting", "WordPress Hosting", "Business Hosting", "Reseller Hosting", "Cloud Hosting", "VPS Hosting", "Dedicated Servers"],
  Domains: ["Domain Registration", "Domain Transfer", "Bulk Domain Search", "Domain Renewal", "WHOIS Lookup", "Business Email"],
  Company: ["About Us|/about", "Our Team|/about#team", "Careers", "Blog", "Press", "Partners", "Affiliates"],
  Support: ["Help Center", "Contact Us|/contact", "Live Chat", "Knowledge Base", "Video Tutorials", "System Status"],
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
            href="#plans"
            className="bg-white text-[#1565c0] font-bold text-sm px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors shrink-0 w-full sm:w-auto text-center"
            data-testid="button-footer-cta"
          >
            Start Now — ₹39/mo
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

      {/* Payment Methods */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-blue-400 font-medium whitespace-nowrap">🔒 Secure Payments via</span>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            {/* VISA */}
            <div className="h-8 px-3 rounded-md flex items-center justify-center bg-[#1a1f71] border border-white/10">
              <svg viewBox="0 0 72 24" width="44" height="16" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
                <text x="0" y="19" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fontStyle="italic" fill="white" letterSpacing="1">VISA</text>
              </svg>
            </div>

            {/* PhonePe */}
            <div className="h-8 px-3 rounded-md flex items-center gap-1.5 bg-[#5f259f] border border-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PhonePe logo">
                <circle cx="12" cy="12" r="12" fill="#5f259f"/>
                <path d="M7 8.5C7 7.12 8.12 6 9.5 6H14.5C16.43 6 18 7.57 18 9.5C18 11.43 16.43 13 14.5 13H11V17.5H9V8.5ZM11 11H14.5C15.33 11 16 10.33 16 9.5C16 8.67 15.33 8 14.5 8H11V11Z" fill="white"/>
              </svg>
              <span className="text-white text-[11px] font-bold">PhonePe</span>
            </div>

            {/* Paytm */}
            <div className="h-8 px-3 rounded-md flex items-center gap-1 bg-[#002970] border border-white/10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Paytm logo">
                <rect width="24" height="24" rx="4" fill="#00BAF2"/>
                <text x="4" y="17" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#002970">P</text>
              </svg>
              <span className="text-[11px] font-bold">
                <span className="text-[#00BAF2]">Pay</span><span className="text-white">tm</span>
              </span>
            </div>

            {/* Google Pay */}
            <div className="h-8 px-3 rounded-md flex items-center gap-1.5 bg-white border border-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay logo">
                <path d="M11.99 10.93v2.87h4.47c-.19 1.03-.77 1.9-1.63 2.48l2.63 2.04c1.53-1.41 2.41-3.49 2.41-5.97 0-.58-.05-1.14-.14-1.68L11.99 10.93z" fill="#4285F4"/>
                <path d="M5.84 14.3a6.98 6.98 0 0 1 0-4.6L3.2 7.66a10.02 10.02 0 0 0 0 8.68l2.64-2.04z" fill="#FBBC05"/>
                <path d="M11.99 5.5c1.78 0 3.37.61 4.63 1.82l2.45-2.45C17.07 2.92 14.73 2 11.99 2 8.04 2 4.61 4.18 2.8 7.44l2.64 2.04c.82-2.44 3.11-4 6.55-4z" fill="#EA4335"/>
                <path d="M5.84 14.3l-2.64 2.04C4.61 19.82 8.04 22 11.99 22c2.74 0 5.07-.9 6.77-2.45l-2.63-2.04c-.83.56-1.9.89-3.14.89-2.55 0-4.72-1.72-5.15-4.1z" fill="#34A853"/>
              </svg>
              <span className="text-[11px] font-bold text-gray-800">GPay</span>
            </div>

            {/* MasterCard */}
            <div className="h-8 px-3 rounded-md flex items-center gap-1.5 bg-[#252525] border border-white/10">
              <svg width="28" height="18" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard logo">
                <circle cx="14" cy="12" r="10" fill="#EB001B"/>
                <circle cx="24" cy="12" r="10" fill="#F79E1B"/>
                <path d="M19 5.27a10 10 0 0 1 0 13.46A10 10 0 0 1 19 5.27z" fill="#FF5F00"/>
              </svg>
            </div>

            {/* UPI */}
            <div className="h-8 px-3 rounded-md flex items-center justify-center bg-white border border-white/20">
              <svg width="38" height="16" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg" aria-label="UPI">
                <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="#6B2D8B">UPI</text>
              </svg>
            </div>
          </div>
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
