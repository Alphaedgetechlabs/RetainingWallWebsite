import Header from "@/components/Header";
import gabionHeroImg from "@/assets/gabion-wall-hero.webp";
import gabionFeaturesImg from "@/assets/gabion-wall-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Droplets, Leaf, Mountain, Shield, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import gabionRiverRockIcon from "@/assets/gabion-river-rock.png";
import gabionCrushedGraniteIcon from "@/assets/gabion-crushed-granite.png";
import gabionSandstoneIcon from "@/assets/gabion-sandstone.png";
import gabionDecorativeIcon from "@/assets/gabion-decorative.png";

const QUOTE_URL = "/quote";
const FeatureFencing = () => {
  useDocumentTitle("Gabion Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  const handleViewStyles = () => { scrollToSection("gabion-styles"); };
  const benefits = [
    { icon: Droplets, title: "Superior Drainage", description: "Open stone-fill structure allows water to pass freely, eliminating hydrostatic pressure behind the wall" },
    { icon: Leaf, title: "Eco-Friendly", description: "Natural stone fill blends with the landscape and supports plant growth between the rocks" },
    { icon: Mountain, title: "Flexible Structure", description: "Wire mesh cages flex with ground movement, making them ideal for unstable or sloping sites" },
    { icon: Shield, title: "Long Lasting", description: "Galvanised or galfan-coated wire mesh resists corrosion for 60+ years of service life" },
  ];
  const features = [
    "Galvanised welded mesh gabion baskets (2.0–4.0mm wire)",
    "Multiple stone fill options: river rock, granite, sandstone, bluestone",
    "Terraced and stepped designs for steep slopes",
    "No concrete footings required in most applications",
    "Excellent noise and wind buffering properties",
    "Can be planted with groundcovers for a green wall effect",
    "Ideal for waterway and creek bank stabilisation",
  ];
  const styles = [
    { name: "River Rock Fill", description: "Rounded natural river stones", icon: gabionRiverRockIcon },
    { name: "Crushed Granite", description: "Angular grey stone finish", icon: gabionCrushedGraniteIcon },
    { name: "Sandstone Fill", description: "Warm golden tones", icon: gabionSandstoneIcon },
    { name: "Decorative Mix", description: "Mixed colour stone blends", icon: gabionDecorativeIcon },
  ];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Drainage-Friendly & Contemporary</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Gabion<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Rock-filled wire mesh cages that combine natural beauty with exceptional drainage. Perfect for slopes, gardens, and waterway stabilisation across Australia.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewStyles}>View Stone Options</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>No Footings Needed</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>60+ Year Lifespan</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={gabionHeroImg} alt="Gabion Retaining Wall Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Gabion Retaining Walls?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">The natural, drainage-friendly solution that gets stronger over time</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Wire Mesh Baskets & Natural Stone Fill</h2>
              <p className="text-muted-foreground mb-8">Gabion walls use heavy-duty galvanised wire mesh baskets filled with locally sourced stone. The permeable structure eliminates the need for separate drainage systems, saving you time and money.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={gabionFeaturesImg} alt="Gabion Wall Construction Details" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="gabion-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Stone Fill</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Select from a range of natural stone fills to match your landscape</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{styles.map((style, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={style.icon} alt={style.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{style.name}</h3><p className="text-sm text-muted-foreground">{style.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Gabion Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes from verified gabion wall contractors in your area</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FeatureFencing;
