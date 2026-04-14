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
  ArrowRight,
  Phone,
  Search,
  ClipboardList,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

interface FeaturedCondition {
  name: string;
  shortName: string;
  icon: React.ElementType;
  color: string;
  iconBg: string;
  borderColor: string;
  description: string;
  howWeHelp: string;
}

const Conditions = () => {
  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);

  const featuredConditions: FeaturedCondition[] = [
    {
      name: "Autism Spectrum Disorder (ASD)",
      shortName: "Autism",
      icon: Puzzle,
      color: "text-primary",
      iconBg: "bg-primary/10",
      borderColor: "border-l-primary",
      description:
        "A neurodevelopmental condition affecting communication, social interaction, and behavior patterns. Every child on the spectrum is unique, with their own strengths and challenges.",
      howWeHelp:
        "We use ABA therapy, speech therapy, sensory integration, and structured routines to help children build meaningful connections, develop communication skills, and gain independence in daily life.",
    },
    {
      name: "Cerebral Palsy (CP)",
      shortName: "Cerebral Palsy",
      icon: HeartPulse,
      color: "text-secondary",
      iconBg: "bg-secondary/10",
      borderColor: "border-l-secondary",
      description:
        "A group of disorders affecting movement, balance, and posture caused by abnormal brain development. It can range from mild to severe, affecting one or multiple limbs.",
      howWeHelp:
        "Our physiotherapy and occupational therapy programs focus on improving motor function, building strength, enhancing mobility, and fostering independence through specialized equipment and techniques.",
    },
    {
      name: "Down Syndrome (DS)",
      shortName: "Down Syndrome",
      icon: Fingerprint,
      color: "text-[hsl(25,80%,55%)]",
      iconBg: "bg-yellow/15",
      borderColor: "border-l-[hsl(25,80%,55%)]",
      description:
        "A genetic condition caused by an extra chromosome that affects physical growth, facial features, and intellectual development. Children with Down Syndrome are known for their warmth and social nature.",
      howWeHelp:
        "We provide early intervention, special education, speech therapy, and physiotherapy to help children reach developmental milestones, build communication skills, and grow in confidence.",
    },
    {
      name: "Attention Deficit Hyperactivity Disorder",
      shortName: "ADHD",
      icon: Zap,
      color: "text-[hsl(12,70%,55%)]",
      iconBg: "bg-pink/10",
      borderColor: "border-l-[hsl(12,70%,55%)]",
      description:
        "A neurodevelopmental condition characterized by difficulty sustaining attention, hyperactivity, and impulsive behavior. It affects focus, organization, and self-regulation.",
      howWeHelp:
        "Our behaviour therapy and structured learning programs help children develop focus, self-regulation, organizational skills, and positive social interactions through evidence-based strategies.",
    },
  ];

  const otherConditions = [
    {
      name: "Epilepsy",
      icon: Brain,
      description: "Supportive therapies alongside medical treatment for full participation in education and social activities.",
    },
    {
      name: "Fragile X Syndrome",
      icon: Dna,
      description: "Individualized programs addressing learning needs and sensory sensitivities.",
    },
    {
      name: "Global Developmental Delay",
      icon: Clock,
      description: "Early intervention targeting motor, cognitive, speech, and social development simultaneously.",
    },
    {
      name: "Learning Disabilities",
      icon: BookOpen,
      description: "Tailored IEPs that build on each child's strengths and provide strategies to overcome challenges.",
    },
    {
      name: "Multiple Disabilities",
      icon: Layers,
      description: "Coordinated, multi-disciplinary care plans that address co-occurring conditions holistically.",
    },
    {
      name: "Sensory Processing Disorder",
      icon: Eye,
      description: "Sensory integration therapy to help children respond effectively to touch, sound, sight, and movement.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      icon: Search,
      description: "Comprehensive evaluation to understand your child's unique strengths, challenges, and developmental profile.",
    },
    {
      step: "02",
      title: "Personalized Plan",
      icon: ClipboardList,
      description: "A tailored therapy plan combining the right disciplines — designed around your child, not a diagnosis.",
    },
    {
      step: "03",
      title: "Therapy & Support",
      icon: Users,
      description: "Regular sessions with our expert team, with families actively involved as partners in every step.",
    },
    {
      step: "04",
      title: "Track & Grow",
      icon: TrendingUp,
      description: "Continuous monitoring and plan adjustments to ensure your child keeps progressing toward their goals.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 relative py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Ages 0–16 Years
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 font-serif">
              Every Child's Journey<br className="hidden sm:block" /> is Different
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We don't treat conditions — we nurture children. Whatever the diagnosis, our focus is on unlocking your child's unique potential with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Conditions */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              Conditions We Specialize In
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise in the conditions that affect children most
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {featuredConditions.map((condition) => {
              const Icon = condition.icon;
              const isExpanded = expandedCondition === condition.shortName;
              return (
                <div
                  key={condition.shortName}
                  onClick={() =>
                    setExpandedCondition(isExpanded ? null : condition.shortName)
                  }
                  className={`bg-card border border-border border-l-4 ${condition.borderColor} rounded-2xl p-4 sm:p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-400 cursor-pointer group active:scale-[0.99]`}
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div
                      className={`${condition.iconBg} p-2.5 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className={`h-5 w-5 sm:h-7 sm:w-7 ${condition.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-foreground font-serif">
                            {condition.shortName}
                          </h3>
                          <p className="text-[11px] sm:text-sm text-muted-foreground mt-0.5">
                            {condition.name}
                          </p>
                        </div>
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isExpanded ? "rotate-45 bg-primary/10 border-primary" : ""
                          }`}
                        >
                          <span className={`text-lg leading-none ${isExpanded ? "text-primary" : "text-muted-foreground"}`}>+</span>
                        </div>
                      </div>
                      <p className="text-[13px] sm:text-base text-muted-foreground leading-relaxed mt-2 sm:mt-3">
                        {condition.description}
                      </p>
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                          <div className="flex items-start gap-3">
                            <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-foreground mb-1">
                                How Upasana Helps
                              </p>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {condition.howWeHelp}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Conditions */}
      <section className="bg-muted/40 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
                We Also Support
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our multidisciplinary team works with a broad range of developmental conditions
              </p>
            </div>

            {/* Responsive card grid — all breakpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {otherConditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/8 group-hover:bg-primary/15 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-[15px] font-semibold text-foreground mb-1 leading-snug">
                          {condition.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                          {condition.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              How We Work With Your Child
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, caring process from the very first visit
            </p>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="sm:hidden space-y-0">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center shadow-card">
                        {item.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] border-l-2 border-dashed border-primary/20 my-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 pt-1">
                    <h3 className="text-base font-bold text-foreground mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: horizontal grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-primary/20" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-400 group-hover:shadow-warm">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-card">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-yellow/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center shadow-card">
            <div className="absolute inset-0 pattern-dots opacity-30" />
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
                Not Sure Where to Start?
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
                You don't need a diagnosis to reach out. If something feels different about your child's development, we're here to listen, assess, and guide you — no judgement, just support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="pill" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="h-5 w-5 mr-1" />
                    Talk to Our Team
                  </Link>
                </Button>
                <Button variant="pill-outline" size="lg" asChild>
                  <Link to="/services">
                    Explore Our Therapies
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;
