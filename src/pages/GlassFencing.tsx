import Header from "@/components/Header";
import engineeredHeroImg from "@/assets/engineered-wall-hero.webp";
import engineeredFeaturesImg from "@/assets/engineered-wall-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, HardHat, FileCheck, Mountain, Shield, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import reinforcedConcreteIcon from "@/assets/engineered-reinforced-concrete.png";
import soldierPileIcon from "@/assets/engineered-soldier-pile.png";
import cantileverIcon from "@/assets/engineered-cantilever.png";
import anchoredIcon from "@/assets/engineered-anchored.png";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const GlassFencing = () => {
  useDocumentTitle("Engineered Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleViewTypes = () => { scrollToSection("wall-types"); };
  const benefits = [
    { icon: FileCheck, title: "Certified Engineering", description: "Every wall comes with stamped engineering drawings and certification from a registered structural engineer" },
    { icon: Mountain, title: "Complex Site Solutions", description: "Purpose-designed for steep slopes, high loads, and challenging soil conditions that standard walls can't handle" },
    { icon: Shield, title: "Council Compliant", description: "Full engineering documentation ensures fast council approval and building permit sign-off" },
    { icon: HardHat, title: "Heavy-Duty Build", description: "Reinforced concrete, steel, and advanced construction methods for walls over 1 metre high" },
  ];
  const features = [
    "Structural engineer design and certification included",
    "Walls from 1m to 6m+ in height",
    "Reinforced concrete with steel rebar construction",
    "Soldier pile, cantilever, and anchored wall systems",
    "Geotechnical site assessment and soil testing",
    "Full council submission documentation prepared",
    "Integrated drainage and waterproofing systems",
    "Suitable for residential, commercial, and civil projects",
  ];
  const wallTypes = [
    { name: "Reinforced Concrete", description: "Steel rebar & poured concrete", icon: reinforcedConcreteIcon },
    { name: "Soldier Pile", description: "H-beams with concrete panels", icon: soldierPileIcon },
    { name: "Cantilever Wall", description: "L-shaped footing design", icon: cantileverIcon },
    { name: "Anchored Wall", description: "Tieback & ground anchor system", icon: anchoredIcon },
  ];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Engineer Certified Solutions</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Engineered<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Purpose-designed retaining walls for taller heights, tricky sites, and higher loads. Every wall comes with certified engineering drawings and council-ready documentation.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewTypes}>View Wall Types</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Engineer Certified</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Council Compliant</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={engineeredHeroImg} alt="Engineered Retaining Wall Construction" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Engineered Retaining Walls?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The professional-grade solution for walls that exceed standard height and load limits</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Designed by Engineers, Built by Experts</h2>
              <p className="text-muted-foreground mb-8">When your site demands more than a standard retaining wall, our network of structural engineers and specialist contractors deliver solutions that are safe, compliant, and built to last generations.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={engineeredFeaturesImg} alt="Engineered Wall Reinforcement Details" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="wall-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Engineered Wall Types</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Multiple engineering solutions to suit every site condition</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{wallTypes.map((type, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={type.icon} alt={type.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3><p className="text-sm text-muted-foreground">{type.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need an Engineered Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes from certified engineers and specialist retaining wall contractors</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default GlassFencing;
