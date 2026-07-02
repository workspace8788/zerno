import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Marquee } from "@/components/ui/Marquee";
import { siteConfig } from "@/lib/site";
import { tickerItems, faqs } from "@/lib/data";
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
    default: "ZERNO Technologies — Enterprise Digital Transformation & Custom Software",
    template: "%s | ZERNO Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "ZERNO Technologies",
    "custom software development",
    "digital transformation",
    "transport ERP",
    "SaaS development",
    "AI integration",
    "premium websites",
    "SEO agency India",
    "business automation",
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
    title: "ZERNO Technologies — We Engineer Digital Businesses",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ZERNO Technologies — Premium Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERNO Technologies — We Engineer Digital Businesses",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zernotech",
  },
  category: "technology",
};

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
    "SaaS Development",
    "AI Integration",
    "Transport ERP",
    "SEO",
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
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  priceRange: "₹₹₹",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Custom Software Development",
    "Web Design",
    "SEO Services",
    "AI Integration",
    "ERP Development",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
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
