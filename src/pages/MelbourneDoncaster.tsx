import { useEffect } from "react";
import Header from "@/components/Header";
import DoncasterHeroSection from "@/components/doncaster/DoncasterHeroSection";
import DoncasterHowItWorks from "@/components/doncaster/DoncasterHowItWorks";
import DoncasterFenceTypes from "@/components/doncaster/DoncasterFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import DoncasterFAQSection from "@/components/doncaster/DoncasterFAQSection";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneDoncaster = () => {
  useEffect(() => {
    document.title = "Doncaster Retaining Wall Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    navigateTo(QUOTE_URL);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <DoncasterHeroSection />
        <DoncasterHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <DoncasterFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <DoncasterFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneDoncaster;
