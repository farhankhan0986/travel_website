import { Phone } from "lucide-react";

type Variant = "primary" | "ghost" | "phone";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-burg-deep text-white border-transparent hover:bg-burg-mid",
  ghost:   "bg-transparent text-burg-deep border-burg-deep hover:bg-burg-pale",
  phone:   "bg-burg-deep text-white border-transparent hover:bg-burg-mid",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 h-9 px-4 border font-body font-medium text-sm rounded-btn transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {variant === "phone" && <Phone size={14} aria-hidden />}
      {children}
    </button>
  );
}
