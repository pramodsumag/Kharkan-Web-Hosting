const links = {
  Hosting: ["Shared Hosting", "WordPress Hosting", "Business Hosting", "Reseller Hosting", "Cloud Hosting", "VPS Hosting", "Dedicated Servers"],
  Domains: ["Domain Registration", "Domain Transfer", "Bulk Domain Search", "Domain Renewal", "WHOIS Lookup", "Business Email"],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Press", "Partners", "Affiliates"],
  Support: ["Help Center", "Contact Us", "Live Chat", "Knowledge Base", "Video Tutorials", "System Status"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1240] text-white">
      {/* CTA Strip */}
      <div className="bg-[#1565c0] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to launch your website?</h3>
            <p className="text-blue-200 text-sm">Get started today with 80% off + free domain. Cancel anytime.</p>
          </div>
          <a
            href="#plans"
            className="bg-white text-[#1565c0] font-bold text-sm px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
            data-testid="button-footer-cta"
          >
            Start Now — ₹69/mo
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-extrabold text-white">MilesWeb</div>
              <div className="text-xs text-blue-300 mt-0.5">Your Hosting, Our Responsibility.</div>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed mb-4">
              India's leading web hosting company, serving over 1 million websites since 2012.
            </p>
            <div className="flex gap-3">
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
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-blue-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-400">
            © {new Date().getFullYear()} MilesWeb Internet Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Refund Policy", "GDPR"].map((item) => (
              <a key={item} href="#" className="text-xs text-blue-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
