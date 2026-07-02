import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Marquee } from "@/components/ui/Marquee";
import { siteConfig } from "@/lib/site";
import { faqs, portfolio, products, services, tickerItems } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "ZERNO Technologies | Custom Software Development Company in India",
    template: "%s | ZERNO Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "ZERNO Technologies",
    "custom software development company",
    "software development company india",
    "web development company",
    "website development company",
    "custom software company",
    "erp software development company",
    "saas development company",
    "ai development company",
    "ai automation company",
    "business automation company",
    "digital transformation company",
    "software solutions company",
    "enterprise software development",
    "crm development company",
    "transport software development",
    "real estate software development",
    "real estate erp",
    "builder erp software",
    "plot management software",
    "transport erp software",
    "logistics software",
    "fleet management software",
    "website design company",
    "responsive website development",
    "next js development company",
    "ruby on rails development company",
    "react development company",
    "python development company",
    "full stack development company",
    "mobile app development",
    "cloud application development",
    "startup software development",
    "business website development",
    "seo company",
    "technical seo services",
    "local seo services",
    "google ads agency",
    "performance marketing",
    "ai chatbot development",
    "workflow automation",
    "process automation",
    "api integration",
    "custom crm software",
    "inventory management software",
    "business management software",
    "digital agency",
    "technology consulting",
    "software consulting",
    "digital transformation",
    "software company Maharashtra",
    "software company Pune",
    "software company Mumbai",
    "software company Nagpur",
    "software company Akola",
    "PlotMind AI",
    "Reliable Logii",
  ],
  authors: [{ name: "ZERNO Technologies", url: siteConfig.url }],
  creator: "ZERNO Technologies",
  publisher: "ZERNO Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ZERNO Technologies — Custom Software, ERP, AI Automation & SEO",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ZERNO Technologies custom software development company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERNO Technologies — Custom Software Development Company in India",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zernotech",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "technology",
};

const serviceArea = [
  "India",
  "Maharashtra",
  "Pune",
  "Mumbai",
  "Nagpur",
  "Akola",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: serviceArea,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
  knowsAbout: [
    "Custom Software Development",
    "Software Development Company India",
    "ERP Software Development",
    "SaaS Development",
    "AI Automation",
    "AI Chatbot Development",
    "Transport ERP",
    "Real Estate ERP",
    "Builder ERP Software",
    "CRM Development",
    "Website Development",
    "Google Ads",
    "SEO",
    "Technical SEO",
    "Local SEO",
    "Business Automation",
    "Digital Transformation",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.svg`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  description: siteConfig.description,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: serviceArea,
  serviceType: [
    "Custom Software Development",
    "ERP Software Development",
    "SaaS Development",
    "AI Automation",
    "Website Development",
    "SEO Services",
    "Google Ads Management",
    "Business Automation",
    "CRM Development",
    "Transport Software Development",
    "Real Estate Software Development",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ZERNO Technologies services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      url: `${siteConfig.url}/#${service.slug}`,
      description: service.seoDescription,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: serviceArea,
      serviceType: service.keywords,
    },
  })),
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ZERNO Technologies software products",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory:
        product.id === "reliable-logii"
          ? "BusinessApplication"
          : "ProductivityApplication",
      operatingSystem: "Web",
      url: product.href.startsWith("http") ? product.href : siteConfig.url,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  })),
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ZERNO Technologies portfolio",
  itemListElement: portfolio.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      url: project.href.startsWith("http") ? project.href : siteConfig.url,
      description: project.description,
      keywords: project.keywords.join(", "),
      creator: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portfolio",
      item: `${siteConfig.url}/#portfolio`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: `${siteConfig.url}/#contact`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...faqs,
    ...services.flatMap((service) => service.faqs),
  ].map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#030014" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AuroraBackground />
        <CustomCursor />
        <Navbar />
        <Marquee items={tickerItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
