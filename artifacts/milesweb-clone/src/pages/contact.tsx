import { useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FloatingChat from "@/components/FloatingChat";

const departments = [
  "Sales & Pre-sales",
  "Technical Support",
  "Billing & Payments",
  "Domain & DNS Help",
  "Account Management",
  "Partnership / Affiliates",
  "Other",
];

const contactInfo = [
  {
    icon: <Phone size={20} className="text-[#1565c0]" />,
    label: "Phone Support",
    lines: ["+91 7011058947"],
    sub: "Mon–Sat, 9AM – 9PM IST",
  },
  {
    icon: <Mail size={20} className="text-[#1565c0]" />,
    label: "Email Support",
    lines: ["support@kharkan.com", "sales@kharkan.com"],
    sub: "Response within 2–4 hours",
  },
  {
    icon: <MapPin size={20} className="text-[#1565c0]" />,
    label: "Head Office",
    lines: ["College Chowk, Madhepura", "Bihar – 852113, India"],
    sub: "Walk-ins welcome Mon–Fri",
  },
  {
    icon: <Clock size={20} className="text-[#1565c0]" />,
    label: "Support Hours",
    lines: ["Live Chat & Phone: 24/7", "Email: Around the clock"],
    sub: "365 days a year",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Kharkan Technology",
    "url": "https://kharkantechnology.in/contact",
    "description": "Contact Kharkan Technology's support team 24/7 via phone, email or live chat. Head office in Madhepura, Bihar. Response within 2–4 hours.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kharkan Technology",
      "url": "https://kharkantechnology.in",
      "telephone": "+91-7011058947",
      "email": "support@kharkan.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "College Chowk",
        "addressLocality": "Madhepura",
        "addressRegion": "Bihar",
        "postalCode": "852113",
        "addressCountry": "IN",
      },
      "contactPoint": [
        { "@type": "ContactPoint", "telephone": "+91-7011058947", "contactType": "customer support", "availableLanguage": ["English", "Hindi"], "hoursAvailable": "Mo-Sa 09:00-21:00" },
        { "@type": "ContactPoint", "email": "support@kharkan.com", "contactType": "technical support", "availableLanguage": ["English", "Hindi"] },
        { "@type": "ContactPoint", "email": "sales@kharkan.com", "contactType": "sales", "availableLanguage": ["English", "Hindi"] },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kharkantechnology.in/" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://kharkantechnology.in/contact" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How quickly do you respond?", "acceptedAnswer": { "@type": "Answer", "text": "Live chat replies in under 2 minutes. Email responses within 2–4 hours. Phone support is immediate during business hours." } },
      { "@type": "Question", "name": "Do you offer phone support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Call us at +91 7011058947. Our support team is available 9AM–9PM IST, Mon–Sat." } },
      { "@type": "Question", "name": "Can I get a pre-sales consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our sales experts will help you choose the right plan for your specific business needs — no pressure, just genuine advice." } },
      { "@type": "Question", "name": "What languages do you support?", "acceptedAnswer": { "@type": "Answer", "text": "We provide support in English and Hindi. Regional language support may be arranged for large enterprise accounts." } },
      { "@type": "Question", "name": "How do I raise a billing dispute?", "acceptedAnswer": { "@type": "Answer", "text": "Email billing@kharkan.com or use the contact form with the 'Billing & Payments' department selected. We resolve billing issues within 24 hours." } },
      { "@type": "Question", "name": "Do you assist with website migration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer free cPanel-to-cPanel migration for new customers. Our team handles the entire move with zero downtime." } },
    ],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", department: "", subject: "", message: "", newsletter: false,
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", department: "", subject: "", message: "", newsletter: false });
    setStatus("idle");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Kharkan Technology | 24/7 Support"
        description="Contact Kharkan Technology support for web hosting and domain help. Reach our team by phone, email or live chat, with local support in Madhepura."
        keywords="contact Kharkan Technology, hosting support India, web hosting help, Pune hosting company contact, 24/7 hosting support"
        canonical="/contact"
        jsonLd={contactJsonLd}
      />
      <TopBar />
      <Header />

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#1a237e] to-[#1565c0] py-14 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 font-semibold text-sm px-5 py-2 rounded-full mb-5">
          📞 We're here to help
        </div>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-3">Contact Us</h1>
        <p className="text-blue-200 text-base max-w-lg mx-auto">
          Have a question, need a quote, or just want to say hello? Our team is ready to help you 24/7.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left — contact info */}
          <div className="space-y-5">
            <h2 className="text-xl font-extrabold text-[#1a237e] mb-6">Get in touch</h2>

            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a237e] mb-1">{c.label}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="text-sm text-gray-700">{l}</div>
                  ))}
                  <div className="text-xs text-gray-400 mt-1">{c.sub}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mt-4">
              <iframe
                title="Kharkan Technology Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.255609484438!2d73.77839331489658!3d18.559304087384445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social links */}
            <div className="bg-[#1a237e] rounded-2xl p-5 text-white">
              <div className="text-sm font-bold mb-3">Follow us for updates</div>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: "📘", label: "Facebook" },
                  { icon: "🐦", label: "Twitter" },
                  { icon: "📸", label: "Instagram" },
                  { icon: "💼", label: "LinkedIn" },
                  { icon: "▶️", label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-xs px-3 py-1.5 rounded-lg transition-colors"
                    data-testid={`link-social-${s.label.toLowerCase()}`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-8">

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a237e] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm mb-8">
                    Thank you for reaching out. Our team will get back to you within 2–4 hours on your email.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-[#1565c0] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1251a3] transition-colors"
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#1a237e] mb-1">Send us a message</h2>
                  <p className="text-sm text-gray-400 mb-7">Fill in the form and we'll respond within a few hours.</p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={form.name} onChange={handleChange}
                          placeholder="Rahul Sharma"
                          className={`w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors ${
                            errors.name
                              ? "border-red-400 bg-red-50 focus:border-red-500"
                              : "border-gray-200 focus:border-[#1565c0] bg-gray-50 focus:bg-white"
                          }`}
                          data-testid="input-name"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          placeholder="rahul@example.com"
                          className={`w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors ${
                            errors.email
                              ? "border-red-400 bg-red-50 focus:border-red-500"
                              : "border-gray-200 focus:border-[#1565c0] bg-gray-50 focus:bg-white"
                          }`}
                          data-testid="input-email"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Department */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="phone">
                          Phone Number <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-[#1565c0] transition-colors"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="department">
                          Department
                        </label>
                        <select
                          id="department" name="department"
                          value={form.department} onChange={handleChange}
                          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-[#1565c0] transition-colors text-gray-700"
                          data-testid="select-department"
                        >
                          <option value="">Select department…</option>
                          {departments.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject" name="subject" type="text"
                        value={form.subject} onChange={handleChange}
                        placeholder="e.g. Question about the Advanced plan"
                        className={`w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors ${
                          errors.subject
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 focus:border-[#1565c0] bg-gray-50 focus:bg-white"
                        }`}
                        data-testid="input-subject"
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help you…"
                        className={`w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 focus:border-[#1565c0] bg-gray-50 focus:bg-white"
                        }`}
                        data-testid="textarea-message"
                      />
                      <div className="flex justify-between mt-1">
                        {errors.message
                          ? <p className="text-xs text-red-500">{errors.message}</p>
                          : <span />}
                        <span className="text-xs text-gray-300">{form.message.length}/1000</span>
                      </div>
                    </div>

                    {/* Newsletter checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox" name="newsletter"
                        checked={form.newsletter} onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-300 text-[#1565c0] cursor-pointer"
                        data-testid="checkbox-newsletter"
                      />
                      <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        Subscribe to hosting tips, offers &amp; announcements
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#1565c0] hover:bg-[#1251a3] disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
                      data-testid="button-submit-contact"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is secure and will never be shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FAQ strip */}
        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-[#1a237e] text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { q: "How quickly do you respond?", a: "Live chat replies in under 2 minutes. Email responses within 2–4 hours. Phone support is immediate during business hours." },
              { q: "Do you offer phone support?", a: "Yes! Call us at +91 7011058947. Our support team is available 9AM–9PM IST, Mon–Sat." },
              { q: "Can I get a pre-sales consultation?", a: "Absolutely. Our sales experts will help you choose the right plan for your specific business needs — no pressure, just genuine advice." },
              { q: "What languages do you support?", a: "We provide support in English and Hindi. Regional language support may be arranged for large enterprise accounts." },
              { q: "How do I raise a billing dispute?", a: "Email billing@kharkantechnology.in or use this form with the 'Billing & Payments' department selected. We resolve billing issues within 24 hours." },
              { q: "Do you assist with website migration?", a: "Yes, we offer free cPanel-to-cPanel migration for new customers. Our team handles the entire move with zero downtime." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-blue-200 transition-colors">
                <h3 className="text-sm font-bold text-[#1a237e] mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingChat />
    </div>
  );
}
