'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const projects = [
  {
    label: 'Property Management',
    title: 'HotelEase — PMS',
    description:
      'Led end-to-end feature development for a US-based hotel Property Management System. Defined and managed 200+ user stories across a team of 3 developers.',
    highlights: [
      'Room booking & guest information management',
      'Housekeeping workflows and payment gateway integration',
      'Real-time notification services',
    ],
    tech: ['Angular', 'Node.js', 'SQL Server', 'Azure'],
  },
  {
    label: 'Workforce Management',
    title: 'Scheduler Application',
    description:
      'Built from scratch for retail stores to manage employee shifts, hours, and labor costs — with weekly & monthly sales projection analytics.',
    highlights: [
      '85% reduction in production errors through rigorous QA',
      'Shift planning and labor cost tracking',
      'Sales forecast dashboards',
    ],
    tech: ['Angular', 'Kendo UI', 'RxJS', 'SQL Server', 'Azure DevOps'],
  },
  {
    label: 'E-Commerce',
    title: 'Full-Stack Shop Platform',
    description:
      'Full-featured e-commerce application with product management, shopping cart, and payment processing from cart to checkout.',
    highlights: [
      'Add-to-cart and full checkout flow',
      'Optimised SQL queries with EF Core & LINQ',
      'Responsive Angular frontend',
    ],
    tech: ['C#', 'ASP.NET Web API', 'Angular', 'SQL Server'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">Projects</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--text)' }}>
            What I&apos;ve Built
          </h2>
          <div className="section-divider" />
          <p className="text-sm mt-3 mb-12" style={{ color: 'var(--text-dim)' }}>
            Real projects shipped to production
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.08}>
              <div className="card p-6 flex flex-col h-full">
                <span className="chip mb-4 self-start text-xs">{project.label}</span>

                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.map(h => (
                    <li key={h} className="flex gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div
                  className="pt-4 flex flex-wrap gap-2"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  {project.tech.map(t => (
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
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
