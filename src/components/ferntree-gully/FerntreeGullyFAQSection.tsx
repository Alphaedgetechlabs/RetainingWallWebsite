import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

const FerntreeGullyFAQSection = () => {
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };

  const faqs = [
    { question: "How much does a retaining wall cost in Ferntree Gully?", answer: "Retaining wall costs in Ferntree Gully depend on the material, height, and site conditions. Timber starts from $65/m, Colorbond from $75/m." },
    { question: "How long does retaining wall installation take?", answer: "A standard residential retaining wall (20–30m) takes around 1–2 days. Larger jobs may take 3–7 days." },
    { question: "Do I need council approval?", answer: "Most residential retaining walls under 2 metres don't require approval. Our contractors can advise on your specific situation." },
    { question: "Are your contractors verified?", answer: "Yes. Every contractor is fully licensed, insured, and professionally vetted." }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6"><HelpCircle className="w-8 h-8 text-accent" /></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Got questions about retaining walls in Ferntree Gully? We've got answers.</p>
        </div>
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1"><span className="text-accent font-bold text-sm">{index + 1}</span></div>
                    <span className="text-base md:text-lg font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <Button variant="hero" size="lg" onClick={handleQuoteClick} className="mb-6"><Quote className="w-5 h-5" />Get Your 3 Free Quotes Now</Button>
        </div>
      </div>
    </section>
  );
};

export default FerntreeGullyFAQSection;