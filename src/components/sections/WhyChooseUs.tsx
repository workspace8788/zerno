"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white/[0.01] border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Why ZERNO"
          title="Built like a product company, not an IT shop"
          subtitle="We combine premium design, enterprise engineering, and business strategy into every engagement."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <GlassCard
              key={item.title}
              glow={
                i % 3 === 0 ? "indigo" : i % 3 === 1 ? "violet" : "emerald"
              }
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-violet-500/10 flex items-center justify-center text-accent-light mb-5">
                <ServiceIcon name={item.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
