export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Player One",
  name: "JP",
  role: "Media Buyer & Software Developer",
  tagline:
    "I build and ship — campaigns that convert, and products built with no-code/low-code tools. Placeholder tagline, swap for real copy.",
};

// PLACEHOLDER — replace with real bio / resume summary.
export const about = {
  heading: "About",
  paragraphs: [
    "Placeholder bio: JP is a media buyer and software developer who treats every campaign and every build like a system to be optimized — the kind of person equally comfortable in an ads dashboard and a no-code editor.",
    "Placeholder: years of experience spanning performance marketing and product development, drawn to tools that let small teams ship at the speed of big ones.",
    "This section should be replaced with the real bio once resume/content is provided.",
  ],
};

// PLACEHOLDER — group real toolset here once confirmed.
export const skillGroups = [
  {
    label: "Media Buying",
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "Creative Testing", "Attribution & Analytics"],
  },
  {
    label: "Development",
    items: ["JavaScript/TypeScript", "React", "Next.js", "API Integrations"],
  },
  {
    label: "No-Code / Low-Code",
    items: ["Webflow", "Framer", "Bubble", "Zapier / Make", "Airtable"],
  },
];

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  status: "unlocked" | "in-progress";
  href?: string;
};

// PLACEHOLDER — swap in real project data (title/summary/tags/link).
export const projects: Project[] = [
  {
    id: "project-01",
    title: "Project One",
    summary: "Placeholder project summary — replace with a real case study or build.",
    tags: ["Media Buying", "Analytics"],
    status: "unlocked",
  },
  {
    id: "project-02",
    title: "Project Two",
    summary: "Placeholder project summary — replace with a real case study or build.",
    tags: ["No-Code", "Automation"],
    status: "unlocked",
  },
  {
    id: "project-03",
    title: "Project Three",
    summary: "Placeholder project summary — replace with a real case study or build.",
    tags: ["Development", "Web App"],
    status: "unlocked",
  },
  {
    id: "project-04",
    title: "Next Build",
    summary: "Placeholder — reserved slot for a project in progress.",
    tags: ["Coming Soon"],
    status: "in-progress",
  },
];

export type ExperienceEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
};

// PLACEHOLDER — replace with real resume timeline once provided.
export const experience: ExperienceEntry[] = [
  {
    period: "20XX — Present",
    title: "Media Buyer",
    org: "Placeholder Company",
    description: "Placeholder description of role and impact — swap in resume content.",
  },
  {
    period: "20XX — 20XX",
    title: "Software Developer (No-Code/Low-Code)",
    org: "Placeholder Company",
    description: "Placeholder description of role and impact — swap in resume content.",
  },
  {
    period: "20XX — 20XX",
    title: "Earlier Role",
    org: "Placeholder Company",
    description: "Placeholder description of role and impact — swap in resume content.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// PLACEHOLDER — replace with real client/colleague quotes once provided.
export const testimonials: Testimonial[] = [
  {
    quote: "Placeholder testimonial quote about working with JP.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Placeholder testimonial quote about working with JP.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Placeholder testimonial quote about working with JP.",
    name: "Client Name",
    role: "Role, Company",
  },
];

// PLACEHOLDER — replace with real email + LinkedIn URL once provided.
export const contact = {
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
};
