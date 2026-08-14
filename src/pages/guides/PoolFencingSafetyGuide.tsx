import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const PoolFencingSafetyGuide = () => {
  const handleQuoteClick = () => {
    navigateTo(QUOTE_URL);
  };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Retaining Wall Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Retaining Wall
              <br />
              <span className="text-gradient">Drainage Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Essential retaining wall drainage requirements, techniques, and compliance information for Australian properties
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-2">Important Notice</p>
                  <p className="text-muted-foreground text-sm">
                    Poor drainage is the number one cause of retaining wall failure in Australia. This guide explains why drainage matters and how to get it right.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">Drainage is the single most important factor in how long a retaining wall lasts. Without proper drainage, water builds up behind the wall, creating hydrostatic pressure that pushes against the structure — eventually causing leaning, cracking, or complete failure.</p>
            <p className="text-lg text-muted-foreground mb-8">Every retaining wall — regardless of material, height, or location — needs an effective drainage system. This guide explains how retaining wall drainage works, what components are required, and how homeowners can ensure their wall is built to last.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Drainage Matters for Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">When it rains, water saturates the soil behind a retaining wall. Without a way to escape, this water creates hydrostatic pressure — a force that pushes horizontally against the wall.</p>
            <p className="text-muted-foreground mb-4">The effects of poor drainage include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Wall leaning or tilting forward</li>
              <li>Cracking in sleepers, blocks, or mortar joints</li>
              <li>Soil erosion behind and beneath the wall</li>
              <li>Foundation undermining</li>
              <li>Complete wall collapse in severe cases</li>
              <li>Water damage to neighbouring properties</li>
            </ul>
            <p className="text-muted-foreground mb-8">Proper drainage removes water from behind the wall before pressure can build to dangerous levels. It's not optional — it's essential for every retaining wall.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Core Components of Retaining Wall Drainage</h2>
            <p className="text-muted-foreground mb-4">A well-designed retaining wall drainage system typically includes four key components:</p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Agricultural (Ag) Pipe</h3>
            <p className="text-muted-foreground mb-4">A slotted or perforated pipe (usually 100 mm diameter) is laid along the base of the wall behind the sleepers or blocks. This pipe collects water that drains down through the backfill and channels it to a discharge point.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Must be laid with a slight fall (minimum 1:100 gradient) to allow water flow</li>
              <li>Should be connected to stormwater, a pit, or a suitable discharge point</li>
              <li>Sock-covered ag pipe helps prevent soil and sediment from blocking the perforations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Gravel Backfill</h3>
            <p className="text-muted-foreground mb-4">Free-draining gravel or aggregate is placed behind the wall, typically 200–300 mm thick. This creates a drainage zone that allows water to flow down to the ag pipe rather than building up against the wall.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Use 20 mm drainage gravel or blue metal aggregate</li>
              <li>Extends from the base of the wall to near the top</li>
              <li>Should not be replaced with compacted soil or clay</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Geotextile Fabric (Filter Cloth)</h3>
            <p className="text-muted-foreground mb-4">A layer of geotextile fabric is placed between the retained soil and the gravel backfill. This prevents fine soil particles from migrating into the gravel and clogging the drainage system over time.</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Non-woven geotextile is most commonly used</li>
              <li>Should wrap around the ag pipe and gravel layer</li>
              <li>Prevents long-term drainage failure from soil infiltration</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Weep Holes</h3>
            <p className="text-muted-foreground mb-8">Weep holes are small openings at the base of the wall that allow collected water to escape to the front. They provide a visible, passive drainage outlet and are particularly important for block and masonry walls.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Drainage Requirements by Wall Type</h2>
            <p className="text-muted-foreground mb-4">Different retaining wall materials have slightly different drainage considerations:</p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Concrete Sleeper Walls</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Water can seep between sleepers, but drainage is still essential</li>
              <li>Ag pipe and gravel backfill are standard requirements</li>
              <li>Geotextile fabric prevents soil washing through gaps</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Timber Sleeper Walls</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Drainage is critical — moisture accelerates timber rot</li>
              <li>Ag pipe and gravel reduce soil moisture contact with timber</li>
              <li>Good drainage can significantly extend the lifespan of timber walls</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Block & Masonry Walls</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Weep holes at the base are essential for pressure relief</li>
              <li>Ag pipe and gravel backfill behind the block work</li>
              <li>Rendered block walls need weep holes below the render line</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Natural Stone Walls</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Dry-stack stone walls allow some natural drainage between stones</li>
              <li>Mortared stone walls need ag pipe and weep holes like block walls</li>
              <li>Gravel backfill is still required behind all stone walls</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Where Should Drainage Water Go?</h2>
            <p className="text-muted-foreground mb-4">Water collected by the drainage system needs to be directed to an appropriate discharge point. Options include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Connection to the property's stormwater system</li>
              <li>Discharge to a council stormwater pit</li>
              <li>Direction to a natural drainage swale or garden area (where permitted)</li>
              <li>Soakaway pits in areas without stormwater connection</li>
            </ul>
            <p className="text-muted-foreground mb-8 font-medium">Important: Drainage water must never be directed onto a neighbouring property. This can cause legal disputes and damage claims.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Common Drainage Mistakes</h2>
            <p className="text-muted-foreground mb-4">These are the most common drainage mistakes that lead to retaining wall failure:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>No ag pipe installed</strong> — water has no way to escape the base of the wall</li>
              <li><strong>Using clay or soil instead of gravel backfill</strong> — traps water against the wall</li>
              <li><strong>Skipping geotextile fabric</strong> — soil clogs the gravel and ag pipe over time</li>
              <li><strong>Ag pipe with no fall</strong> — water sits in the pipe instead of draining away</li>
              <li><strong>No discharge point</strong> — ag pipe collects water but has nowhere to send it</li>
              <li><strong>Relying on weep holes alone</strong> — weep holes without ag pipe and gravel are inadequate for most walls</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Drainage and Soil Types</h2>
            <p className="text-muted-foreground mb-4">Australian soil conditions vary significantly by region, and soil type directly affects drainage requirements:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Clay soils</strong> — Hold moisture and expand when wet, creating extra pressure. Require more extensive drainage and potentially larger gravel zones.</li>
              <li><strong>Sandy soils</strong> — Drain well naturally but can erode and undermine footings. Geotextile fabric is essential.</li>
              <li><strong>Reactive soils</strong> — Expand and contract with moisture changes, causing movement. Engineering is often required.</li>
              <li><strong>Fill soils</strong> — Unpredictable drainage behaviour. Engineering and compaction testing are recommended.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Signs Your Retaining Wall Has Drainage Problems</h2>
            <p className="text-muted-foreground mb-4">If your existing retaining wall shows any of these signs, drainage may be failing:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Wall is leaning or bulging outward</li>
              <li>Cracks in sleepers, blocks, or mortar joints</li>
              <li>Water pooling at the base of the wall</li>
              <li>Soil erosion behind or under the wall</li>
              <li>Staining or efflorescence (white salt deposits) on the wall face</li>
              <li>Soft, saturated ground behind the wall</li>
            </ul>
            <p className="text-muted-foreground mb-8">If you notice these signs, get a professional assessment before the wall deteriorates further. In some cases, drainage can be retrofitted; in others, the wall may need to be rebuilt.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4 font-medium">Drainage is not an optional extra — it's the foundation of a retaining wall that lasts.</p>
            <p className="text-muted-foreground mb-4">Before building or replacing a retaining wall:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Ensure ag pipe, gravel backfill, and geotextile fabric are included in every quote</li>
              <li>Ask your contractor where the drainage will discharge</li>
              <li>Consider your soil type and its effect on water retention</li>
              <li>Never skip drainage to save money — it will cost more to fix later</li>
              <li>Get professional advice if your existing wall shows signs of drainage failure</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting a Retaining Wall with Proper Drainage</h2>
            <p className="text-muted-foreground mb-4">QuoteMyRetainingWall helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare local retaining wall professionals who build with proper drainage</li>
              <li>Understand what should be included in every retaining wall quote</li>
              <li>Get clear, no-obligation quotes from experienced contractors</li>
            </ul>
            <p className="text-muted-foreground mb-8">A retaining wall with proper drainage protects your property, your investment, and your neighbours — and gives you decades of trouble-free performance.</p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">Always ensure drainage is included in your retaining wall project. Skipping drainage is the most common — and most expensive — mistake homeowners make.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Retaining Wall Quote?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Compare retaining wall professionals and get free quotes in 60 seconds.
            </p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>
              Get 3 Free Quotes Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PoolFencingSafetyGuide;