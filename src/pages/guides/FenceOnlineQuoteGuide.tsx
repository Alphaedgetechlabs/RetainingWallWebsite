import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "/quote";
const FenceOnlineQuoteGuide = () => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
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
              Retaining Wall Online
              <br />
              <span className="text-gradient">Quote Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tips for getting accurate retaining wall quotes online and comparing contractor prices
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">Getting retaining wall quotes online is fast and convenient — but the quality of the quote you receive depends heavily on the information you provide. Clear details about your site, soil, wall height, and drainage needs lead to accurate pricing, fewer surprises, and smoother construction.</p>
            <p className="text-lg text-muted-foreground mb-8">This guide explains how online retaining wall quote systems work, what information contractors actually need, and how homeowners can get more accurate, comparable, and reliable quotes using multi‑step forms and online tools.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Online Retaining Wall Quotes Vary So Much</h2>
            <p className="text-muted-foreground mb-4">Online quotes are estimates based on the details you submit. If information is missing or unclear, contractors must make assumptions — and assumptions often lead to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Significant price changes after a site visit</li>
              <li>Unexpected extras for drainage, engineering, or difficult access</li>
              <li>Delays or disputes during construction</li>
            </ul>
            <p className="text-muted-foreground mb-8">The goal is simple: help contractors understand your job properly from the start so they can price it correctly. Retaining walls are more complex than many other outdoor structures because soil conditions, drainage, and engineering requirements all affect the final cost.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 1: Know What Information Contractors Need</h2>
            <p className="text-muted-foreground mb-4">Most online retaining wall quote forms ask for similar core details. Having this information ready before you start will result in much better quotes.</p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Wall specifications</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Wall material (concrete sleepers, timber sleepers, block, natural stone)</li>
              <li>Wall height (how much soil needs to be retained)</li>
              <li>Total wall length</li>
              <li>Whether it's a straight wall, curved, or has corners</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Property & site details</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Property address (for access, soil type, and council rules)</li>
              <li>Location of the wall on the property (boundary, garden, driveway)</li>
              <li>Slope severity and direction</li>
              <li>Access for machinery (mini excavators, bobcats)</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Site conditions & extras</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Soil type (clay, sand, rock, fill)</li>
              <li>Existing retaining wall removal required</li>
              <li>Drainage requirements (ag pipe, stormwater connection)</li>
              <li>Surcharge loads (driveways, structures, or fences above the wall)</li>
              <li>Whether engineering certification is needed</li>
            </ul>
            <p className="text-muted-foreground mb-8">The more accurately you answer these questions, the closer your online quote will be to the final price.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 2: Measure Properly Before Filling Out the Form</h2>
            <p className="text-muted-foreground mb-4">Accurate measurements are one of the biggest factors in quote accuracy for retaining walls.</p>
            <p className="text-muted-foreground mb-4">Helpful tips:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Measure the total length of the wall run along the ground</li>
              <li>Measure the height difference between the top and bottom of the slope</li>
              <li>Note any changes in height along the wall run</li>
              <li>Use a simple site sketch showing the wall position relative to the property</li>
              <li>Mark where steps, corners, or curves are needed</li>
            </ul>
            <p className="text-muted-foreground mb-8">Avoid guessing. Even small errors in height can significantly affect engineering requirements and material quantities — and therefore the price.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 3: Use Multi‑Step Quote Forms the Right Way</h2>
            <p className="text-muted-foreground mb-4">Modern retaining wall websites use multi‑step forms instead of a single short form. This isn't to slow you down — it's to gather better information and provide more accurate estimates.</p>
            <p className="text-muted-foreground mb-4">Each step usually focuses on:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Wall type and material selection</li>
              <li>Measurements, height, and layout</li>
              <li>Property and site access details</li>
              <li>Soil conditions and drainage</li>
              <li>Extras, engineering, and special conditions</li>
              <li>Contact details</li>
            </ul>
            <p className="text-muted-foreground mb-8">Take your time with each step. Completing all sections thoroughly reduces follow‑up calls and re‑quoting.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 4: Upload Photos (This Makes a Huge Difference)</h2>
            <p className="text-muted-foreground mb-4">Uploading photos is one of the easiest ways to improve quote accuracy for retaining wall projects.</p>
            <p className="text-muted-foreground mb-4">Helpful photos include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>The slope or embankment where the wall will be built</li>
              <li>Existing retaining wall (if replacing a failed wall)</li>
              <li>Ground conditions — visible rock, clay, or sandy soil</li>
              <li>Access points for machinery</li>
              <li>Nearby structures (driveways, buildings, pools, fences)</li>
              <li>Drainage issues — standing water, erosion, or washouts</li>
            </ul>
            <p className="text-muted-foreground mb-8">Photos help contractors spot potential issues early and price them correctly — reducing surprise variations later.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 5: Understand What Affects Retaining Wall Pricing</h2>
            <p className="text-muted-foreground mb-4">Retaining wall quotes are more complex than simple per-metre pricing. Key cost factors include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Wall height — taller walls require bigger posts, deeper footings, and more material</li>
              <li>Material choice — concrete sleepers, timber, block, and stone all have different price points</li>
              <li>Drainage — ag pipe, gravel, and geotextile are essential but add to cost</li>
              <li>Engineering — walls over 600 mm–1.0 m typically require engineering certification</li>
              <li>Site access — difficult access increases labour and machinery costs</li>
              <li>Soil conditions — rock, reactive clay, or fill may require special treatment</li>
            </ul>
            <p className="text-muted-foreground mb-8">Treat simple per-metre calculators as rough guides only. Always explain site challenges in the comments section for a more accurate estimate.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 6: What a Good Retaining Wall Quote Should Include</h2>
            <p className="text-muted-foreground mb-4">A quality retaining wall quote should be clear and detailed — not a single vague price.</p>
            <p className="text-muted-foreground mb-4">Look for itemised details such as:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Wall material, type, and finish</li>
              <li>Post type, size, and spacing</li>
              <li>Concrete footing specifications</li>
              <li>Drainage system (ag pipe, gravel, geotextile)</li>
              <li>Excavation and site preparation</li>
              <li>Old wall removal and disposal</li>
              <li>Engineering certification (if required)</li>
              <li>Backfill and compaction</li>
            </ul>
            <p className="text-muted-foreground mb-4">It should also clearly state:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Warranty on materials and workmanship</li>
              <li>Estimated start and completion dates</li>
              <li>Payment schedule</li>
              <li>How variations are handled if unexpected conditions are found</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 7: Get and Compare Multiple Quotes</h2>
            <p className="text-muted-foreground mb-4">Even when using online platforms, it's smart to get at least three quotes.</p>
            <p className="text-muted-foreground mb-4">When comparing quotes, don't just look at the price. Compare:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Material quality and specifications</li>
              <li>Post size and footing depth</li>
              <li>Whether drainage is included or quoted separately</li>
              <li>Whether engineering is included</li>
              <li>Scope of work — what's in and what's out</li>
              <li>Warranty terms and conditions</li>
            </ul>
            <p className="text-muted-foreground mb-8">A slightly higher quote with proper drainage, engineering, and clear scope often provides significantly better long‑term value than the cheapest option.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 8: Common Online Quote Mistakes to Avoid</h2>
            <p className="text-muted-foreground mb-4">Homeowners often run into trouble by:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Underestimating wall height or length</li>
              <li>Not mentioning slope severity or soil conditions</li>
              <li>Forgetting to include drainage in the scope</li>
              <li>Accepting vague one‑line quotes without itemised breakdowns</li>
              <li>Not asking about engineering requirements</li>
              <li>Paying deposits before confirming licences and insurance</li>
            </ul>
            <p className="text-muted-foreground mb-8">Avoid pressure tactics like "today only" pricing. A professional contractor will allow time for proper review and site assessment.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 9: Questions to Ask Before Accepting a Quote</h2>
            <p className="text-muted-foreground mb-4">Before approving any retaining wall quote, ask:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>What exact materials and specifications will be used?</li>
              <li>Is drainage (ag pipe, gravel, geotextile) included in the price?</li>
              <li>Is engineering certification included if required?</li>
              <li>How long are materials and workmanship warrantied?</li>
              <li>Who handles council approvals if needed?</li>
              <li>How are unexpected site conditions (rock, services) managed?</li>
            </ul>
            <p className="text-muted-foreground mb-8">Always get the final scope and price in writing before paying a deposit.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">Getting better retaining wall quotes online isn't about finding the cheapest price — it's about giving contractors enough information to price the job properly.</p>
            <p className="text-muted-foreground mb-4">Clear details, photos, and thoughtful comparisons lead to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>More accurate pricing</li>
              <li>Fewer surprises during construction</li>
              <li>Better workmanship and materials</li>
              <li>A wall that lasts decades, not years</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Better Quotes with QuoteMyRetainingWall</h2>
            <p className="text-muted-foreground mb-4">QuoteMyRetainingWall uses a guided, multi‑step quote process designed to capture the right details from the start.</p>
            <p className="text-muted-foreground mb-4">This helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Get clearer, more accurate quotes</li>
              <li>Compare local retaining wall professionals</li>
              <li>Choose the right contractor with confidence</li>
            </ul>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">Take your time with online quote forms — the effort upfront can save you money, stress, and delays later.</p>
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
              Compare local retaining wall professionals and get free quotes in 60 seconds.
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
export default FenceOnlineQuoteGuide;