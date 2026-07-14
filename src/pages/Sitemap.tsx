import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Map, Home, Wrench, MapPin, BookOpen, FileText } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const Sitemap = () => {
  useDocumentTitle("Sitemap — QuoteMyRetainingWall");
  const sitemapSections = [{ title: "Home", href: "/", icon: Home }, { title: "Services", icon: Wrench, links: [{ name: "Timber Retaining Wall", href: "/timber-fencing" }, { name: "Concrete Sleeper Retaining Wall", href: "/colorbond-fencing" }, { name: "Feature Retaining Wall", href: "/feature-fencing" }, { name: "Aluminium Retaining Wall", href: "/aluminium-fencing" }, { name: "Chain Link Retaining Wall", href: "/chain-link-fencing" }, { name: "Security Retaining Wall", href: "/security-fencing" }, { name: "Steel Retaining Wall", href: "/steel-fencing" }, { name: "Pool Retaining Wall", href: "/pool-fencing" }, { name: "Retaining Wall Repairs", href: "/fence-repairs" }, { name: "Gate Installation", href: "/gate-installation" }] }, { title: "Service Areas", icon: MapPin, links: [{ name: "Sydney", href: "/sydney" }, { name: "Melbourne", href: "/melbourne" }, { name: "Brisbane", href: "/brisbane" }, { name: "Perth", href: "/perth" }, { name: "Adelaide", href: "/adelaide" }, { name: "Canberra", href: "/canberra" }, { name: "Hobart", href: "/hobart" }, { name: "Darwin", href: "/darwin" }] }, { title: "Resources", icon: BookOpen, links: [{ name: "Retaining Wall Guides", href: "/fencing-guides" }, { name: "FAQ", href: "/faq" }, { name: "Contact Us", href: "/contact" }] }, { title: "Legal", icon: FileText, links: [{ name: "Terms of Service", href: "/terms-of-service" }, { name: "Privacy Policy", href: "/privacy-policy" }] }];
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"><Map className="w-4 h-4" /><span className="text-sm font-medium">Site Navigation</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find everything you need on QuoteMyRetainingWall with our complete site directory.</p>
        </div>
      </section>
      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                </div>
                {section.links ? <ul className="space-y-3">
                    {section.links.map((link) => <li key={link.name}>
                        <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">{link.name}</Link>
                      </li>)}
                  </ul> : <Link to={section.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Go to {section.title}</Link>}
              </div>)}
          </div>
        </div>
      </section>
      {/* SEO Suburb Links Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Retaining Wall Services in Major Australian Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="/sydney" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Sydney</Link>
            <Link to="/melbourne" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Melbourne</Link>
            <Link to="/brisbane" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Brisbane</Link>
            <Link to="/perth" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Perth</Link>
            <Link to="/adelaide" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Adelaide</Link>
            <Link to="/canberra" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Canberra</Link>
            <Link to="/hobart" className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-2 px-3 rounded-md">Retaining Wall Hobart</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Sitemap;
