import { Heart, Building2, Hash, MapPin } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Support the Upasana Trust
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            We are the{" "}
            <span className="font-semibold text-primary">
              UPASANA CHARITABLE & WELFARE TRUST
            </span>
            , a non-profit organization dedicated to providing life-changing
            services to special children, regardless of their background.
          </p>
        </div>

        {/* Impact Statement */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Your Contribution Makes a Difference
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Your generous donation allows us to provide subsidized care to
                  families in need, acquire modern therapy equipment, and reach
                  more children who require specialized intervention. Together, we
                  can create a more inclusive society where every child has the
                  opportunity to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Details */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Donate via Bank Transfer
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your support helps us continue our mission
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-card-hover">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Account Name
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    UPASANA CHARITABLE & WELFARE TRUST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Account Number
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-mono break-all">
                    [Your Account Number]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    IFSC Code
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-mono break-all">
                    [Your IFSC Code]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Bank Name
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    [Your Bank Name]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    Branch Address
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground break-words">
                    [Your Branch Address]
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> Please contact us for information on 80G
                tax exemptions.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Have questions about donations or our programs?
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
