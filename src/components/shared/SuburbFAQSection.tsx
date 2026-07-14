import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";

const QUOTE_URL = "/quote";

interface SuburbFAQSectionProps {
  suburbName: string;
  onQuoteClick?: () => void;
}

const SuburbFAQSection = ({ suburbName, onQuoteClick }: SuburbFAQSectionProps) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      window.location.href = QUOTE_URL;
    }
  };

  const faqs = [
    {
      question: `How much does retaining wall installation cost in ${suburbName}?`,
      answer: `${suburbName} retaining wall installation costs depend on the wall material, height, total length, and site conditions. As a guide from our ${suburbName} verified retaining wall contractors, timber sleeper walls start from $180 per m², concrete sleeper walls start from $250 per m², and block retaining walls start from $220 per m².`
    },
    {
      question: `How long does it take to install a retaining wall in ${suburbName}?`,
      answer: `A standard residential retaining wall in ${suburbName} usually takes around 2–5 days to install. Larger walls, sloping blocks, engineered requirements, or complex drainage may take 1–2 weeks.`
    },
    {
      question: `Do I need council approval for my retaining wall in ${suburbName}?`,
      answer: `In ${suburbName}, retaining walls over a certain height (often 1 metre) or close to boundaries may require council approval or engineering. Our verified ${suburbName} local retaining wall contractors understand council regulations and will guide you through the approval process if needed.`
    },
    {
      question: `What's the best retaining wall material for my property in ${suburbName}?`,
      answer: `It depends on your goals, site conditions, and budget in ${suburbName}. Concrete sleeper walls are durable and modern. Timber sleepers offer a natural look. Block systems provide strong, tidy finishes. Stone and sandstone are premium options for high-end landscaping.`
    },
    {
      question: `Are the retaining wall contractors in ${suburbName} verified and insured?`,
      answer: `Yes. Every retaining wall contractor on our platform in ${suburbName} is fully licensed, insured, and professionally vetted before they're allowed to quote.`
    },
    {
      question: "How many quotes will I receive?",
      answer: `You'll typically receive up to 3 competitive quotes from reputable ${suburbName} local retaining wall experts within hours.`
    },
    {
      question: `Can you repair or replace an existing retaining wall in ${suburbName}?`,
      answer: `Absolutely. Whether you need retaining wall repairs for leaning or cracking, or a complete wall replacement, our ${suburbName} local retaining wall contractors can help.`
    },
    {
      question: "What happens after I submit my quote request?",
      answer: `Within minutes, we'll match you with up to 3 qualified local retaining wall professionals in ${suburbName}. They'll contact you to discuss your job and provide detailed written retaining wall quotes.`
    },
    {
      question: `How long will my retaining wall last in ${suburbName}?`,
      answer: `Retaining wall lifespan depends on the material and ${suburbName} area conditions. A well-installed concrete sleeper wall can last 30–50 years, while timber sleeper walls generally last 15–25 years with proper drainage.`
    },
    {
      question: "What factors can increase the total cost of a retaining wall?",
      answer: "Factors include site excavation, sloped or rocky ground, old wall removal, drainage requirements, engineering needs, wall height, and property accessibility issues."
    },
    {
      question: `Why is drainage so important behind a retaining wall in ${suburbName}?`,
      answer: "Drainage helps reduce water buildup behind the wall, which increases pressure and can lead to movement or failure. Many retaining wall quotes include drainage materials and installation where needed."
    },
    {
      question: `What retaining wall height needs engineering in ${suburbName}?`,
      answer: "Requirements vary by location and site conditions. If your wall is taller, close to boundaries, supporting extra loads (like a driveway), or in poor soil, contractors may recommend engineering and/or permits."
    },
    {
      question: `How do slope and soil type affect retaining wall cost in ${suburbName}?`,
      answer: "Steeper slopes and certain soils can require more excavation, deeper footings, more drainage, or stronger systems. These factors can materially change the total price."
    },
    {
      question: "Can a new retaining wall add value to my property?",
      answer: "Absolutely. A well-built retaining wall can significantly improve your property's usable space, landscaping appeal, and structural integrity — all of which add real value."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about retaining walls in {suburbName}? We've got answers. Here's everything you need to know about
            getting your perfect retaining wall installed in {suburbName}.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20">
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

        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local retaining wall experts in {suburbName} are here to help. Get your free quotes and ask them anything!
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

export default SuburbFAQSection;
