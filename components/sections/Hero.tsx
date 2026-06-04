'use client';

import { Twitter, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/MSpurohit15', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/Mspurohit15', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nareshpurohit7890/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nareshkumarpurohit7890@gmail.com', label: 'Email' },
];

const chips = ['Full Stack Developer', 'Angular & ASP.NET', 'Open to Europe'];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">

          {/* Open to work badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-8 px-3.5 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'var(--green-bg)',
              border: '1px solid var(--green-border)',
              color: 'var(--green-text)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: 'var(--green-text)',
                boxShadow: '0 0 0 3px var(--dot-glow)',
              }}
            />
            Open to opportunities &middot; Germany & Europe
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
            Naresh<br />
            <span className="gradient-text">Purohit</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl font-light mb-3" style={{ color: 'var(--text-muted)' }}>
            Full Stack Software Engineer
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-6" style={{ color: 'var(--text-dim)' }}>
            <MapPin size={14} />
            <span className="text-sm">Berlin, Germany &middot; German B1 &middot; Remote &amp; On-site across Europe</span>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Building scalable web applications with Angular, ASP.NET &amp; Azure. 3+ years of production experience shipping features used by thousands of users.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {chips.map(c => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button onClick={scrollToContact} className="btn-primary">
              Get In Touch
            </button>
            <a
              href="https://www.linkedin.com/in/nareshpurohit7890/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <ExternalLink size={15} />
              LinkedIn
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socialLinks.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors duration-200"
                  style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
