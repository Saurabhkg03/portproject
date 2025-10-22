'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, Scissors, Cog, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FabLab() {
  const modules = [
    {
      id: 'cad',
      label: 'CAD',
      icon: Cpu,
      title: 'Computer-Aided Design',
      description: 'Used Fusion 360, a 3D CAD, CAM, and CAE software, for designing, engineering, and manufacturing products. Learned to create parametric models, assemblies, and technical drawings for digital fabrication.',
      highlights: [
        'Parametric 3D modeling',
        'Assembly design',
        'Technical drawing generation',
        'Design for manufacturing',
      ],
    },
    {
      id: 'laser',
      label: 'Laser Cutting',
      icon: Scissors,
      title: 'Laser Cutting & Engraving',
      description: 'Learned to create intricate designs using a laser cutter on materials like Acrylic, Wood, and Cardboard. Focused on safety guidelines, design preparation, and material optimization for precision cutting and engraving.',
      highlights: [
        'Vector design preparation',
        'Material selection and testing',
        'Safety protocols',
        'Precision cutting techniques',
      ],
    },
    {
      id: 'cnc',
      label: 'CNC',
      icon: Cog,
      title: 'Computer Numerical Control',
      description: 'Operated CNC machines for automated machining on wood, plastic, and metal. Learned about the control panel, spindle operations, axis system, and toolpath generation for precision manufacturing.',
      highlights: [
        'G-code programming',
        'Toolpath optimization',
        'Material machining',
        'Precision control systems',
      ],
    },
    {
      id: 'web',
      label: 'Web Dev',
      icon: Globe,
      title: 'Web Development',
      description: 'A foundational module on creating and managing websites, covering HTML, CSS, and JavaScript fundamentals. Built responsive web projects and learned modern web development practices.',
      highlights: [
        'HTML5 structure',
        'CSS3 styling',
        'JavaScript interactivity',
        'Responsive design',
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Back to About
          </Link>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            FabLab <span className="gradient-text">Modules</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-3xl">
            During my time at the SSGMCE FabLab, I worked with various digital fabrication tools. Here's a summary of the modules and projects I completed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="cad" className="w-full">
            <TabsList className="glass-card w-full justify-start overflow-x-auto mb-8 p-2 h-auto flex-wrap">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <TabsTrigger
                    value={module.id}
                    className="flex items-center gap-2 data-[state=active]:bg-white/10 px-4 py-2"
                  >
                    <module.icon size={18} />
                    {module.label}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="glass-card p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-primary/10">
                        <module.icon className="text-primary" size={32} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{module.title}</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </div>
                    </div>

                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      {module.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Key Highlights</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {module.highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 glass-card p-3 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                            <span className="text-foreground/80">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-lg bg-white/5">
                      <p className="text-sm text-foreground/60 text-center">
                        Practical experience gained through hands-on projects at SSGMCE FabLab
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
