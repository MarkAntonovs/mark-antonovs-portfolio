export const CONTACT = {
  email: "marks.antonoff@gmail.com",
  linkedin: "https://www.linkedin.com/in/marks-antonovs-785a37389/",
  github: "https://github.com/MarkAntonovs",
  location: "Jönköping, Sweden",
};

export type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  domain: string;
  image: string;
};

export const FEATURED: Project[] = [
  {
    name: "CreditoColombia.co",
    category: "Financial comparison platform",
    description:
      "An independent comparison platform for Colombian credit products, built around dense, structured information and clear side-by-side reading.",
    url: "https://creditocolombia.co/",
    domain: "creditocolombia.co",
    image: "/mark-antonovs-portfolio/images/creditocolombia.jpg",
  },
  {
    name: "Hoy.credit",
    category: "Financial comparison platform · Mexico",
    description:
      "A Mexican credit comparison platform focused on transparent cost presentation, with a fast, editorial interface across desktop and mobile.",
    url: "https://hoy.credit/",
    domain: "hoy.credit",
    image: "/mark-antonovs-portfolio/images/hoycredit.jpg",
  },
];

export const OTHER: Project[] = [
  {
    name: "FinRomania",
    category: "Financial comparison platform · Romania",
    description:
      "A Romanian comparison site organising credit information into a readable, checklist-driven structure.",
    url: "https://finromania.com/",
    domain: "finromania.com",
    image: "/mark-antonovs-portfolio/images/finromania.jpg",
  },
  {
    name: "INACHE",
    category: "Real estate website",
    description:
      "A multilingual property agency site presenting listings with clear typography and straightforward navigation.",
    url: "https://inache.lv/",
    domain: "inache.lv",
    image: "/mark-antonovs-portfolio/images/inache.jpg",
  },
  {
    name: "ABC-CONTI",
    category: "Commercial real estate website",
    description:
      "A restrained commercial property site where object details stay legible and easy to scan.",
    url: "https://conti.lv/",
    domain: "conti.lv",
    image: "/mark-antonovs-portfolio/images/conti.jpg",
  },
  {
    name: "POLANTA",
    category: "Business services website",
    description:
      "A services website structured around what the company offers, with a warm, calm visual tone.",
    url: "https://polanta.lv/",
    domain: "polanta.lv",
    image: "/mark-antonovs-portfolio/images/polanta.jpg",
  },
];

export const CAPABILITIES = [
  {
    title: "Web Design & Development",
    body: "From first layout to a finished, launched website.",
  },
  {
    title: "Responsive Frontend",
    body: "Interfaces that hold up on every screen size.",
  },
  {
    title: "Business Websites",
    body: "Sites that present a company clearly and credibly.",
  },
  {
    title: "Digital Product Prototyping",
    body: "Turning an idea into a working, testable interface.",
  },
  {
    title: "Information Architecture",
    body: "Structure for content-heavy and data-heavy platforms.",
  },
  {
    title: "SEO-friendly Website Structure",
    body: "Semantic markup, clean metadata and fast pages.",
  },
];

export const TECH = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "Tailwind",
  "Git / GitHub",
];
