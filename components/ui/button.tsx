import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "link";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur",
  ghost: "bg-transparent text-white hover:bg-white/10",
  outline:
    "border border-blue-500/70 text-blue-100 hover:bg-blue-500/10 hover:border-blue-400",
  link: "text-blue-400 underline-offset-4 hover:underline",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "primary", children, href, ...props }, ref) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";
