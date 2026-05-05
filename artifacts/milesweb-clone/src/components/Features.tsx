import { Zap, Shield, HeadphonesIcon, Globe, RefreshCw, Lock, Server, CloudUpload } from "lucide-react";

const features = [
  {
    icon: <Zap size={28} className="text-[#1565c0]" />,
    title: "LiteSpeed Server",
    desc: "Up to 20x faster than traditional Apache hosting, giving your visitors a blazing fast experience.",
  },
  {
    icon: <Shield size={28} className="text-[#1565c0]" />,
    title: "99.95% Uptime SLA",
    desc: "Industry-leading uptime backed by a service level agreement so your site is always live.",
  },
  {
    icon: <HeadphonesIcon size={28} className="text-[#1565c0]" />,
    title: "24/7/365 Support",
    desc: "Expert support via live chat, phone, and email — available around the clock, every day.",
  },
  {
    icon: <Globe size={28} className="text-[#1565c0]" />,
    title: "Global Data Centers",
    desc: "Data centers in India, US, UK, Australia, Singapore and Canada to serve your visitors faster.",
  },
  {
    icon: <RefreshCw size={28} className="text-[#1565c0]" />,
    title: "Daily Backups",
    desc: "Automatic daily backups keep your data safe. Restore with a single click anytime.",
  },
  {
    icon: <Lock size={28} className="text-[#1565c0]" />,
    title: "Free SSL Certificate",
    desc: "SSL certificates for all domains, keeping your site secure and trusted by search engines.",
  },
  {
    icon: <Server size={28} className="text-[#1565c0]" />,
    title: "SSD NVMe Storage",
    desc: "Ultra-fast NVMe SSD drives deliver significantly faster data read/write speeds for your site.",
  },
  {
    icon: <CloudUpload size={28} className="text-[#1565c0]" />,
    title: "One-Click Installs",
    desc: "Install WordPress, Joomla, Drupal and 300+ apps with a single click using Softaculous.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3">
            Everything you need to succeed online
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            All hosting plans come packed with powerful features designed to make your website fast, secure, and reliable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="mb-4 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#1a237e] mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
