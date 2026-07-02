"use client";

import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { consultationBenefits } from "@/lib/data";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding border-y border-white/[0.04] bg-white/[0.01]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Pricing"
          title="Every Business is Unique"
          subtitle="Every business has different goals, workflows, and requirements. We first understand your business, then prepare a tailored proposal built around what you actually need."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 glass-strong rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/5 pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
                <HiOutlineSparkles className="w-4 h-4 text-accent-light" />
                <span className="text-xs tracking-[0.18em] uppercase text-white/50">
                  Custom proposal after discovery
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
                No fixed packages. No one-size-fits-all pricing.
              </h3>
              <p className="text-white/50 leading-relaxed mb-8 max-w-2xl">
                A premium website, AI automation workflow, ERP, SEO strategy, or
                full digital transformation can each have a very different scope.
                We map your goals, current systems, timeline, and growth plan
                before recommending the right engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#contact" variant="primary" size="lg">
                  Book Free Consultation
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  Request Custom Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {consultationBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="glass rounded-xl p-4 flex items-start gap-3"
                >
                  <HiOutlineCheck className="w-5 h-5 text-emerald-glow shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
