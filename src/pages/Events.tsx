import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Calendar,
  Camera,
  Flag,
  Sparkles,
  Star,
  PartyPopper,
  ArrowRight,
  HandHeart,
  ChevronRight,
} from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Independence Day Celebration",
      date: "August 15, 2025",
      icon: Flag,
      description:
        "Our Independence Day celebration is a vibrant display of patriotism and joy. Children participate in flag hoisting, cultural performances, singing national songs, and creative activities. It is a day that fills everyone with pride and togetherness, reminding us of the freedom and potential within every child.",
      highlights: [
        "Flag hoisting ceremony with children",
        "Patriotic songs and cultural performances",
        "Art and craft activities with tricolor theme",
        "Special treats and community gathering",
      ],
      gradient: "from-primary/20 to-yellow/10",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      align: "left" as const,
    },
    {
      title: "Diwali Festival of Lights",
      date: "October 2025",
      icon: Sparkles,
      description:
        "Diwali at Upasana is a magical celebration where our children experience the joy of the festival of lights. From decorating diyas and making rangoli to enjoying sweets and sparklers, every child gets to participate in activities that light up their world and bring families together in celebration.",
      highlights: [
        "Diya painting and decoration workshops",
        "Rangoli making with children",
        "Cultural performances and dance",
        "Sweets distribution and community feast",
      ],
      gradient: "from-secondary/20 to-yellow/15",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      align: "right" as const,
    },
    {
      title: "Republic Day Celebration",
      date: "January 26, 2026",
      icon: Star,
      description:
        "Republic Day at Upasana celebrates the spirit of unity and equality. Our children take part in a special assembly with flag unfurling, speeches about the values of our constitution, and fun group activities. It is a day dedicated to celebrating every child's right to care, education, and inclusion.",
      highlights: [
        "Flag unfurling and national anthem",
        "Children's speeches on unity and equality",
        "Group games and team activities",
        "Award ceremony for achievements",
      ],
      gradient: "from-yellow/20 to-primary/10",
      iconBg: "bg-yellow/10",
      iconColor: "text-foreground",
      align: "left" as const,
    },
    {
      title: "Annual Day Celebration",
      date: "March 2026",
      icon: PartyPopper,
      description:
        "Our Annual Day is the most anticipated event of the year. It showcases the incredible progress and talents of our children through performances, exhibitions, and award ceremonies. Families, supporters, and community members come together to celebrate every milestone achieved throughout the year.",
      highlights: [
        "Stage performances by children",
        "Achievement awards and recognition",
        "Exhibition of children's artwork",
        "Community gathering and fellowship",
      ],
      gradient: "from-primary/15 to-secondary/15",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      align: "right" as const,
    },
  ];

  const galleryPlaceholders = [
    { from: "from-primary/20", to: "to-secondary/10" },
    { from: "from-secondary/20", to: "to-yellow/10" },
    { from: "from-yellow/20", to: "to-primary/10" },
    { from: "from-primary/15", to: "to-yellow/15" },
    { from: "from-secondary/15", to: "to-primary/10" },
    { from: "from-yellow/15", to: "to-secondary/10" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 animate-fade-in">
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">
              Events & Celebrations
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Events & Celebrations
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Our Events & Celebrations
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones, festivals, and joyous moments with our
              wonderful children throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            {events.map((event, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  event.align === "right" ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image placeholder */}
                <div
                  className={`${
                    event.align === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden`}
                  >
                    <div className="text-center">
                      <event.icon className="h-16 w-16 sm:h-20 sm:w-20 text-primary/30 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground/60">
                        Event photos coming soon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${
                    event.align === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${event.iconBg} flex items-center justify-center`}
                    >
                      <event.icon className={`h-5 w-5 ${event.iconColor}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {event.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-serif">
                    {event.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {event.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Camera className="h-4 w-4" />
              Gallery
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              Glimpses of Upasana
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of beautiful moments, celebrations, and magical times
              at our centre
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              className="w-full"
              opts={{ loop: true, align: "start" }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
            >
              <CarouselContent className="-ml-4">
                {galleryPlaceholders.map((gradient, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <div
                      className={`aspect-square bg-gradient-to-br ${gradient.from} ${gradient.to} rounded-2xl flex items-center justify-center shadow-card`}
                    >
                      <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-primary/25" />
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-yellow/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Want to Be Part of Our Journey?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join us in celebrating and supporting the wonderful children at
              Upasana. Every moment of joy makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="warm"
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8"
                >
                  <HandHeart className="h-5 w-5" />
                  Register Interest
                </Button>
              </Link>
              <Link to="/support">
                <Button
                  variant="pill-outline"
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8"
                >
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
