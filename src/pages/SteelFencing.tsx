import Header from "@/components/Header";
import steelHeroImg from "@/assets/steel-fence-hero.webp";
import steelFeaturesImg from "@/assets/steel-fence-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Hammer, Cog, Paintbrush, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import tubularSteelIcon from "@/assets/tubular-steel.png";
import flatBarIcon from "@/assets/flat-bar.png";
import garrisonIcon from "@/assets/garrison.png";
import customFabricatedIcon from "@/assets/custom-fabricated.png";
const QUOTE_URL = "/quote";
const SteelFencing = () => {
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  const handleViewStyles = () => { scrollToSection("steel-styles"); };
  const benefits = [{ icon: Shield, title: "Ultimate Strength", description: "Steel provides unmatched structural strength and impact resistance" }, { icon: Hammer, title: "Built to Last", description: "Properly treated steel retaining walls can last 50+ years with minimal maintenance" }, { icon: Cog, title: "Versatile Options", description: "Available in tubular, flat bar, and fabricated panel designs" }, { icon: Paintbrush, title: "Custom Finishes", description: "Powder-coated or galvanised in a wide range of colours" }];
  const features = ["Hot-dipped galvanised steel construction", "Powder-coated finish in 50+ colours", "Tubular, flat bar & panel options", "Custom heights and configurations", "Gate and automation compatible"];
  const styles = [{ name: "Tubular Steel", description: "Classic round tube design", icon: tubularSteelIcon }, { name: "Flat Bar", description: "Modern sleek appearance", icon: flatBarIcon }, { name: "Garrison", description: "Traditional security style", icon: garrisonIcon }, { name: "Custom Fabricated", description: "Bespoke designs to order", icon: customFabricatedIcon }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Strength & Durability</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Steel<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Discover the ultimate in retaining wall strength and longevity. Steel retaining walls combine industrial durability with elegant design.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewStyles}>View Styles</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground"><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Long lifespan</span></div><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Galvanised Steel</span></div></div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={steelHeroImg} alt="Steel Retaining Wall Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Steel Retaining Wall?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The strongest retaining wall material for lasting security and style</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industrial-Grade Quality</h2>
              <p className="text-muted-foreground mb-8">Steel retaining walls are manufactured to the highest Australian standards, using premium materials and advanced coating technologies.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={steelFeaturesImg} alt="Steel Retaining Wall Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="steel-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Steel Retaining Wall Styles</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">From classic tubular to modern flat bar designs</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{styles.map((style, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={style.icon} alt={style.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{style.name}</h3><p className="text-sm text-muted-foreground">{style.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Install Your Steel Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and experience the strength of premium steel retaining walls</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default SteelFencing;