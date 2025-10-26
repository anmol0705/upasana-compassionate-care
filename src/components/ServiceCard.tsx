import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105">
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
