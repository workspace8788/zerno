export const tickerItems = [
  "Premium Websites",
  "Custom Software",
  "AI Integration",
  "Transport ERP",
  "SaaS Development",
  "Business Automation",
  "Google Ads",
  "SEO",
  "Cloud Solutions",
  "UI/UX Design",
];

export const stats = [
  { value: "3+", label: "Live SaaS Products" },
  { value: "48hr", label: "Premium Site Delivery" },
  { value: "3×", label: "Average Lead Growth" },
  { value: "100%", label: "Custom — Zero Templates" },
];

export const trustedBy = [
  "Transport & Logistics",
  "Real Estate Builders",
  "Architecture Studios",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Retail & F&B",
  "Startups",
];

const coreServices = [
  {
    id: "01",
    title: "Premium Websites",
    description:
      "Cinematic, conversion-focused experiences that establish instant credibility and turn visitors into qualified leads.",
    icon: "globe",
  },
  {
    id: "02",
    title: "Custom Software Development",
    description:
      "Bespoke applications engineered around your workflows — replacing spreadsheets, registers, and fragmented tools.",
    icon: "code",
  },
  {
    id: "03",
    title: "AI Integration",
    description:
      "Intelligent assistants, document processing, and decision support woven directly into your operations.",
    icon: "brain",
  },
  {
    id: "04",
    title: "AI Automation",
    description:
      "Automate repetitive tasks with smart workflows that save hours daily and eliminate human error.",
    icon: "automation",
  },
  {
    id: "05",
    title: "Business Process Automation",
    description:
      "End-to-end digitisation of approvals, billing, inventory, and reporting — built for your team.",
    icon: "workflow",
  },
  {
    id: "06",
    title: "SaaS Development",
    description:
      "Multi-tenant platforms with billing, auth, analytics, and infrastructure designed to scale from day one.",
    icon: "cloud",
  },
  {
    id: "07",
    title: "ERP Development",
    description:
      "Unified systems for finance, inventory, HR, and operations — one source of truth for your business.",
    icon: "database",
  },
  {
    id: "08",
    title: "CRM Systems",
    description:
      "Pipeline management, customer portals, and broker tools tailored to how your sales team actually works.",
    icon: "users",
  },
  {
    id: "09",
    title: "Google Ads",
    description:
      "Performance campaigns with conversion tracking, landing page optimisation, and transparent ROI reporting.",
    icon: "ads",
  },
  {
    id: "10",
    title: "SEO",
    description:
      "Technical SEO, content architecture, and authority building that drives sustainable organic traffic.",
    icon: "search",
  },
  {
    id: "11",
    title: "Local SEO",
    description:
      "Dominate local search with Google Business optimisation, citations, and geo-targeted content.",
    icon: "map",
  },
  {
    id: "12",
    title: "Branding",
    description:
      "Visual identity systems that communicate premium positioning across every digital touchpoint.",
    icon: "palette",
  },
  {
    id: "13",
    title: "Performance Marketing",
    description:
      "Full-funnel campaigns across Google, Meta, and retargeting — measured by revenue, not vanity metrics.",
    icon: "chart",
  },
  {
    id: "14",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android experiences for field teams, customers, and internal operations.",
    icon: "mobile",
  },
  {
    id: "15",
    title: "Cloud Solutions",
    description:
      "AWS infrastructure, CI/CD pipelines, and scalable architecture built for reliability and security.",
    icon: "server",
  },
  {
    id: "16",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces that reduce friction, increase adoption, and feel effortless to use.",
    icon: "design",
  },
  {
    id: "17",
    title: "Digital Consulting",
    description:
      "Strategic guidance on technology roadmaps, vendor selection, and digital transformation priorities.",
    icon: "consult",
  },
];

const serviceSeoDetails: Record<
  string,
  {
    slug: string;
    seoDescription: string;
    benefits: string[];
    faqs: { question: string; answer: string }[];
    links: { label: string; href: string }[];
    cta: string;
    keywords: string[];
  }
> = {
  "Premium Websites": {
    slug: "website-development-company",
    seoDescription:
      "ZERNO is a website development company for businesses that need fast, responsive, SEO-ready websites that convert visitors into calls, enquiries, and sales across India, Maharashtra, Pune, Mumbai, Nagpur, and Akola.",
    benefits: [
      "Responsive website development",
      "SEO-friendly page structure",
      "Conversion-focused design",
    ],
    faqs: [
      {
        question: "Do you build business websites with SEO included?",
        answer:
          "Yes. Every premium website includes responsive design, technical SEO basics, performance optimisation, analytics-ready structure, and clear conversion paths.",
      },
    ],
    links: [
      { label: "View portfolio", href: "#portfolio" },
      { label: "See SEO success", href: "#seo-success" },
    ],
    cta: "Build a premium website",
    keywords: [
      "web development company",
      "website development company",
      "website design company",
      "business website development",
    ],
  },
  "Custom Software Development": {
    slug: "custom-software-development-company",
    seoDescription:
      "As a custom software development company in India, ZERNO designs business software around real workflows: operations, sales, inventory, reporting, approvals, and customer management.",
    benefits: [
      "Custom business software",
      "Full stack development",
      "API integration",
    ],
    faqs: [
      {
        question: "Can you replace spreadsheets with custom software?",
        answer:
          "Yes. We build tailored systems that replace spreadsheets, registers, and disconnected tools with secure, scalable software.",
      },
    ],
    links: [
      { label: "Explore process", href: "#process" },
      { label: "Discuss your system", href: "#contact" },
    ],
    cta: "Plan custom software",
    keywords: [
      "custom software development company",
      "software development company india",
      "custom software company",
      "software solutions company",
    ],
  },
  "AI Integration": {
    slug: "ai-development-company",
    seoDescription:
      "ZERNO helps businesses adopt AI software development services through chatbots, document intelligence, reporting assistants, decision support, and integrations with existing tools.",
    benefits: ["AI chatbot development", "Document automation", "Decision support"],
    faqs: [
      {
        question: "Can AI be added to our existing business software?",
        answer:
          "Yes. We integrate AI into existing CRMs, ERPs, websites, and internal systems where it can save time or improve decisions.",
      },
    ],
    links: [
      { label: "See PlotMind AI", href: "#products" },
      { label: "Explore automation", href: "#services" },
    ],
    cta: "Explore AI development",
    keywords: ["ai development company", "ai software development services", "ai chatbot development"],
  },
  "AI Automation": {
    slug: "ai-automation-company",
    seoDescription:
      "Our AI automation company services help teams automate repetitive work, lead handling, document processing, follow-ups, and reporting using practical, business-first AI workflows.",
    benefits: ["Business automation using AI", "Workflow automation", "Faster operations"],
    faqs: [
      {
        question: "What business tasks can AI automation handle?",
        answer:
          "AI automation can help with enquiry replies, document extraction, summaries, follow-ups, lead routing, reporting, and internal support workflows.",
      },
    ],
    links: [
      { label: "Book consultation", href: "#contact" },
      { label: "View services", href: "#services" },
    ],
    cta: "Automate with AI",
    keywords: ["ai automation company", "business automation using ai", "workflow automation"],
  },
  "Business Process Automation": {
    slug: "business-automation-company",
    seoDescription:
      "ZERNO builds process automation systems for approvals, billing, inventory, customer updates, reports, and multi-step workflows that slow down growing businesses.",
    benefits: ["Process automation", "Reduced manual work", "Connected workflows"],
    faqs: [
      {
        question: "Can you automate our current manual business process?",
        answer:
          "Yes. We study the workflow first, then design automation that fits how your team actually works.",
      },
    ],
    links: [
      { label: "See process", href: "#process" },
      { label: "Request custom quote", href: "#pricing" },
    ],
    cta: "Improve operations",
    keywords: ["business automation company", "process automation", "workflow automation"],
  },
  "SaaS Development": {
    slug: "saas-development-company",
    seoDescription:
      "ZERNO is a SaaS development company for startups and businesses building subscription software, portals, dashboards, multi-user systems, and scalable cloud products.",
    benefits: ["Multi-tenant SaaS", "Cloud application development", "Startup software development"],
    faqs: [
      {
        question: "Do you build SaaS products from idea to launch?",
        answer:
          "Yes. We help with strategy, UX, development, deployment, analytics, and post-launch iteration.",
      },
    ],
    links: [
      { label: "View products", href: "#products" },
      { label: "See portfolio", href: "#portfolio" },
    ],
    cta: "Build a SaaS product",
    keywords: ["saas development company", "startup software development", "cloud application development"],
  },
  "ERP Development": {
    slug: "erp-software-development-company",
    seoDescription:
      "We build custom ERP software for transport companies, builders, manufacturers, and SMBs that need one connected system for operations, finance, inventory, and reporting.",
    benefits: ["Custom ERP development", "Business management software", "Role-based dashboards"],
    faqs: [
      {
        question: "Can you build ERP for transport or builder businesses?",
        answer:
          "Yes. We build industry-specific ERP systems including transport ERP, builder ERP, plot management software, inventory, billing, and reporting modules.",
      },
    ],
    links: [
      { label: "Reliable Logii", href: "#products" },
      { label: "PlotMind AI", href: "#products" },
    ],
    cta: "Scope ERP software",
    keywords: [
      "erp software development company",
      "custom erp development company",
      "transport erp software",
      "builder erp software",
    ],
  },
  "CRM Systems": {
    slug: "crm-development-company",
    seoDescription:
      "ZERNO builds custom CRM software for sales teams, brokers, service businesses, builders, and operations teams that need better lead tracking and customer follow-up.",
    benefits: ["Custom CRM software", "Lead pipelines", "Customer portals"],
    faqs: [
      {
        question: "Can your CRM match our sales process?",
        answer:
          "Yes. We build CRM systems around your pipeline, roles, reports, follow-ups, and customer journey.",
      },
    ],
    links: [
      { label: "See PlotMind AI", href: "#products" },
      { label: "Talk to us", href: "#contact" },
    ],
    cta: "Build a custom CRM",
    keywords: ["crm development company", "custom crm software", "business management software"],
  },
  "Google Ads": {
    slug: "google-ads-agency",
    seoDescription:
      "Our Google Ads agency services help service businesses, local companies, and growth teams run search campaigns with landing pages, conversion tracking, and ROI reporting.",
    benefits: ["Search ads strategy", "Conversion tracking", "Landing page optimisation"],
    faqs: [
      {
        question: "Do you manage Google Ads with landing pages?",
        answer:
          "Yes. We connect campaigns with conversion-focused pages, tracking, and reporting so ad spend is measurable.",
      },
    ],
    links: [
      { label: "SEO services", href: "#seo-success" },
      { label: "Request quote", href: "#pricing" },
    ],
    cta: "Improve paid leads",
    keywords: ["google ads agency", "google ads management company", "performance marketing"],
  },
  SEO: {
    slug: "technical-seo-services",
    seoDescription:
      "ZERNO provides technical SEO services, content architecture, local SEO, performance optimisation, and structured data for businesses that want sustainable organic visibility.",
    benefits: ["Technical SEO services", "Structured data", "Content architecture"],
    faqs: [
      {
        question: "Do you provide SEO beyond meta tags?",
        answer:
          "Yes. We work on site architecture, crawlability, schema, performance, local search, internal linking, and conversion-focused content.",
      },
    ],
    links: [
      { label: "View Anam case study", href: "#seo-success" },
      { label: "See portfolio", href: "#portfolio" },
    ],
    cta: "Grow with SEO",
    keywords: ["seo company", "technical seo services", "seo services for local businesses"],
  },
  "Local SEO": {
    slug: "local-seo-services",
    seoDescription:
      "Local SEO services for businesses in India, Maharashtra, Pune, Mumbai, Nagpur, Akola, and service-area markets that need more calls from nearby customers.",
    benefits: ["Local landing pages", "Google Business optimisation", "Service-area visibility"],
    faqs: [
      {
        question: "Can local SEO help service businesses get calls?",
        answer:
          "Yes. Local SEO improves how your business appears for service and location searches, especially when paired with a strong website.",
      },
    ],
    links: [
      { label: "Anam SEO success", href: "#seo-success" },
      { label: "Contact ZERNO", href: "#contact" },
    ],
    cta: "Improve local visibility",
    keywords: ["local seo services", "seo services for local businesses", "Akola SEO services"],
  },
  Branding: {
    slug: "digital-agency-branding",
    seoDescription:
      "As a digital agency, ZERNO creates practical brand identity systems that help premium websites, campaigns, and software products feel consistent and trustworthy.",
    benefits: ["Visual identity", "Website-ready brand systems", "Trust-building design"],
    faqs: [
      {
        question: "Do you design brands for websites and software products?",
        answer:
          "Yes. We create identity systems that work across websites, products, sales material, and digital campaigns.",
      },
    ],
    links: [
      { label: "MS Architects", href: "#portfolio" },
      { label: "View work", href: "#portfolio" },
    ],
    cta: "Build brand trust",
    keywords: ["digital agency", "website design company", "modern website development company"],
  },
  "Performance Marketing": {
    slug: "performance-marketing-company",
    seoDescription:
      "Performance marketing services for businesses that need measurable leads through Google Ads, SEO landing pages, conversion tracking, and ongoing optimisation.",
    benefits: ["ROI reporting", "Funnel strategy", "Lead quality improvement"],
    faqs: [
      {
        question: "How do you measure performance marketing success?",
        answer:
          "We focus on tracked enquiries, conversion rate, lead quality, and campaign efficiency instead of vanity metrics.",
      },
    ],
    links: [
      { label: "Google Ads", href: "#services" },
      { label: "Book consultation", href: "#contact" },
    ],
    cta: "Scale marketing",
    keywords: ["performance marketing", "google ads agency", "digital agency"],
  },
  "Mobile Apps": {
    slug: "mobile-app-development",
    seoDescription:
      "Mobile app development for field teams, customers, and business operations where web, mobile, and backend systems need to work together smoothly.",
    benefits: ["Customer apps", "Field team apps", "Backend integration"],
    faqs: [
      {
        question: "Do you build mobile apps with backend dashboards?",
        answer:
          "Yes. We can build mobile experiences connected to admin dashboards, APIs, CRMs, ERPs, and cloud systems.",
      },
    ],
    links: [
      { label: "Custom software", href: "#services" },
      { label: "Discuss app", href: "#contact" },
    ],
    cta: "Plan a mobile app",
    keywords: ["mobile app development", "custom software company", "api integration"],
  },
  "Cloud Solutions": {
    slug: "cloud-application-development",
    seoDescription:
      "Cloud application development and deployment for software products that need secure hosting, scalable infrastructure, monitoring, and reliable release workflows.",
    benefits: ["Cloud hosting", "Scalable architecture", "Deployment pipelines"],
    faqs: [
      {
        question: "Can you deploy and maintain cloud applications?",
        answer:
          "Yes. We design, deploy, monitor, and support cloud applications for websites, SaaS products, and business systems.",
      },
    ],
    links: [
      { label: "SaaS development", href: "#products" },
      { label: "Technology stack", href: "#tech-stack" },
    ],
    cta: "Modernise infrastructure",
    keywords: ["cloud application development", "software consulting", "enterprise software development"],
  },
  "UI/UX Design": {
    slug: "ui-ux-design-company",
    seoDescription:
      "UI/UX design for websites, SaaS products, ERP dashboards, CRMs, and business software where clarity, speed, and adoption matter.",
    benefits: ["User journeys", "Dashboard UX", "Conversion-focused interfaces"],
    faqs: [
      {
        question: "Do you design complex ERP and SaaS interfaces?",
        answer:
          "Yes. We design dashboards, workflows, tables, forms, and customer portals for business users.",
      },
    ],
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
    ],
    cta: "Improve user experience",
    keywords: ["ui ux design", "saas development company", "business management software"],
  },
  "Digital Consulting": {
    slug: "technology-consulting",
    seoDescription:
      "Technology consulting and software consulting for businesses planning digital transformation, custom software, ERP, AI automation, SEO, or performance marketing.",
    benefits: ["Roadmap planning", "Software consulting", "Digital transformation strategy"],
    faqs: [
      {
        question: "Can you help us decide what software to build first?",
        answer:
          "Yes. We audit goals, workflows, budget, timeline, and growth priorities before recommending a practical roadmap.",
      },
    ],
    links: [
      { label: "Book consultation", href: "#contact" },
      { label: "Pricing approach", href: "#pricing" },
    ],
    cta: "Plan digital transformation",
    keywords: ["digital transformation company", "technology consulting", "software consulting"],
  },
};

export const services = coreServices.map((service) => ({
  ...service,
  ...serviceSeoDetails[service.title],
}));

export const products = [
  {
    id: "reliable-logii",
    name: "Reliable Logii",
    tagline: "Transport ERP Software",
    description:
      "A production-grade cloud ERP actively used by transport businesses across India. Digitises the complete logistics workflow from booking to delivery.",
    status: "Live & Active",
    gradient: "from-indigo-500/20 via-blue-500/10 to-emerald-500/20",
    accent: "#6366f1",
    features: [
      "Transport Management",
      "Auto E-Way Bill Generation",
      "Bilty Management",
      "Memo Generation",
      "Fleet Management",
      "Driver Management",
      "Customer Management",
      "Accounting",
      "Reports",
    ],
    href: "https://reliablelogi.com/users/sign_in",
  },
  {
    id: "plotmind-ai",
    name: "PlotMind AI",
    tagline: "India's AI-Powered Plotting ERP",
    description:
      "Upload layout files, let AI detect plots automatically, and publish a complete real estate ecosystem — website, CRM, booking, and customer portal.",
    status: "In Development",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accent: "#8b5cf6",
    workflow: [
      "Upload DXF/PDF",
      "AI Detects Plots",
      "Review",
      "Publish",
      "Website",
      "CRM",
      "Booking",
      "Customer Portal",
    ],
    pillars: [
      "AI-Powered Layout Processing",
      "Real Estate ERP",
      "Builder CRM",
      "Customer Portal",
      "Broker Portal",
    ],
    href: "#contact",
  },
];

export const whyChooseUs = [
  {
    title: "Modern Technology Stack",
    description:
      "We build with clean architecture, reliable cloud infrastructure, and maintainable codebases designed for long-term growth.",
    icon: "shield",
  },
  {
    title: "Business-First Thinking",
    description:
      "Every feature maps to a business outcome. We don't ship vanity — we ship systems that reduce cost and increase revenue.",
    icon: "target",
  },
  {
    title: "Performance-First Development",
    description:
      "Fast-loading, mobile-first experiences with strong Core Web Vitals, SEO foundations, and conversion-focused user journeys.",
    icon: "rocket",
  },
  {
    title: "Full-Stack Capability",
    description:
      "From brand identity to cloud infrastructure, AI models to ad campaigns — one team, one vision, zero vendor chaos.",
    icon: "layers",
  },
  {
    title: "SEO-First Approach",
    description:
      "Technical SEO, local SEO, structured data, and crawl-friendly site architecture are built into every serious web project.",
    icon: "trending",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Transparent pricing, clear timelines, ongoing support, and honest scope conversations from strategy through scale.",
    icon: "handshake",
  },
];

export const caseStudies = [
  {
    id: "reliable-logii",
    title: "Reliable Logii",
    category: "Transport ERP · SaaS",
    problem:
      "Transport companies relied on paper bilty registers, manual e-way bills, and Excel spreadsheets — causing billing errors, lost shipments, and zero real-time visibility.",
    solution:
      "We built a full cloud Transport ERP with automated bilty generation, e-way bill integration, fleet tracking, multi-branch access, and real-time financial reporting.",
    impact: [
      "Complete digitisation of transport workflow",
      "Active daily usage by transport businesses",
      "Organic Google rankings for industry keywords",
      "Eliminated manual billing and register errors",
    ],
    href: "https://reliablelogi.com/users/sign_in",
    color: "indigo",
  },
  {
    id: "ms-architects",
    title: "MS Architects",
    category: "Luxury Architecture · Web",
    problem:
      "A premium architecture studio needed a digital presence that matched their luxury positioning — generic portfolio sites failed to impress high-value clients.",
    solution:
      "We crafted a cinematic, Awwwards-inspired experience with GSAP scroll animations, horizontal project showcases, custom cursor interactions, and a dark luxury aesthetic.",
    impact: [
      "Client trust established within seconds of landing",
      "Deployed on custom domain via GitHub Pages",
      "Magnetic interactions and smooth scroll experience",
      "Premium brand perception aligned with studio quality",
    ],
    href: "https://www.msarchitectss.com",
    color: "amber",
  },
  {
    id: "plotmind-ai",
    title: "PlotMind AI",
    category: "Real Estate · AI ERP",
    problem:
      "Real estate builders spent weeks manually plotting layouts, creating websites, and managing bookings across disconnected tools and spreadsheets.",
    solution:
      "An AI-powered platform that reads DXF/PDF layout files, auto-detects plots, and publishes a complete ecosystem — website, CRM, booking engine, and customer portal.",
    impact: [
      "Layout processing reduced from weeks to hours",
      "Unified builder CRM and broker portal",
      "Automated plot inventory and booking flow",
      "End-to-end real estate digital infrastructure",
    ],
    href: "#contact",
    color: "violet",
  },
];

export const portfolio = [
  {
    id: "01",
    title: "Reliable Logii",
    subtitle: "SaaS Product · Transport ERP",
    category: "SaaS Product",
    tags: ["Transport ERP", "Live SaaS", "Production"],
    description:
      "Full logistics platform replacing registers and Excel with bilty management, e-way bills, fleet tracking, and real-time reports.",
    href: "https://reliablelogi.com/users/sign_in",
    gradient: "from-indigo-600/30 to-blue-900/20",
    technologies: ["Ruby on Rails", "PostgreSQL", "Cloud ERP", "Automation"],
    problem:
      "Transport businesses needed a reliable transport ERP software system to replace manual bilty registers, disconnected accounting, and delayed shipment visibility.",
    solution:
      "We built a production SaaS transport software platform with booking, bilty management, fleet workflows, customer records, reports, and cloud access.",
    impact:
      "Digitised daily transport operations, reduced manual billing work, and improved shipment visibility for transport businesses.",
    keywords: ["transport erp software", "logistics software", "fleet management software"],
    stats: { label: "Business impact", value: "10K+ shipments tracked" },
    ctas: [{ label: "Visit Product", href: "https://reliablelogi.com/users/sign_in" }],
  },
  {
    id: "02",
    title: "PlotMind AI",
    subtitle: "AI Powered Plotting ERP",
    category: "AI Powered Plotting ERP",
    tags: ["Real Estate", "AI", "SaaS"],
    description:
      "AI-powered plotting ERP that turns layout files into a complete real estate ecosystem with CRM, booking, and customer portals.",
    href: "#contact",
    gradient: "from-violet-600/30 to-purple-900/20",
    technologies: ["AI Automation", "Next.js", "CRM", "SaaS Architecture"],
    problem:
      "Builders and real estate teams needed a faster way to manage layouts, plot inventory, CRM activity, booking flows, and digital sales infrastructure.",
    solution:
      "PlotMind AI combines AI-powered layout processing with real estate ERP, builder CRM, customer portals, and plot management software.",
    impact:
      "Helps builders reduce manual plotting effort and launch digital sales workflows from one connected platform.",
    keywords: ["real estate erp", "builder erp software", "plot management software"],
    stats: { label: "Business impact", value: "Weeks to hours" },
    ctas: [{ label: "View Case Study", href: "#contact" }],
  },
  {
    id: "03",
    title: "MS Architects",
    subtitle: "Premium Architecture Website",
    category: "Premium Architecture Website",
    tags: ["Architecture", "Live", "Cinematic"],
    description:
      "Cinematic premium website with refined animation, responsive project showcases, and brand positioning for an architecture studio.",
    href: "https://www.msarchitectss.com",
    gradient: "from-amber-600/20 to-stone-900/30",
    technologies: ["GSAP", "Responsive Design", "Performance", "UI/UX"],
    problem:
      "A premium architecture studio needed an architecture website that communicated trust, taste, and project quality before a client conversation.",
    solution:
      "We designed and developed a premium responsive website with cinematic interactions, polished project presentation, and fast mobile-first performance.",
    impact:
      "Creates instant credibility for high-value clients and presents the studio's work with a premium digital experience.",
    keywords: ["architecture website", "website design company", "responsive website development"],
    stats: { label: "Business impact", value: "Premium trust" },
    ctas: [{ label: "Visit Website", href: "https://www.msarchitectss.com" }],
  },
  {
    id: "04",
    title: "Anam Transport Service",
    subtitle: "Business Website + SEO Success",
    category: "Business Website + SEO Success",
    tags: ["Transport", "SEO", "Live Website"],
    description:
      "Modern business website for a transport company with technical SEO, local SEO, mobile optimisation, structured data, and speed optimisation.",
    href: "https://anamtransportservice.com/",
    gradient: "from-emerald-600/20 to-teal-900/20",
    technologies: [
      "Responsive Website",
      "Technical SEO",
      "Local SEO",
      "Structured Data",
    ],
    problem:
      "Anam Transport Service needed a modern business website and SEO foundation to improve discovery for relevant transport service searches.",
    solution:
      "We built the website, implemented technical SEO, optimised local SEO, improved performance, enabled Google indexing, added structured data, and tuned speed.",
    impact:
      "Ranks organically on Google for relevant transport service searches and generates long-term online visibility for the business.",
    keywords: ["transport software development", "technical seo services", "local seo services"],
    stats: { label: "Business impact", value: "Organic visibility" },
    ctas: [
      { label: "Visit Website", href: "https://anamtransportservice.com/" },
      { label: "View Case Study", href: "#seo-success" },
    ],
  },
];

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Ruby on Rails", category: "Backend" },
  { name: "Node.js", category: "Runtime" },
  { name: "Python", category: "AI / Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AI", category: "Intelligence" },
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyse your business, tech stack, and competitive landscape to identify the highest-impact opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    description:
      "Custom roadmap with timelines, tech decisions, and measurable KPIs — no generic proposals.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Premium UI/UX paired with robust engineering. Weekly demos, transparent progress, iterative refinement.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "Deployment, SEO optimisation, analytics setup, and ongoing support to ensure sustained growth.",
  },
];

export const seoAchievements = [
  {
    title: "Website Built for Search Visibility",
    description:
      "We designed and developed Anam Transport Service with a crawl-friendly structure, fast pages, and clear business-focused content.",
    metric: "Built",
    label: "Website + SEO",
  },
  {
    title: "Technical SEO Foundation",
    description:
      "Structured data, Google indexing, Core Web Vitals optimisation, semantic HTML, and crawl-friendly architecture were implemented from launch.",
    metric: "90+",
    label: "Lighthouse score",
  },
  {
    title: "Local SEO Optimisation",
    description:
      "Local SEO improvements help the transport business appear for relevant service-area searches and build trust with nearby customers.",
    metric: "Local",
    label: "Search growth",
  },
  {
    title: "Long-Term Organic Visibility",
    description:
      "The site now ranks organically on Google for relevant transport-related searches, proving the value of patient, long-term SEO strategy.",
    metric: "Organic",
    label: "Google ranking",
  },
];

export const testimonials = [
  {
    quote:
      "ZERNO didn't just build us a website — they built a system that runs our entire transport operation. Reliable Logii replaced every register in our office.",
    author: "Transport Business Owner",
    role: "Reliable Logii Client",
    rating: 5,
  },
  {
    quote:
      "The MS Architects website gets compliments before we even show our portfolio. Clients trust us instantly because the site feels as premium as our work.",
    author: "Studio Principal",
    role: "MS Architects",
    rating: 5,
  },
  {
    quote:
      "We don't just build websites. We build digital businesses that outlast trends — and ZERNO lives up to that promise with every deliverable.",
    author: "ZERNO Technologies",
    role: "Our Philosophy",
    rating: 5,
  },
];

export const industries = [
  { name: "Builders", icon: "building" },
  { name: "Architects", icon: "compass" },
  { name: "Transport Companies", icon: "truck" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Hospitals", icon: "health" },
  { name: "Schools", icon: "school" },
  { name: "Retail Businesses", icon: "store" },
  { name: "Restaurants", icon: "restaurant" },
  { name: "Startups", icon: "rocket" },
  { name: "Local Businesses", icon: "pin" },
];

export const consultationBenefits = [
  "Transparent pricing",
  "No hidden costs",
  "Custom solutions",
  "Scalable engagement",
  "Long-term partnerships",
  "Modern technology stack",
  "Performance-first development",
  "SEO-first approach",
  "Mobile-first design",
  "AI-powered solutions",
  "Ongoing support",
];

export const faqs = [
  {
    question: "Is ZERNO Technologies a custom software development company?",
    answer:
      "Yes. ZERNO Technologies is a custom software development company in India building ERP software, SaaS products, CRMs, business websites, AI automation, SEO systems, and Google Ads funnels for growing businesses.",
  },
  {
    question: "Do you build ERP software for transport companies and builders?",
    answer:
      "Yes. We build transport ERP software, logistics software, fleet management workflows, builder ERP software, real estate ERP, plot management software, broker portals, and custom reporting systems.",
  },
  {
    question: "Do you provide website development and SEO together?",
    answer:
      "Yes. Our website development projects include responsive design, performance-first development, technical SEO, local SEO foundations, structured data, analytics-ready structure, and conversion-focused content.",
  },
  {
    question: "Can you integrate AI automation into our existing systems?",
    answer:
      "Yes. We integrate AI chatbots, document processing, automated reporting, lead routing, internal assistants, and workflow automation into existing websites, CRMs, ERPs, and business tools.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We work with businesses across India, including Maharashtra, Pune, Mumbai, Nagpur, Akola, and remote teams that need custom software, websites, SEO, Google Ads, or business automation.",
  },
  {
    question: "Do you provide ongoing support after software or website launch?",
    answer:
      "Yes. We support long-term partnerships through maintenance, SEO, Google Ads management, feature development, infrastructure monitoring, analytics, and conversion improvements.",
  },
];

export const blogPosts = [
  {
    title: "Why Transport Companies Are Ditching Registers for Cloud ERP",
    excerpt:
      "The hidden cost of manual bilty management and how digital ERP systems pay for themselves within months.",
    date: "Mar 2026",
    category: "Transport Tech",
    readTime: "6 min read",
  },
  {
    title: "AI Layout Processing: The Future of Real Estate ERP",
    excerpt:
      "How PlotMind AI reads DXF files and auto-detects plots — reducing weeks of manual work to hours.",
    date: "Feb 2026",
    category: "AI & Real Estate",
    readTime: "8 min read",
  },
  {
    title: "Technical SEO That Actually Ranks: Lessons from Our SaaS Products",
    excerpt:
      "The exact SEO strategies we used to get Reliable Logii ranking organically on Google.",
    date: "Jan 2026",
    category: "SEO",
    readTime: "5 min read",
  },
];

export const blogStrategy = [
  "Custom Software Development Company: How to Choose the Right Partner in India",
  "Best Software Company for Startups: What Founders Should Look For Before Building",
  "Custom ERP Development Company Guide for Growing Indian Businesses",
  "Software Company for Transport Business: Features That Matter Most",
  "Transport ERP Software vs Manual Registers: Cost, Speed, and Control",
  "ERP for Transport Companies: Bilty, Fleet, Memo, and Accounting Workflows",
  "Fleet Management Software for Small and Medium Transport Companies",
  "Logistics Software for Indian Transport Businesses: A Practical Buyer Guide",
  "Real Estate ERP: How Builders Can Digitise Sales, Plots, and Bookings",
  "Builder ERP Software: CRM, Plot Inventory, Broker Portals, and Reports",
  "Plot Management Software: How AI Can Reduce Manual Layout Work",
  "Plotting ERP Software for Builders: From Layout Upload to Booking",
  "Software Company for Builders: What a Real Estate Tech Stack Should Include",
  "Website Development for Real Estate: How Builders Can Generate Better Leads",
  "Premium Architecture Website Design: What High-Trust Studio Websites Need",
  "Software Company for Architects: Websites, Portfolios, CRMs, and Automation",
  "Best Website Development Company in India: What Makes a Website Convert",
  "Modern Website Development Company Checklist for Local Businesses",
  "Responsive Website Development: Why Mobile-First Design Impacts Leads",
  "Business Website Development for SMBs: Pages, SEO, Speed, and CTA Strategy",
  "Website Design Company vs Web Development Company: What Businesses Actually Need",
  "Next.js Development Company Guide: When Next.js Is Right for Your Website",
  "React Development Company Guide for SaaS, Dashboards, and Portals",
  "Ruby on Rails Development Company Guide for Fast Business Software",
  "Python Development Company Guide for AI, Automation, and Data Workflows",
  "Full Stack Development Company: What Full Stack Really Means for Businesses",
  "Mobile App Development for Field Teams and Customer Portals",
  "Cloud Application Development: How to Build Software That Scales",
  "Enterprise Software Development: Planning Systems That Teams Actually Use",
  "Custom Business Software: When to Stop Using Spreadsheets",
  "Custom CRM Software: Lead Tracking Workflows for Service Businesses",
  "CRM Development Company Guide for Sales and Operations Teams",
  "Inventory Management Software for Manufacturers, Retailers, and SMBs",
  "Business Management Software: What to Automate First",
  "Digital Transformation Company Guide for Traditional Businesses",
  "Technology Consulting: How to Build a Practical Software Roadmap",
  "Software Consulting for SMBs: Avoiding Expensive Wrong Builds",
  "AI Development Company Guide for Business Owners",
  "AI Software Development Services: Chatbots, Reports, Documents, and Workflows",
  "AI Chatbot Development for Customer Support and Lead Qualification",
  "Business Automation Using AI: Practical Examples for Indian Businesses",
  "AI Automation Company Guide: How to Identify High-ROI Automation Ideas",
  "Workflow Automation: How to Save Hours Without Replacing Your Team",
  "Process Automation for Approvals, Billing, Follow-Ups, and Reports",
  "API Integration: Connecting CRMs, ERPs, Websites, Ads, and Payment Systems",
  "SEO Company Guide: What Real SEO Includes Beyond Meta Tags",
  "Technical SEO Services Checklist for Modern Business Websites",
  "Local SEO Services for Local Businesses in Maharashtra",
  "SEO Services for Local Businesses in Pune, Mumbai, Nagpur, and Akola",
  "Google Ads Management Company Guide: Turning Paid Clicks Into Qualified Leads",
];
