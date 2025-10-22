'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, FileText, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Apexa iQ, USA',
      role: 'DevOps & Automation Intern',
      description: 'Developed and tested (Pytest) Python automation scripts (Selenium) and containerized applications (Docker) within a cybersecurity-focused DevOps lifecycle.',
      icon: Briefcase,
    },
    {
      company: 'Kirdak Group, Sambhajinagar',
      role: 'On-Site Project Intern',
      description: 'Led a project to reduce rejection rates in pulsar coils by 20% through root cause analysis. Included 15 days of intensive on-plant training.',
      icon: Briefcase,
    },
    {
      company: 'OneSmarter Inc, USA',
      role: 'AI & ML Intern',
      description: 'Led a team of 4 to develop AI products for clients from USA and Israel, gaining real-world industry exposure.',
      icon: Briefcase,
    },
  ];

  const publication = {
    title: 'System for Mapping of Flood and Early Warning Configuration by Means of a UAV',
    pubNo: 'Patent Pub. No. 202523064402 A (Awaiting Grant)',
    description: 'Designed a UAV-based system for real-time flood mapping using AI models (CNNs, LSTMs) and 3D mapping tools.',
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Experience & <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Professional journey and research contributions
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-12 gradient-text"
          >
            Work Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <div className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background" />

                  <Card className="glass-card p-6 md:ml-20 hover:bg-white/5 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                        <p className="text-primary mb-3">{exp.role}</p>
                        <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-12 gradient-text">Publications & Patents</h2>

          <Card className="glass-card p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <FileText className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{publication.title}</h3>
                <div className="flex items-center gap-2 text-sm text-primary mb-4">
                  <Calendar size={16} />
                  <span>{publication.pubNo}</span>
                </div>
                <p className="text-foreground/70 leading-relaxed">{publication.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
