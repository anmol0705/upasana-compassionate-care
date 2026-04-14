import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/upasana-logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Conditions", path: "/conditions" },
    { name: "Events", path: "/events" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-card-hover"
          : "bg-background shadow-card"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src={logo}
              alt="Upasana Logo"
              className="h-11 w-11 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                Upasana
              </span>
              <span className="text-[11px] text-muted-foreground hidden md:block leading-tight">
                Centre for Early Intervention and Child Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/75 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/support">
              <Button variant="warm" size="sm" className="gap-2 text-sm h-9 px-4">
                <Heart className="h-4 w-4" />
                Support Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 pb-5 animate-fade-in border-t border-border/50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link to="/support">
                  <Button variant="warm" size="default" className="w-full gap-2">
                    <Heart className="h-4 w-4" />
                    Support Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
