import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";

const QUOTE_URL = "/quote";

interface BoxHillFAQSectionProps {
  onQuoteClick?: () => void;
}

const BoxHillFAQSection = ({ onQuoteClick }: BoxHillFAQSectionProps) => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  const faqs = [
    {
      question: "How much does retaining wall installation cost in Box Hill?",
      answer: "Box Hill retaining wall installation costs depend on the retaining wall material, height, total length, and site conditions. As a guide from our Box Hill verified retaining wall contractors, timber retaining walls start from $65 per metre, Colorbond retaining walls start from $75 per metre, and pool-safe retaining wall options can start from $60 per metre. Prices may increase for steeper blocks, rocky soil, retaining requirements, or old retaining wall removal. For the most accurate price, use our instant retaining wall quote tool — it gives you a fast online estimate and matches you with local retaining wall experts who'll provide detailed on-site pricing."
    },
    {
      question: "How long does it take to install a retaining wall in Box Hill?",
      answer: "A standard residential retaining wall (20–30m) in Box Hill usually takes around 1–2 days to install. Larger retaining wall jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days. Pool retaining walls, due to compliance checks and certification rules, typically take 1–4 days. After reviewing your property, your matched local retaining wall contractors will confirm the exact installation timeline during the quoting stage."
    },
    {
      question: "Do I need council approval for my retaining wall in Box Hill?",
      answer: "In Box Hill most residential retaining walls under 2 metres don't require council approval, but rules can vary depending on your estate area. Approval is often required for boundary retaining walls on corner blocks, heritage-listed properties, high-traffic locations, or retaining walls that exceed standard height limits. Our verified Box Hill local retaining wall contractors understand Whitehorse City Council regulations in Box Hill and will guide you through the approval or permit process if needed."
    },
    {
      question: "What's the best retaining wall material for my property in Box Hill?",
      answer: "It depends on your goals and the style of your home in Box Hill. Colorbond retaining walls are incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions. Timber retaining walls offer a natural, warm look but require periodic maintenance. Aluminium slat retaining walls provide a modern appearance with excellent durability, while glass retaining walls are a premium option perfect for pools, outdoor areas, and homes wanting an open, stylish finish. After reviewing your property, Box Hill local retaining wall contractors can recommend the best material based on your privacy needs, style preferences, budget, and long-term value."
    },
    {
      question: "Are the retaining wall contractors in Box Hill verified and insured?",
      answer: "Yes. Every retaining wall contractor on our platform in Box Hill is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you're only connected with reliable, experienced, and proven retaining wall professionals in your Box Hill local area."
    },
    {
      question: "How many quotes will I receive?",
      answer: "You'll typically receive up to 3 competitive quotes from reputable Box Hill local retaining wall experts within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation — you simply choose the retaining wall contractor who best suits your project and budget."
    },
    {
      question: "Can you repair or replace an existing retaining wall in Box Hill?",
      answer: "Absolutely. Whether you need simple retaining wall repairs (broken palings, leaning posts, storm damage) or a complete retaining wall replacement, our Box Hill local retaining wall contractors can help. They'll inspect the retaining wall, explain your repair-vs-replacement options, and provide honest advice to ensure you get the most cost-effective solution for your property."
    },
    {
      question: "What happens after I submit my quote request?",
      answer: "Within minutes, we'll match you with up to 3 qualified local retaining wall professionals in Box Hill. They'll contact you to discuss your job, arrange a site visit if required, and provide detailed written retaining wall quotes. You review the quotes, ask any questions, and choose the retaining wall contractor that best suits your project — all at your own pace with zero pressure."
    },
    {
      question: "How long will my retaining wall last in Box Hill?",
      answer: "Retaining wall lifespan depends on the material and Box Hill area climate. A well-installed Colorbond or aluminium retaining wall can last 20–30 years, while timber retaining walls generally last 10–20 years with proper care. Regular maintenance, high-quality installation, and choosing the right retaining wall material for the Box Hill area all play a major role in how long your retaining wall will last."
    },
    {
      question: "What factors can increase the total cost of a retaining wall?",
      answer: "Aside from the retaining wall material itself, several factors can increase the total cost of a retaining wall. These include site preparation, sloped or rocky ground, old retaining wall removal, retaining requirements, custom designs, extra gates, and property accessibility issues. Your retaining wall contractors will outline all costs upfront during the quoting process so there are no surprises."
    },
    {
      question: "Do I need my neighbour's approval for a new boundary retaining wall in Box Hill?",
      answer: "Yes — communication with your neighbour is essential. Boundary retaining walls require both parties to agree on the retaining wall height, materials, and cost sharing. In most cases, a quick conversation is enough to reach an agreement."
    },
    {
      question: "How close to the boundary can I build my retaining wall in Box Hill?",
      answer: "Most boundary retaining walls are installed directly on the shared property line and are usually a shared cost between neighbours. To avoid disputes, it's best to check your boundary plan, title documents, or property survey before work begins. If needed, your retaining wall contractor can help confirm the correct boundary location."
    },
    {
      question: "How do I choose the right retaining wall for my home in Box Hill?",
      answer: "Choosing the right retaining wall depends on your home's style, privacy requirements and budget. Modern and contemporary homes often suit aluminium slat retaining walls or Colorbond, while classic or traditional properties typically look best with timber or decorative feature retaining walls. During your consultation, a local retaining wall contractor will assess your property and recommend the best materials based on appearance, durability, long-term value, and your goals."
    },
    {
      question: "Can a new retaining wall add value to my property?",
      answer: "Absolutely. A modern, high-quality retaining wall can significantly improve your property's street appeal, privacy, and security — all of which add real value. It creates a stronger first impression, enhances outdoor spaces, and reduces future maintenance for potential buyers."
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
            Got questions about retaining walls in Box Hill? We've got answers. Here's everything you need to know about
            getting your perfect retaining wall installed in Box Hill.
          </p>
        </div>

        {/* FAQ Accordion */}
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

        {/* CTA Footer */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local retaining wall experts in Box Hill are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={onQuoteClick || handleQuoteClick} className="mb-6">
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

export default BoxHillFAQSection;