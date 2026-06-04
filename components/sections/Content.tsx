'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Eye, ExternalLink } from 'lucide-react';

const featuredPosts = [
  {
    label: 'Featured Post',
    title: 'High-Impact LinkedIn Post #1',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7314131845250453505',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7314131845250453505/',
  },
  {
    label: 'Featured Post',
    title: 'High-Impact LinkedIn Post #2',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7219560811713728513',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7219560811713728513/',
  },
];

export default function Content() {
  return (
    <section id="content" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">Content</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
            Content &amp; Insights
          </h2>
          <div className="section-divider" style={{ margin: '12px 0 12px' }} />
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Sharing insights on tech, startups &amp; software engineering with 3.8M+ professionals
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex flex-wrap items-center gap-6 mb-12 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value: '3.8M+', label: 'Total Reach' },
              { value: '3M+', label: 'LinkedIn Impressions' },
              { value: '2.8M+', label: 'Followers Reached' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold font-heading" style={{ color: '#6c63ff' }}>
                  {s.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <AnimatedSection key={post.postUrl} delay={index * 0.1}>
              <div className="card overflow-hidden flex flex-col">
                {/* Card header */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div>
                    <span className="chip text-xs mb-1 inline-block">{post.label}</span>
                    <p className="text-sm font-medium text-white">{post.title}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    <Eye size={13} />
                    High Engagement
                  </div>
                </div>

                {/* Embed */}
                <div className="relative" style={{ background: '#111118' }}>
                  <iframe
                    src={post.embedUrl}
                    height="380"
                    className="w-full border-0 block"
                    title={post.title}
                  />
                  {/* Fade bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, #111118 0%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Footer */}
                <div className="px-6 py-4">
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm py-2 px-4"
                    style={{ borderRadius: '8px' }}
                  >
                    <ExternalLink size={14} />
                    View Full Post
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
