"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineClock } from "react-icons/hi2";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data";

export function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-white/[0.01] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Insights"
          title="Insights for businesses ready to grow"
          subtitle="Practical thinking on custom software, ERP, SaaS, AI automation, SEO, Google Ads, and business automation for founders and business owners."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-accent/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded glass text-accent-light">
                  {post.category}
                </span>
                <span className="text-xs text-white/30 flex items-center gap-1">
                  <HiOutlineClock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-light transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/25">{post.date}</span>
                <span className="text-xs text-accent-light flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <HiOutlineArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
