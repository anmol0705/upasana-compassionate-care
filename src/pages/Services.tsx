import {
  Brain,
  Heart,
  MessageCircle,
  Hand,
  Activity,
  Sparkles,
  GraduationCap,
  MessageSquare,
  CheckCircle2,
  ClipboardList,
  Users,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: "aba",
      title: "ABA Therapy",
      icon: Brain,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      description:
        "We specialize in Applied Behavior Analysis (ABA) therapy, a highly effective method for children with autism spectrum disorders and other developmental disabilities. ABA uses evidence-based techniques to improve communication, social skills, and adaptive behaviors while reducing challenging behaviors.",
    },
    {
      id: "behaviour",
      title: "Behaviour Therapy",
      icon: Heart,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      description:
        "Our specialists help identify and reduce challenging behaviors, replacing them with positive social and adaptive skills. We work closely with families to create individualized behavior management plans that promote positive reinforcement and long-term behavioral change.",
    },
    {
      id: "counselling",
      title: "Counselling",
      icon: MessageCircle,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      description:
        "We provide essential counselling for parents and family members, helping you navigate the diagnosis and empowering you as a partner in your child's therapy. Our counselors offer emotional support, practical strategies, and guidance to help families cope with the unique challenges of raising a child with special needs.",
    },
    {
      id: "occupational",
      title: "Occupational Therapy",
      icon: Hand,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      description:
        "Led by Dr. Uma Sen Gupta, this therapy focuses on developing fine motor skills, sensory-motor skills, and daily living skills to foster independence. We help children improve their ability to perform everyday activities, from self-care tasks to school-related skills, through engaging and purposeful activities.",
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      icon: Activity,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      description:
        "Focused on improving gross motor skills, mobility, strength, and balance, especially for children with conditions like Cerebral Palsy. Our physiotherapists use specialized techniques and equipment to help children achieve their maximum physical potential and improve their quality of life.",
    },
    {
      id: "sensory",
      title: "Sensory Integration",
      icon: Sparkles,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      description:
        "A specialized therapy to help children process and respond to sensory information (touch, sound, sight) more effectively. This therapy is particularly beneficial for children who are over-sensitive or under-sensitive to sensory input, helping them develop better self-regulation and participation in daily activities.",
    },
    {
      id: "special-ed",
      title: "Special Education",
      icon: GraduationCap,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      description:
        "Our educators create Individual Educational Plans (IEPs) to work on academic, social, and functional skills, preparing children for mainstream school inclusion. We focus on each child's unique learning style and needs, providing tailored instruction that builds confidence and competence.",
    },
    {
      id: "speech",
      title: "Speech & Communication",
      icon: MessageSquare,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      description:
        "We help children develop verbal and non-verbal communication skills, addressing challenges with speech, language, and social communication. Our speech therapists work on articulation, language comprehension, expressive language, and alternative communication methods when needed.",
    },
  ];

  const differentiators = [
    {
      icon: CheckCircle2,
      title: "Evidence-Based Approaches",
      description:
        "Every therapy we offer is grounded in research and proven methodologies, ensuring the best possible outcomes for your child.",
    },
    {
      icon: ClipboardList,
      title: "Individualized Treatment Plans",
      description:
        "No two children are alike. We create personalized plans that address your child's specific strengths, challenges, and goals.",
    },
    {
      icon: Users,
      title: "Family-Centered Care",
      description:
        "We believe families are partners in therapy. We empower parents with training, strategies, and ongoing support at every step.",
    },
    {
      icon: Star,
      title: "Experienced Professionals",
      description:
        "Our team of certified therapists and special educators brings decades of combined experience in pediatric development.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Hero Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
            How We Care for Your Child
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive, evidence-based therapies delivered with warmth and expertise to help every child reach their full potential
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl ${service.iconBg} flex-shrink-0 group-hover:scale-110 transition-transform duration-400`}>
                      <Icon className={`h-7 w-7 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Therapies */}
      <section className="bg-muted/30 py-16 md:py-20 mb-16 md:mb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                Why Choose Our Therapies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets Upasana apart in providing exceptional care for your child
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-yellow/10 border border-border rounded-2xl p-8 md:p-12 text-center shadow-card animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every child deserves the chance to thrive. Get in touch with us today to learn how our therapies can make a difference in your child's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="pill" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5 mr-1" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="pill-outline" size="lg" asChild>
                <Link to="/conditions">
                  Learn About Conditions
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

export default Services;
