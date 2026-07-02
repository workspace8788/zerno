import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black/40">
      <div className="section-padding !py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                ZERN<span className="text-accent-light">O</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mb-6">
              {siteConfig.description}
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-white/25">
              Premium Digital Transformation · Maharashtra, India
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-4">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                ["Custom Software", "#custom-software-development-company"],
                ["ERP Development", "#erp-software-development-company"],
                ["AI Automation", "#ai-automation-company"],
                ["SEO Services", "#technical-seo-services"],
                ["Google Ads", "#google-ads-agency"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <Link href="#faq" className="hover:text-white/50 transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="#contact" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
