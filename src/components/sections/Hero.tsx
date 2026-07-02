"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";
import { GradientOrb } from "@/components/effects/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <GradientOrb className="w-[500px] h-[500px] -top-32 -right-32" color="indigo" />
      <GradientOrb className="w-[400px] h-[400px] bottom-0 -left-32" color="violet" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light" />
          </span>
          <span className="text-xs font-medium tracking-wide text-white/60">
            Websites, software, AI, SEO, and ads for growing businesses
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-8"
          >
            <span className="text-gradient">We Build Software</span>
            <br />
            <span className="text-gradient-accent">That Grows Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mb-10"
          >
            ZERNO Technologies helps builders, architects, transport companies,
            manufacturers, retailers, restaurants, startups, and growing SMBs win
            more customers with premium websites, custom software, AI automation,
            SEO, Google Ads, and business automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button href="#contact" variant="primary" size="lg">
              Book Free Consultation
              <HiOutlineArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden glass"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-surface/80 backdrop-blur-sm p-6 sm:p-8 text-center group hover:bg-white/[0.04] transition-colors"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="font-display text-3xl sm:text-4xl font-medium text-accent-light mb-2 group-hover:text-white transition-colors"
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center gap-3 text-sm text-white/30"
        >
          <HiOutlineSparkles className="w-4 h-4 text-accent-light" />
          <span>
            Trusted for long-term partnerships, performance-first development,
            mobile-first design, and ongoing support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
