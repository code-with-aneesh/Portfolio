import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Wii Labs USA and Mission Unicorn",
    period: "Apr 2025 - JUn 2024",
    description: `Spearheaded the development of a modern university social platform encompassing group management, forums, real-time messaging, and blogging functionalities. Implemented user authentication and profile management leveraging Firebase, ensuring secure and seamless user experiences. Contributed to a modular and responsive codebase using React, facilitating future scalability and maintainability. Integrated an e-commerce section for event tickets and products, enhancing platform engagement and potential revenue streams.`,
    skills: ["React", "Node.js", "Firebase", "Firestore", "TypeScript"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
