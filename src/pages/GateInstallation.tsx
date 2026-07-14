import Header from "@/components/Header";
import gateHeroImg from "@/assets/gate-installation-hero.webp";
import gateFeaturesImg from "@/assets/gate-installation-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Lock, Smartphone, Zap, Settings, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import slidingGateIcon from "@/assets/sliding-gate.png";
import swingGateIcon from "@/assets/swing-gate.png";
import pedestrianGateIcon from "@/assets/pedestrian-gate.png";
import commercialGateIcon from "@/assets/commercial-gate.png";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const GateInstallation = () => {
  useDocumentTitle("Gate Installation Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const handleViewGateOptions = () => {
    scrollToSection("gate-types");
  };
  const benefits = [{
    icon: Lock,
    title: "Enhanced Security",
    description: "Secure your property with professional gate systems"
  }, {
    icon: Smartphone,
    title: "Smart Automation",
    description: "Remote control and smartphone integration"
  }, {
    icon: Settings,
    title: "Custom Design",
    description: "Gates designed to match your retaining wall style"
  }, {
    icon: Zap,
    title: "Motor & Automation",
    description: "Premium automatic motors with safety features"
  }];
  const features = ["Custom-designed gates to match any retaining wall", "Automatic motor installation available", "Intercom and access control systems", "Sliding and swing gate options", "Expert installation"];
  const gateTypes = [{
    name: "Sliding Gates",
    description: "Space-saving automatic",
    icon: slidingGateIcon
  }, {
    name: "Swing Gates",
    description: "Classic single or double",
    icon: swingGateIcon
  }, {
    name: "Pedestrian Gates",
    description: "Walk-through access",
    icon: pedestrianGateIcon
  }, {
    name: "Commercial Gates",
    description: "Heavy-duty industrial",
    icon: commercialGateIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Security & Convenience</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Gate<br /><span className="text-gradient">Installation Services</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Complete your property with a custom-designed gate system.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewGateOptions}>Gate Options</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={gateHeroImg} alt="Gate Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Install a Professional Gate?</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Features & Technology</h2>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={gateFeaturesImg} alt="Gate Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="gate-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gate Types</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{gateTypes.map((type, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={type.icon} alt={type.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3><p className="text-sm text-muted-foreground">{type.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Install Your Gate?</h2>
            <p className="text-white/90 text-lg mb-8">Get free quotes today</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default GateInstallation;
