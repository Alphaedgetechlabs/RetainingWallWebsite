import Header from "@/components/Header";
import MountWaverleyHeroSection from "@/components/mount-waverley/MountWaverleyHeroSection";
import MountWaverleyHowItWorks from "@/components/mount-waverley/MountWaverleyHowItWorks";
import MountWaverleyFenceTypes from "@/components/mount-waverley/MountWaverleyFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MountWaverleyFAQSection from "@/components/mount-waverley/MountWaverleyFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneMountWaverley = () => {
  useDocumentTitle("Mount Waverley Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MountWaverleyHeroSection />
        <MountWaverleyHowItWorks />
        <div id="fence-types"><MountWaverleyFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><MountWaverleyFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMountWaverley;