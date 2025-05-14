import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiChartdotjs,
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: "#00cfff" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#228b22" },
  firebase: { icon: SiFirebase, name: "Firebase", color: "#fbbf00" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06b6d4" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#1f6feb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#10b981" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#186997" },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: "#6366f1" },
  framer: { icon: SiFramer, name: "Framer Motion", color: "#2563eb" },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: "#000000" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#5b4df1" },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: "#ff3d00" },
  sveltekit: { icon: SiTailwindcss, name: "SvelteKit", color: "#ff3e00" }, // Using SiTailwindcss as a fallback
  flowbite: { icon: SiTailwindcss, name: "Flowbite", color: "#06b6d4" }, // Using SiTailwindcss as Flowbite is Tailwind-based
  chartjs: { icon: SiChartdotjs, name: "Chart.js", color: "#ff6384" }, // Chart.js brand color
};

// Define projects data
const projects = [
  {
    title: "WT Management",
    description:
      "A SvelteKit app for weight and BMI tracking, featuring Firebase Authentication, Chart.js visualizations, Firestore data synchronization, and a mobile-friendly UI.",
    image: "/assets/wt_image.png",
    link: "https://wt-management-8bo.vercel.app/",
    github: "https://github.com/code-with-aneesh/wt-management",
    techStack: [
      techStacks.sveltekit,
      techStacks.firebase,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.chartjs,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
