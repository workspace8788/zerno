"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Services"
          title="Technology that solves business problems"
          subtitle="From premium websites to full-scale ERP systems — we don't just build software, we engineer growth."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <GlassCard
              key={service.id}
              glow={i % 3 === 0 ? "indigo" : i % 3 === 1 ? "violet" : "emerald"}
              className="group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[10px] tracking-[0.3em] text-white/10 font-mono">
                {service.id}
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-base font-medium text-white mb-2 group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
