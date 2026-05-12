import { ShieldCheck, RotateCcw, ThumbsUp, Clock } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck size={36} className="text-green-500" />,
    title: "100% Risk-Free",
    desc: "Not happy in your first 30 days? We'll give you a complete refund — no questions, no forms, no hassle.",
  },
  {
    icon: <RotateCcw size={36} className="text-blue-500" />,
    title: "Instant Refund",
    desc: "Your refund is processed within 24–48 hours directly to your original payment method.",
  },
  {
    icon: <ThumbsUp size={36} className="text-purple-500" />,
    title: "No Hidden Clauses",
    desc: "No partial refunds, no deductions for domains (which are non-refundable per policy), completely transparent.",
  },
  {
    icon: <Clock size={36} className="text-orange-500" />,
    title: "Cancel Anytime",
    desc: "You're never locked in. Cancel your hosting subscription at any time with zero penalties.",
  },
];

export default function MoneyBack() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-semibold text-sm px-5 py-2 rounded-full mb-5">
            <ShieldCheck size={16} />
            Zero Risk Guarantee
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            30-Day Money Back Guarantee
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We're confident you'll love Kharkan Technology. But if you don't — for any reason — we'll refund every rupee within 30 days.
          </p>
        </div>

        {/* Big shield visual */}
        <div className="flex flex-col items-center mb-14">
          <div className="relative">
            <div className="w-40 h-44 bg-gradient-to-b from-green-400 to-green-600 rounded-t-full rounded-b-3xl flex flex-col items-center justify-center shadow-2xl">
              <ShieldCheck size={56} className="text-white" />
              <span className="text-white font-black text-xl mt-1">30 DAYS</span>
              <span className="text-green-100 text-xs font-semibold tracking-widest">MONEY BACK</span>
            </div>
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full shadow">
              100% GUARANTEED
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{p.icon}</div>
              <h3 className="text-base font-bold text-[#1a237e] mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://kharkan.com/user/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-3.5 rounded-xl text-base transition-colors shadow-md"
            data-testid="button-money-back-cta"
          >
            Start Risk-Free Today
          </a>
          <p className="text-xs text-gray-400 mt-3">No credit card required for the first 30 days trial period.</p>
        </div>
      </div>
    </section>
  );
}
