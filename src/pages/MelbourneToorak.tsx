import Header from "@/components/Header";
import ToorakHeroSection from "@/components/toorak/ToorakHeroSection";
import ToorakHowItWorks from "@/components/toorak/ToorakHowItWorks";
import ToorakFenceTypes from "@/components/toorak/ToorakFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ToorakFAQSection from "@/components/toorak/ToorakFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneToorak = () => {
  useDocumentTitle("Toorak Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <ToorakHeroSection />
        <ToorakHowItWorks />
        <div id="fence-types"><ToorakFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><ToorakFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneToorak;