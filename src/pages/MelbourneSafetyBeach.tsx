import Header from "@/components/Header";
import SafetyBeachHeroSection from "@/components/safety-beach/SafetyBeachHeroSection";
import SafetyBeachHowItWorks from "@/components/safety-beach/SafetyBeachHowItWorks";
import SafetyBeachFenceTypes from "@/components/safety-beach/SafetyBeachFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SafetyBeachFAQSection from "@/components/safety-beach/SafetyBeachFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneSafetyBeach = () => {
  useDocumentTitle("Safety Beach Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SafetyBeachHeroSection />
        <SafetyBeachHowItWorks />
        <div id="fence-types"><SafetyBeachFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SafetyBeachFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSafetyBeach;