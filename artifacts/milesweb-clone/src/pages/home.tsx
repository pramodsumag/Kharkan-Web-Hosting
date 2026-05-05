import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import RenewalSection from "@/components/RenewalSection";
import HostingPlans from "@/components/HostingPlans";
import MoneyBack from "@/components/MoneyBack";
import DomainSearch from "@/components/DomainSearch";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import WhyMilesWeb from "@/components/WhyMilesWeb";
import CustomerStories from "@/components/CustomerStories";
import RatingSection from "@/components/RatingSection";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <TrustBar />
      <RenewalSection />
      <HostingPlans />
      <MoneyBack />
      <DomainSearch />
      <Features />
      <ComparisonTable />
      <WhyMilesWeb />
      <CustomerStories />
      <RatingSection />
      <TrustSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
