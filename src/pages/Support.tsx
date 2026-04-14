import {
  Heart,
  Building2,
  Hash,
  MapPin,
  CheckCircle2,
  HandHeart,
  Users,
  Megaphone,
  ArrowRight,
  Shield,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import CharitableBadge from "@/components/CharitableBadge";

const Support = () => {
  const waysToSupport = [
    {
      icon: HandHeart,
      title: "Donate",
      description:
        "Your financial contribution directly funds therapy sessions, equipment, and subsidized care for families who need it most.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Share your time and skills with our community. From classroom support to event coordination, every helping hand matters.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Megaphone,
      title: "Spread Awareness",
      description:
        "Share our story with your network. Help us reach families who may not know that early intervention services exist.",
      color: "bg-[hsl(25,80%,70%)]/15 text-secondary",
    },
  ];

  const bankDetails = [
    {
      icon: Building2,
      label: "Account Name",
      value: "Upasana Charitable and Welfare Trust",
      bg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Hash,
      label: "Account Number",
      value: "459920110000674",
      bg: "bg-secondary/10",
      iconColor: "text-secondary",
      mono: true,
    },
    {
      icon: Shield,
      label: "IFSC Code",
      value: "BKID0004599",
      bg: "bg-[hsl(25,80%,70%)]/15",
      iconColor: "text-secondary",
      mono: true,
    },
    {
      icon: Landmark,
      label: "Bank Name",
      value: "Bank of India",
      bg: "bg-pink/10",
      iconColor: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Branch",
      value: "Kantatoli Branch",
      bg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      {/* Hero Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <CharitableBadge className="mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 font-serif">
            Support Our Mission
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 max-w-2xl mx-auto">
            Your generosity helps us provide life-changing care to children
            with special needs, regardless of their family's financial
            situation.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto animate-scale-in">
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-[hsl(25,80%,70%)]/10 rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
                    Every Contribution Makes a Difference
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Your generous donation allows us to provide subsidized care
                    to families in need, acquire modern therapy equipment, and
                    reach more children who require specialized intervention.
                    Together, we can create a more inclusive society where every
                    child has the opportunity to thrive.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 ml-0 sm:ml-16 md:ml-[4.5rem]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/15">
                  <CheckCircle2 className="h-4 w-4" />
                  80G Tax Exemption Available
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold border border-secondary/15">
                  <CheckCircle2 className="h-4 w-4" />
                  Registered Charitable Trust
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              Ways You Can Help
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              There are many meaningful ways to contribute to our cause and support the children we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waysToSupport.map((item, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full ${item.color.split(" ")[0]} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110`}
                  >
                    <item.icon
                      className={`h-7 w-7 ${item.color.split(" ")[1]}`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer Details */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif">
              Donate via Bank Transfer
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your support helps us continue our mission of nurturing every
              child's potential
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-card-hover animate-scale-in">
            <div className="space-y-5 sm:space-y-6">
              {bankDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${detail.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <detail.icon
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${detail.iconColor}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                      {detail.label}
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg font-semibold text-foreground break-words ${
                        detail.mono ? "font-mono tracking-wide" : ""
                      }`}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tax Benefits */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="bg-gradient-to-r from-primary/8 to-primary/4 rounded-xl p-5 text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-sm sm:text-base text-foreground font-semibold">
                    All donations are eligible for{" "}
                    <span className="text-primary font-bold">
                      80G tax exemption
                    </span>
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Contact us for donation receipts and tax exemption
                  certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="bg-gradient-to-br from-muted to-card rounded-3xl p-8 sm:p-10 border border-border shadow-card">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 font-serif">
              Have Questions?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Want to learn more about how your donation will be used, or
              need help with the transfer process? We are happy to assist.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-warm hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
