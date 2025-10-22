'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/Saurabhkg03',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/saurabh-gaikwad-605a70228/',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:saurabhkg36@gmail.com',
      icon: Mail,
      label: 'Email'
    },
  ];

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            Made by Saurabh Gaikwad © 2024
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
