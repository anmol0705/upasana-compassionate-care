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
} from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import drImage from "@/assets/dr-uma-sengupta.jpg";

const Home = () => {
  const services = [
    {
      icon: Users,
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
      icon: Users,
      title: "Speech & Communication Therapy",
      description:
        "Helping children develop verbal and non-verbal communication skills for better expression.",
    },
    {
      icon: Heart,
      title: "Behaviour Management",
      description:
        "Identifying and reducing challenging behaviors while building positive social skills.",
    },
    {
      icon: Brain,
      title: "Special Education",
      description:
        "Creating Individual Educational Plans (IEPs) to work on academic, social, and functional skills.",
    },
  ];

  const conditions = [
    { name: "Autism (ASD)", color: "primary" as const },
    { name: "Cerebral Palsy (CP)", color: "secondary" as const },
    { name: "Down Syndrome", color: "yellow" as const },
    { name: "ADHD", color: "pink" as const },
    { name: "Speech & Language Delays", color: "primary" as const },
    { name: "Global Developmental Delay", color: "secondary" as const },
    { name: "And More...", color: "yellow" as const },
  ];

  const impactStats = [
    { number: "50+", label: "Children Supported", icon: Heart },
    { number: "40+", label: "Families Empowered", icon: Users },
    { number: "37+", label: "Years of Experience", icon: Sparkles },
    { number: "10+", label: "Qualified Professionals", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsla(142, 40%, 35%, 0.75), hsla(16, 60%, 45%, 0.65)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 sm:px-8 relative z-10 text-center animate-fade-in py-12 sm:py-20">
          {/* Trust Badge */}
          <div className="mb-6">
            <CharitableBadge variant="light" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 font-serif">
            Nurturing Every Child's Potential
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 max-w-3xl mx-auto font-light px-4">
            Compassionate early intervention and child development for children with special needs – where every milestone matters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-4">
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="pill" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Learn About Our Programs
              </Button>
            </Link>
            <Link to="/support" className="w-full sm:w-auto">
              <Button variant="pill-outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
                <HandHeart className="h-5 w-5" />
                Support Our Mission
              </Button>
            </Link>
          </div>
          
          {/* Trust indicator */}
          <p className="mt-8 text-white/80 text-sm">
            Est. 2024 • Ranchi, Jharkhand • Non-Profit Organization
          </p>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-12 sm:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-400">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-serif">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Support Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
              A Caring Partner for Your Family
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              We welcome children (ages 0-16 years) with a wide range of intellectual and developmental needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <ConditionTag key={index} name={condition.name} color={condition.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              How We Care for Your Child
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive, evidence-based therapies delivered with warmth and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                Explore Our Programs
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Lead Expert Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <img
                src={drImage}
                alt="Dr. Uma Sen Gupta"
                className="w-full h-auto object-cover rounded-2xl shadow-card-hover aspect-square sm:aspect-[3/4] lg:aspect-[4/5]"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight font-serif">
                Led by Renowned Expert Dr. Uma Sen Gupta (P.T)
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our center is led by Dr. Uma Sen Gupta, a pioneer in pediatric
                physiotherapy with over 37 years of experience. Her vision and
                expertise in early intervention have shaped child development
                services in Ranchi.
              </p>
              <Link to="/team">
                <Button variant="pill" size="lg" className="w-full sm:w-auto">
                  Meet Our Team
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              See Us in Action
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Watch how we support children on their developmental journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-card-hover" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Upasana Centre Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
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
                    quote: "A much needed Centre to provide therapy with personalized care and love. Great initiative that truly makes a difference in the lives of special children and their families.",
                    author: "Praveen Sharma",
                    role: "Parent"
                  },
                  {
                    quote: "Add your second review here.",
                    author: "Reviewer Name",
                    role: "Parent"
                  },
                  {
                    quote: "Add your third review here.",
                    author: "Reviewer Name",
                    role: "Parent"
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card text-center">
                      <div className="text-5xl sm:text-6xl md:text-7xl text-primary/30 mb-4 font-serif">"</div>
                      <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground italic mb-6 sm:mb-8 leading-relaxed font-serif">
                        {testimonial.quote}
                      </blockquote>
                      <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                        – {testimonial.author}, {testimonial.role}
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-yellow/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
              Join Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 px-4 max-w-3xl mx-auto">
              Every child deserves a chance to thrive. Your support helps us provide life-changing therapies to families who need them most.
            </p>
            
            {/* Three Ways to Help */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">Donate</h3>
                <p className="text-sm text-muted-foreground">Your contribution helps us reach more children in need</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">Volunteer</h3>
                <p className="text-sm text-muted-foreground">Share your time and skills with our community</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">Spread Awareness</h3>
                <p className="text-sm text-muted-foreground">Help us reach families who need our services</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
              <Link to="/support" className="w-full sm:w-auto">
                <Button variant="warm" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <HandHeart className="h-5 w-5" />
                  Support Our Cause
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="pill-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
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
