export default function TrustBar() {
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-gray-300">
          {/* Trustpilot */}
          <div className="flex items-center gap-3 md:pr-10">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-sm font-medium text-gray-700">Excellent</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#00b67a] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 text-[#00b67a] fill-current" viewBox="0 0 24 24" style={{clipPath:"inset(0 30% 0 0)"}}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg className="w-4 h-4 text-gray-200 fill-current -ml-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                4.8/5 from 13,345 reviews on{" "}
                <span className="font-semibold text-[#00b67a]">Trustpilot</span>
              </p>
            </div>
          </div>

          {/* 1M+ websites */}
          <div className="flex items-center gap-2 md:px-10">
            <span className="text-lg">🌐</span>
            <p className="text-sm text-gray-700">
              Trusted by <span className="font-bold text-gray-900">1M+ websites</span>
            </p>
          </div>

          {/* Indian company since 2012 */}
          <div className="flex items-center gap-2 md:pl-10">
            <span className="text-lg">🇮🇳</span>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-gray-900">Indian company</span> since 2012
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
