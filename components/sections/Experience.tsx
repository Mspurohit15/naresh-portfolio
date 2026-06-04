'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const experiences = [
  {
    title: 'Software Engineer — Full Stack',
    company: 'Veloxcore Pvt Ltd.',
    location: 'Ahmedabad, India',
    date: 'Jul 2023 – Apr 2026',
    responsibilities: [
      'Built a scheduler application from scratch for retail stores — managing employee shifts, hours, and labor costs with weekly & monthly sales projection analytics.',
      'Designed core features using Angular, Kendo UI, Material, RxJS with SQL Server and ASP.NET backend integrations.',
      'Mentored 2 junior developers through code reviews and complex module breakdowns.',
      'Managed CI/CD pipelines via Azure DevOps with Azure App Services and Azure Elastic Database.',
      'Reduced live environment errors by 85% through manual real-time testing of every user story before release.',
    ],
    tech: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure DevOps', 'Kendo UI', 'RxJS'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Veloxcore Pvt Ltd.',
    location: 'Ahmedabad, India',
    date: 'Jan 2023 – Jul 2023',
    responsibilities: [
      'Built a full-featured e-commerce application: product management, add-to-cart, and payment gateway.',
      'Built and consumed RESTful APIs with responsive Angular frontend.',
      'Optimised SQL queries with EF Core and LINQ for improved performance.',
      'Applied dependency injection and design patterns for a scalable architecture.',
    ],
    tech: ['C#', 'ASP.NET Web API', 'Angular', 'SQL Server', 'EF Core'],
  },
  {
    title: 'Entrepreneurship & Startup Lead',
    company: 'IDE Club — GEC Gandhinagar',
    location: 'Gandhinagar, India',
    date: 'Jun 2021 – Jun 2022',
    responsibilities: [
      'Led startup and entrepreneurship initiatives, organised expert workshops and sessions.',
      'Coordinated events with faculty and external industry professionals.',
    ],
    tech: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: 'var(--section-alt)' }}>
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--text)' }}>
            My Journey
          </h2>
          <div className="section-divider mb-12" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-0 top-2 bottom-2 w-px"
            style={{ background: 'var(--timeline-line)', marginLeft: '7px' }}
          />

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.title + exp.date} delay={index * 0.09}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2"
                    style={{
                      background: 'var(--bg)',
                      borderColor: 'var(--accent)',
                      marginLeft: '1px',
                    }}
                  />

                  <div className="card p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-base font-semibold mb-0.5" style={{ color: 'var(--text)' }}>
                          {exp.title}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                          {exp.company} &middot; {exp.location}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 self-start"
                        style={{
                          background: 'var(--accent-bg)',
                          color: 'var(--accent-purple)',
                          border: '1px solid var(--accent-border)',
                        }}
                      >
                        {exp.date}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    {exp.responsibilities.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            <span style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }}>›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech */}
                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-0.5 rounded-full"
                            style={{
                              background: 'var(--tag-bg)',
                              color: 'var(--tag-text)',
                              border: '1px solid var(--tag-border)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
