"use client";

import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { GradientOrb } from "@/components/effects/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <GradientOrb className="w-[500px] h-[500px] bottom-0 right-0" color="indigo" />

      <div className="relative mx-auto max-w-7xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-violet-500/5 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-accent-light mb-4 block">
                Contact
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-gradient mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/45 leading-relaxed mb-8 max-w-md">
                Whether you need a premium website, custom software, AI
                automation, or a complete digital transformation—we&apos;re here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={siteConfig.contact.whatsappHref}
                  external
                  variant="primary"
                  size="lg"
                >
                  Book Free Consultation
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Button>
                <Button href={siteConfig.contact.phoneHref} variant="secondary" size="lg">
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-accent/30 transition-all group"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                  <HiOutlinePhone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <div className="text-white group-hover:text-accent-light transition-colors">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.contact.emailHref}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-accent/30 transition-all group"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                  <HiOutlineEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="text-white group-hover:text-accent-light transition-colors">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light">
                  <HiOutlineMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-white">{siteConfig.contact.location}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
