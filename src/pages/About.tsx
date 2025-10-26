const About = () => {
  const trustees = [
    { name: "Mr. Sunil Lakra", title: "Chairman" },
    { name: "Mrs. Uma Sengupta", title: "Vice Chairman" },
    { name: "Mr. Praveen Sharma", title: "Secretary" },
    { name: "Mr. Akhil Poddar", title: "Treasurer" },
    { name: "Mr. Uttam Jain", title: "Joint Secretary" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Upasana</h1>
          <p className="text-xl text-muted-foreground">
            Creating an inclusive society where every child can thrive
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To create an inclusive society where every impaired child has equal
              access to quality education, empowering them to reach their full
              potential and lead fulfilling lives. We equip them with the
              knowledge, values, and social skills necessary to thrive in their
              communities and beyond.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to create an inclusive society where diversity is
              embraced and celebrated. We strive to foster an environment that
              welcomes all children, ensuring that those with impairments receive
              high-quality education tailored to their unique needs, helping them
              grow into confident, capable individuals.
            </p>
          </div>
        </div>

        {/* Board of Trustees */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Board of Trustees
            </h2>
            <p className="text-lg text-muted-foreground">
              Upasana is guided by a dedicated board committed to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <div className="mb-3 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                  {trustee.name.charAt(4)}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {trustee.name}
                </h3>
                <p className="text-sm text-muted-foreground">{trustee.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
