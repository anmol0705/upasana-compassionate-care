import { Heart, Building2, Hash, MapPin, CheckCircle2 } from "lucide-react";
import CharitableBadge from "@/components/CharitableBadge";

const Support = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <CharitableBadge className="mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
            Support Our Mission
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            Your generosity helps us provide life-changing care to children with special needs, regardless of their family's financial situation.
          </p>
        </div>

        {/* Impact Statement */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
                  Every Contribution Makes a Difference
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Your generous donation allows us to provide subsidized care to
                  families in need, acquire modern therapy equipment, and reach
                  more children who require specialized intervention. Together, we
                  can create a more inclusive society where every child has the
                  opportunity to thrive.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    80G Tax Exemption Available
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    Registered Charitable Trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Details */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 font-serif">
              Donate via Bank Transfer
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your support helps us continue our mission of nurturing every child's potential
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-card-hover">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Account Name
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    Upasana Charitable and Welfare Trust
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Account Number
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-mono break-all">
                    459920110000674
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    IFSC Code
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-mono break-all">
                     BKID0004599
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pink/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Bank Name
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    Bank of India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Branch Address
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    Kantatoli Branch 
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="bg-primary/5 rounded-xl p-4 text-center">
                <p className="text-sm text-foreground font-medium">
                  ✓ All donations are eligible for <span className="text-primary font-bold">80G tax exemption</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Contact us for donation receipts and tax exemption certificates
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Have questions about donations or want to learn more about our impact?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Get in touch with us →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
