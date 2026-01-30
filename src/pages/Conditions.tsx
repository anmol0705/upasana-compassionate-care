import { Check } from "lucide-react";

const Conditions = () => {
  const conditions = [
    "Attention Deficit (Hyperactivity) Disorder (ADD/ADHD)",
    "Autism Spectrum Disorder (ASD)",
    "Cerebral Palsy (CP)",
    "Down Syndrome (DS)",
    "Epilepsy",
    "Fragile X Syndrome",
    "Global Developmental Delay (GDD)",
    "Learning Disabilities (LD)",
    "Multiple Disabilities (MD)",
    "Sensory Processing Disorder (SPD)",
    "Other Undiagnosed Developmental Delays",
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
            Who We Welcome
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Our center is a safe, nurturing space for children (ages 0-16) with a
            wide spectrum of intellectual and developmental needs.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-400"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-400">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Every child is unique, and we're here to support your child's
                specific needs. If you're unsure whether we can help, please don't
                hesitate to{" "}
                <a
                  href="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  reach out to us
                </a>
                . We're always happy to discuss how we can best support your
                family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
