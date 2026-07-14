import Header from "@/components/Header";
import SorrentoHeroSection from "@/components/sorrento/SorrentoHeroSection";
import SorrentoHowItWorks from "@/components/sorrento/SorrentoHowItWorks";
import SorrentoFenceTypes from "@/components/sorrento/SorrentoFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SorrentoFAQSection from "@/components/sorrento/SorrentoFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneSorrento = () => {
  useDocumentTitle("Sorrento Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SorrentoHeroSection />
        <SorrentoHowItWorks />
        <div id="fence-types"><SorrentoFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SorrentoFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSorrento;