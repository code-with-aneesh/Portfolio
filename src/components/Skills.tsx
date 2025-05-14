import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiVercel,
  SiFlask,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFastapi,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  // Web Development
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },

  // Backend & Databases
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#186997",
    url: "https://www.prisma.io/",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ffca28",
    url: "https://firebase.google.com/",
  },

  // Python Web
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    url: "https://www.python.org/",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "#000000",
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    url: "https://fastapi.tiangolo.com/",
  },

  // AI/ML
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "#EE4C2C",
    url: "https://pytorch.org/",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    url: "https://www.tensorflow.org/",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    color: "#5C3EE8",
    url: "https://opencv.org/",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
    url: "https://pandas.pydata.org/",
  },
  { name: "NumPy", icon: SiNumpy, color: "#4D77CF", url: "https://numpy.org/" },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
    color: "#F7931E",
    url: "https://scikit-learn.org/",
  },

  // DevOps & Cloud
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    url: "https://www.docker.com/",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    url: "https://kubernetes.io/",
  },

  // Tools
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
    url: "https://code.visualstudio.com/",
  },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    url: "https://github.com/",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#ff6c37",
    url: "https://www.postman.com/",
  },
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    url: "https://vercel.com/",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
          ))}
        </div>
      </div>
    </section>
  );
}