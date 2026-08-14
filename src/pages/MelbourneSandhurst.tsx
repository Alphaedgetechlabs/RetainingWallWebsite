import Header from "@/components/Header";
import SandhurstHeroSection from "@/components/sandhurst/SandhurstHeroSection";
import SandhurstHowItWorks from "@/components/sandhurst/SandhurstHowItWorks";
import SandhurstFenceTypes from "@/components/sandhurst/SandhurstFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SandhurstFAQSection from "@/components/sandhurst/SandhurstFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneSandhurst = () => {
  useDocumentTitle("Sandhurst Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SandhurstHeroSection />
        <SandhurstHowItWorks />
        <div id="fence-types"><SandhurstFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SandhurstFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSandhurst;