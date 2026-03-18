import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import SocialProofSection from "@/components/SocialProofSection";
import PlatformSection from "@/components/PlatformSection";
import StatsSection from "@/components/StatsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import DepositsSection from "@/components/DepositsSection";
import TraderbotSection from "@/components/TraderbotSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <SocialProofSection />
      <PlatformSection />
      <StatsSection />
      <DifferentialsSection />
      <DepositsSection />
      <TraderbotSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
