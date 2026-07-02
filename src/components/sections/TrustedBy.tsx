"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-white/25 mb-8">
          Industries we transform
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {trustedBy.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-sm sm:text-base font-medium text-white/30 hover:text-white/60 transition-colors cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
