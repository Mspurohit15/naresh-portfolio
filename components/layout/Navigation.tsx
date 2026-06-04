'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.substring(1));
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          return r.top <= 120 && r.bottom >= 120;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="text-lg font-heading font-semibold transition-colors duration-200"
          style={{ color: 'var(--text)' }}
        >
          Naresh<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: activeSection === link.href.substring(1)
                    ? 'var(--accent)'
                    : 'var(--text-muted)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => {
                  e.currentTarget.style.color =
                    activeSection === link.href.substring(1)
                      ? 'var(--accent)'
                      : 'var(--text-muted)';
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: toggle + hire button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: 'var(--nav-bg)',
            borderBottom: '1px solid var(--nav-border)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left py-3 text-sm font-medium transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary w-full text-sm"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
