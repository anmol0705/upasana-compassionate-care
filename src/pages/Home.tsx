import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ConditionTag from "@/components/ConditionTag";
import {
  Brain,
  Heart,
  Users,
  Phone,
  ArrowRight,
  Quote,
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Empowering Your Child's Unique Journey
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-4">
            Expert early intervention and child development for special needs – where every child's potential is nurtured with compassion and science
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="pill" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <a href="tel:7033917890" className="w-full sm:w-auto">
              <Button variant="pill-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call: 7033917890
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Conditions We Support Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              A Supportive Partner for Your Family
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              We work with children (ages 0-15 years) with a wide range of intellectual and developmental disabilities
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              A Holistic Approach to Development
            </h2>
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
              <Button variant="pill" size="lg">
                See All Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Lead Expert Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img
                src={drImage}
                alt="Dr. Uma Sen Gupta"
                className="w-full h-auto object-cover rounded-xl shadow-card-hover aspect-[3/4] sm:aspect-[4/5]"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
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

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-card-hover">
              <div className="mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl text-primary mb-2 sm:mb-4">"</div>
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-light italic mb-6 sm:mb-8 leading-relaxed">
                A much needed Centre to provide therapy with personalized care and
                love. Great initiative that truly makes a difference in the lives
                of special children and their families.
              </blockquote>
              <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                – Praveen Sharma, Parent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-yellow/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Begin Your Child's Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
              Schedule a consultation with our expert team today and discover how
              we can support your child's development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="pill" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
              <a href="tel:7033917890" className="w-full sm:w-auto">
                <Button variant="pill-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call: 7033917890
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
