export interface Service {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  longDescription: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: string[];
}

export interface Project {
  name: string;
  industry: string;
  description: string;
  stack: string[];
}

export const SITE = {
  name: "Binary Solutions",
  legalName: "Binary Solutions Technologies",
  tagline: "AI-Based Mobile App & Web Development Company",
  description:
    "Binary Solutions is an AI-based mobile app and web development company delivering scalable, secure, and high-performance digital solutions for startups and enterprises.",
  url: "https://www.binarysolutions.com",
  email: "hello@binarysolutions.com",
  phone: "+1 (555) 010-2030",
  address: {
    street: "100 Innovation Drive, Suite 400",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "USA",
  },
  founded: "2019",
  socials: {
    linkedin: "https://www.linkedin.com/company/binarysolutions",
    twitter: "https://twitter.com/binarysolutions",
    github: "https://github.com/binarysolutions",
    instagram: "https://www.instagram.com/binarysolutions",
  },
  stats: [
    { value: "250+", label: "Projects Delivered" },
    { value: "120+", label: "Happy Clients" },
    { value: "60+", label: "Tech Experts" },
    { value: "7+", label: "Years of Experience" },
  ],
};

export const services: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile",
    description:
      "Native iOS, Android and cross-platform apps engineered for performance, scale and delightful user experiences.",
    icon: "📱",
    features: [
      "iOS & Android native apps",
      "Flutter & React Native builds",
      "App Store & Play Store launch support",
      "Offline-first architecture",
    ],
    longDescription:
      "We design and build mobile applications that users love and businesses rely on. From MVPs for startups to enterprise-grade platforms, our team covers the full lifecycle — strategy, UX design, development, testing and launch — with a focus on performance, security and measurable business outcomes.",
  },
  {
    slug: "ai-development",
    title: "AI & Generative AI Development",
    category: "AI",
    description:
      "Intelligent products powered by LLMs, machine learning, NLP and computer vision — from chatbots to AI copilots.",
    icon: "🧠",
    features: [
      "LLM & chatbot integration",
      "Custom ML model development",
      "AI workflow automation",
      "Data pipelines & MLOps",
    ],
    longDescription:
      "Our AI practice helps companies turn data into products. We build production-grade generative AI assistants, recommendation engines, document intelligence and predictive analytics systems — always with proper evaluation, guardrails and cost controls baked in.",
  },
  {
    slug: "blockchain-development",
    title: "Blockchain & Web3 Development",
    category: "Blockchain",
    description:
      "Secure smart contracts, DeFi platforms, tokens and dApps audited and built on Ethereum, Solana, Polygon and more.",
    icon: "⛓️",
    features: [
      "Smart contract development & audits",
      "DeFi & DEX platforms",
      "Token & NFT development",
      "Wallet & exchange solutions",
    ],
    longDescription:
      "We build trustless systems the right way. Our blockchain engineers deliver audited smart contracts, DeFi protocols, tokenization platforms and enterprise chains across major ecosystems, pairing deep protocol knowledge with rigorous security practices.",
  },
  {
    slug: "web-development",
    title: "Web & Full-Stack Development",
    category: "Web",
    description:
      "High-performance websites and web apps with Next.js, React, Node.js and MERN — SSR, SEO-ready and scalable.",
    icon: "🌐",
    features: [
      "Next.js & React applications",
      "Node.js & Python backends",
      "E-commerce platforms",
      "CMS & headless architectures",
    ],
    longDescription:
      "Your website is your hardest-working employee. We craft blazing-fast, SEO-friendly and accessible web experiences using modern stacks — Next.js server rendering, edge deployment and headless CMS — so you rank higher, convert better and scale without rewrites.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    description:
      "Research-driven product design — wireframes, design systems and interfaces that convert visitors into users.",
    icon: "🎨",
    features: [
      "User research & personas",
      "Wireframes & prototyping",
      "Design systems",
      "WCAG 2.2 accessibility audits",
    ],
    longDescription:
      "Great products feel effortless. Our designers combine research, rapid prototyping and rigorous usability testing to create interfaces that are beautiful, accessible and aligned with your business goals — delivered as reusable design systems your team can scale with.",
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud Engineering",
    category: "Cloud",
    description:
      "CI/CD pipelines, infrastructure as code and 24/7 observability on AWS, GCP and Azure.",
    icon: "☁️",
    features: [
      "CI/CD automation",
      "Kubernetes & containers",
      "Infrastructure as code",
      "Monitoring & cost optimization",
    ],
    longDescription:
      "Ship faster with confidence. We set up automated pipelines, containerized workloads and observable infrastructure that cuts deployment times from days to minutes while keeping cloud bills predictable and uptime above 99.9%.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-dating-coach-app-development",
    title: "AI Dating Coach App Development: Features, Process & Cost",
    excerpt:
      "AI dating apps use machine learning, NLP and generative AI to guide users with personalized dating advice, match suggestions and real-time coaching.",
    date: "2026-09-10",
    readTime: "8 min read",
    tag: "AI",
    content: [
      "In today's digital world, people look for smarter ways to improve their dating life. This has made AI Dating Coach App Development one of the fastest-growing categories in the dating industry.",
      "With advanced technologies like AI, machine learning, NLP and generative AI, these apps guide users with personalized dating advice, match suggestions and real-time coaching — just like a human coach, but available 24/7.",
      "Building one starts with a clear feature set: onboarding quizzes, conversation analysis, profile optimization suggestions and privacy-first data handling. Costs typically range from $25,000 for an MVP to $150,000+ for a full AI-powered platform, depending on model complexity and integrations.",
    ],
  },
  {
    slug: "healthcare-app-trends-2026",
    title: "Top Healthcare App Development Trends in 2026",
    excerpt:
      "The healthcare app trends that matter in 2026: ambient AI documentation, RPM reimbursement, FHIR interoperability and digital therapeutics.",
    date: "2026-08-28",
    readTime: "6 min read",
    tag: "Healthcare",
    content: [
      "Healthcare software is having its AI moment. Ambient AI documentation tools now draft clinical notes during patient visits, saving physicians hours every week.",
      "Interoperability remains the backbone: FHIR-based integrations let apps plug into hospital EHR systems, while remote patient monitoring (RPM) finally reached sustainable reimbursement models.",
      "For startups, the biggest opportunities are in digital therapeutics, medication adherence and AI triage — all areas where a well-scoped MVP can reach the market in under six months.",
    ],
  },
  {
    slug: "nextjs-ssr-seo-guide",
    title: "Why Next.js SSR Is the Smartest Choice for SEO-First Websites",
    excerpt:
      "Server-side rendering gives crawlers fully-formed HTML on first request. Here's how Next.js SSR boosts Core Web Vitals, rankings and conversions.",
    date: "2026-08-12",
    readTime: "7 min read",
    tag: "Web",
    content: [
      "Client-side rendering made websites feel like apps — but it made SEO harder, because crawlers had to execute JavaScript to see content.",
      "Next.js solves this with server-side rendering and streaming: search engines receive fully-formed HTML on the first request, users see content faster, and Core Web Vitals improve across the board.",
      "Pair SSR with semantic HTML, structured data (JSON-LD), sitemaps and accessible components and you have a site that both Google and screen readers love.",
    ],
  },
  {
    slug: "smart-contract-security-checklist",
    title: "A Practical Smart Contract Security Checklist for 2026",
    excerpt:
      "Reentrancy, oracle manipulation, access control — the vulnerabilities we find most often in audits, and how to prevent them before deployment.",
    date: "2026-07-30",
    readTime: "9 min read",
    tag: "Blockchain",
    content: [
      "Most smart contract exploits are not exotic. They are well-known vulnerability classes — reentrancy, broken access control, oracle manipulation — that slipped through rushed development cycles.",
      "Our checklist starts at design time: minimal contract surface, battle-tested libraries, explicit access control and comprehensive test coverage including fuzzing.",
      "Before mainnet, get an independent audit, run a bug bounty and deploy with a timelocked upgrade path. Security is a process, not a phase.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "MediConnect",
    industry: "Healthcare",
    description:
      "Telemedicine platform connecting patients with 2,000+ doctors — video consults, e-prescriptions and pharmacy delivery.",
    stack: ["Next.js", "Node.js", "WebRTC", "AWS"],
  },
  {
    name: "CoinBridge",
    industry: "Fintech",
    description:
      "Non-custodial crypto wallet with cross-chain swaps across Ethereum, Polygon and Solana handling $40M+ in monthly volume.",
    stack: ["React Native", "Solidity", "Solana SDK"],
  },
  {
    name: "SwiftCart",
    industry: "E-commerce",
    description:
      "Headless commerce platform with AI product recommendations that lifted average order value by 27%.",
    stack: ["Next.js", "Stripe", "OpenAI", "PostgreSQL"],
  },
  {
    name: "FleetIQ",
    industry: "Logistics",
    description:
      "Real-time fleet tracking and route optimization SaaS that cut fuel costs by 18% for a 500-vehicle operator.",
    stack: ["React", "Node.js", "Kafka", "Google Maps API"],
  },
  {
    name: "TutorVerse",
    industry: "Education",
    description:
      "E-learning marketplace with live classes, AI quiz generation and progress analytics for 100k+ students.",
    stack: ["Next.js", "NestJS", "WebRTC", "Redis"],
  },
  {
    name: "AgroSense",
    industry: "IoT",
    description:
      "IoT dashboard aggregating soil sensors and weather data to automate irrigation across 12,000 acres.",
    stack: ["React", "Python", "MQTT", "TimescaleDB"],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
