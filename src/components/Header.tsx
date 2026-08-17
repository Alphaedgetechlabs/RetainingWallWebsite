import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
// Arrow logo asset — kept as public static file for dev/prod parity

interface HeaderProps {
  onQuoteClick: () => void;
}

const Header = ({ onQuoteClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigation: { name: string; href: string }[] = [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="QuoteMyRetainingWall">
            <span
              className="inline-flex items-center leading-none text-[2.25rem] md:text-[2.5rem]"
              style={{ fontFamily: "Montserrat, Poppins, ui-sans-serif, system-ui, sans-serif" }}
            >
              <span className="flex items-baseline tracking-tight">
                <span className="text-[#FF6A1C]" style={{ fontWeight: 700 }}>Quote</span>
                <span
                  className="text-[#666666] dark:text-[#D6D6D6]"
                  style={{ fontWeight: 500, fontSize: "1em", transform: "translateY(0.03em)" }}
                >
                  My
                </span>
                <span className="text-[#333333] dark:text-white" style={{ fontWeight: 700 }}>Retaining Wall</span>
              </span>
              <img
                src="/arrow_new.webp"
                alt=""
                aria-hidden="true"
                className="ml-[0.5cm] h-[1.08em] w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(buttonVariants({ variant: "nav" }), "px-3 py-2")}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:0481752344"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Call 0481 752 344"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0481 752 344</span>
            </a>
            <Button variant="quote" size="sm" onClick={onQuoteClick}>
              Instant Quotes
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(buttonVariants({ variant: "nav" }), "justify-start px-3 py-2")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <a
                  href="tel:0481752344"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth px-3 py-2"
                  aria-label="Call 0481 752 344"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">0481 752 344</span>
                </a>
                <Button variant="quote" className="w-full mt-2" onClick={onQuoteClick}>
                  Get Instant Quotes
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
