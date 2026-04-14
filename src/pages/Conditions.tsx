import {
  Puzzle,
  Brain,
  HeartPulse,
  Fingerprint,
  Zap,
  Dna,
  Clock,
  BookOpen,
  Layers,
  Eye,
  HelpCircle,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Condition {
  name: string;
  shortName: string;
  icon: React.ElementType;
  description: string;
  featured?: boolean;
}

const Conditions = () => {
  const featuredConditions: Condition[] = [
    {
      name: "Autism Spectrum Disorder (ASD)",
      shortName: "Autism",
      icon: Puzzle,
      featured: true,
      description:
        "A neurodevelopmental condition affecting communication, social interaction, and behavior. At Upasana, we use ABA therapy, speech therapy, and structured routines to help children with autism build meaningful connections and develop essential life skills.",
    },
    {
      name: "Cerebral Palsy (CP)",
      shortName: "Cerebral Palsy",
      icon: HeartPulse,
      featured: true,
      description:
        "A group of disorders affecting movement, balance, and posture caused by abnormal brain development. Our physiotherapy and occupational therapy programs help children with CP improve motor function, gain independence, and enhance their quality of life.",
    },
    {
      name: "Down Syndrome (DS)",
      shortName: "Down Syndrome",
      icon: Fingerprint,
      featured: true,
      description:
        "A genetic condition caused by an extra chromosome that affects physical and intellectual development. We provide early intervention, special education, and speech therapy to help children with Down Syndrome reach developmental milestones and build confidence.",
    },
    {
      name: "Attention Deficit (Hyperactivity) Disorder (ADD/ADHD)",
      shortName: "ADHD",
      icon: Zap,
      featured: true,
      description:
        "A neurodevelopmental condition characterized by difficulty sustaining attention, hyperactivity, and impulsive behavior. Our behaviour therapy and structured learning programs help children with ADHD develop focus, self-regulation, and positive social skills.",
    },
  ];

  const otherConditions: Condition[] = [
    {
      name: "Epilepsy",
      shortName: "Epilepsy",
      icon: Brain,
      description:
        "A neurological disorder causing recurrent seizures. We provide supportive therapies that work alongside medical treatment to help children with epilepsy participate fully in educational and social activities.",
    },
    {
      name: "Fragile X Syndrome",
      shortName: "Fragile X",
      icon: Dna,
      description:
        "A genetic condition causing intellectual disability and behavioral challenges. Our individualized programs address learning needs and sensory sensitivities common in children with Fragile X.",
    },
    {
      name: "Global Developmental Delay (GDD)",
      shortName: "Developmental Delay",
      icon: Clock,
      description:
        "A condition where children do not reach developmental milestones at expected ages across multiple domains. Our early intervention approach targets motor, cognitive, speech, and social development simultaneously.",
    },
    {
      name: "Learning Disabilities (LD)",
      shortName: "Learning Disabilities",
      icon: BookOpen,
      description:
        "Conditions affecting the ability to read, write, or process information. Our special educators create IEPs that build on each child's strengths and provide strategies to overcome learning challenges.",
    },
    {
      name: "Multiple Disabilities (MD)",
      shortName: "Multiple Disabilities",
      icon: Layers,
      description:
        "Children with two or more co-occurring disabilities require a coordinated, multi-disciplinary approach. Our team collaborates across therapies to create comprehensive care plans.",
    },
    {
      name: "Sensory Processing Disorder (SPD)",
      shortName: "Sensory Processing",
      icon: Eye,
      description:
        "A condition where the brain has difficulty processing sensory information. Our sensory integration therapy helps children respond more effectively to touch, sound, sight, and movement.",
    },
    {
      name: "Other Undiagnosed Developmental Delays",
      shortName: "Other Delays",
      icon: HelpCircle,
      description:
        "Many children show developmental concerns without a formal diagnosis. We welcome these children and conduct thorough assessments to identify areas of need and create supportive intervention plans.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Hero Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
            Conditions We Support
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our centre welcomes children ages 0&ndash;16 with a wide spectrum of intellectual and developmental needs. Every child receives individualized care tailored to their unique journey.
          </p>
        </div>
      </section>

      {/* Featured Conditions */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredConditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-400">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-serif">
                        {condition.shortName}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">
                        {condition.name !== condition.shortName ? condition.name : ""}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {condition.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Other Conditions */}
      <section className="bg-muted/30 py-16 md:py-20 mb-16 md:mb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                We Also Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our multidisciplinary team is equipped to work with a broad range of developmental conditions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherConditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-secondary/10 group-hover:scale-110 transition-transform duration-400">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-serif">
                        {condition.shortName}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border rounded-2xl p-8 md:p-12 shadow-card animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                Our Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                "Every child receives a thorough individualized assessment to understand their strengths and areas of need",
                "We design a comprehensive therapy plan combining multiple disciplines for holistic development",
                "Progress is monitored regularly and plans are adjusted to ensure continuous growth",
                "Families are active partners in the process, receiving training and guidance at every stage",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-yellow/10 border border-border rounded-2xl p-8 md:p-12 text-center shadow-card animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Not Sure If We Can Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every child is unique, and we are here to support your family. If your child's condition is not listed here, please reach out &ndash; we are always happy to discuss how we can best help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="pill" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5 mr-1" />
                  Reach Out to Us
                </Link>
              </Button>
              <Button variant="pill-outline" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;
