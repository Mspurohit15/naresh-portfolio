'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Linkedin, MessageSquare, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Floating icons for visual interest
const floatingIcons = [
  { Icon: Mail, delay: 0, x: '8%', y: '15%', size: 40 },
  { Icon: Linkedin, delay: 0.5, x: '88%', y: '20%', size: 45 },
  { Icon: MessageSquare, delay: 1, x: '12%', y: '75%', size: 35 },
  { Icon: Code2, delay: 1.5, x: '85%', y: '70%', size: 38 },
  { Icon: Sparkles, delay: 0.8, x: '50%', y: '10%', size: 30 },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-12">
            Get In Touch
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Floating Icons Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {floatingIcons.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <motion.div
                    key={index}
                    className="absolute text-primary"
                    style={{ left: item.x, top: item.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.15, 0.3, 0.15],
                      scale: [1, 1.15, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Icon size={item.size} />
                  </motion.div>
                );
              })}
            </div>

            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10">
              {/* Main Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed font-medium"
              >
                I'm here to help!
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Whether it's collaboration opportunities, technical guidance, or just a friendly chat about technology and startups - I'd love to connect. Got questions? Need advice? Want to build something together? Reach out!
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
                {/* Send Email Button */}
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nareshkumarpurohit7890@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full shadow-lg overflow-hidden min-w-[200px]"
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
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Send Email
                  </span>
                </motion.a>

                {/* Connect on LinkedIn Button */}
                <motion.a
                  href="https://www.linkedin.com/in/nareshpurohit"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3.5 glass border-2 border-primary/50 text-white font-semibold rounded-full hover:border-primary transition-all min-w-[200px]"
                >
                  {/* Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </span>
                </motion.a>
              </div>

              {/* Additional Social Links */}
              <AnimatedSection delay={0.6}>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-3">Or find me on</p>
                  <div className="flex items-center justify-center gap-6">
                    <motion.a
                      href="https://twitter.com/MSpurohit15"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/60 hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/Mspurohit15"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/60 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="https://dev.to/mspurohit15"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/60 hover:text-primary transition-colors"
                      aria-label="Dev.to"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
