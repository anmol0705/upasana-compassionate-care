import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/upasana-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Upasana Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold text-foreground font-serif">Upasana</h3>
                <p className="text-xs text-muted-foreground">
                  Charitable & Welfare Trust
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nurturing every child's potential with compassionate, expert care since 2024.
            </p>
            {/* Charitable Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              <Heart className="h-3 w-3" />
              Non-Profit Organization
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Conditions We Support
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">ABA Therapy</li>
              <li className="text-sm text-muted-foreground">Occupational Therapy</li>
              <li className="text-sm text-muted-foreground">Physiotherapy</li>
              <li className="text-sm text-muted-foreground">Speech Therapy</li>
              <li className="text-sm text-muted-foreground">Special Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  YMCA School Campus, Kantatoli, Ranchi
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:7033917890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  7033917890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:upasana.ranchicentre@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  upasana.ranchicentre@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Registration & Tax Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="bg-primary/5 rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Registered Trust:</span> Upasana Charitable & Welfare Trust
                </p>
                <p className="text-muted-foreground mt-1">
                  <span className="font-semibold text-foreground">Established:</span> January 2024
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> Ranchi, Jharkhand, India
                </p>
                <p className="text-primary font-semibold mt-1">
                  ✓ Donations are eligible for 80G tax exemption
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Upasana Charitable & Welfare Trust. All
            rights reserved. Made with ❤️ for special children.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
