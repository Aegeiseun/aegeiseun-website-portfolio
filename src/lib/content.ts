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
    "I scale paid social campaigns from $3K to $60K/month on Meta & TikTok, and build the systems behind them with no-code/low-code tools.",
};

export const about = {
  heading: "About",
  paragraphs: [
    "JP is a Paid Social specialist with 3+ years managing Meta and TikTok ad campaigns from $3K to $60K/month in spend — running full campaign lifecycles (audience strategy, creative direction, testing, scaling) for clients across real estate, e-commerce, and multi-location service businesses.",
    "That performance-marketing background is paired with hands-on no-code/low-code development: building and deploying web and mobile apps with Bubble.io, Webflow, and Softr, and wiring up the automations and databases (Xano, Airtable, Zapier) that keep them running.",
    "Before either of those, JP worked as a compliance monitoring analyst at Citibank, auditing identity and access records for accuracy — the same attention to detail that now shows up in campaign reporting and client-facing dashboards. Based in the Philippines, working remote-first with teams across time zones.",
  ],
};

export const skillGroups = [
  {
    label: "Media Buying (Ads)",
    items: [
      "Meta Ads Manager",
      "TikTok Ads Manager",
      "Campaign Optimization & Scaling",
      "A/B Testing & Creative Analysis",
      "Audience Targeting",
      "Ad Copywriting",
    ],
  },
  {
    label: "No-Code / Low-Code",
    items: ["Bubble.io", "Webflow", "Softr", "Xano", "Adalo / Glide / FlutterFlow", "Zapier"],
  },
  {
    label: "Analyst & Reporting",
    items: [
      "Google Analytics",
      "TripleWhale / MagicBrief",
      "Compliance Auditing",
      "Data Integrity Reviews",
      "Airtable",
      "Structured Reporting",
    ],
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

export const projects: Project[] = [
  {
    id: "project-01",
    title: "Scaling Paid Social to $60K/Mo",
    summary:
      "Full-funnel Facebook & TikTok campaigns for a POD apparel brand — scaling ad spend from $40K to $60K/month while cutting CPA and improving ROAS through continuous creative and audience testing.",
    tags: ["Meta Ads", "TikTok Ads", "Scaling"],
    status: "unlocked",
  },
  {
    id: "project-02",
    title: "Multi-Client Meta Ads Ops",
    summary:
      "Running paid social for 4–5 companies at once inside Meta Ads Manager — audience targeting, creative direction, and budget allocation per client, lifting CTR from under 2% to above 3%.",
    tags: ["Meta Ads", "Multi-Client", "Optimization"],
    status: "unlocked",
  },
  {
    id: "project-03",
    title: "Compliant Real Estate Lead Gen",
    summary:
      "Facebook lead-gen campaigns for a real estate company, working within Housing Special Ad Category restrictions while lowering cost per lead through audience refinement.",
    tags: ["Meta Ads", "Lead Gen", "Compliance"],
    status: "unlocked",
  },
  {
    id: "project-04",
    title: "No-Code Web & Mobile Builds",
    summary:
      "Built and deployed web and mobile apps with Bubble.io, Webflow, and Softr, backed by Xano and Airtable databases and Zapier automations.",
    tags: ["No-Code", "Low-Code", "Automation"],
    status: "unlocked",
  },
];

export type ExperienceEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Dec 2024 — Present",
    title: "Digital Marketing Specialist — Paid Social",
    org: "Intrinsic Digital",
    description:
      "Manage Meta paid social for 4–5 multi-location companies at once — audience targeting, creative direction, and budget allocation. Lifted CTR from under 2% to above 3% through structured creative testing, averaging 7–15 conversions per location a month.",
  },
  {
    period: "Aug 2023 — Nov 2024",
    title: "No-Code / Low-Code Developer",
    org: "Estel Studio",
    description:
      "Built and deployed web and mobile apps with Bubble.io, Webflow, and Softr; automated workflows with Adalo, Glide, and FlutterFlow; managed structured databases in Xano and Airtable.",
  },
  {
    period: "Jul 2023 — Aug 2024",
    title: "Facebook Media Buyer",
    org: "Real Estate Company",
    description:
      "Managed $3K–$5K/month Facebook campaigns within Housing Special Ad Category restrictions, cutting cost per lead through audience refinement and bi-weekly performance reporting.",
  },
  {
    period: "Mar 2023 — May 2024",
    title: "Compliance Monitoring Infrastructure Analyst",
    org: "Citibank",
    description:
      "Audited user identity and access records in a regulated environment — system log reviews, discrepancy flagging, and structured compliance reporting.",
  },
  {
    period: "Mar 2022 — Jul 2023",
    title: "Facebook & TikTok Media Buyer",
    org: "POD Apparel Brand",
    description:
      "Managed $40K–$60K/month across Facebook and TikTok, running full-funnel campaigns and continuous creative/audience/bidding tests to improve CPA and ROAS.",
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

// Email pulled from the resume (clearly a business/contact address, not personal).
// LinkedIn is still a placeholder — swap in the real profile URL once provided.
export const contact = {
  email: "jpcartagena.business@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
};
