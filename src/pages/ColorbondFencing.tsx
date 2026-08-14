import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Droplets, Sun, Wrench, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import concreteSleeperHeroImg from "@/assets/concrete-sleeper-hero.webp";
import concreteSleeperFeaturesImg from "@/assets/concrete-sleeper-features.webp";
import smoothIcon from "@/assets/concrete-sleeper-smooth.png";
import rockfaceIcon from "@/assets/concrete-sleeper-rockface.png";
import timberLookIcon from "@/assets/concrete-sleeper-timber-look.png";
import colouredIcon from "@/assets/concrete-sleeper-coloured.png";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const ColorbondFencing = () => {
  useDocumentTitle("Concrete Sleeper Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const handleViewStyles = () => { scrollToSection("sleeper-styles"); };
  const benefits = [{
    icon: Shield, title: "Extreme Durability", description: "Concrete sleepers withstand soil pressure, moisture, and harsh Australian conditions for 50+ years"
  }, {
    icon: Droplets, title: "Moisture Resistant", description: "Won't rot, warp, or degrade from ground moisture or water runoff"
  }, {
    icon: Sun, title: "Fire Resistant", description: "Non-combustible material providing BAL-rated fire protection for your property"
  }, {
    icon: Wrench, title: "Low Maintenance", description: "No painting, staining, or treatment required — stays strong for decades"
  }];
  const features = ["Steel galvanised H-beam posts for maximum structural integrity", "Available in smooth, rockface, and timber-look textures", "Engineered for walls up to 1.5m without council approval", "Integrated drainage solutions to prevent hydrostatic pressure", "Termite-proof and rot-proof construction", "Professional installation by verified retaining wall contractors"];
  const styles = [{ name: "Smooth Finish", description: "Clean modern aesthetic", icon: smoothIcon }, { name: "Rockface Texture", description: "Natural stone appearance", icon: rockfaceIcon }, { name: "Timber Look", description: "Wood grain imprint finish", icon: timberLookIcon }, { name: "Coloured Sleepers", description: "Charcoal, sandstone & more", icon: colouredIcon }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Australia's Most Popular Retaining Wall</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Concrete Sleeper<br /><span className="text-gradient">Retaining Wall Solutions</span></h1>
              <p className="text-lg text-muted-foreground mb-8">The strongest and most popular retaining wall system in Australia. Concrete sleepers with galvanised steel H-beam posts deliver unmatched durability and style.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get 3 Free Quotes in Minutes</Button>
                <Button variant="outline" size="lg" onClick={handleViewStyles}>View Sleeper Styles</Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>Free Site Measure</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-primary" /><span>50+ Year Lifespan</span></div>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img alt="Concrete Sleeper Retaining Wall Installation" className="w-full h-full object-cover" src={concreteSleeperHeroImg} /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Concrete Sleeper Retaining Walls?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The most trusted retaining wall system in Australia, engineered for strength and longevity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Steel H-Beam Posts & Premium Sleepers</h2>
              <p className="text-muted-foreground mb-8">Every concrete sleeper retaining wall our verified contractors build uses galvanised steel H-beam posts concreted deep into the ground, with pre-cast concrete sleepers slotted between for a strong, clean finish.</p>
              <div className="space-y-4">{features.map((feature, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{feature}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img alt="Concrete Sleeper Construction Details" className="w-full h-full object-cover" src={concreteSleeperFeaturesImg} /></div></div>
          </div>
        </div>
      </section>
      <section id="sleeper-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Sleeper Style</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Multiple textures and finishes to complement your property</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><img src={style.icon} alt={style.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" /><h3 className="text-lg font-semibold text-foreground mb-2">{style.name}</h3><p className="text-sm text-muted-foreground">{style.description}</p></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Concrete Sleeper Retaining Wall?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and discover why concrete sleeper walls are Australia's #1 choice</p>
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
export default ColorbondFencing;
