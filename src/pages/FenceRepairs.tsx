import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Clock, DollarSign, CheckCircle2, Award } from "lucide-react";
import repairsHeroImg from "@/assets/retaining-wall-repairs-hero.webp";
import repairsFeaturesImg from "@/assets/retaining-wall-repairs-features.webp";
import repairConcreteIcon from "@/assets/repair-concrete-sleeper.png";
import repairTimberIcon from "@/assets/repair-timber-sleeper.png";
import repairBlockIcon from "@/assets/repair-block-wall.png";
import repairStoneIcon from "@/assets/repair-stone-wall.png";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const FenceRepairs = () => {
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleEmergencyRepairs = () => { navigateTo(QUOTE_URL); };
  const benefits = [{
    icon: Clock, title: "Fast Response", description: "2-36 hour response time for urgent repairs and emergency wall failures"
  }, {
    icon: Wrench, title: "Expert Repairs", description: "Verified contractors with experience in all retaining wall types and materials"
  }, {
    icon: DollarSign, title: "Cost-Effective", description: "Save money by repairing instead of replacing your entire retaining wall"
  }, {
    icon: CheckCircle2, title: "Quality Work", description: "All repairs completed to engineering standards with proper drainage restoration"
  }];
  const repairTypes = ["Leaning or bulging retaining walls", "Cracked or broken concrete sleepers", "Rotted timber sleepers and posts", "Failed drainage causing hydrostatic pressure", "Displaced or collapsed block walls", "Rusted or corroded steel H-beam posts", "Soil erosion behind retaining walls", "Emergency same-day wall stabilisation"];
  const wallTypes = [{
    name: "Concrete Sleeper", description: "Sleeper & post repairs", icon: repairConcreteIcon
  }, {
    name: "Timber Sleeper", description: "Rot & drainage fixes", icon: repairTimberIcon
  }, {
    name: "Block Wall", description: "Crack & structural repair", icon: repairBlockIcon
  }, {
    name: "Stone Wall", description: "Re-stacking & stabilising", icon: repairStoneIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Fast & Reliable Service</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Retaining Wall<br /><span className="text-gradient">Repair Services</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Don't replace when you can repair! Our verified contractors fix all types of retaining wall damage quickly and affordably — from cracked sleepers to failed drainage.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get Free Assessment</Button>
                <Button variant="outline" size="lg" onClick={handleEmergencyRepairs}>Emergency Repairs</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={repairsHeroImg} alt="Retaining Wall Repair Services" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Repair Services?</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Common Retaining Wall Repairs We Handle</h2>
              <div className="space-y-4">{repairTypes.map((repair, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{repair}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={repairsFeaturesImg} alt="Retaining Wall Repair Types" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We Repair All Retaining Wall Types</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{wallTypes.map((type, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={type.icon} alt={type.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3><p className="text-sm text-muted-foreground">{type.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Your Retaining Wall Repaired?</h2>
            <p className="text-white/90 text-lg mb-8">Get a free assessment today</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Assessment</Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FenceRepairs;
