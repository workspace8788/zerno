"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
              scrolled
                ? "glass-strong shadow-glass"
                : "bg-transparent"
            )}
          >
            <Link
              href="/"
              className="flex items-center gap-2 group"
              data-cursor="pointer"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                ZERN<span className="text-accent-light">O</span>
              </span>
              <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-white/30 border-l border-white/10 pl-2">
                Technologies
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button href="#contact" variant="primary" size="sm">
                Book Free Consultation
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <HiOutlineXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3 className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-strong p-8 pt-24"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="#contact"
                variant="primary"
                className="mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
