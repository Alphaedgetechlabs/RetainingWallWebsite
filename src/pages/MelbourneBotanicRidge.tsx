import { useEffect } from "react";
import Header from "@/components/Header";
import BotanicRidgeHeroSection from "@/components/botanic-ridge/BotanicRidgeHeroSection";
import BotanicRidgeHowItWorks from "@/components/botanic-ridge/BotanicRidgeHowItWorks";
import BotanicRidgeFenceTypes from "@/components/botanic-ridge/BotanicRidgeFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BotanicRidgeFAQSection from "@/components/botanic-ridge/BotanicRidgeFAQSection";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneBotanicRidge = () => {
  useEffect(() => { document.title = "Botanic Ridge Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <BotanicRidgeHeroSection />
        <BotanicRidgeHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><BotanicRidgeFenceTypes onQuoteClick={handleQuoteClick} /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><BotanicRidgeFAQSection onQuoteClick={handleQuoteClick} /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneBotanicRidge;