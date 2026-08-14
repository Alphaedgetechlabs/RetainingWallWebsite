import Header from "@/components/Header";
import replacementHeroImg from "@/assets/replacement-wall-hero.webp";
import replacementFeaturesImg from "@/assets/replacement-wall-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Trash2, HardHat, RefreshCw, Truck, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const ChainLinkFencing = () => {
  useDocumentTitle("Retaining Wall Replacement & Removal Quotes — Get 3 Free Quotes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleViewProcess = () => { scrollToSection("process"); };
  const benefits = [
    { icon: Trash2, title: "Full Demolition", description: "Safe removal of old, failing, or dangerous retaining walls with minimal disruption to your property" },
    { icon: HardHat, title: "Expert Rebuild", description: "Replacement with a stronger, modern retaining wall system designed for your specific site conditions" },
    { icon: Truck, title: "Waste Disposal", description: "All old materials removed and disposed of responsibly — concrete, timber, and rubble cleared from site" },
    { icon: RefreshCw, title: "Upgrade Options", description: "Replace old timber with concrete sleepers, or upgrade blocks to engineered solutions for longer life" },
  ];
  const features = [
    "Safe demolition of old timber, concrete, or block walls",
    "Excavation and site preparation for new wall",
    "Soil retention and temporary shoring during rebuild",
    "New drainage system installation behind replacement wall",
    "All waste removed and site left clean",
    "Engineering certification for walls over 1m height",
    "Upgrade from timber to concrete sleeper or block systems",
    "Council permits and approvals managed for you",
  ];
  const processSteps = [
    { icon: Check, name: "Site Assessment", description: "Inspect existing wall condition" },
    { icon: Trash2, name: "Demolition", description: "Safe removal of old wall" },
    { icon: HardHat, name: "Rebuild", description: "New wall construction" },
    { icon: RefreshCw, name: "Completion", description: "Clean up & final inspection" },
  ];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Remove & Rebuild</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Retaining Wall<br /><span className="text-gradient">Replacement & Removal</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Old wall failing? We safely remove and replace damaged retaining walls with stronger, longer-lasting systems. Full demolition, waste disposal, and new construction in one service.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleViewProcess}>View Process</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Full Removal</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Waste Disposed</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={replacementHeroImg} alt="Retaining Wall Replacement & Removal" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Replace Your Retaining Wall?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sometimes repair isn't enough — a full replacement gives you a safer, stronger wall that lasts decades</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Wall Replacement Service</h2>
              <p className="text-muted-foreground mb-8">From demolition to rebuild, our verified contractors handle the entire process. We remove the old wall, prepare the site, install proper drainage, and build a new retaining wall that's engineered to last.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={replacementFeaturesImg} alt="Before and After Wall Replacement" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="process" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Replacement Process</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">A simple 4-step process from old wall to new</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{processSteps.map((step, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4"><step.icon className="w-8 h-8 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Replace Your Old Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes for complete wall removal and replacement from verified contractors</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default ChainLinkFencing;
