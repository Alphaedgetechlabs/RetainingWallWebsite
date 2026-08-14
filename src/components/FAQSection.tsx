import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";

interface FAQSectionProps {
  onQuoteClick?: () => void;
}

const FAQSection = ({ onQuoteClick }: FAQSectionProps) => {
  const handleQuoteClick = () => {
    navigateTo(QUOTE_URL);
  };

  const faqs = [
    {
      question: "What information do I need for an accurate retaining wall quote?",
      answer: "To price it accurately, contractors usually need your approximate wall length and height, what the wall is for (leveling a slope vs garden edging), site access, and whether drainage or removal of an existing wall is required."
    },
    {
      question: "Do you need a site inspection before giving a final quote?",
      answer: "Often yes. A site inspection helps confirm ground conditions (slope and soil), access for machinery, and any constraints that can affect materials, labour, and drainage requirements."
    },
    {
      question: "What retaining wall height needs engineering or approvals?",
      answer: "Requirements vary by location and site conditions. If your wall is taller, close to boundaries, supporting extra loads (like a driveway), or in poor soil, contractors may recommend engineering and/or permits."
    },
    {
      question: "Why is drainage so important behind a retaining wall?",
      answer: "Drainage helps reduce water buildup behind the wall, which increases pressure and can lead to movement or failure. Many retaining wall quotes include drainage materials and installation where needed."
    },
    {
      question: "Can you build a retaining wall that integrates with a fence?",
      answer: "In many cases, yes. Integrated retaining wall + fence solutions can be cost-effective and create a more seamless finish, depending on your site and the wall system used."
    },
    {
      question: "How do slope and soil type affect retaining wall cost?",
      answer: "Steeper slopes and certain soils can require more excavation, deeper footings, more drainage, or stronger systems. These factors can materially change the total price."
    },
    {
      question: "What materials can I choose for my retaining wall?",
      answer: "Common options include concrete sleepers, timber sleepers, block systems, stone/sandstone, and gabions. The best choice depends on your desired look, height, budget, and site conditions."
    },
    {
      question: "Do retaining wall quotes include excavation and removal of an old wall?",
      answer: "Sometimes, but not always. If there's an existing wall, footings, or a lot of excavation/spoil removal required, it should be clearly listed as included (or excluded) in the quote."
    },
    {
      question: "How long does a retaining wall project usually take?",
      answer: "Timeframes vary based on wall size, access, and weather. Small garden walls can be quick, while taller or engineered walls can take longer due to excavation, drainage, and approvals."
    },
    {
      question: "How does your '3 free quotes' process work?",
      answer: "You tell us about your retaining wall project, and we connect you with verified contractors who can quote on the job. You compare quotes and choose the option that fits your budget and timeline."
    },
    {
      question: "Are the retaining wall contractors verified and insured?",
      answer: "Yes. Every retaining wall contractor in our network is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews."
    },
    {
      question: "How many quotes will I receive?",
      answer: "You'll typically receive up to 3 competitive quotes from reputable local retaining wall experts within hours. This lets you compare pricing, availability, and workmanship. There's absolutely no obligation."
    },
    {
      question: "Can you repair or replace an existing retaining wall?",
      answer: "Absolutely. Whether you need retaining wall repairs (leaning, cracking, drainage issues) or a complete wall replacement, our local retaining wall contractors can help."
    },
    {
      question: "What happens after I submit my quote request?",
      answer: "Within minutes, we'll match you with up to 3 qualified local retaining wall professionals in your area. They'll contact you to discuss your job, arrange a site visit if required, and provide detailed written quotes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about retaining walls? We've got answers. Here's everything you need to know about
            getting your perfect retaining wall installed.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20"
              >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local retaining wall experts are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={handleQuoteClick} className="mb-6">
            <Quote className="w-5 h-5" />
            Get Your 3 Free Quotes Now
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-accent font-bold text-lg">⭐ 4.78</span>
              <span>rating</span>
            </div>
            <span className="text-border">•</span>
            <span>10,000+ Retaining Walls Quoted</span>
            <span className="text-border">•</span>
            <span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
