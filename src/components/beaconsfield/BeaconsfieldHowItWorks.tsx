import { FileText, Users, Hammer } from "lucide-react";

const steps = [
  { icon: FileText, title: "1. Request Quotes", description: "Tell us about your Beaconsfield retaining wall project in under 60 seconds" },
  { icon: Users, title: "2. Compare Quotes", description: "Receive up to 3 quotes from verified Beaconsfield retaining wall contractors" },
  { icon: Hammer, title: "3. Get It Built", description: "Choose your preferred contractor and get your retaining wall installed" },
];

const BeaconsfieldHowItWorks = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works in Beaconsfield</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeaconsfieldHowItWorks;