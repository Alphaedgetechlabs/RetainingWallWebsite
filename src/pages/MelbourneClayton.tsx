import Header from "@/components/Header";
import ClaytonHeroSection from "@/components/clayton/ClaytonHeroSection";
import ClaytonHowItWorks from "@/components/clayton/ClaytonHowItWorks";
import ClaytonFenceTypes from "@/components/clayton/ClaytonFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ClaytonFAQSection from "@/components/clayton/ClaytonFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const MelbourneClayton = () => {
  useDocumentTitle("Clayton Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <ClaytonHeroSection />
        <ClaytonHowItWorks />
        <div id="fence-types"><ClaytonFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><ClaytonFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneClayton;
