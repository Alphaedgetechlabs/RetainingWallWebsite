import { useEffect } from "react";
import Header from "@/components/Header";
import BlackburnHeroSection from "@/components/blackburn/BlackburnHeroSection";
import BlackburnHowItWorks from "@/components/blackburn/BlackburnHowItWorks";
import BlackburnFenceTypes from "@/components/blackburn/BlackburnFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BlackburnFAQSection from "@/components/blackburn/BlackburnFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneBlackburn = () => {
  useEffect(() => { document.title = "Blackburn Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BlackburnHeroSection />
        <BlackburnHowItWorks />
        <div id="fence-types"><BlackburnFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><BlackburnFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBlackburn;