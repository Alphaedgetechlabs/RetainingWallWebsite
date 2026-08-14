import { useEffect } from "react";
import Header from "@/components/Header";
import ColdstreamHeroSection from "@/components/coldstream/ColdstreamHeroSection";
import ColdstreamHowItWorks from "@/components/coldstream/ColdstreamHowItWorks";
import ColdstreamFenceTypes from "@/components/coldstream/ColdstreamFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ColdstreamFAQSection from "@/components/coldstream/ColdstreamFAQSection";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const MelbourneColdstream = () => {
  useEffect(() => { document.title = "Coldstream Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><ColdstreamHeroSection /><ColdstreamHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><ColdstreamFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><ColdstreamFAQSection /></div></main><Footer /></div>);
};
export default MelbourneColdstream;