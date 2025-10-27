import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      id: "aba",
      title: "ABA Therapy",
      description:
        "We specialize in Applied Behavior Analysis (ABA) therapy, a highly effective method for children with autism spectrum disorders (ASD) and other developmental disabilities. ABA uses evidence-based techniques to improve communication, social skills, and adaptive behaviors while reducing challenging behaviors.",
    },
    {
      id: "behaviour",
      title: "Behaviour Therapy",
      description:
        "Our specialists help identify and reduce challenging behaviors, replacing them with positive social and adaptive skills. We work closely with families to create individualized behavior management plans that promote positive reinforcement and long-term behavioral change.",
    },
    {
      id: "counselling",
      title: "Counselling",
      description:
        "We provide essential counselling for parents and family members, helping you navigate the diagnosis and empowering you as a partner in your child's therapy. Our counselors offer emotional support, practical strategies, and guidance to help families cope with the unique challenges of raising a child with special needs.",
    },
    {
      id: "occupational",
      title: "Occupational Therapy",
      description:
        "Led by Dr. Uma Sen Gupta, this therapy focuses on developing fine motor skills, sensory-motor skills, and daily living skills to foster independence. We help children improve their ability to perform everyday activities, from self-care tasks to school-related skills, through engaging and purposeful activities.",
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      description:
        "Focused on improving gross motor skills, mobility, strength, and balance, especially for children with conditions like Cerebral Palsy. Our physiotherapists use specialized techniques and equipment to help children achieve their maximum physical potential and improve their quality of life.",
    },
    {
      id: "sensory",
      title: "Sensory Integration",
      description:
        "A specialized therapy to help children process and respond to sensory information (touch, sound, sight) more effectively. This therapy is particularly beneficial for children who are over-sensitive or under-sensitive to sensory input, helping them develop better self-regulation and participation in daily activities.",
    },
    {
      id: "special-ed",
      title: "Special Education",
      description:
        "Our educators create Individual Educational Plans (IEPs) to work on academic, social, and functional skills, preparing children for mainstream school inclusion. We focus on each child's unique learning style and needs, providing tailored instruction that builds confidence and competence.",
    },
    {
      id: "speech",
      title: "Speech & Communication Therapy",
      description:
        "We help children develop verbal and non-verbal communication skills, addressing challenges with speech, language, and social communication. Our speech therapists work on articulation, language comprehension, expressive language, and alternative communication methods when needed.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Therapeutic Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Comprehensive, evidence-based therapies tailored to your child's needs
          </p>
        </div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-foreground hover:text-primary py-4 sm:py-6">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Services;
