import { useState } from "react";
import { Search } from "lucide-react";

const tlds = [".com", ".in", ".net", ".org", ".co", ".io", ".store", ".online"];

export default function DomainSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Searching for: ${query.trim()}`);
    }
  };

  return (
    <section className="py-12 bg-[#1a237e]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
          Find your perfect domain name
        </h2>
        <p className="text-blue-200 text-sm mb-8">
          Search from 500+ domain extensions and register your domain starting at ₹99/year
        </p>

        <form onSubmit={handleSearch} className="flex gap-0 max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your domain name..."
            className="flex-1 px-5 py-4 text-base text-gray-800 outline-none bg-white placeholder-gray-400"
            data-testid="input-domain-search"
          />
          <button
            type="submit"
            className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-7 py-4 text-sm transition-colors flex items-center gap-2"
            data-testid="button-domain-search"
          >
            <Search size={16} />
            Search
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {tlds.map((tld) => (
            <span
              key={tld}
              className="bg-white/10 text-blue-100 text-xs font-medium px-3 py-1 rounded-full border border-white/20"
            >
              {tld}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
