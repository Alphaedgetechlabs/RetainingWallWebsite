import { useState } from "react";
import { TRADES, Trade } from "@/data/quoteFunnelData";

interface TradeSelectionProps {
  onSelect: (trade: string) => void;
}

const TradeSelection = ({ onSelect }: TradeSelectionProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (trade: Trade) => {
    setSelected(trade.name);
    // Auto-advance after a brief delay
    setTimeout(() => onSelect(trade.name), 300);
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-32">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-headline text-foreground mb-4">
            What trade do you <span className="text-primary">need?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Select the service that best matches your project. We'll connect you with vetted professionals in your area.
          </p>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TRADES.map((trade) => (
            <button
              key={trade.name}
              onClick={() => handleSelect(trade)}
              className={`group flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 border active:scale-95 ${
                trade.isEmergency
                  ? "bg-destructive/10 hover:bg-destructive/20 border-transparent col-span-2 sm:col-span-1"
                  : selected === trade.name
                  ? "bg-secondary border-primary"
                  : "bg-secondary/50 hover:bg-secondary border-transparent"
              }`}
            >
              <span
                className={`material-symbols-outlined text-3xl mb-3 ${
                  trade.isEmergency ? "text-destructive" : "text-primary"
                }`}
                style={trade.isEmergency ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {trade.icon}
              </span>
              <span className={`font-bold text-sm tracking-tight ${trade.isEmergency ? "text-destructive" : "text-foreground"}`}>
                {trade.name}
              </span>
            </button>
          ))}
        </section>

        <div className="mt-16 flex justify-center">
          <div className="p-8 bg-secondary rounded-2xl flex items-center gap-6 max-w-xl">
            <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary-foreground">info</span>
            </div>
            <div>
              <h4 className="font-bold text-foreground">Not seeing your trade?</h4>
              <p className="text-sm text-muted-foreground">Don't worry, select "Renovation" and we'll help you narrow it down in the next step.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-6 flex justify-between items-center bg-card/80 backdrop-blur-xl shadow-[0_-20px_40px_rgba(74,37,5,0.06)] z-50">
        <button className="bg-secondary text-foreground rounded-md px-8 py-3 font-headline text-sm font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95">
          Back
        </button>
        <div className="hidden md:flex flex-col items-center">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-1">Orange Connect</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
          </div>
        </div>
        <button
          onClick={() => selected && onSelect(selected)}
          className="bg-gradient-to-br from-primary to-brand-orange text-primary-foreground rounded-md px-8 py-3 shadow-sm font-headline text-sm font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default TradeSelection;
