"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolio } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolio)[0];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "glass rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300",
          "preserve-3d"
        )}
      >
        <div
          className={cn(
            "relative h-48 sm:h-56 bg-gradient-to-br overflow-hidden",
            project.gradient
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full glass text-white/60">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded glass text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="font-display text-2xl font-medium text-white">
              {project.title}
            </div>
            <div className="text-sm text-white/50">{project.subtitle}</div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineArrowTopRightOnSquare className="w-5 h-5 text-white/60" />
          </div>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <p className="text-sm text-white/45 leading-relaxed mb-4">
            {project.description}
          </p>

          <div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-3">
              Technologies used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/55"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">
              Business impact
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              {project.impact}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-xs text-white/30">{project.stats.label}</span>
            <span className="font-display text-base sm:text-lg text-accent-light text-right">
              {project.stats.value}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {project.ctas.map((cta, ctaIndex) => (
              <Button
                key={cta.label}
                href={cta.href}
                external={cta.href.startsWith("http")}
                variant={ctaIndex === 0 ? "primary" : "secondary"}
                size="sm"
                className="flex-1"
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Portfolio"
          title="Work that speaks for itself"
          subtitle="Live products, premium websites, and enterprise software — all deployed and running in production."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
