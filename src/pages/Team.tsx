import { Users } from "lucide-react";
import drImage from "@/assets/dr-uma-sengupta.webp";

interface TeamMember {
  name: string;
  title: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    { name: "Swati Kumari Minakrr", title: "ABA Therapist" },
    { name: "Punam Lakra", title: "Special Educator" },
    { name: "Archana Kushwara", title: "Speech Therapist" },
    { name: "Somya Prasad", title: "Physiotherapist" },
    { name: "Soni Kumari", title: "Behaviour Therapist" },
    { name: "Somen Sengle", title: "OT / Physiotherapist" },
    { name: "Naveen Murmu", title: "Sensory Integration Therapist" },
  ];

  const gradients = [
    "from-primary/20 to-primary/5",
    "from-secondary/20 to-secondary/5",
    "from-yellow/20 to-yellow/5",
    "from-primary/15 to-yellow/10",
    "from-secondary/15 to-primary/10",
    "from-yellow/15 to-secondary/10",
    "from-primary/20 to-secondary/5",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Hero Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-serif">
            Meet Our Expert Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compassionate professionals dedicated to your child's development
          </p>
        </div>
      </section>

      {/* Dr. Uma Sen Gupta Featured Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-card animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-5">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">
                  Dr. Uma Sen Gupta{" "}
                  <span className="text-lg md:text-xl font-normal text-muted-foreground">(P.T)</span>
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-primary">
                  Vice Chairman & Head of Occupational Therapy
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A pioneer in pediatric physiotherapy in Ranchi, Dr. Gupta began her work in 1988. With over 37 years of experience, she is a Certified Lymphedema Therapist (ACOLS, USA), a Master Trainer in E.D.Y., and holds degrees in B.Sc, D.P.T, and N.D.T.
                </p>
                <p>
                  She started the first physiotherapy and early intervention unit in Jharkhand at Deepshikha and has trained countless special educators. Her work, published in international journals, is foundational to our center's expert-driven approach.
                </p>
                <p className="font-medium text-primary">
                  Dr. Gupta's vision and expertise continue to shape the lives of children and families across the region.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                <img
                  src={drImage}
                  alt="Dr. Uma Sen Gupta"
                  className="w-full h-auto object-cover rounded-2xl shadow-card-hover aspect-[3/4] sm:aspect-[4/5]"
                />
                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-2xl -z-10 hidden md:block" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-secondary/10 rounded-2xl -z-10 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Dedicated Professionals */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our Dedicated Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team is comprised of certified and compassionate Speech Therapists, Special Educators, Physio-Occupational and Sensory Integration Therapists
            </p>
          </div>

          {/* Row 1: First 4 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}
                >
                  <div className="w-20 h-20 rounded-full bg-background/60 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary/50" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: Remaining 3 members, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[75%] mx-auto">
            {teamMembers.slice(4).map((member, index) => (
              <div
                key={index + 4}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${gradients[(index + 4) % gradients.length]} flex items-center justify-center`}
                >
                  <div className="w-20 h-20 rounded-full bg-background/60 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary/50" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
