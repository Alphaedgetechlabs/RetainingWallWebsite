import Header from "@/components/Header";
import RichmondHeroSection from "@/components/richmond/RichmondHeroSection";
import RichmondHowItWorks from "@/components/richmond/RichmondHowItWorks";
import RichmondFenceTypes from "@/components/richmond/RichmondFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RichmondFAQSection from "@/components/richmond/RichmondFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneRichmond = () => {
  useDocumentTitle("Richmond Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RichmondHeroSection />
        <RichmondHowItWorks />
        <div id="fence-types"><RichmondFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><RichmondFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRichmond;