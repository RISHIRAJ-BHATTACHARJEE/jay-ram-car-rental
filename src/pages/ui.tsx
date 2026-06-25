import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block text-primary ${className}`} aria-hidden>
      ✲
    </span>
  );
}

export function EyebrowLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide">
      <Asterisk />
      <span>{children}</span>
    </div>
  );
}

export function ArrowBubble({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45 ${className}`}
    >
      <ArrowUpRight className="h-5 w-5" />
    </span>
  );
}

export function PillButton({
  children,
  variant = "primary",
  withArrow = true,
}: {
  children: ReactNode;
  variant?: "primary" | "light";
  withArrow?: boolean;
}) {
  const base =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : "bg-white text-foreground border border-border";
  return (
    <button className="group inline-flex items-center gap-2">
      <span className={`inline-flex items-center h-12 rounded-full px-6 font-semibold ${base}`}>
        {children}
      </span>
      {withArrow && <ArrowBubble />}
    </button>
  );
}
