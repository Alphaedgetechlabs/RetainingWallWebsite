import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";

const QUOTE_URL = "/quote";

interface DandenongFAQSectionProps {
  onQuoteClick?: () => void;
}

const DandenongFAQSection = ({ onQuoteClick }: DandenongFAQSectionProps) => {
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  const faqs = [
    { question: "How much does retaining wall installation cost in Dandenong?", answer: "Dandenong retaining wall installation costs depend on the retaining wall material, height, total length, and site conditions. As a guide from our Dandenong verified retaining wall contractors, timber retaining walls start from $65 per metre, Colorbond retaining walls start from $75 per metre, and pool-safe retaining wall options can start from $60 per metre. Prices may increase for steeper blocks, rocky soil, retaining requirements, or old retaining wall removal. For the most accurate price, use our instant retaining wall quote tool — it gives you a fast online estimate and matches you with local retaining wall experts who'll provide detailed on-site pricing." },
    { question: "How long does it take to install a retaining wall in Dandenong?", answer: "A standard residential retaining wall (20–30m) in Dandenong usually takes around 1–2 days to install. Larger retaining wall jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days. Pool retaining walls, due to compliance checks and certification rules, typically takes 1–4 days. After reviewing your property, your matched local retaining wall contractors will confirm the exact installation timeline during the quoting stage." },
    { question: "Do I need council approval for my retaining wall in Dandenong?", answer: "In Dandenong most residential retaining walls under 2 metres don't require council approval, but rules can vary depending on your estate area. Approval is often required for boundary retaining walls on corner blocks, heritage-listed properties, high-traffic locations, or retaining walls that exceed standard height limits. Our verified Dandenong local retaining wall contractors understand Greater Dandenong City Council regulations in Dandenong and will guide you through the approval or permit process if needed." },
    { question: "What's the best retaining wall material for my property in Dandenong?", answer: "It depends on your goals and the style of your home in Dandenong. Colorbond retaining walls are incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions. Timber retaining walls offer a natural, warm look but require periodic maintenance. Aluminium slat retaining walls provide a modern appearance with excellent durability, while glass retaining walls are a premium option perfect for pools, outdoor areas, and homes wanting an open, stylish finish. After reviewing your property, Dandenong local retaining wall contractors can recommend the best material based on your privacy needs, style preferences, budget, and long-term value." },
    { question: "Are the retaining wall contractors in Dandenong verified and insured?", answer: "Yes. Every retaining wall contractor on our platform in Dandenong is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you're only connected with reliable, experienced, and proven retaining wall professionals in your Dandenong local area." },
    { question: "How many quotes will I receive?", answer: "You'll typically receive up to 3 competitive quotes from reputable Dandenong local retaining wall experts within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation — you simply choose the retaining wall contractor who best suits your project and budget." }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6"><HelpCircle className="w-8 h-8 text-accent" /></div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Got questions about retaining walls in Dandenong? We've got answers. Here's everything you need to know about getting your perfect retaining wall installed in Dandenong.</p>
        </div>
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors"><span className="text-accent font-bold text-sm">{index + 1}</span></div>
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Our local retaining wall experts in Dandenong are here to help. Get your free quotes and ask them anything!</p>
          <Button variant="hero" size="lg" onClick={onQuoteClick || handleQuoteClick} className="mb-6"><Quote className="w-5 h-5" />Get Your 3 Free Quotes Now</Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1"><span className="text-accent font-bold text-lg">⭐ 4.78</span><span>rating</span></div>
            <span className="text-border">•</span><span>10,000+ Retaining Walls Quoted</span><span className="text-border">•</span><span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DandenongFAQSection;