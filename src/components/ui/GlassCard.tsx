"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "indigo" | "violet" | "emerald" | "amber" | "none";
};

const glowColors = {
  indigo: "hover:shadow-glow hover:border-indigo-500/30",
  violet: "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:border-violet-500/30",
  emerald: "hover:shadow-glow-emerald hover:border-emerald-500/30",
  amber: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:border-amber-500/30",
  none: "",
};

export function GlassCard({
  children,
  className,
  hover = true,
  glow = "indigo",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "glass rounded-2xl p-6 sm:p-8 transition-all duration-300",
        hover && glowColors[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
