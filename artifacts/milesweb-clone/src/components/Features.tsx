import { Zap, Shield, HeadphonesIcon, Globe, RefreshCw, Lock, Server, CloudUpload } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} className="text-[#1565c0]" />,
    title: "LiteSpeed Server",
    desc: "Up to 20x faster than Apache hosting, giving your visitors a blazing-fast experience.",
  },
  {
    icon: <Shield size={24} className="text-[#1565c0]" />,
    title: "99.95% Uptime SLA",
    desc: "Industry-leading uptime backed by an SLA so your site is always live.",
  },
  {
    icon: <HeadphonesIcon size={24} className="text-[#1565c0]" />,
    title: "24/7/365 Support",
    desc: "Expert support via live chat, phone, and email — every day, around the clock.",
  },
  {
    icon: <Globe size={24} className="text-[#1565c0]" />,
    title: "Global Data Centers",
    desc: "Data centers in India, US, UK, Australia, Singapore, and Canada.",
  },
  {
    icon: <RefreshCw size={24} className="text-[#1565c0]" />,
    title: "Daily Backups",
    desc: "Automatic daily backups keep your data safe. Restore with a single click.",
  },
  {
    icon: <Lock size={24} className="text-[#1565c0]" />,
    title: "Free SSL Certificate",
    desc: "SSL for all domains — your site secured and trusted by search engines.",
  },
  {
    icon: <Server size={24} className="text-[#1565c0]" />,
    title: "SSD NVMe Storage",
    desc: "Ultra-fast NVMe SSD drives deliver significantly faster data speeds.",
  },
  {
    icon: <CloudUpload size={24} className="text-[#1565c0]" />,
    title: "One-Click Installs",
    desc: "Install WordPress, Joomla, Drupal and 300+ apps with one click via Softaculous.",
  },
];

export default function Features() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Everything you need to succeed online
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            All hosting plans come packed with powerful features designed to make your website fast, secure, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              data-scroll-reveal="card"
              className="bg-gray-50 rounded-xl p-4 lg:p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="mb-3 w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-sm lg:text-base font-bold text-[#1a237e] mb-1.5">{f.title}</h3>
              <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
