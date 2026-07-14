import Header from "@/components/Header";
import SouthYarraHeroSection from "@/components/south-yarra/SouthYarraHeroSection";
import SouthYarraHowItWorks from "@/components/south-yarra/SouthYarraHowItWorks";
import SouthYarraFenceTypes from "@/components/south-yarra/SouthYarraFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SouthYarraFAQSection from "@/components/south-yarra/SouthYarraFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneSouthYarra = () => {
  useDocumentTitle("South Yarra Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SouthYarraHeroSection />
        <SouthYarraHowItWorks />
        <div id="fence-types"><SouthYarraFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SouthYarraFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSouthYarra;