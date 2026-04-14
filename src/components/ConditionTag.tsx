interface ConditionTagProps {
  name: string;
  color?: "primary" | "secondary" | "yellow" | "pink";
}

const ConditionTag = ({ name, color = "primary" }: ConditionTagProps) => {
  const colorClasses = {
    primary: "bg-primary/8 text-primary border-l-primary",
    secondary: "bg-secondary/8 text-secondary border-l-secondary",
    yellow: "bg-yellow/8 text-foreground border-l-[hsl(25,80%,70%)]",
    pink: "bg-pink/8 text-foreground border-l-[hsl(12,70%,65%)]",
  };

  const dotColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    yellow: "bg-[hsl(25,80%,70%)]",
    pink: "bg-[hsl(12,70%,65%)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium border border-transparent border-l-[3px] shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-card ${colorClasses[color]}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColors[color]} flex-shrink-0`} />
      {name}
    </span>
  );
};

export default ConditionTag;
