import { useState } from "react";
import { Search, CheckCircle, ArrowRight, Globe } from "lucide-react";

const tlds = [
  { ext: ".com",    price: "₹799",  popular: true  },
  { ext: ".in",     price: "₹499",  popular: true  },
  { ext: ".net",    price: "₹899",  popular: false },
  { ext: ".org",    price: "₹749",  popular: false },
  { ext: ".co",     price: "₹1,299",popular: false },
  { ext: ".io",     price: "₹3,499",popular: false },
  { ext: ".store",  price: "₹299",  popular: true  },
  { ext: ".online", price: "₹199",  popular: true  },
  { ext: ".tech",   price: "₹499",  popular: false },
  { ext: ".info",   price: "₹349",  popular: false },
];

const perks = [
  "Free WHOIS privacy protection",
  "Free DNS management",
  "Easy transfer in minutes",
];

export default function DomainSearch() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b6e] via-[#1a237e] to-[#1565c0] py-14 lg:py-20">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full mb-5">
          <Globe size={13} className="text-yellow-300" />
          500+ Domain Extensions · Starting from ₹199/year
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight">
          Find your <span className="text-yellow-300">perfect domain</span> name
        </h2>
        <p className="text-blue-200 text-sm lg:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Your brand starts with a great domain. Search availability instantly — free WHOIS privacy on every domain.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-white/20"
        >
          <div className="flex-1 flex items-center bg-white px-4 gap-2 min-w-0">
            <Search size={17} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSearched(false); }}
              placeholder="yourbrand.com"
              className="flex-1 py-4 text-sm lg:text-base text-gray-800 outline-none bg-transparent placeholder-gray-300 min-w-0"
              data-testid="input-domain-search"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#f57c00] to-[#ff8f00] hover:from-[#e65100] hover:to-[#f57c00] text-white font-bold px-6 lg:px-8 py-4 text-sm lg:text-base transition-all flex items-center gap-2 shrink-0 whitespace-nowrap"
            data-testid="button-domain-search"
          >
            Search Domain
            <ArrowRight size={15} />
          </button>
        </form>

        {/* Search result hint */}
        {searched && query.trim() && (
          <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-5 py-2.5 rounded-xl">
            <CheckCircle size={15} className="text-green-400" />
            Checking availability for <strong className="text-white">{query.trim()}</strong>…
          </div>
        )}

        {/* TLD price marquee (left → right) */}
        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max gap-2 animate-marquee-x">
            {[...tlds, ...tlds].map((tld, i) => (
              <div
                key={`${tld.ext}-${i}`}
                className={`relative group shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-150 ${
                  tld.popular
                    ? "bg-white/15 border-white/30 hover:bg-white/25"
                    : "bg-white/8 border-white/15 hover:bg-white/15"
                }`}
              >
                {tld.popular && (
                  <span className="absolute -top-2 -right-1 bg-yellow-400 text-[#1a237e] text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                    Hot
                  </span>
                )}
                <span className="text-white font-bold text-sm">{tld.ext}</span>
                <span className="text-blue-200 text-xs font-medium">{tld.price}/yr</span>
              </div>
            ))}
          </div>
        </div>

        {/* Perks strip */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-blue-200 text-xs font-medium">
              <CheckCircle size={13} className="text-green-400 shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
