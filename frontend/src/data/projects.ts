import { IconType } from "react-icons";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { FaBlogger } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: IconType;
  liveDemo?: string;
  sourceCode?: string;
  sourceClient?: string;
  sourceServer?: string;
  type: "fullstack" | "dsa" | "system" | "ui" | "portfolio";
};

export const projects: Project[] = [
  {
    title: "MotoMart (MERN E-Commerce)",
    description:
      "Motorcycle e-commerce app with product uploads, admin panel, and Stripe payment.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    icon: SiMongodb,
    liveDemo: "https://moto-mart.vercel.app/",
    sourceClient: "https://github.com/sakibhasan-24/moto-mart",
    sourceServer: "https://github.com/sakibhasan-24/bike-shop",
    type: "fullstack",
  },
  {
    title: "BookSwap",
    description:
      "Book marketplace where users can buy/sell/rent. Admin dashboard, reviews, PDF, and stats.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Chart Js",
    ],
    icon: SiReact,
    liveDemo: "https://book-management-57c93.web.app/",
    sourceClient: "https://github.com/sakibhasan-24/book-management-client",
    sourceServer: "https://github.com/sakibhasan-24/book-exchange-server",
    type: "fullstack",
  },
  {
    title: "ThoughtShare",
    description:
      "Blog platform with like & comment system. Admins manage and publish blogs.",
    technologies: ["Next.js", "Tailwind", "MongoDB"],
    icon: FaBlogger,
    liveDemo: "https://thought-share-blog.web.app/",
    sourceServer: "https://github.com/sakibhasan-24/thought-share-server",
    sourceClient: "https://github.com/sakibhasan-24/thought-share",
    type: "fullstack",
  },
  {
    title: "DSA Tracker",
    description:
      "Practicing advanced DSA on LeetCode using C++, with focus on Arrays, Linked Lists, Trees, Graphs, AVL Trees, Topological Sort, and Bellman-Ford algorithm. Building strong problem-solving and algorithmic thinking skills.",

    technologies: ["C++", "GitHub"],
    icon: SiCplusplus,
    sourceCode: "https://github.com/sakibhasan-24/data-structure-and-algorithm",
    type: "dsa",
  },
  {
    title: "System Design Notes",
    description:
      "Markdown notes and visual diagrams on large-scale systems and architecture,learn solid design,UML etc.",
    technologies: ["Lucidchart", "Markdown"],
    icon: TbDatabaseCog,
    sourceCode: "https://github.com/sakibhasan-24/system-design",
    type: "system",
  },
  {
    title: "Mini UI Projects",
    description: "Creative mini-projects: modals",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: SiHtml5,
    liveDemo: "https://sakibhasan-24.github.io/manual-modal/",
    sourceCode: "https://github.com/sakibhasan-24/manual-modal",
    type: "ui",
  },
  {
    title: "Image Slider",
    description: "Creative mini-projects: manually",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: SiHtml5,
    sourceCode: "https://github.com/sakibhasan-24/image-slider",
    liveDemo: "https://sakibhasan-24.github.io/image-slider/",
    type: "ui",
  },
  {
    title: "Strong Password Generator",
    description: "Password generate using character",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: SiHtml5,
    liveDemo: "https://sakibhasan-24.github.io/password-stronger/",
    sourceCode: "https://github.com/sakibhasan-24/password-stronger",
    type: "ui",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio you're browsing now!",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    icon: SiFramer,
    liveDemo: "https://yourportfolio.vercel.app",
    sourceCode: "https://github.com/sakibhasan-24/portfolio",
    type: "portfolio",
  },
];
