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
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              Empowering Your Child's Unique Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
              Expert early intervention and child development for special needs.
              Welcome to Upasana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-400">
              <Link to="/contact">
                <Button variant="pill" size="lg">
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:7033917890">
                <Button variant="pill-outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                  <Phone className="h-5 w-5" />
                  Call Us: 7033917890
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Support Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              A Supportive Partner for Your Family
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide specialized, compassionate care for children with a wide
              range of developmental challenges. Our experts are here to help.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <ConditionTag
                key={index}
                name={condition.name}
                color={condition.color}
              />
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src={drImage}
                alt="Dr. Uma Sen Gupta"
                className="w-full rounded-xl shadow-card-hover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Led by Renowned Expert Dr. Uma Sen Gupta (P.T)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our center is led by Dr. Uma Sen Gupta, a pioneer in pediatric
                physiotherapy with over 37 years of experience. Her vision and
                expertise in early intervention have shaped child development
                services in Ranchi.
              </p>
              <Link to="/team">
                <Button variant="pill" size="lg">
                  Meet Our Team
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 relative">
              <Quote className="absolute top-8 left-8 h-16 w-16 text-primary/20" />
              <div className="relative z-10 text-center space-y-6">
                <p className="text-2xl md:text-3xl font-medium text-foreground italic leading-relaxed">
                  "A much needed Centre to provide therapy with personalized care
                  and love. Great initiative."
                </p>
                <div className="pt-4">
                  <p className="text-lg font-semibold text-primary">
                    – Praveen Sharma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
