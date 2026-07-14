import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";

const QUOTE_URL = "/quote";

interface DoncasterFAQSectionProps {
  onQuoteClick?: () => void;
}

const DoncasterFAQSection = ({ onQuoteClick }: DoncasterFAQSectionProps) => {
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  const faqs = [
    { question: "How much does retaining wall installation cost in Doncaster?", answer: "Doncaster retaining wall installation costs depend on the retaining wall material, height, total length, and site conditions. As a guide from our Doncaster verified retaining wall contractors, timber retaining walls start from $65 per metre, Colorbond retaining walls start from $75 per metre, and pool-safe retaining wall options can start from $60 per metre." },
    { question: "How long does it take to install a retaining wall in Doncaster?", answer: "A standard residential retaining wall (20–30m) in Doncaster usually takes around 1–2 days to install. Larger retaining wall jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days." },
    { question: "Do I need council approval for my retaining wall in Doncaster?", answer: "In Doncaster most residential retaining walls under 2 metres don't require council approval, but rules can vary depending on your estate area." },
    { question: "What's the best retaining wall material for my property in Doncaster?", answer: "It depends on your goals and the style of your home in Doncaster. Colorbond retaining walls are incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions." },
    { question: "Are the retaining wall contractors in Doncaster verified and insured?", answer: "Yes. Every retaining wall contractor on our platform in Doncaster is fully licensed, insured, and professionally vetted before they're allowed to quote." },
    { question: "How many quotes will I receive?", answer: "You'll typically receive up to 3 competitive quotes from reputable Doncaster local retaining wall experts within hours." }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6"><HelpCircle className="w-8 h-8 text-accent" /></div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Got questions about retaining walls in Doncaster? We've got answers.</p>
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
          <p className="text-muted-foreground mb-6">Our local retaining wall experts in Doncaster are here to help.</p>
          <Button variant="hero" size="lg" onClick={onQuoteClick || handleQuoteClick} className="mb-6"><Quote className="w-5 h-5" />Get Your 3 Free Quotes Now</Button>
        </div>
      </div>
    </section>
  );
};

export default DoncasterFAQSection;