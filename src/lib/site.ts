export const siteConfig = {
  name: "ZERNO Technologies",
  tagline: "Premium Digital Transformation",
  description:
    "ZERNO Technologies builds enterprise-grade software, AI automation, and premium digital products that help businesses grow online. Custom ERP, SaaS, websites, and performance marketing.",
  url: "https://zernotechnologies.com",
  ogImage: "/og-image.svg",
  contact: {
    phone: "+91 7887460533",
    phoneHref: "tel:+917887460533",
    email: "info@zernotechnologies.com",
    emailHref: "mailto:info@zernotechnologies.com",
    whatsappHref:
      "https://wa.me/917887460533?text=Hi%20ZERNO%20Technologies%2C%20I%20want%20to%20book%20a%20free%20consultation.",
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
