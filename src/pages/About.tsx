import { CheckCircle2, Target, Eye, Heart, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import sunilImg from "@/assets/team/sunil-lakra.jpg";
import umaImg from "@/assets/team/dr-uma-sengupta.jpg";
import praveenImg from "@/assets/team/Praveen-Sharma.png";
import akhilImg from "@/assets/team/Akhil-Poddar.jpg";
import uttamImg from "@/assets/team/Uttam-Jain.jpg";
import trusteePlaceholder from "@/assets/trustee-placeholder.jpg";
import CharitableBadge from "@/components/CharitableBadge";

interface Trustee {
  name: string;
  title: string;
  image: string;
  description: string;
  journey: string;
}

interface Milestone {
  year: string;
  event: string;
}

const About = () => {
  const trustees: Trustee[] = [
    {
      name: "Mr. Sunil Lakra",
      title: "Chairman",
      image: sunilImg,
      description:
        "A seasoned leader with over three decades of managerial experience at Bank of India, bringing administrative expertise and a deep commitment to social welfare to his role as Chairman.",
      journey:
        "Mr. Lakra served as a Manager at Bank of India for more than 30 years. A stalwart in organizational leadership, he represented the Bank of India Officers Association as National Vice President and held President and Secretary positions within the All India Bank Officers Association at both state and national levels. He also served as a Board member of the All India Bank of India SC/ST Officers Association. Beyond banking, he actively champions social upliftment and sports activities.",
    },
    {
      name: "Mrs. Uma Sengupta",
      title: "Vice Chairman",
      image: umaImg,
      description:
        "A pioneer in pediatric physiotherapy with over 37 years of experience. Mrs. Sengupta has dedicated her life to early intervention and child development.",
      journey:
        "Starting her journey in 1988, Mrs. Sengupta has transformed the landscape of pediatric therapy in Ranchi. Her evidence-based approach and compassionate care have helped hundreds of families navigate their child's developmental journey.",
    },
    {
      name: "CA. Praveen Sharma",
      title: "Secretary",
      image: praveenImg,
      description:
        "A distinguished Chartered Accountant and Lawyer guiding the trust with over two decades of financial and legal wisdom, dedicated to social service and transparency.",
      journey:
        "With a robust career as a partner at M/s. Praveen B. Sharma & Associates and former Chairman of ICAI Ranchi, Praveen blends professional rigour with compassion. His leadership extends to active roles in FJCCI and Marwari Yuva Manch. As a tireless advocate for education and health through the Red Cross and Sewa Bharti, he ensures Upasana is built on a foundation of integrity and care.",
    },
    {
      name: "CA. Akhil Poddar",
      title: "Treasurer",
      image: akhilImg,
      description:
        "A seasoned Senior Partner at Jain Poddar & Co. committed to fiscal integrity. Mr. Poddar applies over two decades of financial expertise to ensure Upasana's resources are managed with transparency.",
      journey:
        "Practicing since 2002 with qualifications including FCA, CS, and LLB, he brings deep expertise in audit, taxation, and investment. His meticulous financial stewardship ensures the trust operates on a solid foundation, building lasting confidence with our donors.",
    },
    {
      name: "CA. Uttam Jain",
      title: "Joint Secretary",
      image: uttamImg,
      description:
        "A Senior Partner at Jain Poddar & Co. with a history of academic excellence as an All-India Rank holder. Mr. Jain brings top-tier expertise in finance, taxation, and law to streamline Upasana's operations.",
      journey:
        "Holding FCA, CS, and LLB qualifications, he balances professional success with deep community engagement. Actively serving as a Trustee for the Aarohan Educational & Welfare Trust and the Oswal Sangh, his leadership ensures our programs are impactful and well-governed.",
    },
  ];

  const milestones: Milestone[] = [
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
    "Behavior & autonomy tests",
  ];

  const interventionSteps = [
    "Detailed planning and execution of individualized assessment programs",
    "Emphasis on physical health and dietary needs",
    "Coordination with medical professionals for comprehensive care",
    "Regular progress monitoring and program adjustments",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Hero Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <CharitableBadge className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
            About Upasana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Creating an inclusive society where every child can thrive &ndash; one milestone at a time
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-yellow/5 border border-border rounded-2xl p-8 md:p-12 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 flex-shrink-0 hidden sm:flex">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
                  <strong className="text-foreground">Upasana Charitable & Welfare Trust</strong> is an education and training centre for children with special needs in Ranchi, the capital city of Jharkhand. The trust was established in{" "}
                  <strong className="text-foreground">January 2024</strong>, with the clear objective of educating and mainstreaming special children in Ranchi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
                  We function in four major areas &ndash;{" "}
                  <strong className="text-foreground">Speech Impairment, Intellectual Disability, Cerebral Palsy, and Autism</strong>{" "}
                  &ndash; with a strong emphasis on early intervention. Our expert professionals ensure individualized care and recognition for every unique individual, from birth to 16 years of age.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  At Upasana, we develop and implement structured programs for challenged children, providing early intervention and development programs that empower families and transform lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Goal */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground font-serif">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to create an inclusive society where every impaired child has equal access to quality education, empowering them to reach their full potential and lead fulfilling lives. We strive to foster an environment that embraces diversity, ensuring that all children, regardless of their impairments, receive a high-quality education tailored to their unique needs.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-secondary/10">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground font-serif">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Education is important for everyone, regardless of their background or circumstances. It is the key to success in life, helping us:
              </p>
              <ul className="space-y-2">
                {[
                  "Learn about the world around us",
                  "Develop talents and skills",
                  "Make a difference in the world",
                  "Live happy and fulfilling lives",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Goal */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-yellow/10">
                  <Lightbulb className="h-8 w-8 text-yellow" />
                </div>
                <h2 className="text-2xl font-bold text-foreground font-serif">Our Goal</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to equip children with the knowledge, values, and social skills necessary to thrive academically, emotionally, and socially. We aspire to help them become confident, independent individuals who can contribute to society. Through our comprehensive educational programs, we break down barriers, challenge stereotypes, and create a society that recognizes and embraces the potential of every impaired child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-muted/30 py-16 md:py-20 mb-16 md:mb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
                Our Methodology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A scientific, compassionate approach to early intervention
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Early Intervention */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 font-serif">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  Early Intervention
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At-risk babies are brought to Upasana for comprehensive assessment. If any disability is detected, intervention strategies are implemented immediately, depending on the diagnosis. If no abnormality is detected, the baby is still supervised until the age of 6 years to detect any learning and behavioral disorders.
                </p>
                <h4 className="font-semibold text-foreground mb-3">Early Intervention Tests:</h4>
                <ul className="space-y-2">
                  {earlyInterventionTests.map((test, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Identification */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 font-serif">
                  <div className="p-2 rounded-xl bg-secondary/10">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  After Identification
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Once developmental challenges are identified, we implement a comprehensive, individualized intervention program tailored to each child's unique needs.
                </p>
                <h4 className="font-semibold text-foreground mb-3">Our Intervention Steps:</h4>
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
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Decades of dedication to child development
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-yellow" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-16 md:pl-20 animate-fade-in-up">
                  <div className="absolute left-2 md:left-4 top-1 w-9 h-9 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-card">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400">
                    <span className="inline-block text-sm font-bold text-primary mb-1 bg-primary/10 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                    <p className="text-foreground leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              Our Board of Trustees
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Upasana is guided by a dedicated board committed to our mission of inclusive education and child development
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {trustees.map((trustee, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="flex flex-col items-center text-center cursor-pointer group animate-fade-in-up">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary shadow-card group-hover:shadow-card-hover transition-all duration-400 group-hover:-translate-y-1">
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm md:text-base font-serif group-hover:text-primary transition-colors duration-400">
                      {trustee.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{trustee.title}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">{trustee.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <img
                        src={trustee.image ?? trusteePlaceholder}
                        alt={trustee.name}
                        className="w-48 h-48 rounded-2xl object-cover shadow-card"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary mb-2">{trustee.title}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {trustee.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3 font-serif">Their Journey</h4>
                      <p className="text-muted-foreground leading-relaxed">{trustee.journey}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
