import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Vidyalankar Institute of Technology, Mumbai',
    period: '2022 - 2026',
    score: '9.5 CGPA',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Thakur Vidya Mandir High School & Junior College, Kandivali',
    period: '2019 - 2021',
    score: '85%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Gokuldham High School & Junior College, Goregaon",
    period: '2017 - 2019',
    score: '96.6%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
