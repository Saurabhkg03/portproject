'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saurabhkg36@gmail.com',
      href: 'mailto:saurabhkg36@gmail.com',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Saurabhkg03',
      href: 'https://github.com/Saurabhkg03',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Saurabh Gaikwad',
      href: 'https://linkedin.com/in/saurabh-gaikwad-605a70228/',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-card mb-6"
          >
            <Send className="text-primary" size={32} />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="block group"
            >
              <Card className="glass-card p-6 h-full text-center hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`} />

                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full glass-card mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{method.label}</h3>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    {method.value}
                  </p>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="glass-card p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Collaborate</h2>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              I'm always interested in hearing about new projects, opportunities, or just chatting about technology and creativity.
            </p>
            <a
              href="mailto:saurabhkg36@gmail.com"
              className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <Mail size={20} />
              <span className="font-medium">Send me an email</span>
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
