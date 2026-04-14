import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ConditionTag from "@/components/ConditionTag";
import CharitableBadge from "@/components/CharitableBadge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  Brain,
  Heart,
  Users,
  Phone,
  ArrowRight,
  HandHeart,
  Sparkles,
  GraduationCap,
  Star,
  Activity,
  MessageCircle,
  BookOpen,
  Shield,
  Lightbulb,
  Award,
  Camera,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import drImage from "@/assets/dr-uma-sengupta.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const CountUpStat = ({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: LucideIcon }) => {
  const { ref, display } = useCountUp({ end, suffix, duration: 2200 });
  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-400">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-serif tabular-nums">
        {display}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
};

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "Occupational Therapy",
      description:
        "Developing fine motor skills, sensory-motor skills, and daily living skills to foster independence.",
    },
    {
      icon: Heart,
      title: "Physiotherapy",
      description:
        "Improving gross motor skills, mobility, strength, and balance for better physical development.",
    },
    {
      icon: Brain,
      title: "ABA Therapy",
      description:
        "Evidence-based behavioral therapy designed to improve social skills and reduce challenging behaviors.",
    },
    {
      icon: MessageCircle,
      title: "Speech & Communication",
      description:
        "Helping children develop verbal and non-verbal communication skills for better expression.",
    },
    {
      icon: Shield,
      title: "Behaviour Management",
      description:
        "Identifying and reducing challenging behaviors while building positive social skills.",
    },
    {
      icon: BookOpen,
      title: "Special Education",
      description:
        "Creating Individual Educational Plans (IEPs) to work on academic, social, and functional skills.",
    },
  ];

  const conditions = [
    { name: "Speech Impairment", color: "primary" as const },
    { name: "Intellectual Disability", color: "secondary" as const },
    { name: "Cerebral Palsy", color: "yellow" as const },
    { name: "Autism (ASD)", color: "pink" as const },
    { name: "ADHD", color: "primary" as const },
    { name: "Down Syndrome", color: "secondary" as const },
    { name: "Global Developmental Delay", color: "yellow" as const },
  ];

  const impactStats = [
    { end: 100, suffix: "+", label: "Children Supported", icon: Heart },
    { end: 30, suffix: "+", label: "Qualified Professionals", icon: Users },
    { end: 37, suffix: "+", label: "Years of Combined Experience", icon: Sparkles },
    { end: 97, suffix: "%", label: "Parent Satisfaction Rate", icon: Star },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every child with genuine love, patience, and understanding.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team brings decades of specialized training and clinical experience.",
    },
    {
      icon: Lightbulb,
      title: "Individual Care",
      description: "Every child receives a personalized plan tailored to their unique needs.",
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "We work hand-in-hand with families to ensure progress continues at home.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsla(142, 40%, 35%, 0.75), hsla(16, 60%, 45%, 0.65)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-xl z-0" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/5 blur-xl z-0" />

        <div className="container mx-auto px-6 sm:px-8 relative z-10 text-center animate-fade-in py-12 sm:py-20">
          {/* Trust Badge */}
          <div className="mb-6">
            <CharitableBadge variant="light" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 font-serif">
            Every Child Deserves a<br className="hidden sm:block" /> Chance to Shine
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 max-w-3xl mx-auto font-light px-4">
            Compassionate early intervention and child development for children
            with special needs — where every milestone matters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-4">
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="pill"
                size="lg"
                className="text-lg px-8 py-6 w-full sm:w-auto bg-white text-primary hover:bg-white/90"
              >
                Learn About Our Programs
              </Button>
            </Link>
            <Link to="/support" className="w-full sm:w-auto">
              <Button
                variant="pill-outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                <HandHeart className="h-5 w-5" />
                Support Our Mission
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-white/80 text-sm">
            Est. 2024 &bull; Ranchi, Jharkhand &bull; Non-Profit Organization
          </p>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              Our Impact on the Community
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to changing lives
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <CountUpStat key={index} end={stat.end} suffix={stat.suffix} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Serve Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
              Children We Serve with Compassion
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              We welcome children (ages 0-16 years) with a wide range of
              intellectual and developmental needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <ConditionTag
                key={index}
                name={condition.name}
                color={condition.color}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/conditions">
              <Button variant="outline" size="lg" className="gap-2">
                Learn More About Conditions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why We Do What We Do Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Text side */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                  Why We Do What We Do
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  At Upasana, we believe that every child — regardless of their
                  challenges — has limitless potential waiting to be unlocked.
                  Our mission is rooted in the understanding that early
                  intervention can transform lives, giving children the tools
                  they need to thrive and families the hope they deserve.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We are driven by the belief that compassionate, expert care
                  can bridge the gap between what is and what could be. Every
                  therapy session, every smile, every small victory is a
                  testament to the power of dedicated support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {coreValues.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-400"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <value.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm font-serif">
                          {value.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative side */}
              <div className="relative hidden lg:block">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/10 to-yellow/10 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-primary/10" />
                  <div className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-secondary/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow/10" />
                  <div className="relative z-10 text-center p-8">
                    <HandHeart className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                    <p className="text-lg font-serif text-primary/60 font-medium">
                      Nurturing Potential
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Building Futures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              Our Programs: Nurturing Every Child's Potential
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive, evidence-based therapies delivered with warmth and
              expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button variant="pill" size="lg" className="w-full sm:w-auto">
                Explore All Programs
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Uma Sen Gupta Profile Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-serif">
                Dr. Uma Sen Gupta
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mt-2">
                Vice Chairman & Head of Occupational Therapy
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
              {/* Photo and stats */}
              <div className="space-y-6">
                <div className="relative max-w-sm mx-auto lg:max-w-none">
                  <img
                    src={drImage}
                    alt="Dr. Uma Sen Gupta"
                    className="w-full h-auto object-cover rounded-2xl shadow-card-hover aspect-square sm:aspect-[3/4] lg:aspect-[4/5]"
                  />
                </div>
                {/* Key stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary font-serif">
                      37+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-secondary/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-secondary font-serif">
                      1000+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Children Treated
                    </div>
                  </div>
                  <div className="bg-yellow/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground font-serif">
                      50+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Research Papers
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio and qualifications */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 font-serif">
                    Professional Summary
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dr. Uma Sen Gupta is a pioneering figure in pediatric
                    rehabilitation with over 37 years of dedicated experience.
                    As Vice Chairman and Head of Occupational Therapy at Upasana,
                    she leads our clinical programs with a rare combination of
                    deep expertise and heartfelt compassion. Her vision has shaped
                    early intervention services in Ranchi, helping thousands of
                    children unlock their potential and lead more independent
                    lives.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 font-serif">
                    Qualifications & Expertise
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Master's in Occupational Therapy (Pediatrics)",
                      "Certified Sensory Integration Therapist",
                      "Advanced Training in Neurodevelopmental Therapy (NDT)",
                      "Expert in Autism Spectrum Disorder Interventions",
                      "Published Researcher in Pediatric Rehabilitation",
                      "Fellow, Indian Association of Occupational Therapists",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm sm:text-base text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/team">
                  <Button variant="pill" size="lg" className="w-full sm:w-auto mt-4">
                    Meet Full Team
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Us in Action Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              See Us in Action
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Watch how we support children on their developmental journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-card-hover bg-gradient-to-br from-primary/10 to-secondary/5"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Upasana Centre Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-6xl mx-auto mt-10 sm:mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { from: "from-primary/20", to: "to-secondary/10" },
                { from: "from-secondary/20", to: "to-yellow/10" },
                { from: "from-yellow/20", to: "to-primary/10" },
                { from: "from-primary/15", to: "to-yellow/15" },
                { from: "from-secondary/15", to: "to-primary/10" },
                { from: "from-yellow/15", to: "to-secondary/10" },
              ].map((gradient, index) => (
                <div
                  key={index}
                  className={`aspect-[4/3] bg-gradient-to-br ${gradient.from} ${gradient.to} rounded-2xl flex items-center justify-center hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1`}
                >
                  <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-primary/25" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Stories of Hope
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Hear from families whose lives we've touched
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel
              className="w-full"
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {[
                  {
                    quote:
                      "A much needed Centre to provide therapy with personalized care and love. Great initiative that truly makes a difference in the lives of special children and their families.",
                    author: "Praveen Sharma",
                    role: "Parent",
                  },
                  {
                    quote:
                      "Add your second review here.",
                    author: "Reviewer Name",
                    role: "Parent",
                  },
                  {
                    quote:
                      "Add your third review here.",
                    author: "Reviewer Name",
                    role: "Parent",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card text-center">
                      <div className="text-5xl sm:text-6xl md:text-7xl text-primary/30 mb-4 font-serif">
                        "
                      </div>
                      <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground italic mb-6 sm:mb-8 leading-relaxed font-serif">
                        {testimonial.quote}
                      </blockquote>
                      <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                        &ndash; {testimonial.author}, {testimonial.role}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-yellow/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
              Get Involved
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 px-4 max-w-3xl mx-auto">
              Every child deserves a chance to thrive. Your support helps us
              provide life-changing therapies to families who need them most.
            </p>

            {/* Three Ways to Help */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                  Donate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your contribution helps us reach more children in need
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                  Volunteer
                </h3>
                <p className="text-sm text-muted-foreground">
                  Share your time and skills with our community
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                  Spread Awareness
                </h3>
                <p className="text-sm text-muted-foreground">
                  Help us reach families who need our services
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
              <Link to="/support" className="w-full sm:w-auto">
                <Button
                  variant="warm"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  <HandHeart className="h-5 w-5" />
                  Support Our Cause
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="pill-outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
