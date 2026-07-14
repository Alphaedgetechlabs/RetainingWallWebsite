import { FileText, Users, ThumbsUp } from "lucide-react";
const BalwynHowItWorks = () => {
  const steps = [
    { icon: FileText, title: "Describe Your Project", description: "Tell us about your retaining wall needs in Balwyn.", step: "01" },
    { icon: Users, title: "Get Matched", description: "We connect you with up to 3 verified Balwyn retaining wall contractors.", step: "02" },
    { icon: ThumbsUp, title: "Compare & Choose", description: "Review quotes and choose the best Balwyn contractor.", step: "03" },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works in Balwyn</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Getting quotes for your Balwyn retaining wall project is easy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />}
              <div className="bg-slate-50 rounded-2xl p-8 relative z-10 hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">{step.step}</div>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6"><step.icon className="w-8 h-8 text-orange-600" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BalwynHowItWorks;
