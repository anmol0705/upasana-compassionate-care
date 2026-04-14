import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-500 ease-in-out hover:-translate-y-1.5 overflow-hidden">
      {/* Subtle gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-warm">
          <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2.5 font-serif group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
