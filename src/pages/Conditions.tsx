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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Who We Work With
          </h1>
          <p className="text-xl text-muted-foreground">
            Our center is a safe, welcoming place for children (ages 0-15) with a
            wide spectrum of intellectual and developmental disabilities.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Check className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">
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
