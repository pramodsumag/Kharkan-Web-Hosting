import { useState, useEffect } from "react";

export default function TopBar() {
  const [time, setTime] = useState({ h: 11, m: 47, s: 22 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-[#1a237e] text-white text-xs sm:text-sm py-2 px-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="text-blue-200 hidden sm:inline">Limited-time savings — ends in</span>
        <span className="text-blue-200 sm:hidden">Sale ends in</span>
        <div className="flex items-center gap-1 font-bold">
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5 text-xs font-black tabular-nums">{pad(time.h)}</span>
          <span className="text-blue-300">H</span>
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5 text-xs font-black tabular-nums">{pad(time.m)}</span>
          <span className="text-blue-300">M</span>
          <span className="bg-white text-[#1a237e] rounded px-1.5 py-0.5 text-xs font-black tabular-nums">{pad(time.s)}</span>
          <span className="text-blue-300">S</span>
        </div>
        <a
          href="#plans"
          className="bg-[#ffeb3b] text-[#1a237e] font-bold text-xs px-3 py-1 rounded-full hover:bg-yellow-300 transition-colors whitespace-nowrap"
          data-testid="link-view-plans"
        >
          View Plans →
        </a>
      </div>
    </div>
  );
}
