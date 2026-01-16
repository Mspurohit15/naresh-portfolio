'use client';

import { motion } from 'framer-motion';

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #764ba2 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #302b63 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
