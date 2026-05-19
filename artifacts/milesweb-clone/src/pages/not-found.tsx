import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist or has moved. Browse Kharkan Technology's hosting plans, knowledge base, or contact our 24/7 support team."
        noIndex
      />
      <TopBar />
      <Header />
      <main className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e2e] via-[#1a237e] to-[#312e81] py-20 px-4">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-3xl animate-blob animation-delay-4000" />

        <div className="relative max-w-2xl w-full text-center">
          {/* 404 number */}
          <div className="relative inline-block mb-6">
            <h1 className="text-[120px] sm:text-[180px] lg:text-[220px] font-black leading-none bg-gradient-to-br from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-4xl sm:text-5xl">
                🛰️
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-400/30 text-red-200 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Page not found
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Oops — this page took a wrong turn
          </h2>
          <p className="text-blue-200/90 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            The page you're looking for doesn't exist or may have moved. Don't worry — let's get you back on track.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1a237e] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              data-testid="button-404-home"
            >
              <Home size={16} /> Go Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/35 text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              data-testid="button-404-back"
            >
              <ArrowLeft size={16} /> Go Back
            </button>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {[
              { href: "/web-hosting", icon: <Search size={16} />, label: "Browse Hosting Plans" },
              { href: "/about", icon: <Home size={16} />, label: "About Kharkan" },
              { href: "/contact", icon: <MessageCircle size={16} />, label: "Contact Support" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold px-4 py-3 rounded-xl hover:bg-white/15 transition-colors"
              >
                <span className="text-blue-200">{l.icon}</span> {l.label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
