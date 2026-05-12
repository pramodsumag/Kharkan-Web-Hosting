import { useEffect, useState } from "react";
import { Flame, Clock, ArrowRight, Sparkles, Tag } from "lucide-react";

function getEndDate() {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("ktOfferEnd") : null;
  if (stored) {
    const t = parseInt(stored, 10);
    if (!Number.isNaN(t) && t > Date.now()) return t;
  }
  const end = Date.now() + 3 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000 + 42 * 60 * 1000;
  if (typeof window !== "undefined") window.localStorage.setItem("ktOfferEnd", String(end));
  return end;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const FRIENDLY_END = (() => {
  const d = new Date(Date.now() + 3 * 86_400_000);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
})();

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md rounded-2xl px-3 sm:px-5 py-3 sm:py-4 min-w-[64px] sm:min-w-[88px] shadow-xl border border-white/40">
          <span className="block text-3xl sm:text-5xl font-extrabold tabular-nums bg-gradient-to-b from-[#1a237e] to-[#7e22ce] bg-clip-text text-transparent text-center leading-none">
            {pad(value)}
          </span>
        </div>
        <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 pointer-events-none" />
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90">
        {label}
      </span>
    </div>
  );
}

export default function LimitedTimeOffer() {
  const [target] = useState(() => getEndDate());
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden" data-testid="limited-time-offer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7c2d12] via-[#c2410c] to-[#ea580c]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(253,224,71,0.35),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,63,94,0.35),_transparent_60%)]" />

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-24 right-0 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

          {/* Animated grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          {/* Sparkles */}
          <Sparkles size={20} className="absolute top-6 left-1/4 text-yellow-200/80 animate-pulse" />
          <Sparkles size={14} className="absolute top-12 right-1/3 text-yellow-200/70 animate-pulse animation-delay-2000" />
          <Sparkles size={18} className="absolute bottom-10 left-1/3 text-yellow-200/60 animate-pulse animation-delay-4000" />

          <div className="relative px-5 sm:px-10 lg:px-14 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                <Flame size={14} className="animate-pulse" />
                LIMITED-TIME OFFER
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Save up to{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
                    80% OFF
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-300/70 rounded-full" />
                </span>
                <br className="hidden sm:block" />
                on Web Hosting Plans
              </h2>

              <p className="mt-3 text-white/90 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
                Get India's fastest LiteSpeed hosting from just{" "}
                <span className="font-extrabold text-yellow-200">₹29/mo</span> with a free domain,
                free SSL, daily backups & 24/7 Indian support.
              </p>

              <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start text-white/80 text-xs sm:text-sm">
                <Clock size={14} />
                <span>Offer ends <span className="font-bold text-white">{FRIENDLY_END}</span></span>
                <span className="hidden sm:inline">·</span>
                <Tag size={14} className="hidden sm:inline" />
                <span className="hidden sm:inline">Use code <span className="font-bold text-yellow-200">KHARKAN80</span></span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#plans"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#c2410c] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                  data-testid="button-claim-offer"
                >
                  Claim Your Discount
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://kharkan.com/dash/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
                  data-testid="button-talk-sales"
                >
                  Talk to Sales
                </a>
              </div>
            </div>

            {/* Right: Countdown */}
            <div className="flex flex-col items-center lg:items-end">
              <span className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                Hurry — offer ends in
              </span>
              <div className="flex items-end gap-2 sm:gap-3" data-testid="countdown-timer">
                <Unit value={days} label="Days" />
                <span className="text-3xl sm:text-5xl font-extrabold text-white/70 pb-7 sm:pb-9">:</span>
                <Unit value={hours} label="Hours" />
                <span className="text-3xl sm:text-5xl font-extrabold text-white/70 pb-7 sm:pb-9">:</span>
                <Unit value={minutes} label="Mins" />
                <span className="text-3xl sm:text-5xl font-extrabold text-white/70 pb-7 sm:pb-9">:</span>
                <Unit value={seconds} label="Secs" />
              </div>
              <div className="mt-5 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="font-medium">2,341 customers grabbed this deal today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
