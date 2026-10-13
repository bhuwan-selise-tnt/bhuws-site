/* ---------------------------------- data --------------------------------- */

export const TICKER = [
  "REACT",
  "NEXT.JS",
  "ANGULAR",
  "REACT NATIVE",
  "TYPESCRIPT",
  "NODE.JS",
  "GRAPHQL",
  "POSTGRESQL",
  "TECH LEAD",
  "MENTOR",
];

export const EXPERIENCE = [
  {
    n: "01",
    role: "Software Engineer",
    org: "Selise Digital Platforms",
    span: "2024 — NOW",
    tag: "PROJECT TECH LEAD",
    points: [
      "Lead a frontend team of 5 as project tech lead — high-quality code through mentorship and rigorous reviews.",
      "Engineer large-scale enterprise apps with React, Next.js & Angular across e-commerce and telecom platforms.",
      "Cut API usage 98% on a Storyblok-powered storefront — slashing CMS costs and lifting page-load performance 90%.",
      "Shipped a telecom web feature that doubled sales (2×) and drove cross-platform React Native delivery for iOS & Android.",
      "Ran a two-month bootcamp for 46 non-technical participants — 4 products built by program end, one already funded.",
      "Mentored six junior engineers through 1:1s, workshops & pair programming — earned a promotion within the first year.",
    ],
  },
  {
    n: "02",
    role: "Intern Software Engineer",
    org: "Beyul Labs",
    span: "2023 — 2024",
    tag: "FULL STACK",
    points: [
      "Engineered software products end-to-end with full-stack responsibility.",
      "Converted stakeholder requirements into working software with modern web technologies.",
    ],
  },
  {
    n: "03",
    role: "Graduate Teaching Assistant",
    org: "College of Science and Technology",
    span: "2023",
    tag: "TEACHING",
    points: [
      "Semester-long role — conducted lectures on server-side engineering.",
    ],
  },
  {
    n: "04",
    role: "Volunteer Tutor",
    org: "Little Coders, Bhutan",
    span: "2021 — 2022",
    tag: "COMMUNITY",
    points: [
      "Introduced children to programming — Code Monkey, HTML, CSS and basic web technology.",
    ],
  },
  {
    n: "05",
    role: "Intern Software Engineer",
    org: "Druk Holdings and Investment",
    span: "2021",
    tag: "FULL STACK",
    points: [
      "Built the Water Management System for Bhutan with full-stack engineering responsibilities.",
    ],
  },
];

export const PROJECTS = [
  {
    n: "01",
    name: "PokeMart BT",
    tagline: "A single-seller Pokémon card storefront.",
    tag: "WEB APP",
    span: "2026",
    desc: "A mobile-first storefront for individual Pokémon cards and sealed sets. Visitors browse a public, no-login catalog, build a cart, and complete their order by opening a pre-filled WhatsApp chat with the seller — no payment, order or shipping logic in the app; the transaction is negotiated in WhatsApp.",
    points: [
      "Public catalog — search, filtering (type, set, condition, price, graded) and sorting, with no auth required.",
      "Cart → WhatsApp handoff — the cart lives in localStorage and 'Order via WhatsApp' opens wa.me with a readable, pre-filled message. No checkout, no server-persisted cart.",
      "Admin inventory manager — authenticated CRUD with multi-image upload, single-card vs sealed-set classification, graded-card fields and active/featured toggles.",
      "Security by RLS — Supabase Row-Level Security is the real access control: anon reads active rows only, all writes require an authenticated session. No custom backend.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Supabase",
      "Tailwind",
    ],
    repo: "https://github.com/bhuwan-1/pokemartbt",
    site: "https://pokemartbt.com",
    img: "/pokemart.png",
    imgAlt: "PokeMart BT — mobile-first Pokémon card catalog with cart",
    imgWide: true,
    shotCaption: "The public catalogue: browse, filter, add to cart.",
  },
  {
    n: "02",
    name: "JobTally",
    tagline: "A quiet ledger for your job hunt.",
    tag: "CHROME EXTENSION",
    span: "2026",
    desc: "A Manifest V3 browser extension that automatically tallies job applications submitted on LinkedIn, Seek, Indeed and Glassdoor — with a hand-drawn tally-mark dashboard, per-site breakdown, manual logging and CSV export.",
    points: [
      "Automatic detection — content scripts watch each site's 'application submitted' signal and log title, company, site and link. No clicking required.",
      "Cross-origin attribution — handles Indeed's smartapply hop and Glassdoor Easy Apply riding on Indeed's flow, so applications land on the right site.",
      "Deduplication keyed on canonical URL and site+company+title — revisiting a confirmation page never double-counts.",
      "Local-only by design — everything lives in chrome.storage.local. Nothing leaves your machine.",
    ],
    stack: ["JavaScript", "Manifest V3", "MutationObserver", "chrome.storage"],
    repo: "https://github.com/bhuwan-1/job-tally",
    img: "/jobtally.png",
    imgAlt:
      "JobTally popup — tally-mark dashboard with per-site breakdown and recent applications",
    shotCaption: "The popup ledger, tallied by site.",
  },
  {
    n: "03",
    name: "Mochi",
    tagline: "A pixel cat that naps when you won't.",
    tag: "DESKTOP APP",
    span: "2026",
    desc: "A soft little pixel cat that lives on your desktop — pet it, watch it wander, and let it guilt you into breaks. After ~50 minutes of continuous screen time, Mochi falls asleep in protest and won't wake until you take a real 5-minute break.",
    points: [
      "A tiny webpage in an invisible, always-on-top Tauri window — pixel-art cat built from 4×4 SVG squares, every animation pure CSS driven by state classes.",
      "Autonomous personality — drag it anywhere, click to pet, and every few minutes it strolls off on its own or takes a catnap instead.",
      "Break reminders via a single macOS idle-time call — it only reads seconds since your last input, never what you type or do.",
      "Ships as a ~2 MB DMG — plain HTML/CSS/JS frontend, no framework, with a thin Rust shell.",
    ],
    stack: ["Tauri", "Rust", "JavaScript", "CSS Animations"],
    repo: "https://github.com/bhuwan-1/mochi",
    shots: [
      { src: "/mochi-idle.png", alt: "Mochi sitting and blinking" },
      { src: "/mochi-happy.png", alt: "Mochi being petted, with a heart" },
      { src: "/mochi-sleep.png", alt: "Mochi sleeping with floating z's" },
    ],
    shotCaption: "Idle, petted, and asleep in protest.",
  },
];

export const SKILLS = [
  {
    label: "LANGUAGES",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C"],
  },
  {
    label: "FRONTEND",
    items: [
      "React / Next.js",
      "Angular (v1 & v2+)",
      "React Native",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "BACKEND & DATA",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "PRACTICE",
    items: [
      "Git / GitHub / Bitbucket",
      "Agile / Scrum",
      "CI/CD",
      "AWS",
      "JIRA",
      "AI-Assisted Dev (Claude Code, Cursor)",
      "Mentorship",
      "Stakeholder Management",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Royal University of Bhutan",
    deg: "B.E. Information Technology",
    span: "2019 — 2024",
  },
  {
    school: "Uppsala University, Sweden",
    deg: "Exchange Studies — Information Technology",
    span: "2022 — 2023",
  },
  {
    school: "Yangchenphug HSS",
    deg: "High School Diploma in Science",
    span: "2017 — 2018",
  },
];

export const AWARDS = [
  "Selise Rising Star",
  "His Majesty's Academic Excellence Award",
  "Engineering Academic Excellence",
  "World Skills Asia Competitor",
  "Erasmus+ ICM Scholarship",
];

export const SPOKEN = ["English", "Nepali", "Hindi", "Dzongkha"];

export const EMAIL = "bhuws.dev@gmail.com";
export const GITHUB = "https://github.com/bhuwan-selise-tnt";
export const GITHUB_USER = "bhuwan-selise-tnt";
export const LINKEDIN = "https://www.linkedin.com/in/bhuwan-sharma-37b5bb187/";
