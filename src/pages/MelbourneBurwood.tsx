import Header from "@/components/Header";
import BurwoodHeroSection from "@/components/burwood/BurwoodHeroSection";
import BurwoodHowItWorks from "@/components/burwood/BurwoodHowItWorks";
import BurwoodFenceTypes from "@/components/burwood/BurwoodFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import BurwoodFAQSection from "@/components/burwood/BurwoodFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const MelbourneBurwood = () => {
  useDocumentTitle("Burwood Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><BurwoodHeroSection /><BurwoodHowItWorks /><div id="fence-types"><BurwoodFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><BurwoodFAQSection /></div></main><Footer /></div>);
};
export default MelbourneBurwood;