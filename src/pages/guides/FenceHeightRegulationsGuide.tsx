import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const FenceHeightRegulationsGuide = () => {
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
              Retaining Wall Height Regulations
              <br />
              <span className="text-gradient">by State</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive guide to retaining wall height regulations across all Australian states and territories
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
                    This guide is for general information only. Retaining wall regulations vary by council and can change. Always confirm requirements with your local council before building.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Building a retaining wall in Australia isn't governed by a single national rule. Instead, height limits, engineering requirements, and permit thresholds vary by state, territory, and local council. What's allowed on one property may require full engineering and council approval next door.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains retaining wall height regulations across Australia, what typically triggers council approval, and how homeowners can avoid costly compliance mistakes before construction begins.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Is There a National Retaining Wall Height Law?</h2>
            <p className="text-muted-foreground mb-4">No. Australia does not have a single national law that sets standard retaining wall height limits for residential properties.</p>
            <p className="text-muted-foreground mb-4">What exists instead:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Each state and territory sets general building and planning rules</li>
              <li>Local councils apply their own planning schemes, overlays, and exempt development criteria</li>
              <li>The Building Code of Australia (BCA/NCC) sets structural performance standards</li>
              <li>Special rules apply near boundaries, easements, stormwater, and existing structures</li>
            </ul>
            <p className="text-muted-foreground mb-8">The general principle across most jurisdictions is that retaining walls below a certain height (commonly 600 mm to 1.0 m) may be exempt from approval, while taller walls require engineering and a building permit.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Key Factors That Trigger Approval Requirements</h2>
            <p className="text-muted-foreground mb-4">Regardless of state, approval is commonly required when a retaining wall:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Exceeds the local exempt height threshold (often 600 mm–1.0 m)</li>
              <li>Supports a surcharge load (driveway, building, fence, or slope above)</li>
              <li>Is located near a property boundary or easement</li>
              <li>Redirects or affects stormwater drainage</li>
              <li>Is part of a tiered or stepped wall system</li>
              <li>Is in a flood-prone, bushfire, or heritage overlay zone</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Retaining Wall Height Regulations by State & Territory</h2>
            <p className="text-muted-foreground mb-8">Below is a practical overview of how retaining wall regulations typically work in each state and territory. These are general guides — always verify with your local council.</p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">New South Wales (NSW)</h3>
            <p className="text-muted-foreground mb-4">NSW uses the State Environmental Planning Policy (Exempt and Complying Development Codes) to define what can be built without approval.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Retaining walls up to 600 mm may be exempt if not supporting a surcharge</li>
              <li>Walls over 600 mm generally require a construction certificate or complying development approval</li>
              <li>Engineering is required for walls retaining more than 600 mm of cut or fill</li>
            </ul>
            <p className="text-muted-foreground mb-4">A Development Application (DA) may be required if:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>The wall is in a heritage conservation area</li>
              <li>The wall affects overland flow or stormwater</li>
              <li>The property is in a flood or bushfire zone</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Victoria (VIC)</h3>
            <p className="text-muted-foreground mb-4">Victoria requires a building permit for most retaining walls that exceed certain thresholds.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Retaining walls over 1.0 m in height typically require a building permit</li>
              <li>Walls supporting surcharge loads may require permits even at lower heights</li>
              <li>Engineering design is required for walls over 1.0 m</li>
            </ul>
            <p className="text-muted-foreground mb-8">Additional controls apply in heritage overlays, neighbourhood character overlays, and areas with reactive soils.</p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Queensland (QLD)</h3>
            <p className="text-muted-foreground mb-4">Queensland councils generally follow the Building Act 1975 and local planning schemes.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Retaining walls up to 1.0 m are often exempt if not supporting structures or near boundaries</li>
              <li>Walls over 1.0 m require building approval and engineering</li>
              <li>Walls near property boundaries may have additional setback requirements</li>
            </ul>
            <p className="text-muted-foreground mb-8">Queensland has strict stormwater management rules, and retaining walls that alter drainage patterns may require additional approvals.</p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">South Australia (SA)</h3>
            <p className="text-muted-foreground mb-4">South Australia uses the Planning, Development and Infrastructure Act 2016 to classify development.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Retaining walls up to 1.0 m may be exempt if not supporting a surcharge</li>
              <li>Walls over 1.0 m generally require development approval and engineering</li>
              <li>Walls within 1.0 m of a boundary may have stricter requirements</li>
            </ul>
            <p className="text-muted-foreground mb-8">Council planning portals (PlanSA) can help confirm specific requirements for your address.</p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Western Australia (WA)</h3>
            <p className="text-muted-foreground mb-4">Retaining wall regulations in WA are managed through the Building Act 2011 and local council planning schemes.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 500 mm generally require a building permit</li>
              <li>Engineering certification is required for most walls over 500 mm</li>
              <li>Walls near boundaries require compliance with the Residential Design Codes (R-Codes)</li>
            </ul>
            <p className="text-muted-foreground mb-8">WA is known for having relatively strict retaining wall requirements due to sandy soils and steep subdivisions common in Perth and regional areas.</p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Tasmania (TAS)</h3>
            <p className="text-muted-foreground mb-4">Tasmania applies building controls through the Building Act 2016.</p>
            <p className="text-muted-foreground mb-8">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 1.0 m typically require a building permit</li>
              <li>Walls that affect stormwater or are near boundaries may require approval at lower heights</li>
              <li>Engineering is required for walls over the exempt threshold</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Australian Capital Territory (ACT)</h3>
            <p className="text-muted-foreground mb-4">The ACT manages retaining walls through the Planning and Development Act 2007.</p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls up to 600 mm in height are generally exempt</li>
              <li>Walls over 600 mm require development approval and engineering</li>
              <li>Estate-specific guidelines may impose additional requirements</li>
              <li>The Common Boundaries Act 1981 governs neighbour responsibilities for boundary walls</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Northern Territory (NT)</h3>
            <p className="text-muted-foreground mb-4">The NT manages building works through the Building Act 1993.</p>
            <p className="text-muted-foreground mb-8">Retaining wall requirements in the NT can vary significantly by council area. Additional considerations include cyclone ratings and structural requirements for walls in tropical conditions. Always check directly with your local council.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Tiered & Stepped Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">Many homeowners assume that building two shorter walls instead of one tall wall avoids the need for engineering. This is often incorrect.</p>
            <p className="text-muted-foreground mb-4">Key considerations for tiered walls:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>If tiered walls are close together, they may be assessed as a single wall for engineering purposes</li>
              <li>The setback distance between tiers matters — typically a minimum of 1.5× the wall height</li>
              <li>Council may require engineering for the entire tiered system</li>
              <li>Drainage between tiers must be carefully designed</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Boundary & Neighbour Considerations</h2>
            <p className="text-muted-foreground mb-4">Retaining walls on or near property boundaries involve additional considerations:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Who owns the retained soil determines responsibility</li>
              <li>The person whose land is higher typically bears responsibility for the retaining wall</li>
              <li>Neighbour notification may be required before construction</li>
              <li>Walls must not direct stormwater onto neighbouring properties</li>
            </ul>
            <p className="text-muted-foreground mb-4">Best practice:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Discuss plans with neighbours early</li>
              <li>Get agreements in writing</li>
              <li>Confirm boundaries with a licensed surveyor if uncertain</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">Retaining wall regulations exist to protect property, safety, and drainage. Non-compliant walls can result in:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Council orders to demolish and rebuild</li>
              <li>Fines and legal liability</li>
              <li>Insurance claim denials</li>
              <li>Damage to neighbouring properties</li>
            </ul>
            <p className="text-muted-foreground mb-4">Before building a retaining wall:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Check your local council's exempt development rules</li>
              <li>Get engineering if required (or even if you're unsure)</li>
              <li>Use a licensed, experienced retaining wall contractor</li>
              <li>Ensure proper drainage is included in every build</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Your Retaining Wall Built Right</h2>
            <p className="text-muted-foreground mb-4">QuoteMyRetainingWall helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare local retaining wall professionals</li>
              <li>Understand height and engineering requirements</li>
              <li>Get clear, no‑obligation quotes</li>
            </ul>
            <p className="text-muted-foreground mb-8">A well-planned retaining wall avoids compliance issues, neighbour disputes, and costly rebuilds — and ensures your wall is built right the first time.</p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always confirm retaining wall height and engineering requirements with your local council before building. Regulations can change, and site-specific conditions may apply.
              </p>
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
export default FenceHeightRegulationsGuide;