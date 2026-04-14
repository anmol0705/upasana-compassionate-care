import { Heart } from "lucide-react";

interface CharitableBadgeProps {
  variant?: "default" | "light" | "dark";
  showIcon?: boolean;
  className?: string;
}

const CharitableBadge = ({
  variant = "default",
  showIcon = true,
  className = ""
}: CharitableBadgeProps) => {
  const variantClasses = {
    default: "bg-primary/10 text-primary border-primary/20",
    light: "bg-white/20 text-white border-white/30",
    dark: "bg-foreground/10 text-foreground border-foreground/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border backdrop-blur-sm transition-all duration-300 hover:shadow-md ${variantClasses[variant]} ${className}`}
    >
      {showIcon && (
        <Heart className="h-3.5 w-3.5 animate-heartbeat" />
      )}
      Registered Charitable Trust
    </span>
  );
};

export default CharitableBadge;
