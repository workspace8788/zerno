"use client";

import { motion } from "framer-motion";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { seoAchievements } from "@/lib/data";

export function SeoSuccess() {
  return (
    <section id="seo-success" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          tag="SEO Success"
          title="Anam Transport Service SEO success"
          subtitle="A premium business website and long-term SEO foundation that helped a transport company increase online visibility through organic Google search."
        />

        <div className="mt-12 glass rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
            <HiOutlineMagnifyingGlass className="w-7 h-7 text-emerald-glow" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Anam Transport Service ranks organically on Google
            </h3>
            <p className="text-sm text-white/45 leading-relaxed">
              We built the website, implemented technical SEO, optimised local
              SEO, improved website performance, and created a strong foundation
              for relevant transport-related searches.
            </p>
          </div>
          <div className="shrink-0 glass px-6 py-4 rounded-xl text-center">
            <div className="font-display text-2xl text-emerald-glow">Organic</div>
            <div className="text-[10px] tracking-wider uppercase text-white/30">
              Google Visibility
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {seoAchievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard glow="emerald" className="h-full">
                <div className="font-display text-3xl text-emerald-glow mb-1">
                  {item.metric}
                </div>
                <div className="text-[10px] tracking-wider uppercase text-white/30 mb-4">
                  {item.label}
                </div>
                <h3 className="text-sm font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
