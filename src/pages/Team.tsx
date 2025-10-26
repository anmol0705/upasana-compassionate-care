import { Users } from "lucide-react";
import drImage from "@/assets/dr-uma-sengupta.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Lead Physiotherapist",
      title: "Certified Pediatric PT",
      placeholder: true,
    },
    {
      name: "Speech Therapist",
      title: "Communication Specialist",
      placeholder: true,
    },
    {
      name: "ABA Therapist",
      title: "Behavior Analyst",
      placeholder: true,
    },
    {
      name: "Special Educator",
      title: "IEP Coordinator",
      placeholder: true,
    },
    {
      name: "Occupational Therapist",
      title: "Sensory Integration Expert",
      placeholder: true,
    },
    {
      name: "Counselor",
      title: "Family Support Specialist",
      placeholder: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Compassionate professionals dedicated to your child's development
          </p>
        </div>

        {/* Lead Therapist Profile */}
        <section className="mb-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Dr. Uma Sen Gupta (P.T)
              </h2>
              <h3 className="text-2xl font-semibold text-primary">
                Vice Chairman & Head of Occupational Therapy
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A pioneer in pediatric physiotherapy in Ranchi, Dr. Gupta began
                  her work in 1988. With over 37 years of experience, she is a
                  Certified Lymphedema Therapist (ACOLS, USA), a Master Trainer in
                  E.D.Y., and holds degrees in B.Sc, D.P.T, and N.D.T.
                </p>
                <p>
                  She started the first physiotherapy and early intervention unit
                  in Jharkhand at Deepshikha and has trained countless special
                  educators. Her work, published in international journals, is
                  foundational to our center's expert-driven approach.
                </p>
                <p className="font-medium text-primary">
                  Dr. Gupta's vision and expertise continue to shape the lives of
                  children and families across the region.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={drImage}
                alt="Dr. Uma Sen Gupta"
                className="w-full rounded-xl shadow-card-hover"
              />
            </div>
          </div>
        </section>

        {/* Our Therapists Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Dedicated Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team is comprised of certified and compassionate Speech
              Therapists, Special Educators, Physio-Occupational and Sensory
              Integration Therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary/40" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
