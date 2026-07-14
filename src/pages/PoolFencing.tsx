import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, Layers, Hammer, Ruler, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import blockWallHeroImg from "@/assets/block-wall-hero.webp";
import blockWallFeaturesImg from "@/assets/block-wall-features.webp";
import interlockingIcon from "@/assets/block-interlocking.png";
import besserIcon from "@/assets/block-besser.png";
import splitfaceIcon from "@/assets/block-splitface.png";
import keystoneIcon from "@/assets/block-keystone.png";

const QUOTE_URL = "/quote";
const PoolFencing = () => {
  useDocumentTitle("Block Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  const handleViewOptions = () => { scrollToSection("block-types"); };
  const benefits = [{ icon: ShieldCheck, title: "Maximum Strength", description: "Reinforced concrete block walls handle extreme soil loads and tall wall heights" }, { icon: Layers, title: "Interlocking System", description: "Blocks interlock for superior structural integrity without mortar in many designs" }, { icon: Hammer, title: "Built to Last", description: "Concrete masonry provides a 60+ year lifespan with virtually zero maintenance" }, { icon: Ruler, title: "Engineered Heights", description: "Suitable for walls from 600mm to 3m+ with proper engineering certification" }];
  const features = ["Steel-reinforced concrete block construction", "Core-filled with concrete and rebar for tall walls", "Integrated drainage and weep hole systems", "Available in standard grey, charcoal, and coloured finishes", "Suitable for commercial and residential applications", "Engineer-certified designs for walls over 1m"];
  const blockTypes = [{ name: "Interlocking Blocks", description: "Gravity-lock system, no mortar", icon: interlockingIcon }, { name: "Besser Blocks", description: "Core-filled reinforced masonry", icon: besserIcon }, { name: "Split-Face Blocks", description: "Textured decorative finish", icon: splitfaceIcon }, { name: "Keystone Blocks", description: "Curved & terraced designs", icon: keystoneIcon }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Heavy-Duty & Engineered</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Block<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">The ultimate heavy-duty retaining wall solution. Concrete block walls provide unmatched strength for challenging sites, steep slopes, and tall wall requirements.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewOptions}>View Block Types</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground"><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Engineer Certified</span></div><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>60+ Year Lifespan</span></div></div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={blockWallHeroImg} alt="Block Retaining Wall Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Block Retaining Walls?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Maximum strength and versatility for any residential or commercial retaining project</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Reinforced Construction & Engineering</h2>
              <p className="text-muted-foreground mb-8">Block retaining walls are constructed with steel reinforcement and concrete core-fill, providing the structural strength needed for tall walls and heavy soil loads. Our verified contractors handle all engineering requirements.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={blockWallFeaturesImg} alt="Block Retaining Wall Construction" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="block-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Block Type</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Multiple block systems to suit your site conditions and aesthetic preferences</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{blockTypes.map((block, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={block.icon} alt={block.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{block.name}</h3><p className="text-sm text-muted-foreground">{block.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Block Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today for Australia's strongest retaining wall solution</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default PoolFencing;
