import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const KilsythFAQSection = () => {
  const faqs = [
    { question: "How much does a retaining wall cost in Kilsyth?", answer: "Colorbond typically costs $75-$120/m, timber $65-$140/m, aluminium pool retaining walls $150-$300/m." },
    { question: "Do I need a permit for a retaining wall in Kilsyth?", answer: "In Kilsyth (Yarra Ranges/Maroondah), retaining walls under 2m generally don't require a permit." },
    { question: "What's the best retaining wall for Kilsyth?", answer: "Timber is popular for Kilsyth's leafy character. Colorbond offers low maintenance." },
    { question: "How long does installation take?", answer: "Most installations take 1-3 days. Pool retaining walls may take 2-4 days." },
    { question: "Are contractors licensed?", answer: "Yes, all contractors are fully licensed, insured, and verified." },
    { question: "Can I get a pool retaining wall?", answer: "Yes! We offer compliant frameless glass, semi-frameless, and aluminium options." },
    { question: "What warranty is offered?", answer: "Colorbond: 10 years, timber: 5-10 years, workmanship: 2-5 years." },
    { question: "Are quotes free?", answer: "Yes! Getting quotes is completely free with no obligation." },
    { question: "Can you replace existing retaining walls?", answer: "Yes, including old retaining wall removal and disposal." },
    { question: "What areas do you service?", answer: "Kilsyth and surrounds including Mooroolbark, Bayswater, Croydon, Ringwood." },
    { question: "How do I prepare?", answer: "Mark boundaries, clear vegetation, ensure access, notify neighbours." },
    { question: "What Colorbond colours are available?", answer: "22 colours including Woodland Grey, Monument, Surfmist, Paperbark." },
    { question: "Do retaining wall contractors work weekends?", answer: "Some offer weekend installations - confirmed with your quotes." },
    { question: "Can you build retaining walls on sloped blocks?", answer: "Yes! We're skilled in stepped and raked retaining wall solutions." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kilsyth Retaining Wall FAQs</h2>
            <p className="text-lg text-slate-600">Common questions answered by local experts.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default KilsythFAQSection;