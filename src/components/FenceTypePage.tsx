import { Check, Phone, Award } from "lucide-react";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface StyleCard {
  image: string;
  title: string;
  description: string;
}

interface FenceTypePageProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  heroImage: string;
  checklistItems: string[];
  features: FeatureItem[];
  featuresTitle: string;
  featuresSubtitle: string;
  middleSectionTitle: string;
  middleSectionSubtitle?: string;
  middleSectionItems: string[];
  middleSectionImage: string;
  stylesTitle: string;
  stylesSubtitle: string;
  styleCards: StyleCard[];
  showViewChartButton?: boolean;
  viewButtonText?: string;
}

const FenceTypePage = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  heroImage,
  checklistItems,
  features,
  featuresTitle,
  featuresSubtitle,
  middleSectionTitle,
  middleSectionSubtitle,
  middleSectionItems,
  middleSectionImage,
  stylesTitle,
  stylesSubtitle,
  styleCards,
  showViewChartButton = false,
  viewButtonText = "View Colour Range",
}: FenceTypePageProps) => {
  const handleQuoteClick = () => {
    navigateTo(QUOTE_URL);
  };

  // Determine secondary button text based on page type
  const getSecondaryButtonText = () => {
    if (viewButtonText) return viewButtonText;
    if (stylesTitle.includes("Colour")) return "View Colour Range";
    if (stylesTitle.includes("Timber")) return "View Timber Types";
    return "View Styles";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-muted min-h-[60vh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium mb-6">
                  <Award className="w-4 h-4 text-accent" />
                  <span>{badge}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {title}
                  {titleHighlight && (
                    <>
                      <br />
                      <span className="text-accent">{titleHighlight}</span>
                    </>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  {subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href={QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Get 3 Free Quotes in Minutes
                  </a>
                  <button className="btn-secondary">
                    {getSecondaryButtonText()}
                  </button>
                </div>

                {/* Checklist */}
                <div className="flex flex-wrap gap-4">
                  {checklistItems.map((item, index) => (
                    <span key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right content - Hero image */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuresTitle}</h2>
              <p className="text-muted-foreground text-lg">{featuresSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="icon-wrapper mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Middle Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{middleSectionTitle}</h2>
                {middleSectionSubtitle && (
                  <p className="text-muted-foreground mb-6">{middleSectionSubtitle}</p>
                )}
                <ul className="space-y-4">
                  {middleSectionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={middleSectionImage}
                  alt="Features"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Styles Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{stylesTitle}</h2>
              <p className="text-muted-foreground text-lg">{stylesSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {styleCards.map((card, index) => (
                <div key={index} className="bg-muted rounded-xl p-6 text-center">
                  <div 
                    className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden"
                    style={card.image.startsWith('data:') ? { backgroundColor: extractColorFromSvg(card.image) } : undefined}
                  >
                    {!card.image.startsWith('data:') ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        className="w-full h-full"
                        style={{ backgroundColor: extractColorFromSvg(card.image) }}
                      />
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  )}
                </div>
              ))}
            </div>

            {showViewChartButton && (
              <div className="text-center">
                <button className="btn-secondary">
                  View Full Colour Chart
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-xl p-8 md:p-12 text-center shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Install Your {title.split(" ")[0]} Retaining Wall?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get free quotes today and discover why thousands of Australians choose {title.toLowerCase()}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get 3 Free Quotes Now
                </a>
                <a
                  href="tel:0481752344"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call 0481 752 344
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to extract color from inline SVG data URL
const extractColorFromSvg = (dataUrl: string): string => {
  const match = dataUrl.match(/fill='%23([A-Fa-f0-9]+)'/);
  if (match) {
    return `#${match[1]}`;
  }
  return '#ccc';
};

export default FenceTypePage;
