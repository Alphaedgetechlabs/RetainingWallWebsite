import { useEffect } from "react";
import Header from "@/components/Header";
import DingleyVillageHeroSection from "@/components/dingley-village/DingleyVillageHeroSection";
import DingleyVillageHowItWorks from "@/components/dingley-village/DingleyVillageHowItWorks";
import DingleyVillageFenceTypes from "@/components/dingley-village/DingleyVillageFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import DingleyVillageFAQSection from "@/components/dingley-village/DingleyVillageFAQSection";
import Footer from "@/components/Footer";
const QUOTE_URL = "/quote";
const MelbourneDingleyVillage = () => {
  useEffect(() => { document.title = "Dingley Village Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><DingleyVillageHeroSection /><DingleyVillageHowItWorks onQuoteClick={handleQuoteClick} /><div id="fence-types"><DingleyVillageFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><DingleyVillageFAQSection /></div></main><Footer /></div>);
};
export default MelbourneDingleyVillage;