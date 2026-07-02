"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi2";
import { GradientOrb } from "@/components/effects/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/lib/data";

export function Products() {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="violet" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          tag="Our Products"
          title="SaaS we build and operate"
          subtitle="Not concepts or mockups — production software actively used by businesses every day."
        />

        <div className="mt-16 space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                glow={product.id === "reliable-logii" ? "indigo" : "violet"}
                className={`relative overflow-hidden bg-gradient-to-br ${product.gradient}`}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full glass text-accent-light">
                        {product.status}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-medium text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-accent-light text-sm font-medium mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <Button
                      href={product.href}
                      variant="secondary"
                      external={product.href.startsWith("http")}
                    >
                      Learn More
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <div>
                    {"features" in product && product.features && (
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
                          Core Features
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-white/60"
                            >
                              <HiOutlineCheck className="w-4 h-4 text-emerald-glow shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {"workflow" in product && product.workflow && (
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
                          End-to-End Workflow
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {product.workflow.map((step, i) => (
                            <div key={step} className="flex items-center gap-2">
                              <span className="glass px-3 py-1.5 rounded-lg text-xs text-white/70">
                                {step}
                              </span>
                              {i < product.workflow!.length - 1 && (
                                <span className="text-white/20">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {"pillars" in product && product.pillars && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {product.pillars.map((pillar) => (
                              <span
                                key={pillar}
                                className="text-xs px-3 py-1 rounded-full border border-violet-500/30 text-violet-300/80"
                              >
                                {pillar}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
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
