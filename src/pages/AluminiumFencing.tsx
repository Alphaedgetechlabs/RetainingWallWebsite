import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mountain, Sparkles, Gem, Leaf, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import stoneSandstoneHeroImg from "@/assets/stone-sandstone-hero.webp";
import stoneSandstoneFeaturesImg from "@/assets/stone-sandstone-features.webp";
import sandstoneBlockIcon from "@/assets/stone-sandstone-block.png";
import bluestoneIcon from "@/assets/stone-bluestone.png";
import graniteIcon from "@/assets/stone-granite.png";
import limestoneIcon from "@/assets/stone-limestone.png";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const AluminiumFencing = () => {
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleViewStyles = () => { scrollToSection("stone-types"); };
  const benefits = [{ icon: Mountain, title: "Timeless Elegance", description: "Natural stone creates a stunning, one-of-a-kind aesthetic that improves with age" }, { icon: Sparkles, title: "Premium Finish", description: "Each stone is unique, providing a bespoke look that can't be replicated" }, { icon: Gem, title: "Exceptional Durability", description: "Natural stone retaining walls last 100+ years with minimal maintenance" }, { icon: Leaf, title: "Eco-Friendly", description: "100% natural materials that blend harmoniously with the Australian landscape" }];
  const features = ["Locally sourced Australian sandstone and bluestone", "Dry-stack and mortared construction techniques", "Natural drainage through stone gaps in dry-stack walls", "Suitable for curved and terraced wall designs", "Heritage and architectural style matching available", "Professional installation by experienced stonemasons"];
  const stoneTypes = [{ name: "Sandstone", description: "Warm golden Australian tones", icon: sandstoneBlockIcon }, { name: "Bluestone", description: "Classic dark grey elegance", icon: bluestoneIcon }, { name: "Granite", description: "Speckled, ultra-hard finish", icon: graniteIcon }, { name: "Limestone", description: "Soft cream natural beauty", icon: limestoneIcon }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Premium Natural Stone</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Stone & Sandstone<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Create a stunning, timeless landscape feature with natural stone retaining walls. Locally sourced sandstone, bluestone, granite, and limestone — built to last generations.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewStyles}>View Stone Types</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground"><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>100% Natural Materials</span></div></div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={stoneSandstoneHeroImg} alt="Stone & Sandstone Retaining Wall Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Stone & Sandstone Retaining Walls?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The ultimate premium retaining wall solution with unmatched natural beauty</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Expert Stonemasonry & Natural Construction</h2>
              <p className="text-muted-foreground mb-8">Our verified stonemasons use both dry-stack and mortared techniques to create retaining walls that are structurally sound and visually breathtaking. Each wall is custom-built to suit your landscape.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={stoneSandstoneFeaturesImg} alt="Stone Retaining Wall Construction" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="stone-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Stone Type</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Premium Australian natural stones to create your perfect retaining wall</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{stoneTypes.map((stone, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={stone.icon} alt={stone.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{stone.name}</h3><p className="text-sm text-muted-foreground">{stone.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Stone Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and create a stunning natural stone retaining wall for your property</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default AluminiumFencing;
