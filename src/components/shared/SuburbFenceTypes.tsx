import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";
import { Link } from "react-router-dom";
import colorbondWhiteIcon from "@/assets/colorbond-white-icon.webp";
import timberWhiteIcon from "@/assets/timber-white-icon.webp";
import aluminiumWhiteIcon from "@/assets/aluminium-white-icon.webp";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

interface SuburbFenceTypesProps {
  suburbName: string;
  onQuoteClick?: () => void;
}

const SuburbFenceTypes = ({ suburbName, onQuoteClick }: SuburbFenceTypesProps) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      navigateTo(QUOTE_URL);
    }
  };

  const fenceTypes = [
    {
      id: "concrete-sleeper",
      name: "Concrete Sleeper Retaining Wall",
      description: "Durable, modern retaining walls using concrete sleepers and steel posts. Built to last in Australian conditions.",
      features: ["Long-lasting durability", "Low maintenance", "Modern finish", "Steel post system"],
      price: "$250/m²",
      iconImage: colorbondWhiteIcon,
      popular: true,
      href: "/colorbond-fencing"
    },
    {
      id: "timber-sleeper",
      name: "Timber Sleeper Retaining Wall",
      description: "A natural look for garden and boundary retaining walls using treated timber options.",
      features: ["Natural appearance", "Cost effective", "Easy to repair", "Treated timber"],
      price: "$180/m²",
      iconImage: timberWhiteIcon,
      href: "/timber-fencing"
    },
    {
      id: "block",
      name: "Block Retaining Wall",
      description: "Interlocking block systems for strong, tidy retaining wall finishes on any property.",
      features: ["Interlocking system", "Strong & stable", "Tidy finish", "Versatile designs"],
      price: "$220/m²",
      icon: Waves,
      href: "/pool-fencing"
    },
    {
      id: "stone-sandstone",
      name: "Stone & Sandstone Retaining Wall",
      description: "Premium natural stone options for high-end landscaping and terraces.",
      features: ["Premium finish", "Natural stone", "High-end look", "Long lifespan"],
      price: "$350/m²",
      iconImage: aluminiumWhiteIcon,
      href: "/aluminium-fencing"
    },
  ];

  return (
    <section id="fence-types" className="py-12 sm:py-20" style={{ backgroundColor: "hsl(215 40% 18%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Retaining Wall in {suburbName}
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Discover {suburbName} retaining wall options tailored to your needs, budget, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {fenceTypes.map(fence => (
            <Card key={fence.id} className={`relative shadow-strong hover:shadow-accent transition-smooth group cursor-pointer ${fence.popular ? "border-accent ring-2 ring-accent/20" : ""}`}>
              {fence.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  {fence.iconImage ? (
                    <img src={fence.iconImage} alt={fence.name} className="w-8 h-8" />
                  ) : fence.icon ? (
                    <fence.icon className="w-8 h-8 text-white" />
                  ) : null}
                </div>
                <div className="text-muted-foreground text-sm font-normal text-center">{suburbName}</div>
                <CardTitle className="text-lg">{fence.name}</CardTitle>
                <div className="text-2xl font-bold text-accent">
                  <span className="text-muted-foreground text-sm font-normal mr-1">from</span>
                  {fence.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-center">{fence.description}</CardDescription>

                <div className="space-y-2">
                  {fence.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant={fence.popular ? "hero" : "outline"} className="flex-1" onClick={handleQuoteClick}>
                    Get Quotes
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to={fence.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert {suburbName} team can help you select the perfect retaining wall solution based on your specific needs, budget, and property requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={QUOTE_URL}>Speak to an Expert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbFenceTypes;
