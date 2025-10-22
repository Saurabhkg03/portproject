'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['AI/ML Engineer', 'DevOps & Automation', 'Creative Coder'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">Saurabh Gaikwad</span>
            </motion.h1>

            <div className="h-20 flex items-center justify-center mb-8">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80"
              >
                {roles[currentRole]}
              </motion.p>
            </div>

            <motion.p
              className="text-lg sm:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about the intersection of technology and creativity. I like Art, Music and Computers!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/projects">
                <motion.button
                  className="group glass-card px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-foreground/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
