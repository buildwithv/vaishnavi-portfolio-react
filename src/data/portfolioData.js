// ─────────────────────────────────────────────
//  All portfolio content lives here.
//  Edit this file to update your portfolio!
// ─────────────────────────────────────────────

export const PERSONAL = {
  name:     "Vaishnavi Parmar",
  domain:   "Vaishnavi.dev",
  email:    "vaishnavidarji8@gmail.com",
  location: "Toronto, ON, Canada",
  linkedin: "https://www.linkedin.com/in/vaishnavi-parmar-060042226/",
  github:   "https://github.com/buildwithv",
  role:     "Full-Stack Software Developer",
  tagline:  "I build scalable, high-performance applications with clean architecture and real impact. 4+ years delivering enterprise-grade solutions across React, Node.js, .NET, Python and Cloud.",
  about:    `I'm a full-stack software developer with 4+ years of experience delivering enterprise applications, government platforms, and scalable web solutions. I specialize in React.js, Next.js, Node.js, ASP.NET, and Python AI/ML pipelines with a strong focus on clean architecture, SOLID principles, and performance optimization.\n\nBeyond coding, I'm passionate about building products that create real-world impact and mentoring the next generation of developers. I thrive in Agile environments and love working across cross-functional teams to ship great software.`,
  contactBio: `As a Software Developer with a passion for Python, MERN, and React.js, I specialize in crafting seamless tech solutions that drive business success. Let's turn your innovative ideas into reality!`,
};

export const STATS = [
  { num: "4+",  label: "Years Experience"    },
  { num: "15+", label: "Enterprise Projects" },
  { num: "200+",label: "Bugs Resolved"       },
  { num: "60%", label: "Crash Reduction"     },
];

export const SKILLS = [
  { name: "React.js / Next.js",                pct: 92 },
  { name: "TypeScript / JavaScript (ES6+)",    pct: 90 },
  { name: "Node.js / Express.js",              pct: 85 },
  { name: "Python / AI-ML Pipelines / NLP",   pct: 80 },
  { name: "ASP.NET MVC / C# / Java",           pct: 82 },
  { name: "PostgreSQL / SQL Server / MySQL",   pct: 85 },
  { name: "MongoDB / Redis / Prisma ORM",      pct: 80 },
  { name: "Docker / Kubernetes / CI-CD",       pct: 78 },
  { name: "GraphQL / REST APIs / Microservices", pct: 88 },
  { name: "Tailwind CSS / Bootstrap / HTML5",  pct: 90 },
  { name: "Stripe / Clerk / Figma / Postman",  pct: 78 },
  { name: "Agile / Scrum / TDD / Git",         pct: 92 },
];

export const EXPERIENCE = [
  {
    emoji:      "🤖",
    company:    "Emotai",
    role:       "Software Engineer Intern · Remote (Part-Time)",
    date:       "Jan 2026 — Present",
    chips:      ["Python","FastAPI","Computer Vision","Docker","ML Pipelines"],
    highlights: ["Face Recognition AI","Real-Time Emotion Detection"],
  },
  {
    emoji:      "🌐",
    company:    "Vosyn",
    role:       "Frontend Developer · Remote",
    date:       "Feb 2025 — Present",
    chips:      ["React.js","Next.js","TypeScript","REST APIs","Agile"],
    highlights: ["−30% Load Time","Mentored Junior Devs"],
  },
  {
    emoji:      "🏛️",
    company:    "Gujarat Informatics Limited",
    role:       "Software Developer · Gujarat, India",
    date:       "Apr 2023 — Dec 2024",
    chips:      ["ASP.NET MVC","C#","Java","SQL Server","Bootstrap"],
    highlights: ["9+ Gov Projects","−60% Crashes","120+ Issues Fixed"],
  },
  {
    emoji:      "💻",
    company:    "Praxware Technologies",
    role:       "Jr. Software Engineer · Gujarat, India",
    date:       "Jan 2022 — Apr 2023",
    chips:      ["React.js","Next.js","Node.js","GraphQL","Redux"],
    highlights: ["−30% Bundle Size","Reusable Component Library"],
  },
  {
    emoji:      "🔐",
    company:    "TECHinfinity Pvt Ltd",
    role:       "Software Developer Intern · Gujarat, India",
    date:       "Jan 2020 — Jun 2020",
    chips:      ["Node.js","MongoDB","Redis","API Security"],
    highlights: ["+48% Response Speed","−1.8s Page Load"],
  },
];

export const PROJECTS = [
  {
    num:   "PROJECT 01",
    title: "Vault-X — Crypto & Finance Dashboard",
    techs: ["React 19","TypeScript","Tailwind CSS v4","CoinGecko API","Vite","Vercel"],
    desc:  "Live crypto dashboard with real-time Bitcoin price tracking, balance management, and transaction history. Deployed to production on Vercel. Built with React 19 and Tailwind CSS v4 for a blazing-fast, modern UI.",
    github: "#",
    demo:   "https://vault-x-dashboard.vercel.app",
  },
  {
    num:   "PROJECT 02",
    title: "PromptForge — AI SaaS Platform",
    techs: ["Next.js 14","Node.js","TypeScript","PostgreSQL","Prisma","Redis","Stripe","Clerk","OpenAI","Anthropic","Gemini"],
    desc:  "Full-stack AI SaaS platform for side-by-side prompt comparison across GPT-4, Claude, and Gemini. Features team workspaces, prompt versioning, Stripe billing, and usage analytics. Built with a scalable microservices-ready architecture.",
    github: "#",
    demo:   "#",
  },
  {
    num:   "PROJECT 03",
    title: "Government Digital Platforms",
    techs: ["ASP.NET MVC","C#","SQL Server","Bootstrap","IIS","CI/CD"],
    desc:  "Secure education and forensic science platforms for government departments. Role-based dashboards, encrypted APIs, audit logging, and zero-downtime CI/CD deployments. SQL query optimization achieved 70% reduction in execution time and improved operational efficiency by 35%.",
    github: "#",
    demo:   "#",
  },
];

export const METRICS = [
  { val: "30%", label: "Load Time Reduction"      },
  { val: "60%", label: "Fewer System Crashes"     },
  { val: "48%", label: "API Response Improvement" },
  { val: "70%", label: "SQL Query Optimization"   },
  { val: "35%", label: "Process Efficiency Gain"  },
  { val: "1.8s", label: "Page Load Time Saved"    },
];

// ── EmailJS Config ────────────────────────────────────────────────────────────
// See README.md for setup instructions (free, 5 min)
export const EMAILJS = {
  serviceId:  "YOUR_SERVICE_ID",   // e.g. "service_abc123"
  templateId: "YOUR_TEMPLATE_ID",  // e.g. "template_xyz789"
  publicKey:  "YOUR_PUBLIC_KEY",   // e.g. "abcDEFghiJKL"
};