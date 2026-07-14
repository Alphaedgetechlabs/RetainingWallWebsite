import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FenceTypes from "@/components/FenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { OrganizationJsonLd, LocalBusinessJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";
import tradeConfig from "@/data/tradeConfig.json";
import faqs from "@/data/faqs.json";

const QUOTE_URL = "/quote";

const Index = () => {
  useDocumentTitle(tradeConfig.seo.defaultTitle);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="description" content={tradeConfig.seo.defaultDescription} />
        <link rel="canonical" href={tradeConfig.url} />
        <meta property="og:title" content={tradeConfig.seo.defaultTitle} />
        <meta property="og:description" content={tradeConfig.seo.defaultDescription} />
        <meta property="og:url" content={tradeConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={tradeConfig.seo.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tradeConfig.seo.defaultTitle} />
        <meta name="twitter:description" content={tradeConfig.seo.defaultDescription} />
      </Helmet>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <FAQJsonLd faqs={faqs} />
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HeroSection />
        <HowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <FenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <FAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
