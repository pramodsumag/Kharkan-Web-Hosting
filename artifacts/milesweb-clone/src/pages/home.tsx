import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HostingPlans from "@/components/HostingPlans";
import MoneyBack from "@/components/MoneyBack";
import DomainSearch from "@/components/DomainSearch";
import Features from "@/components/Features";
import SpeedSecuritySuccess from "@/components/SpeedSecuritySuccess";
import ComparisonTable from "@/components/ComparisonTable";
import WhyKharkanTechnology from "@/components/WhyKharkanTechnology";
import CustomerStories from "@/components/CustomerStories";
import RatingSection from "@/components/RatingSection";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kharkan Technology",
    "alternateName": "Kharkan Technology Pvt. Ltd.",
    "url": "https://kharkantechnology.in",
    "logo": "https://kharkantechnology.in/favicon.svg",
    "description": "India's fastest web hosting company — LiteSpeed servers, 99.99% uptime, free SSL, free domain & 24/7 expert support. Trusted by 1M+ websites since 2012.",
    "foundingDate": "2012",
    "foundingLocation": "Madhepura, Bihar, India",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 500 },
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
      { "@type": "ContactPoint", "telephone": "+91-7011058947", "contactType": "sales", "availableLanguage": ["English", "Hindi"] },
    ],
    "sameAs": [
      "https://www.facebook.com/kharkantechnology",
      "https://twitter.com/KharkanTech",
      "https://www.linkedin.com/company/kharkantechnology",
      "https://www.instagram.com/kharkantechnology",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kharkan Technology",
    "url": "https://kharkantechnology.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": "https://kharkantechnology.in/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kharkan Technology",
    "image": "https://kharkantechnology.in/opengraph.jpg",
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
    "geo": { "@type": "GeoCoordinates", "latitude": 25.9188, "longitude": 86.7921 },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "21:00" },
    ],
    "priceRange": "₹₹",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "13345", "bestRating": "5" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kharkan Technology Hosting Plans",
    "description": "Shared web hosting plans from Kharkan Technology",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Starter Hosting — ₹29/mo", "url": "https://kharkantechnology.in/#plans" },
      { "@type": "ListItem", "position": 2, "name": "Advanced Hosting — ₹49/mo", "url": "https://kharkantechnology.in/#plans" },
      { "@type": "ListItem", "position": 3, "name": "Ultimate Hosting — ₹99/mo", "url": "https://kharkantechnology.in/#plans" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Web Hosting from ₹29/mo | India's Fastest & Trusted Host"
        description="Kharkan Technology offers India's fastest web hosting from ₹29/mo. LiteSpeed servers, 99.99% uptime, free SSL, free domain & 24/7 expert support. Trusted by 1M+ websites."
        keywords="web hosting India, cheap hosting India, wordpress hosting, shared hosting, domain registration, LiteSpeed hosting, Indian web hosting, hosting ₹29"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <TopBar />
      <Header />
      <Hero />
      <DomainSearch />
      <TrustBar />
      <HostingPlans />
      <MoneyBack />
      <Features />
      <SpeedSecuritySuccess />
      <ComparisonTable />
      <WhyKharkanTechnology />
      <CustomerStories />
      <RatingSection />
      <TrustSection />
      <Testimonials />
      <Footer />
      <FloatingChat />
    </div>
  );
}
