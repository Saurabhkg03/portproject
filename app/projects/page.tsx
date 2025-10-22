'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Solar Panels Detection from ISRO\'s Dataset',
      description: 'Implemented for detecting solar parks from images using ISRO\'s LISS4 sensors. Uses a U-net with MobileNet-V2 as the backbone. Competed at the GeoSpatial AI challenge at VNIT Nagpur.',
      tags: ['Tensorflow', 'Python', 'CNNs', 'U-Net', 'QGIS'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Amazon Reviews Scraper and Data Analysis',
      description: 'Reviews scraper using Splash JS with Docker. Performs data analysis of collected data using LLMs like ChatGPT and Claude AI to generate complete product insights.',
      tags: ['Python', 'Docker', 'Splash JS', 'BeautifulSoup', 'Flask'],
      gradient: 'from-orange-500 to-pink-600',
    },
    {
      title: 'AI Homepage Chrome Extension',
      description: 'A new tab extension in the style of macOS to access all the latest useful AI tools. Leveraged Chrome APIs for seamless integration.',
      tags: ['JavaScript', 'CSS', 'HTML', 'Chrome APIs'],
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of my work showcasing AI/ML, DevOps automation, and creative coding projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="glass-card p-6 h-full flex flex-col hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Sparkles className={`text-cyan-400 group-hover:scale-110 transition-transform`} size={24} />
                    <ExternalLink className="text-foreground/40 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full glass-card text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 mb-4">Want to see more?</p>
          <a
            href="https://github.com/Saurabhkg03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 group"
          >
            Visit My GitHub
            <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
