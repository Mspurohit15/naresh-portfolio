'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Github, Twitter, Send, User, AtSign, FileText, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nareshkumarpurohit7890@gmail.com',
    href: 'mailto:nareshkumarpurohit7890@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Berlin, Germany 🇩🇪',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Mspurohit15', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/MSpurohit15', label: 'Twitter / X' },
  { icon: Mail, href: 'mailto:nareshkumarpurohit7890@gmail.com', label: 'Email' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `Hi Naresh,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`
    );
    window.open(
      `mailto:nareshkumarpurohit7890@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
      '_blank'
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const isValid = form.name.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--section-alt)' }}>
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <span className="section-label">Contact</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--text)' }}>
            Get In Touch
          </h2>
          <div className="section-divider mb-12" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: info */}
          <AnimatedSection className="lg:col-span-2" delay={0.05}>
            <div className="flex flex-col gap-5">

              {/* Open to work */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: 'var(--green-bg)',
                  border: '1px solid var(--green-border)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: 'var(--green-text)',
                      boxShadow: '0 0 0 3px var(--dot-glow)',
                    }}
                  />
                  <span className="text-sm font-semibold" style={{ color: 'var(--green-text)' }}>
                    Open to Work
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Available for Full Stack Engineering roles across Europe — remote, hybrid, or on-site.
                  Based in Berlin, Germany.
                </p>
              </div>

              {/* Contact details */}
              <div className="card p-6 flex flex-col gap-4">
                {contactInfo.map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--accent-bg)' }}
                      >
                        <Icon size={14} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: 'var(--text-dim)' }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm transition-colors"
                            style={{ color: 'var(--text)', wordBreak: 'break-all' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: 'var(--text)' }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="card p-5">
                <p className="text-xs mb-4" style={{ color: 'var(--text-dim)' }}>
                  Find me online
                </p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <Icon size={15} />
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <div className="card p-8">
              <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Send a Message
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
                Fill in the details below and I&apos;ll get back to you promptly.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <User size={11} className="inline mr-1" />
                      Full Name
                    </label>
                    <input
                      id="c-name" name="name" type="text" required
                      value={form.name} onChange={onChange}
                      placeholder="e.g. Maria Schmidt"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-email"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <AtSign size={11} className="inline mr-1" />
                      Email Address
                    </label>
                    <input
                      id="c-email" name="email" type="email" required
                      value={form.email} onChange={onChange}
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="c-subject"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <FileText size={11} className="inline mr-1" />
                    Subject
                  </label>
                  <input
                    id="c-subject" name="subject" type="text" required
                    value={form.subject} onChange={onChange}
                    placeholder="e.g. Frontend Developer Role — Berlin"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <MessageSquare size={11} className="inline mr-1" />
                    Message
                  </label>
                  <textarea
                    id="c-message" name="message" required rows={5}
                    value={form.message} onChange={onChange}
                    placeholder="Tell me about the role, your project, or just say hello..."
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" disabled={!isValid} className="btn-primary w-full">
                  {sent ? '✓ Opening your email client...' : <><Send size={14} /> Send Message</>}
                </button>

                <p className="text-xs text-center" style={{ color: 'var(--text-dim)' }}>
                  This opens your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
