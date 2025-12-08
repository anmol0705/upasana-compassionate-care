import { CheckCircle2, Target, Eye, Heart, Lightbulb, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import trusteePlaceholder from "@/assets/trustee-placeholder.jpg";
import sunilImg from "@/assets/sunil-lakra.jpg";
import umaImg from "@/assets/dr-uma-sengupta.jpg";
import praveenImg from "@/assets/Praveen-Sharma.png";
import akhilImg from "@/assets/Akhil-Poddar.jpg";
import uttamImg from "@/assets/Uttam-Jain.jpg";

const About = () => {
  const [selectedTrustee, setSelectedTrustee] = useState<number | null>(null);
  
  const trustees = [
    { 
      name: "Mr. Sunil Lakra", 
      title: "Chairman",
      image: sunilImg,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. With decades of experience in social work and community development, Mr. Lakra brings visionary leadership to Upasana.",
      journey: "Mr. Lakra has been instrumental in establishing various charitable initiatives across Jharkhand. His commitment to inclusive education stems from his belief that every child deserves equal opportunities to thrive and succeed in life."
    },
    { 
      name: "Mrs. Uma Sengupta", 
      title: "Vice Chairman",
      image: umaImg,
      description: "A pioneer in pediatric physiotherapy with over 37 years of experience. Mrs. Sengupta has dedicated her life to early intervention and child development.",
      journey: "Starting her journey in 1988, Mrs. Sengupta has transformed the landscape of pediatric therapy in Ranchi. Her evidence-based approach and compassionate care have helped hundreds of families navigate their child's developmental journey."
    },
    { 
      name: "Mr. Praveen Sharma", 
      title: "Secretary",
      image: praveenImg,
      description: "An accomplished professional with a passion for social welfare and organizational excellence. Mr. Sharma ensures smooth operations and strategic planning.",
      journey: "With a background in management and community service, Mr. Sharma has been actively involved in various NGOs. His expertise in administration and fundraising has been crucial to Upasana's growth and sustainability."
    },
    { 
      name: "Mr. Akhil Poddar", 
      title: "Treasurer",
      image: akhilImg,
      description: "A financial expert committed to transparency and fiscal responsibility. Mr. Poddar manages Upasana's resources to maximize impact for children and families.",
      journey: "Mr. Poddar's financial acumen and ethical approach ensure that every resource is utilized effectively. His dedication to accountability has built trust with donors and stakeholders alike."
    },
    { 
      name: "Mr. Uttam Jain", 
      title: "Joint Secretary",
      image: uttamImg,
      description: "A dedicated social worker with deep roots in community engagement. Mr. Jain supports operational activities and outreach programs.",
      journey: "Mr. Jain's grassroots experience and networking skills have expanded Upasana's reach. His hands-on approach in program implementation ensures that services reach those who need them most."
    },
  ];

  const milestones = [
    { year: "1988", event: "Dr. Uma Sen Gupta begins pioneering pediatric physiotherapy in Ranchi" },
    { year: "2024", event: "Upasana Charitable & Welfare Trust officially established in January" },
    { year: "2024", event: "Centre opens at YMCA School Campus, Kantatoli, Ranchi" },
    { year: "Present", event: "Serving 50+ children with comprehensive therapeutic interventions" },
  ];

  const earlyInterventionTests = [
    "Identifying delayed milestones and motor skills",
    "Neuro-developmental assessment",
    "Pediatrics audiometry tests",
    "Behavior observation and analysis",
  ];

  const interventionSteps = [
    "Detailed planning and execution of individualized assessment programs",
    "Emphasis on physical health and dietary needs",
    "Coordination with medical professionals for comprehensive care",
    "Regular progress monitoring and program adjustments",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Upasana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Creating an inclusive society where every child can thrive – one milestone at a time
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-yellow/5 border border-border rounded-2xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Upasana Charitable & Welfare Trust</strong> is an education and training centre for children with special needs in Ranchi, the capital city of Jharkhand. The trust was established in <strong>January 2024</strong>, with the clear objective of educating and mainstreaming special children in Ranchi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We function in four major areas – <strong>Speech Impairment, Intellectual Disability, Cerebral Palsy, and Autism</strong> – with a strong emphasis on early intervention. Our expert professionals ensure individualized care and recognition for every unique individual, from birth to 16 years of age.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Upasana, we develop and implement structured programs for challenged children, providing early intervention and development programs that empower families and transform lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Goal */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to create an inclusive society where every impaired child has equal access to quality education, empowering them to reach their full potential and lead fulfilling lives. We strive to foster an environment that embraces diversity, ensuring that all children, regardless of their impairments, receive a high-quality education tailored to their unique needs.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Education is important for everyone, regardless of their background or circumstances. It is the key to success in life, helping us:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Learn about the world around us</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Develop talents and skills</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Make a difference in the world</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Live happy and fulfilling lives</span>
                </li>
              </ul>
            </div>

            {/* Goal */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-yellow/10">
                  <Lightbulb className="h-8 w-8 text-yellow" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Goal</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to equip children with the knowledge, values, and social skills necessary to thrive academically, emotionally, and socially. We aspire to help them become confident, independent individuals who can contribute to society. Through our comprehensive educational programs, we breakdown barriers, challenge stereotypes, and create a society that recognizes and embraces the potential of every impaired child.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Methodology
            </h2>
            <p className="text-lg text-muted-foreground">
              A scientific, compassionate approach to early intervention
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Early Intervention */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                Early Intervention
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At-risk babies are brought to Upasana for comprehensive assessment. If any disability is detected, intervention strategies are implemented immediately, depending on the diagnosis. If no abnormality is detected, the baby is still supervised until the age of 6 years to detect any learning and behavioral disorders.
              </p>
              <h4 className="font-semibold text-foreground mb-3">
                Early Intervention Tests:
              </h4>
              <ul className="space-y-2 mb-6">
                {earlyInterventionTests.map((test, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Identification */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                After Identification
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Once developmental challenges are identified, we implement a comprehensive, individualized intervention program tailored to each child's unique needs.
              </p>
              <h4 className="font-semibold text-foreground mb-3">
                Our Intervention Steps:
              </h4>
              <ul className="space-y-2">
                {interventionSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Decades of dedication to child development
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-yellow"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 animate-fade-in-up">
                  <div className="absolute left-4 top-0 w-9 h-9 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="text-sm font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-foreground">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Board of Trustees */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Board of Trustees
            </h2>
            <p className="text-lg text-muted-foreground">
              Upasana is guided by a dedicated board committed to our mission of inclusive education and child development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustees.map((trustee, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in-up cursor-pointer"
                  >
                    <img 
                      src={trustee.image} 
                      alt={trustee.name}
                      className="mb-4 mx-auto w-20 h-20 rounded-full object-cover shadow-lg"
                    />
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {trustee.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{trustee.title}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{trustee.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <img 
                        src={trustee.image ?? trusteePlaceholder} 
                        alt={trustee.name}
                        className="w-48 h-48 rounded-xl object-cover shadow-lg"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary mb-2">{trustee.title}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {trustee.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">Their Journey</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {trustee.journey}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
