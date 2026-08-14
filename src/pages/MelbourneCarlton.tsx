import { useEffect } from "react";
import Header from "@/components/Header";
import CarltonHeroSection from "@/components/carlton/CarltonHeroSection";
import CarltonHowItWorks from "@/components/carlton/CarltonHowItWorks";
import CarltonFenceTypes from "@/components/carlton/CarltonFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import CarltonFAQSection from "@/components/carlton/CarltonFAQSection";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const MelbourneCarlton = () => {
  useEffect(() => { document.title = "Carlton Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><CarltonHeroSection /><CarltonHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><CarltonFenceTypes onQuoteClick={handleQuoteClick} /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><CarltonFAQSection onQuoteClick={handleQuoteClick} /></div></main><Footer /></div>);
};
export default MelbourneCarlton;