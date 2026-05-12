import { Mail, Phone, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1a237e] text-white text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        {/* Left — Email */}
        <a
          href="mailto:support@kharkan.com"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-100 hover:text-white transition-colors group"
          data-testid="link-topbar-email"
        >
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <Mail size={11} className="text-blue-200 group-hover:text-white" />
          </span>
          <span className="font-medium hidden xs:inline">support@kharkan.com</span>
          <span className="font-medium xs:hidden">Email Us</span>
        </a>

        {/* Right — WhatsApp + Call */}
        <div className="flex items-center gap-2 sm:gap-4">
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
            <span className="font-semibold tabular-nums hidden md:inline text-blue-200 group-hover:text-white">
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
    </div>
  );
}
