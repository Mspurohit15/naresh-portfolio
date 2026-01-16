'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Code, Laptop, Server, Database, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
  },
  {
    icon: Laptop,
    title: 'Frontend Development',
    skills: ['Angular', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'Material UI', 'Kendo UI', 'RxJS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['ASP.NET Core', 'Node.js', 'EF Core', 'RESTful APIs', 'SignalR', 'OOP'],
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    skills: ['SQL Server', 'MySQL', 'Azure Cloud', 'Azure DevOps', 'Git', 'CI/CD'],
  },
  {
    icon: Brain,
    title: 'AI & LLMs',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering', 'AI Integration'],
  },
  {
    icon: Zap,
    title: 'Tools & Others',
    skills: ['VS Code', 'Visual Studio', 'Postman', 'Figma', 'Agile/Scrum'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How I Build
          </motion.h2>
          <motion.p
            className="text-center text-white/60 mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="glass rounded-2xl p-8 transition-smooth relative overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/30"
                >
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  />

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.3 }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                        className="p-3 bg-gradient-to-br from-primary/30 to-primary-light/30 rounded-xl"
                      >
                        <Icon className="text-primary" size={28} />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-semibold text-primary">
                        {category.title}
                      </h3>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5, 
                            delay: skillIndex * 0.05,
                            type: 'spring',
                            stiffness: 250,
                            damping: 15,
                          }}
                          whileHover={{ 
                            scale: 1.2, 
                            y: -8,
                            rotate: [0, -5, 5, 0],
                            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-white/90 cursor-pointer hover:bg-primary/30 hover:border-primary/50 transition-all font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
