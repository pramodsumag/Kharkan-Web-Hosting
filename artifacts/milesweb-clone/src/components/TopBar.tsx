import { useEffect, useState } from "react";
import { Mail, Phone, MessageCircle, Flame } from "lucide-react";

const STORAGE_KEY = "ktOfferEnd_v2";
const DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours

function getOfferEnd(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const end = parseInt(stored, 10);
      if (!Number.isNaN(end) && end > Date.now()) return end;
    }
  } catch {}
  const end = Date.now() + DURATION_MS;
  try { localStorage.setItem(STORAGE_KEY, String(end)); } catch {}
  return end;
}

export default function TopBar() {
  const [endAt, setEndAt] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    setEndAt(getOfferEnd());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const remaining = Math.max(0, (endAt ?? Date.now()) - now);
  const totalSec = Math.floor(remaining / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  // If expired, restart the 2hr window so the strip never goes stale
  useEffect(() => {
    if (endAt && remaining <= 0) {
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      setEndAt(getOfferEnd());
    }
  }, [endAt, remaining]);

  return (
    <div className="bg-[#1a237e] text-white text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
        {/* Left — Email */}
        <a
          href="mailto:support@kharkan.com"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-100 hover:text-white transition-colors group min-w-0"
          data-testid="link-topbar-email"
        >
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
            <Mail size={11} className="text-blue-200 group-hover:text-white" />
          </span>
          <span className="font-medium truncate">support@kharkan.com</span>
        </a>

        {/* Centre — Sale countdown */}
        <div className="hidden md:flex items-center justify-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
            <Flame size={11} className="animate-pulse" />
            Sale ends in
          </span>
          <div className="flex items-center gap-1 font-extrabold tabular-nums">
            <span className="bg-white text-[#1a237e] rounded-md px-1.5 py-0.5 text-[11px] shadow-sm">{pad(h)}</span>
            <span className="text-blue-300">H</span>
            <span className="bg-white text-[#1a237e] rounded-md px-1.5 py-0.5 text-[11px] shadow-sm">{pad(m)}</span>
            <span className="text-blue-300">M</span>
            <span className="bg-white text-[#1a237e] rounded-md px-1.5 py-0.5 text-[11px] shadow-sm">{pad(s)}</span>
            <span className="text-blue-300">S</span>
          </div>
        </div>

        {/* Right — WhatsApp + Call */}
        <div className="flex items-center gap-2 sm:gap-4 justify-end">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917011058947?text=Hi%2C%20I%20need%20help%20with%20Kharkan%20Technology%20hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-100 hover:text-white transition-colors group"
            data-testid="link-topbar-whatsapp"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/90 group-hover:bg-green-500 flex items-center justify-center transition-colors shadow-sm">
              <MessageCircle size={11} className="text-white" fill="white" />
            </span>
            <span className="font-medium hidden sm:inline">WhatsApp</span>
            <span className="font-semibold tabular-nums hidden lg:inline text-blue-200 group-hover:text-white">
              +91 70110 58947
            </span>
          </a>

          {/* Divider */}
          <span className="hidden sm:inline-block w-px h-4 bg-white/20" />

          {/* Call */}
          <a
            href="tel:+917011058947"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-100 hover:text-white transition-colors group"
            data-testid="link-topbar-call"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-400 group-hover:bg-yellow-300 flex items-center justify-center transition-colors shadow-sm">
              <Phone size={11} className="text-[#1a237e]" fill="#1a237e" />
            </span>
            <span className="font-semibold tabular-nums">+91 70110 58947</span>
          </a>
        </div>
      </div>

      {/* Mobile-only sale strip (shown below on small screens) */}
      <div className="md:hidden border-t border-white/10 px-3 py-1.5 flex items-center justify-center gap-2 bg-[#161c64]">
        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full">
          <Flame size={10} className="animate-pulse" /> Sale ends in
        </span>
        <div className="flex items-center gap-1 font-extrabold tabular-nums text-[11px]">
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5">{pad(h)}</span>
          <span className="text-blue-300">H</span>
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5">{pad(m)}</span>
          <span className="text-blue-300">M</span>
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5">{pad(s)}</span>
          <span className="text-blue-300">S</span>
        </div>
      </div>
    </div>
  );
}
