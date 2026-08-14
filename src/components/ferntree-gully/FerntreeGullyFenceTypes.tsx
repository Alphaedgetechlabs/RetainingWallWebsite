import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";
import { Link } from "react-router-dom";
import colorbondWhiteIcon from "@/assets/colorbond-white-icon.webp";
import timberWhiteIcon from "@/assets/timber-white-icon.webp";
import aluminiumWhiteIcon from "@/assets/aluminium-white-icon.webp";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const FerntreeGullyFenceTypes = () => {
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  const fenceTypes = [
    { id: "colorbond", name: "Concrete Sleeper Retaining Wall", description: "Durable, weather-resistant steel retaining wall available in 15 colours.", features: ["10 year warranty", "Termite resistant", "Low maintenance", "15 colours"], price: "$75/metre", iconImage: colorbondWhiteIcon, popular: true, href: "/colorbond-fencing" },
    { id: "timber", name: "Timber Retaining Wall", description: "Natural timber retaining wall that adds warmth and character.", features: ["Natural appearance", "Cost effective", "Easy to repair", "Customisable"], price: "$65/metre", iconImage: timberWhiteIcon, href: "/timber-fencing" },
    { id: "pool", name: "Pool Retaining Wall", description: "Compliant pool retaining wall in glass, aluminium, or steel.", features: ["AS 1926.1 compliant", "Self-closing gates", "Clear visibility", "Council certified"], price: "$60/metre", icon: Waves, href: "/pool-fencing" },
    { id: "aluminium", name: "Aluminium Retaining Wall", description: "Modern aluminium slats offering privacy and style.", features: ["Contemporary design", "Rust resistant", "Easy installation", "Various colours"], price: "$170/metre", iconImage: aluminiumWhiteIcon, href: "/aluminium-fencing" }
  ];

  return (
    <section id="fence-types" className="py-12 sm:py-20" style={{ backgroundColor: "hsl(215 40% 18%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Perfect Retaining Wall in Ferntree Gully</h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">Discover retaining wall options tailored to your needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {fenceTypes.map((fence) => (
            <Card key={fence.id} className={`relative shadow-strong hover:shadow-accent transition-smooth group cursor-pointer ${fence.popular ? "border-accent ring-2 ring-accent/20" : ""}`}>
              {fence.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span></div>}
              <CardHeader className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  {fence.iconImage ? <img src={fence.iconImage} alt={fence.name} className="w-8 h-8" /> : fence.icon ? <fence.icon className="w-8 h-8 text-white" /> : null}
                </div>
                <div className="text-muted-foreground text-sm font-normal text-center">Ferntree Gully</div>
                <CardTitle className="text-lg">{fence.name}</CardTitle>
                <div className="text-2xl font-bold text-accent"><span className="text-muted-foreground text-sm font-normal mr-1">from</span>{fence.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">{fence.description}</CardDescription>
                <div className="space-y-2">{fence.features.map((feature, index) => <div key={index} className="flex items-center space-x-2 text-sm"><div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0"></div><span>{feature}</span></div>)}</div>
                <div className="flex gap-2">
                  <Button variant={fence.popular ? "hero" : "outline"} className="flex-1" onClick={handleQuoteClick}>Get Quotes</Button>
                  <Button variant="outline" className="flex-1" asChild><Link to={fence.href}>Learn More</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FerntreeGullyFenceTypes;
