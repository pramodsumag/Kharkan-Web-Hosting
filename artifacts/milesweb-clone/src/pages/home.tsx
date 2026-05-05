import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import RenewalSection from "@/components/RenewalSection";
import HostingPlans from "@/components/HostingPlans";
import DomainSearch from "@/components/DomainSearch";
import Features from "@/components/Features";
import WhyMilesWeb from "@/components/WhyMilesWeb";
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
      <DomainSearch />
      <Features />
      <WhyMilesWeb />
      <Testimonials />
      <Footer />
    </div>
  );
}
