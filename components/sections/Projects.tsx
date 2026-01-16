'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '🏨 HotelEase (PMS)',
    description: 'Leading a Property Management System for US-based hotels, handling end-to-end feature development. Defined and managed 200+ user stories, supervising 2 developers to ensure timely delivery.',
    keyFeatures: 'Room booking, guest information management, housekeeping, payment gateway integration, and notification services.',
    tech: ['Node.js', 'Angular', 'SQL Server', 'Azure'],
  },
  {
    title: '📅 Scheduler Application',
    description: 'Built from scratch for retail stores to manage employee shifts, hours, and labor costs. Includes sales projection analytics for weekly and monthly reporting.',
    keyFeatures: 'Reduced production errors by 85% through comprehensive manual testing and quality assurance processes.',
    tech: ['Angular', 'Kendo UI', 'RxJS', 'SQL Server', 'Azure DevOps'],
  },
  {
    title: '🛒 E-Commerce Platform',
    description: 'Developed a full-featured e-commerce application with cart management, payment processing, and comprehensive product management system.',
    keyFeatures: 'Implemented responsive design and optimized database queries for enhanced performance.',
    tech: ['C#', 'ASP.NET Web API', 'Angular', 'SQL Server'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I've Built
          </motion.h2>
          <motion.p
            className="text-center text-white/60 mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real projects, real impact
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="glass rounded-2xl p-8 h-full flex flex-col transition-smooth relative overflow-hidden group cursor-pointer"
              >
                {/* Animated Border Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2, #667eea)',
                    backgroundSize: '200% 200%',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-semibold text-primary mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-white/70 mb-6 text-sm">
                    <strong>Key Features:</strong> {project.keyFeatures}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: techIndex * 0.05,
                          type: 'spring',
                          stiffness: 500,
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(102, 126, 234, 0.3)',
                        }}
                        className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-white/90"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
