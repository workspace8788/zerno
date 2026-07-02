"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Industries"
          title="Built for businesses that run on operations"
          subtitle="Deep domain expertise across sectors where software replaces manual work and drives measurable growth."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 text-center group hover:border-accent/30 transition-all cursor-default"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center text-accent-light mb-3 group-hover:bg-accent/20 transition-colors">
                <ServiceIcon name={industry.icon} />
              </div>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
