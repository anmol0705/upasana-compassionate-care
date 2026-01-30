interface ConditionTagProps {
  name: string;
  color?: "primary" | "secondary" | "yellow" | "pink";
}

const ConditionTag = ({ name, color = "primary" }: ConditionTagProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    yellow: "bg-yellow/10 text-foreground border-yellow/20",
    pink: "bg-pink/10 text-foreground border-pink/20",
  };

  return (
    <span
      className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-400 ease-in-out hover:-translate-y-0.5 hover:shadow-card ${colorClasses[color]}`}
    >
      {name}
    </span>
  );
};

export default ConditionTag;
