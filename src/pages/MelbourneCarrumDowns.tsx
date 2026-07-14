import { useEffect } from "react";
import Header from "@/components/Header";
import CarrumDownsHeroSection from "@/components/carrum-downs/CarrumDownsHeroSection";
import CarrumDownsHowItWorks from "@/components/carrum-downs/CarrumDownsHowItWorks";
import CarrumDownsFenceTypes from "@/components/carrum-downs/CarrumDownsFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import CarrumDownsFAQSection from "@/components/carrum-downs/CarrumDownsFAQSection";
import Footer from "@/components/Footer";
const QUOTE_URL = "/quote";
const MelbourneCarrumDowns = () => {
  useEffect(() => { document.title = "Carrum Downs Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><CarrumDownsHeroSection /><CarrumDownsHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><CarrumDownsFenceTypes onQuoteClick={handleQuoteClick} /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><CarrumDownsFAQSection onQuoteClick={handleQuoteClick} /></div></main><Footer /></div>);
};
export default MelbourneCarrumDowns;