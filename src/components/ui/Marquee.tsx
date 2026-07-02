"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-3",
        className
      )}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6 text-xs font-medium tracking-[0.25em] uppercase text-white/40">
              {item}
            </span>
            <span className="text-accent/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
