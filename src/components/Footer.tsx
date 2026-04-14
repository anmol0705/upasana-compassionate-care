import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart, Shield, Calendar } from "lucide-react";
import logo from "@/assets/upasana-logo.webp";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Our Team", to: "/team" },
    { label: "Our Services", to: "/services" },
    { label: "Conditions", to: "/conditions" },
    { label: "Events", to: "/events" },
    { label: "Support Us", to: "/support" },
  ];

  const programs = [
    "ABA Therapy",
    "Occupational Therapy",
    "Physiotherapy",
    "Speech Therapy",
    "Special Education",
    "Sensory Integration",
  ];

  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1 - Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Upasana Logo"
                className="h-12 w-12 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground font-serif leading-tight">
                  Upasana
                </h3>
                <p className="text-xs text-muted-foreground">
                  Charitable & Welfare Trust
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nurturing every child's potential with compassionate, expert
              care. We provide early intervention and comprehensive therapy
              services for children with special needs in Ranchi.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              <Heart className="h-3 w-3 animate-heartbeat" />
              Non-Profit Organization
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif text-base">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Programs */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif text-base">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map((program) => (
                <li
                  key={program}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-serif text-base">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  YMCA School Campus, Kantatoli, Ranchi
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:7033917890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  7033917890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
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
      </div>

      {/* Trust Registration Section */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="border-t border-border pt-6 pb-6">
          <div className="bg-primary/5 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground text-sm sm:text-base font-serif">
                Registered Charitable Trust
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Trust Name:
                  </span>{" "}
                  Upasana Charitable & Welfare Trust
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Location:
                  </span>{" "}
                  Ranchi, Jharkhand, India
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-primary font-semibold inline-flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5" />
                  Donations eligible for 80G tax exemption
                </p>
                <p className="text-muted-foreground inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  Established: January 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Upasana Charitable & Welfare
            Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
