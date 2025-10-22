'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Award, Users } from 'lucide-react';

export default function About() {
  const skills = {
    languages: ['C', 'C++', 'Python', 'Tensorflow', 'HTML', 'CSS', 'SQL'],
    tools: ['Linux', 'Matlab', 'Git', 'Github', 'QGIS', 'Docker', 'Figma', 'MongoDB'],
    core: ['Data Structures & Algorithms', 'Machine Learning', 'Data Analysis', 'Signal Processing'],
  };

  const volunteering = [
    {
      org: 'Google Developer Groups SSGMCE',
      role: 'Core Team Member - AI/ML Lead',
      description: 'Took workshops for a batch of 60+ students on AI and Machine Learning.',
      icon: Users,
    },
    {
      org: 'Mozilla Campus Club SSGMCE',
      role: 'Team Member',
      description: 'Arranged many technical events including a workshop on AR/VR modelling in Blender.',
      icon: Users,
    },
  ];

  const certifications = [
    'NPTEL Deep Learning - IIT Ropar (Top 1%)',
    'NPTEL - Introduction To Machine Learning - IIT Madras',
    'NSTI Hyderabad - Hands on IOT Training',
    'AWS Academy Machine Learning Foundations',
    'Google Cloud Computing Foundations Certificate',
    'Google Cloud Data Analytics Certificate',
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a Final Year Electronics and Telecommunication Engineering student at SSGMCE, Shegaon.
              I'm passionate about the intersection of technology and creativity. I like Art, Music and Computers!
            </p>
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
              <p className="text-foreground/70">
                <strong>B.Tech in Electronics and Telecommunication Engineering</strong>
                <br />
                Shri Sant Gajanan Maharaj College of Engineering
                <br />
                Shegaon, Maharashtra, India
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Technical Skills</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 glass-card rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 glass-card rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.core.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 glass-card rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Volunteering</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {volunteering.map((item, index) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-card p-6 h-full hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.org}</h3>
                      <p className="text-sm text-primary mb-2">{item.role}</p>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
              >
                <Card className="glass-card p-4 h-full hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-sm text-foreground/80">{cert}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/fablab">
            <Button
              size="lg"
              className="gradient-border bg-transparent hover:bg-white/5 text-lg px-8 py-6"
            >
              Explore My FabLab Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
