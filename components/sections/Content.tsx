'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Eye, Flame, Linkedin as LinkedinIcon } from 'lucide-react';

const featuredPosts = [
  {
    title: '🚀 Featured High-Impact Post #1',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7314131845250453505',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7314131845250453505/',
  },
  {
    title: '💡 Featured High-Impact Post #2',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7219560811713728513',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7219560811713728513/',
  },
];

export default function Content() {
  return (
    <section id="content" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text text-center mb-8">
            Content & Insights
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Creating content on LinkedIn about technology, startups, and business. Sharing insights and learnings with a community of 2.8M+ professionals. My content has generated <strong className="text-primary">30+ Lakh impressions</strong>, sparking conversations about innovation and entrepreneurship.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <AnimatedSection key={post.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass rounded-2xl overflow-hidden transition-smooth border border-white/10 hover:border-primary/30"
              >
                {/* Post Header */}
                <div className="bg-gradient-to-r from-primary/20 to-primary-light/20 border-b border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Eye size={16} className="text-primary" />
                      High Engagement
                    </span>
                    <span className="flex items-center gap-2">
                      <Flame size={16} className="text-primary" />
                      Trending
                    </span>
                  </div>
                </div>
                
                {/* LinkedIn Embed with Dark Frame */}
                <div className="relative bg-gradient-to-br from-dark/50 to-dark-light/50 p-6">
                  {/* Dark overlay to blend white iframe */}
                  <div className="relative rounded-lg overflow-hidden">
                    {/* Subtle dark border */}
                    <div className="absolute inset-0 border-2 border-white/5 rounded-lg pointer-events-none z-10"></div>
                    
                    {/* LinkedIn iframe - reduced height for preview */}
                    <iframe
                      src={post.embedUrl}
                      height="400"
                      className="w-full border-0 rounded-lg"
                      title="LinkedIn Post"
                      style={{
                        filter: 'brightness(0.95) contrast(1.05)',
                      }}
                    />
                    
                    {/* Gradient fade at bottom to indicate more content */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark via-dark/80 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* View Full Post Button */}
                  <motion.a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <LinkedinIcon size={18} />
                    View Full Post
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
{/* 
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-2xl p-10 text-center bg-primary/10 border-primary/20">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">
              📱 Follow My Journey on LinkedIn
            </h3>
            <p className="text-white/70 mb-6 text-lg">
              Join 2.8M+ professionals staying updated with insights on technology, startups, and innovation
            </p>
            <a
              href="https://www.linkedin.com/in/nareshpurohit7890/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:scale-105 transition-smooth shadow-lg hover:shadow-primary/50"
            >
              <LinkedinIcon size={20} />
              Follow on LinkedIn
            </a>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
}
