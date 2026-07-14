import { useEffect } from "react";
import Header from "@/components/Header";
import ChirnsideParkHeroSection from "@/components/chirnside-park/ChirnsideParkHeroSection";
import ChirnsideParkHowItWorks from "@/components/chirnside-park/ChirnsideParkHowItWorks";
import ChirnsideParkFenceTypes from "@/components/chirnside-park/ChirnsideParkFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ChirnsideParkFAQSection from "@/components/chirnside-park/ChirnsideParkFAQSection";
import Footer from "@/components/Footer";
const QUOTE_URL = "/quote";
const MelbourneChirnsidePark = () => {
  useEffect(() => { document.title = "Chirnside Park Retaining Wall Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  return (<div className="min-h-screen bg-background"><Header onQuoteClick={handleQuoteClick} /><main><ChirnsideParkHeroSection /><ChirnsideParkHowItWorks /><div id="fence-types"><ChirnsideParkFenceTypes /></div><div id="reviews"><ReviewsSection /></div><div id="faq"><ChirnsideParkFAQSection /></div></main><Footer /></div>);
};
export default MelbourneChirnsidePark;