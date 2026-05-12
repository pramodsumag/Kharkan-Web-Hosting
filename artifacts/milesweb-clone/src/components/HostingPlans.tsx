import { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners",
    price: "39",
    originalPrice: "195",
    discount: "80% OFF",
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
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Advanced",
    subtitle: "Best for growing sites",
    price: "69",
    originalPrice: "345",
    discount: "80% OFF",
    features: [
      "Host Unlimited Websites",
      "Unlimited NVMe SSD Storage",
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
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Ultimate",
    subtitle: "For high-traffic websites",
    price: "99",
    originalPrice: "495",
    discount: "80% OFF",
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
    popular: false,
    cta: "Get Started",
  },
];

export default function HostingPlans() {
  const [activePlan, setActivePlan] = useState(1); // Advanced by default

  return (
    <section id="plans" className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Shared Hosting Plans
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Choose the plan that fits your needs. All plans include free domain, SSL, and 24/7 support.
          </p>
        </div>

        {/* Mobile: Tab switcher */}
        <div className="flex lg:hidden bg-white rounded-2xl p-1.5 gap-1 shadow-sm border border-gray-100 mb-6">
          {plans.map((plan, i) => (
            <button
              key={plan.name}
              onClick={() => setActivePlan(i)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                activePlan === i
                  ? "bg-[#1565c0] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {plan.name}
              {plan.popular && <span className="ml-1 text-[10px]">⭐</span>}
            </button>
          ))}
        </div>

        {/* Mobile: Single card view */}
        <div className="lg:hidden">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`${activePlan === i ? "block" : "hidden"}`}
            >
              <div
                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col shadow-sm ${
                  plan.popular ? "border-[#1565c0] shadow-blue-100" : "border-gray-100"
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1565c0] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star size={12} fill="white" />
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a237e]">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{plan.subtitle}</p>
                  </div>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    {plan.discount}
                  </span>
                </div>

                <div className="mb-5 pb-5 border-b border-gray-100">
                  <div className="flex items-end gap-1">
                    <span className="text-gray-400 text-sm line-through">₹{plan.originalPrice}</span>
                  </div>
                  <div className="flex items-end gap-1 mt-0.5">
                    <span className="text-sm text-gray-600 font-medium">₹</span>
                    <span className="text-5xl font-extrabold text-[#1a237e]">{plan.price}</span>
                    <span className="text-gray-400 text-sm mb-1">/mo</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">billed annually + GST</p>
                </div>

                <a
                  href="#"
                  className={`block text-center font-bold text-sm py-3.5 px-6 rounded-xl mb-5 transition-colors ${
                    plan.popular
                      ? "bg-[#1565c0] text-white hover:bg-[#1251a3]"
                      : "bg-blue-50 text-[#1565c0] border border-blue-200 hover:bg-blue-100"
                  }`}
                  data-testid={`button-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </a>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col shadow-sm transition-shadow hover:shadow-md ${
                plan.popular
                  ? "border-[#1565c0] shadow-blue-100"
                  : "border-gray-100"
              }`}
              data-testid={`card-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1565c0] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star size={12} fill="white" />
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#1a237e]">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{plan.subtitle}</p>
              </div>

              <div className="mb-2">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded mb-2">
                  {plan.discount}
                </span>
                <div className="flex items-end gap-1">
                  <span className="text-gray-400 text-sm line-through">₹{plan.originalPrice}</span>
                </div>
                <div className="flex items-end gap-1 mt-0.5">
                  <span className="text-sm text-gray-600 font-medium">₹</span>
                  <span className="text-4xl font-extrabold text-[#1a237e]">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">/mo</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">billed annually + GST</p>
              </div>

              <a
                href="https://kharkan.com/dash/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold text-sm py-3 px-6 rounded-lg mt-4 mb-6 transition-colors ${
                  plan.popular
                    ? "bg-[#1565c0] text-white hover:bg-[#1251a3]"
                    : "bg-blue-50 text-[#1565c0] border border-blue-200 hover:bg-blue-100"
                }`}
                data-testid={`button-plan-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * All prices are in INR and subject to 18% GST. Renewal at same price, guaranteed.
        </p>
      </div>
    </section>
  );
}
