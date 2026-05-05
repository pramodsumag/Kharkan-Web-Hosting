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
    <div className="bg-black text-white text-sm py-2 text-center">
      <span className="text-gray-300">Limited-time savings — ends in </span>
      <span className="font-bold mx-1">{pad(time.h)}H</span>
      <span className="font-bold mx-1">{pad(time.m)}M</span>
      <span className="font-bold mx-1">{pad(time.s)}S</span>
      <a
        href="#plans"
        className="ml-3 underline text-white font-semibold hover:text-gray-300 transition-colors"
        data-testid="link-view-plans"
      >
        View Plans
      </a>
    </div>
  );
}
