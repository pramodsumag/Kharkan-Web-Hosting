import { useState } from "react";
import { X, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react";

const channels = [
  {
    icon: "💬",
    label: "WhatsApp",
    sub: "Typically replies in minutes",
    color: "bg-green-500 hover:bg-green-600",
    href: "https://wa.me/911234567890?text=Hi%2C%20I%20need%20help%20with%20Kharkan%20Technology%20hosting",
  },
  {
    icon: "🔵",
    label: "Live Chat",
    sub: "Available 24/7",
    color: "bg-[#1565c0] hover:bg-[#1251a3]",
    href: "#",
  },
  {
    icon: "📞",
    label: "Call Support",
    sub: "+91 12345 67890",
    color: "bg-purple-600 hover:bg-purple-700",
    href: "tel:+911234567890",
  },
  {
    icon: "📧",
    label: "Email Us",
    sub: "support@kharkantechnology.in",
    color: "bg-orange-500 hover:bg-orange-600",
    href: "mailto:support@kharkantechnology.in",
  },
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  const handleOpen = () => {
    setOpen(true);
    setPulse(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a237e] to-[#1565c0] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">🎧</div>
              <div>
                <div className="text-white font-bold text-sm">Kharkan Technology Support</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                  <span className="text-blue-200 text-xs">We're online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message bubble */}
          <div className="px-4 py-4 bg-gray-50 border-b border-gray-100">
            <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm border border-gray-100 text-sm text-gray-600 leading-relaxed">
              👋 Hi there! How can we help you today? Choose a channel and we'll get back to you right away.
            </div>
          </div>

          {/* Channel options */}
          <div className="p-3 space-y-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white ${c.color} transition-colors group`}
                data-testid={`button-chat-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="text-xl shrink-0">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{c.label}</div>
                  <div className="text-xs text-white/70 truncate">{c.sub}</div>
                </div>
                <ChevronRight size={16} className="shrink-0 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 pb-4 pt-1 text-center">
            <p className="text-xs text-gray-400">Powered by Kharkan Technology · 24/7 Support</p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="relative">
        {/* Unread dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center z-10">
            1
          </span>
        )}
        {/* Pulse ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping" />
        )}
        <button
          onClick={open ? () => setOpen(false) : handleOpen}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 ${
            open
              ? "bg-gray-700 hover:bg-gray-800 rotate-0"
              : "bg-green-500 hover:bg-green-600 hover:scale-110"
          }`}
          aria-label="Open support chat"
          data-testid="button-floating-chat"
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.532 5.859L.054 23.454a.75.75 0 0 0 .918.918l5.594-1.478A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.852-.58-5.42-1.58l-.388-.245-4.021 1.062 1.062-4.02-.245-.39A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
