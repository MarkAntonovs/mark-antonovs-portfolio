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

export const PROJECTS: Project[] = [
  {
    name: "First Company",
    category: "Building engineering services website",
    description:
      "A bilingual website for a Riga building engineering company, presenting heating, plumbing, ventilation and gas system services for residential and commercial buildings.",
    url: "https://firstcompany.lv/",
    domain: "firstcompany.lv",
    image: "/images/firstcompany.jpg",
  },
  {
    name: "CreditoColombia.co",
    category: "Financial comparison platform",
    description:
      "An independent comparison platform for Colombian credit products, built around dense, structured information and clear side-by-side reading.",
    url: "https://creditocolombia.co/",
    domain: "creditocolombia.co",
    image: "/images/creditocolombia.jpg",
  },
  {
    name: "Hoy.credit",
    category: "Financial comparison platform · Mexico",
    description:
      "A Mexican credit comparison platform focused on transparent cost presentation, with a fast, editorial interface across desktop and mobile.",
    url: "https://hoy.credit/",
    domain: "hoy.credit",
    image: "/images/hoycredit.jpg",
  },
  {
    name: "FinRomania",
    category: "Financial comparison platform · Romania",
    description:
      "A Romanian credit comparison site combining practical cost guidance with a clear safety checklist for evaluating online lenders.",
    url: "https://finromania.com/",
    domain: "finromania.com",
    image: "/images/finromania.jpg",
  },
  {
    name: "INACHE",
    category: "Real estate website",
    description:
      "A multilingual property agency website that keeps residential and commercial listings direct, visual and easy to navigate.",
    url: "https://inache.lv/",
    domain: "inache.lv",
    image: "/images/inache.jpg",
  },
  {
    name: "ABC-CONTI",
    category: "Commercial real estate website",
    description:
      "A restrained multilingual website for commercial property listings, presenting parking and office spaces in central Riga.",
    url: "https://conti.lv/",
    domain: "conti.lv",
    image: "/images/conti.jpg",
  },
  {
    name: "POLANTA",
    category: "Multi-service business website",
    description:
      "A warm, straightforward website bringing the company’s web development, photography and car rental services into one place.",
    url: "https://polanta.lv/",
    domain: "polanta.lv",
    image: "/images/polanta.jpg",
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

export const TECH = ["React", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind", "Git / GitHub"];
