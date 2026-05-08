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
      "1 Website",
      "SSD Storage: 30 GB",
      "Free SSL Certificate",
      "Free Domain (1st year)",
      "Unlimited Bandwidth",
      "3 Email Accounts",
      "Daily Backups",
      "LiteSpeed Server",
      "99.95% Uptime SLA",
      "24/7 Customer Support",
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
      "Unlimited Websites",
      "SSD Storage: Unlimited",
      "Free SSL Certificate",
      "Free Domain (1st year)",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Daily Backups",
      "LiteSpeed Server",
      "99.95% Uptime SLA",
      "Priority 24/7 Support",
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
      "Unlimited Websites",
      "SSD Storage: Unlimited",
      "Free Wildcard SSL",
      "Free Domain (1st year)",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Daily Backups + On-demand",
      "LiteSpeed + CloudLinux",
      "99.99% Uptime SLA",
      "Dedicated Support Manager",
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
                href="#"
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
