"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/data";

const techColors: Record<string, string> = {
  React: "from-cyan-400/20 to-blue-500/10",
  "Next.js": "from-white/10 to-white/5",
  "Ruby on Rails": "from-red-500/20 to-red-900/10",
  "Node.js": "from-green-500/20 to-green-900/10",
  Python: "from-yellow-500/20 to-blue-500/10",
  AWS: "from-orange-500/20 to-yellow-600/10",
  Docker: "from-blue-400/20 to-blue-600/10",
  PostgreSQL: "from-blue-500/20 to-indigo-600/10",
  Redis: "from-red-400/20 to-red-600/10",
  AI: "from-violet-500/20 to-purple-600/10",
  OpenAI: "from-emerald-500/20 to-teal-600/10",
  Anthropic: "from-amber-500/20 to-orange-600/10",
};

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Technology"
          title="Built with industry-leading tools"
          subtitle="We choose the right technology for each problem — modern, scalable, and battle-tested."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass rounded-xl p-5 text-center group hover:border-white/15 transition-all cursor-default bg-gradient-to-br ${techColors[tech.name] || "from-white/5 to-transparent"}`}
            >
              <div className="font-display text-sm font-medium text-white mb-1 group-hover:text-accent-light transition-colors">
                {tech.name}
              </div>
              <div className="text-[10px] tracking-wider uppercase text-white/25">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
