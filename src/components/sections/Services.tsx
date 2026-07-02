"use client";

import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Services"
          title="Software development, AI automation, SEO, and growth systems"
          subtitle="ZERNO Technologies is a custom software development company in India helping builders, transport companies, architects, manufacturers, retailers, restaurants, startups, and SMBs turn digital investments into measurable business growth."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <GlassCard
              key={service.id}
              glow={i % 3 === 0 ? "indigo" : i % 3 === 1 ? "violet" : "emerald"}
              className="group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 text-[10px] tracking-[0.3em] text-white/10 font-mono">
                {service.id}
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                <ServiceIcon name={service.icon} />
              </div>
              <h2
                id={service.slug}
                className="text-base font-medium text-white mb-2 group-hover:text-accent-light transition-colors"
              >
                {service.title}
              </h2>
              <p className="text-sm text-white/45 leading-relaxed mb-4">
                {service.seoDescription}
              </p>

              <div className="space-y-2 mb-5">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2 text-xs text-white/55"
                  >
                    <HiOutlineCheck className="w-4 h-4 text-emerald-glow shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-4 mb-5">
                <h3 className="text-xs font-medium text-white mb-2">
                  {service.faqs[0].question}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {service.faqs[0].answer}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {service.links.map((link) => (
                  <Link
                    key={`${service.id}-${link.href}-${link.label}`}
                    href={link.href}
                    className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] text-white/45 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Button
                href={siteConfig.contact.whatsappHref}
                external
                variant="secondary"
                size="sm"
                className="mt-auto"
              >
                {service.cta}
                <HiOutlineArrowRight className="w-3.5 h-3.5" />
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
