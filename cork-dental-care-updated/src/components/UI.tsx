import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Stars({ rating = 5, className = "" }: { rating?: number; className?: string }) {
  return (
    <span className={`text-gold-400 ${className}`} aria-label={`${rating} star rating`}>
      {"★★★★★".slice(0, rating)}
      <span className="text-navy-200">{"★★★★★".slice(rating)}</span>
    </span>
  );
}

export function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 shadow-sm";
  const variants = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-900 hover:shadow-lg hover:-translate-y-0.5",
    gold: "bg-gradient-to-r from-gold-600 to-gold-400 text-navy-900 hover:shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5 font-semibold",
    outline:
      "border border-navy-300 text-navy-800 hover:bg-navy-800 hover:text-white hover:border-navy-800",
    ghost: "text-navy-700 hover:text-gold-500",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} onClick={onClick}>{children}</Link>;
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} reveal`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-navy-100" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white/70 px-4 py-1.5 text-xs font-medium text-navy-700 shadow-sm">
      {children}
    </span>
  );
}
