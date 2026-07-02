export const siteConfig = {
  name: "ZERNO Technologies",
  tagline: "Premium Digital Transformation",
  description:
    "ZERNO Technologies builds enterprise-grade software, AI automation, and premium digital products that help businesses grow online. Custom ERP, SaaS, websites, and performance marketing.",
  url: "https://zernotechnologies.com",
  ogImage: "/og-image.svg",
  contact: {
    phone: "+91 7507787555",
    phoneHref: "tel:+917507787555",
    email: "syedu337@gmail.com",
    emailHref: "mailto:syedu337@gmail.com",
    location: "Maharashtra, India",
  },
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com/workspace8788",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
