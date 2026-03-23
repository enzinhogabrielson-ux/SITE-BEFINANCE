import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import TrustSection from "@/components/TrustSection";
import PlatformSection from "@/components/PlatformSection";
import InstrumentsSection from "@/components/InstrumentsSection";
import RegulationSection from "@/components/RegulationSection";
import TradingConfidenceSection from "@/components/TradingConfidenceSection";
import WithdrawalsSection from "@/components/WithdrawalsSection";
import DepositsSection from "@/components/DepositsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AwardsSection from "@/components/AwardsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#040d18", fontFamily: "'DM Sans','Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <MarketTicker />
      <TrustSection />
      <PlatformSection />
      <InstrumentsSection />
      <RegulationSection />
      <TradingConfidenceSection />
      <WithdrawalsSection />
      <DepositsSection />
      <TestimonialsSection />
      <AwardsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
