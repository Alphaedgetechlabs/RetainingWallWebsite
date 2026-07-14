import Header from "@/components/Header";
import SuburbHeroSection from "@/components/shared/SuburbHeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneTheBasin = () => {
  useDocumentTitle("The Basin Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SuburbHeroSection suburbName="The Basin" />
        <div id="reviews"><ReviewsSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneTheBasin;