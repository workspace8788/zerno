"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-accent" />
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent-light">
          {tag}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/50 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
