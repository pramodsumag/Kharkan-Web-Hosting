export default function FloatingChat() {
  const href =
    "https://wa.me/917011058947?text=Hi%2C%20I%20need%20help%20with%20Kharkan%20Technology%20hosting";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-testid="button-floating-whatsapp"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      {/* Tooltip */}
      <span className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-gray-100 rotate-45" />
      </span>

      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping" />
        {/* Unread dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center z-10 shadow-md">
          1
        </span>
        {/* Button */}
        <span className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-200">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.532 5.859L.054 23.454a.75.75 0 0 0 .918.918l5.594-1.478A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.852-.58-5.42-1.58l-.388-.245-4.021 1.062 1.062-4.02-.245-.39A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </span>
      </div>
    </a>
  );
}
