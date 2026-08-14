import Header from "@/components/Header";
import securityHeroImg from "@/assets/security-fence-hero.webp";
import securityFeaturesImg from "@/assets/security-fence-features.webp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, Lock, Camera, AlertTriangle, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import commercialSecurityIcon from "@/assets/commercial-security.png";
import industrialSecurityIcon from "@/assets/industrial-security.png";
import governmentSecurityIcon from "@/assets/government-security.png";
import criticalInfrastructureSecurityIcon from "@/assets/critical-infrastructure-security.png";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const SecurityFencing = () => {
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleSecurityOptions = () => { scrollToSection("security-applications"); };
  const benefits = [{ icon: ShieldCheck, title: "Maximum Protection", description: "Heavy-duty construction designed to deter and prevent unauthorised access" }, { icon: Lock, title: "Anti-Climb Design", description: "Specialised profiles and spikes make scaling virtually impossible" }, { icon: Camera, title: "Integration Ready", description: "Compatible with CCTV, sensors, and electronic access systems" }, { icon: AlertTriangle, title: "Visible Deterrent", description: "Professional appearance sends a clear security message" }];
  const features = ["358 anti-climb mesh (prison mesh)", "Palisade and garrison styles", "Razor wire and barbed wire options", "Electronic gate integration", "Powder-coated corrosion protection", "Compliant with Australian security standards"];
  const applications = [{ name: "Commercial", description: "Warehouses & office complexes", icon: commercialSecurityIcon }, { name: "Industrial", description: "Factories & storage yards", icon: industrialSecurityIcon }, { name: "Government", description: "Schools & public facilities", icon: governmentSecurityIcon }, { name: "Critical Infrastructure", description: "Utilities & data centres", icon: criticalInfrastructureSecurityIcon }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Maximum Protection</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Security<br /><span className="text-gradient">Retaining Wall Systems</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Protect your assets with professional-grade security retaining walls. Anti-climb, anti-cut solutions for commercial and industrial properties.</p>
              <div className="flex flex-wrap gap-4"><Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button><Button variant="outline" size="lg" onClick={handleSecurityOptions}>Security Options</Button></div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground"><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Anti-Climb</span></div><div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Anti-Cut</span></div></div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={securityHeroImg} alt="Security Retaining Wall Installation" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Security Retaining Wall?</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional-grade perimeter protection for high-value properties</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Commercial-Grade Security Features</h2>
              <p className="text-muted-foreground mb-8">Security retaining wall solutions meet the highest standards for perimeter protection, trusted by businesses across Australia.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={securityFeaturesImg} alt="Security Retaining Wall Features" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section id="security-applications" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Security Applications</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tailored security solutions for every industry and application</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{applications.map((app, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={app.icon} alt={app.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{app.name}</h3><p className="text-sm text-muted-foreground">{app.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Property?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get a free security assessment and quotes for your perimeter protection needs</p>
            <div className="flex flex-wrap gap-4 justify-center"><Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes Now</Button><a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default SecurityFencing;