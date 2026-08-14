import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { navigateTo } from "@/lib/spa-navigate";

const QUOTE_URL = "/quote";
const FAQ = () => {
  useDocumentTitle("Frequently Asked Questions — QuoteMyRetainingWall");
  const handleQuoteClick = () => { navigateTo(QUOTE_URL); };
  const faqCategories = [{
    title: "Getting Started",
    faqs: [{ question: "How do I get a retaining wall quote?", answer: "Simply click 'Get Free Quotes' on our website, fill out the quick form with your retaining wall requirements, and we'll connect you with up to 3 verified local contractors who will provide competitive quotes within 1-48 hours." }, { question: "Is the quote service really free?", answer: "Yes, our quote service is completely free for homeowners. There are no hidden fees or obligations." }, { question: "How long does it take to receive quotes?", answer: "Most homeowners receive their first quote within 2 hours of submitting their request." }]
  }, {
    title: "About Our Contractors",
    faqs: [{ question: "How are contractors verified?", answer: "All contractors in our network undergo a thorough verification process including license verification, insurance checks, and reference verification." }, { question: "Are the contractors licensed and insured?", answer: "Yes, we only work with contractors who hold valid licenses and comprehensive insurance coverage." }]
  }, {
    title: "Costs & Payment",
    faqs: [{ question: "How much does a retaining wall cost per m²?", answer: "Costs vary by material: Concrete Sleeper $250/m², Timber Sleeper $180/m², Block $220/m², Stone & Sandstone $350/m²." }]
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"><HelpCircle className="w-4 h-4" /><span className="text-sm font-medium">Frequently Asked Questions</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Got Questions? We've Got Answers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our retaining wall quote platform.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>)}
        </div>
      </section>
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Our team is here to help with any retaining wall questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button variant="accent" size="lg" onClick={handleQuoteClick}>Get Your Free Quotes</Button></div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default FAQ;