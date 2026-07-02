"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

const colorMap = {
  indigo: "border-indigo-500/30 text-indigo-300",
  amber: "border-amber-500/30 text-amber-300",
  violet: "border-violet-500/30 text-violet-300",
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Case Studies"
          title="Real problems. Real solutions. Real impact."
          subtitle="Deep dives into how we transformed businesses with custom software and premium digital experiences."
        />

        <div className="mt-16 space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard
                glow={
                  study.color === "indigo"
                    ? "indigo"
                    : study.color === "amber"
                      ? "amber"
                      : "violet"
                }
                className="overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div>
                    <span
                      className={cn(
                        "inline-block text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-full border mb-4",
                        colorMap[study.color as keyof typeof colorMap]
                      )}
                    >
                      {study.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                      {study.title}
                    </h3>
                  </div>
                  {study.href.startsWith("http") && (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-white transition-colors shrink-0"
                      data-cursor="pointer"
                    >
                      View Live
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-red-400/70 mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-accent-light/70 mb-2">
                      Solution
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-emerald-glow/70 mb-2">
                      Impact
                    </p>
                    <ul className="space-y-2">
                      {study.impact.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-white/50 flex items-start gap-2"
                        >
                          <span className="text-emerald-glow mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
