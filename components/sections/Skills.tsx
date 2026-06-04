'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Code, Laptop, Server, Database, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Java'],
  },
  {
    icon: Laptop,
    title: 'Frontend',
    skills: ['Angular', 'React.js', 'Next.js', 'RxJS', 'Tailwind CSS', 'Kendo UI', 'Material UI'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['ASP.NET Core', 'Node.js', 'RESTful APIs', 'SignalR', 'EF Core'],
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    skills: ['SQL Server', 'MySQL', 'Azure Cloud', 'Azure DevOps', 'CI/CD'],
  },
  {
    icon: Brain,
    title: 'AI & Integration',
    skills: ['ChatGPT API', 'Claude', 'Gemini', 'Prompt Engineering', 'AI Integration'],
  },
  {
    icon: Wrench,
    title: 'Workflow',
    skills: ['Git', 'Agile / Scrum', 'Postman', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">Skills</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--text)' }}>
            How I Build
          </h2>
          <div className="section-divider" />
          <p className="text-sm mt-3 mb-12" style={{ color: 'var(--text-dim)' }}>
            Technologies and tools I use to ship production software
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={cat.title} delay={index * 0.06}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-bg)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="chip text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
