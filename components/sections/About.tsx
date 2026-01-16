'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '30L+', label: 'LinkedIn Impressions' },
  { number: '200+', label: 'User Stories Managed' },
  { number: '3.8M+', label: 'Content Reach' },
  { number: '85%', label: 'Error Reduction' },
  { number: '3+', label: 'Major Projects' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Story
          </motion.h2>
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <Quote className="text-primary" size={24} />
            <p className="text-xl md:text-2xl text-primary/90 font-medium italic">
              Impatient with action. Patient with results.
            </p>
            <Quote className="text-primary rotate-180" size={24} />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div 
            className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
              {/* Main Story */}
              <motion.p 
                className="text-base md:text-lg text-white/90 leading-relaxed mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hey! I'm Naresh, and here's what drives me: I don't claim to know everything, but give me 4-5 hours, and I'll be there.<br />
                That's not arrogance; it's confidence in my ability to learn. In a world obsessed with "expertise," I've learned that the real superpower is knowing how to figure things out, fast.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-white/90 leading-relaxed mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I approach learning like a founder approaches building, start messy, iterate fast, and don't wait for perfect.<br />
                Whether it's a new framework, a business concept, or understanding how AI actually works, I dive in. I break it down. I build something with it. That's how I went from zero to building production apps, mentoring developers, and creating content that reaches millions.
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-white/90 leading-relaxed mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                What excites me most? The intersection of technology, startups, and real-world impact.<br />
                I'm not here to just write code, I'm here to build things that solve problems, create value, and maybe change a few lives along the way. That's why I share everything I learn. Because knowledge compounds when you give it away.
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-primary/90 leading-relaxed mb-5 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Still that curious kid who gets excited by the world of startups, technology, & business.<br />
                Sharing what I learn with <strong className="text-primary">2.8M+ curious minds</strong>. Absolute Learner. Forever Student.
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Beyond the screen? I'm into cricket, deep conversations about ideas that matter, and connecting with people who are building something real.<br />
                If you're working on something interesting, need guidance, or just want to talk about tech, startups, or that next big idea. I'm all ears. Let's build something together.
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-xl p-6 text-center cursor-pointer hover:border-primary/40 transition-all"
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
