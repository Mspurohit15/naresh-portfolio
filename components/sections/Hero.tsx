'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Github, Linkedin, Book, Mail, Code2, Sparkles, Zap, Rocket } from 'lucide-react';
import { useRef } from 'react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/MSpurohit15', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/Mspurohit15', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nareshpurohit', label: 'LinkedIn' },
  { icon: Book, href: 'https://dev.to/mspurohit15', label: 'Dev.to' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nareshkumarpurohit7890@gmail.com', label: 'Email' },
];

const roles = [
  '💻 Passionate Developer',
  '📝 Content Creator',
  '🚀 Startup Enthusiast',
];

// Floating icons for visual interest - including social media
const floatingIcons = [
  { Icon: Code2, delay: 0, x: '10%', y: '20%', duration: 8, rotate: true },
  { Icon: Twitter, delay: 0.3, x: '85%', y: '15%', duration: 10, rotate: false },
  { Icon: Linkedin, delay: 0.6, x: '15%', y: '70%', duration: 12, rotate: false },
  { Icon: Mail, delay: 0.9, x: '80%', y: '65%', duration: 9, rotate: true },
  { Icon: Sparkles, delay: 1.2, x: '5%', y: '45%', duration: 11, rotate: true },
  { Icon: Github, delay: 1.5, x: '90%', y: '40%', duration: 13, rotate: false },
  { Icon: Zap, delay: 1.8, x: '12%', y: '85%', duration: 10, rotate: true },
  { Icon: Rocket, delay: 2.1, x: '88%', y: '80%', duration: 14, rotate: true },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={index}
              className="absolute text-primary/30"
              style={{ left: item.x, top: item.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
                rotate: item.rotate ? [0, 360] : 0,
                x: [0, Math.random() > 0.5 ? 30 : -30, 0],
                y: [0, Math.random() > 0.5 ? 20 : -20, 0],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon size={80} />
            </motion.div>
          );
        })}
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-primary/30"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="text-primary" size={16} />
            </motion.div>
            <span className="text-sm text-white/80">Available for exciting opportunities</span>
          </motion.div>

          {/* Main Heading with Letter Animation */}
          <div className="mb-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-2"
            >
              {['Hi, ', "I'm ", 'Naresh ', 'Purohit'].map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: wordIndex * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block gradient-text mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Animated Subtitle with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl text-white/80 font-light">
              Full Stack Software Engineer
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-8"
          >
            Building Solutions, One Commit at a Time<br />
            Sharing Insights on Tech & Innovation
          </motion.p>

          {/* Animated Roles with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 glass rounded-full border border-primary/30 cursor-default"
              >
                <span className="text-primary text-base md:text-lg font-medium">
                  {role}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links - Fixed Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  whileHover={{ 
                    x: -8, 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-full border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-smooth"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Mobile Social Links - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex lg:hidden items-center justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-full border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-smooth"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center mb-10"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full shadow-lg overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
