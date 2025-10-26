import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/upasana-logo.png";

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
                <h3 className="text-lg font-bold text-foreground">Upasana</h3>
                <p className="text-xs text-muted-foreground">
                  Early Intervention Centre
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering every child's unique journey with expert care and
              compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Conditions We Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
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
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
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
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  7033917890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:upasana.ranchicentre@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  upasana.ranchicentre@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Upasana Charitable & Welfare Trust. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
