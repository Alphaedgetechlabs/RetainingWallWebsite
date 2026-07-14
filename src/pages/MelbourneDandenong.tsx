import { useEffect } from "react";
import Header from "@/components/Header";
import DandenongHeroSection from "@/components/dandenong/DandenongHeroSection";
import DandenongHowItWorks from "@/components/dandenong/DandenongHowItWorks";
import DandenongFenceTypes from "@/components/dandenong/DandenongFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import DandenongFAQSection from "@/components/dandenong/DandenongFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneDandenong = () => {
  useEffect(() => {
    document.title = "Dandenong Retaining Wall Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <DandenongHeroSection />
        <DandenongHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <DandenongFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <DandenongFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneDandenong;
