import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { navigateTo } from "@/lib/spa-navigate";
const QUOTE_URL = "/quote";
const ChoosingFenceMaterialGuide = () => {
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
              Choosing the Right
              <br />
              <span className="text-gradient">Retaining Wall Material</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare concrete sleepers, timber, block, and natural stone to find the best option for your property
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Choosing the right retaining wall material is one of the most important decisions you'll make when planning a retaining wall project. The right choice depends on your site conditions, budget, aesthetic preferences, and how long you want the wall to last.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              In Australia, the four most common retaining wall materials are concrete sleepers, timber sleepers, concrete blocks, and natural stone. Each has clear strengths and trade‑offs depending on your specific situation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains how these materials compare in real‑world conditions, so you can confidently choose the retaining wall that suits your property, lifestyle, and budget.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">At‑a‑Glance Retaining Wall Material Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Material</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Typical Lifespan*</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Maintenance</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Strength</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Best Uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Concrete Sleepers</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">50+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Very Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Boundaries, slopes, driveways, general retention</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Timber Sleepers</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">15–25 years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Garden beds, low walls, budget projects</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Concrete Blocks</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">50+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Very High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Heavy loads, commercial, engineered walls</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Natural Stone</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">50+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Feature walls, heritage properties, landscaping</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8 italic">*Typical residential ranges. Installation quality, drainage, and soil conditions all affect lifespan.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Concrete Sleeper Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">Concrete sleeper retaining walls are the most popular choice across Australia, offering an excellent combination of strength, appearance, and value.</p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Extremely durable — won't rot, warp, or attract termites</li>
              <li>Available in multiple finishes (smooth, rockface, timber-look, coloured)</li>
              <li>Virtually maintenance-free</li>
              <li>Competitive pricing for the strength they provide</li>
              <li>Fire resistant and non-combustible</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Heavier than timber — requires machinery for installation</li>
              <li>Higher upfront cost than basic timber</li>
              <li>Requires steel posts concreted into the ground</li>
            </ul>
            <p className="text-muted-foreground mb-8">Concrete sleepers are the best all-round choice for most residential retaining wall projects. They suit everything from small garden walls to large boundary retaining systems on sloping blocks.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Timber Sleeper Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">Timber sleeper retaining walls offer a natural, warm appearance and are widely used for garden beds, terraces, and low retaining walls.</p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Natural, warm aesthetic that blends with gardens and landscaping</li>
              <li>Often the lowest upfront cost for small walls</li>
              <li>Easy to cut and shape on site</li>
              <li>Available in treated pine, hardwood, and recycled railway sleepers</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Susceptible to rot, termites, and moisture damage over time</li>
              <li>Requires regular inspection and potential replacement</li>
              <li>Shorter lifespan compared to concrete or stone</li>
              <li>Not suitable for walls under heavy load without significant engineering</li>
            </ul>
            <p className="text-muted-foreground mb-8">Timber sleepers suit homeowners on a budget or those wanting a natural look for garden-level retention. For walls over 600 mm or in load-bearing situations, concrete sleepers or blocks are usually the better long-term investment.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Concrete Block Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">Concrete block retaining walls — including Besser blocks, interlocking systems (like Keystone or Adbri), and reinforced masonry — offer exceptional structural strength.</p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Extremely strong — can retain very heavy soil loads</li>
              <li>Interlocking systems provide gravity-based retention without mortar</li>
              <li>Can be rendered, painted, or left exposed</li>
              <li>Ideal for tall walls and commercial applications</li>
              <li>Long lifespan with minimal maintenance</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Higher material and labour costs</li>
              <li>Requires skilled installation — not a DIY-friendly option for tall walls</li>
              <li>Plain Besser blocks can look utilitarian without rendering or capping</li>
              <li>Reinforced block walls need steel reinforcement and core-filled concrete</li>
            </ul>
            <p className="text-muted-foreground mb-8">Block retaining walls are the go-to choice for high-load applications, tall walls, and projects where maximum structural integrity is essential. They're widely used in new subdivisions and commercial developments across Australia.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Natural Stone Retaining Walls</h2>
            <p className="text-muted-foreground mb-4">Natural stone retaining walls — including sandstone, bluestone, granite, and limestone — offer a premium, timeless aesthetic.</p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Stunning natural appearance that improves with age</li>
              <li>Extremely long-lasting when properly built</li>
              <li>Unique character — no two walls are identical</li>
              <li>Excellent for heritage properties and high-end landscaping</li>
              <li>Environmentally friendly — natural, locally sourced material</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Highest installed cost of all retaining wall materials</li>
              <li>Requires skilled stonemasons for quality work</li>
              <li>Heavier and more labour-intensive to install</li>
              <li>Dry-stack walls have height limitations without mortar or engineering</li>
            </ul>
            <p className="text-muted-foreground mb-8">Natural stone retaining walls are best suited for feature areas, front-of-property walls, heritage homes, and high-end landscaping where appearance is a priority.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">How to Choose the Right Material for Your Property</h2>
            <p className="text-muted-foreground mb-4">When choosing a retaining wall material, consider the following factors:</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Concrete Sleepers If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You want the best balance of strength, appearance, and value</li>
              <li>Low maintenance is a priority</li>
              <li>You need a wall that will last 50+ years</li>
              <li>You want design flexibility with multiple finish options</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Timber Sleepers If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You're building a low garden wall or terrace</li>
              <li>Budget is your primary concern</li>
              <li>You want a natural, rustic appearance</li>
              <li>The wall height is under 600 mm</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Concrete Blocks If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You need maximum structural strength</li>
              <li>The wall is tall (over 1.2 m) or under heavy load</li>
              <li>You want to render or paint the wall for a seamless finish</li>
              <li>The project is commercial or industrial</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Natural Stone If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Appearance is your top priority</li>
              <li>You want a premium, one-of-a-kind feature wall</li>
              <li>The property is heritage-listed or high-end</li>
              <li>Budget allows for skilled stonemasonry</li>
            </ul>
            <p className="text-muted-foreground mb-8">Many Australian properties use a combination of materials — for example, concrete sleepers for boundary retention and natural stone for a feature garden wall near the house.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Don't Forget Drainage</h2>
            <p className="text-muted-foreground mb-4">Regardless of which material you choose, proper drainage is essential for every retaining wall. Without it, water pressure builds behind the wall and can cause leaning, cracking, or collapse.</p>
            <p className="text-muted-foreground mb-4">Every retaining wall should include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Agricultural (ag) pipe at the base</li>
              <li>Gravel backfill behind the wall</li>
              <li>Geotextile fabric to prevent soil clogging</li>
              <li>Weep holes or drainage outlets</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">There's no single "best" retaining wall material — only the best choice for your specific site, needs, and budget.</p>
            <p className="text-muted-foreground mb-4">Before deciding:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Consider the wall height, soil conditions, and load requirements</li>
              <li>Think about long-term costs, not just upfront price</li>
              <li>Factor in drainage — it's non-negotiable</li>
              <li>Check local council regulations and engineering requirements</li>
              <li>Get professional advice for walls over 600 mm</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting the Right Retaining Wall Built</h2>
            <p className="text-muted-foreground mb-4">QuoteMyRetainingWall helps homeowners compare local retaining wall professionals and explore different materials with confidence.</p>
            <p className="text-muted-foreground mb-8">By understanding your options upfront, you can choose a retaining wall that performs well, looks great, and suits your property — without costly surprises.</p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">Always confirm material suitability, drainage requirements, and council regulations before installation.</p>
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
export default ChoosingFenceMaterialGuide;