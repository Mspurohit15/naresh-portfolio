'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer (Full Stack)',
    company: 'Veloxcore Pvt Ltd. | Ahmedabad, Gujarat, India',
    date: 'July 2023 – Present',
    responsibilities: [
      'Built a scheduler app from scratch for stores to manage shifts, hours, and costs, including sales projection features for weekly and monthly analytics',
      'Designed and implemented core features using Angular, Kendo UI, Material, RxJS, and backend integrations with SQL Server',
      'Guided and mentored 2 junior developers, providing code reviews and task breakdowns for complex modules',
      'Managed deployment and release using Azure DevOps pipelines with Azure App Services, and scaled databases using Azure Elastic Database',
      'Personally handled manual real-time testing of each user story before release, reducing live environment errors by 85%',
    ],
  },
  {
    title: 'Intern - Software Engineer',
    company: 'Veloxcore Pvt Ltd. | Ahmedabad, Gujarat, India',
    date: 'Jan 2023 – July 2023',
    responsibilities: [
      'Developed an e-commerce application with C#, ASP.NET Web API, Angular, RxJS, and SQL Server',
      'Implemented add-to-cart, payment gateway, and product management features',
      'Built and consumed RESTful APIs and created responsive front-end applications',
      'Optimized SQL queries with EF and LINQ to improve performance and maintainability',
      'Applied dependency injection and design patterns for scalable architecture',
    ],
  },
  {
    title: 'Entrepreneurship & Startup Lead',
    company: 'IDE Club | GEC, Gandhinagar',
    date: 'June 2021 - June 2022',
    responsibilities: [
      'Led entrepreneurship & startup activities, encouraging creativity and new ideas',
      'Organized workshops and sessions to guide aspiring entrepreneurs',
      'Coordinated collaborative events with external experts and faculty',
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Revolution Software Club | Pune, Maharashtra, India',
    date: 'Mar 2021 - May 2022',
    responsibilities: [
      'Connected students with opportunities to learn and collaborate in the world of software and innovation',
      'Promoted club initiatives and encouraged participation to create an engaging learning environment',
      'Organized discussions, shared resources, and helped students collaborate on projects',
      'Focused on problem-solving, teamwork, and creativity beyond just coding',
      'Developed leadership skills while fostering a strong tech community within the college',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-center text-white/60 mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The path from zero to building at scale
          </motion.p>
        </AnimatedSection>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-primary/20 ml-4"></div>
          
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="glass rounded-2xl p-8 md:p-10 border-l-4 border-primary relative group cursor-pointer"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="hidden md:block absolute -left-[33px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-dark"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(102, 126, 234, 0.7)',
                      '0 0 0 10px rgba(102, 126, 234, 0)',
                      '0 0 0 0 rgba(102, 126, 234, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <motion.h3 
                        className="text-xl md:text-2xl font-semibold text-primary mb-2"
                        whileHover={{ x: 5 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-white/70">{exp.company}</p>
                    </div>
                    <span className="text-white/50 text-sm md:text-base whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 ml-5">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: i * 0.1,
                        }}
                        className="text-white/80 list-disc"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
