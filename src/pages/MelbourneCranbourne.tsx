import { useEffect } from "react";
import Header from "@/components/Header";
import CranbourneHeroSection from "@/components/cranbourne/CranbourneHeroSection";
import CranbourneHowItWorks from "@/components/cranbourne/CranbourneHowItWorks";
import CranbourneFenceTypes from "@/components/cranbourne/CranbourneFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import CranbourneFAQSection from "@/components/cranbourne/CranbourneFAQSection";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneCranbourne = () => {
  useEffect(() => {
    document.title = "Cranbourne Retaining Wall Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    navigateTo(QUOTE_URL);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <CranbourneHeroSection />
        <CranbourneHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <CranbourneFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <CranbourneFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneCranbourne;
