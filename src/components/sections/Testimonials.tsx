"use client";

import { motion } from "framer-motion";
import { HiOutlineStar } from "react-icons/hi2";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-padding bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Testimonials"
          title="Trusted by businesses that demand excellence"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col hover:border-white/15 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <HiOutlineStar
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-white/70 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div>
                <div className="text-sm font-medium text-white">
                  {item.author}
                </div>
                <div className="text-xs text-white/35">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
