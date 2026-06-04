'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { MapPin } from 'lucide-react';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '200+', label: 'User Stories' },
  { number: '3', label: 'Production Apps' },
  { number: '85%', label: 'Error Reduction' },
  { number: '2', label: 'Devs Mentored' },
  { number: '5+', label: 'Tech Stacks' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--section-alt)' }}>
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">About Me</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--text)' }}>
            My Story
          </h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">

          {/* Bio */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <div className="card p-8 h-full">

              {/* Location pill */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-sm"
                style={{
                  background: 'var(--green-bg)',
                  border: '1px solid var(--green-border)',
                  color: 'var(--green-text)',
                }}
              >
                🇩🇪 <MapPin size={13} />
                Based in Berlin, Germany &middot; Open to Europe
              </div>

              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Hey! I&apos;m Naresh — a Full Stack Software Engineer who recently relocated to{' '}
                <strong style={{ color: 'var(--text)' }}>Berlin, Germany</strong>. I&apos;m actively
                looking for engineering roles across Europe — remote, hybrid, or on-site. My German is at{' '}
                <strong style={{ color: 'var(--text)' }}>B1 level</strong> and improving every day.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Over 3+ years I&apos;ve built production-grade web applications, mentored junior developers,
                and managed 200+ user stories end-to-end. My core stack is Angular, ASP.NET Core, and Azure —
                with hands-on experience in SQL Server, Azure DevOps CI/CD, and RESTful API design.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                I approach engineering the way a founder approaches building — start lean, iterate fast,
                and always keep the end-user in mind. I&apos;ve reduced live environment errors by{' '}
                <strong style={{ color: 'var(--accent)' }}>85%</strong> through disciplined manual
                testing and quality ownership before every release.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                If you&apos;re building something interesting in Europe — I&apos;d love to talk. Let&apos;s create something great together.
              </p>

              <p className="mt-6 text-sm italic" style={{ color: 'var(--text-dim)' }}>
                &ldquo;Impatient with action. Patient with results.&rdquo;
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="lg:col-span-2" delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(stat => (
                <div key={stat.label} className="card p-5 text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold font-heading mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-dim)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
