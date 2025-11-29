'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Securitization Platform',
    category: 'Fintech Core',
    description:
      'High-volume asset management system for a leading NBFC. Optimized transaction flows boosting asset efficiency by 25%.',
    tech: ['Spring Boot', 'Next.js', 'MongoDB', 'AWS'],
    link: '#',
    gradient: 'from-blue-500 to-indigo-600',
    visualStyle: 'abstract-mesh',
  },
  {
    title: 'Enterprise Fleet Manager',
    category: 'Logistics Tech',
    description:
      'Real-time tracking & analytics platform handling thousands of concurrent data streams for enterprise logistics.',
    tech: ['Node.js', 'Google Maps', 'Redis', 'Socket.io'],
    link: '#',
    gradient: 'from-orange-500 to-red-600',
    visualStyle: 'geo-pattern',
  },
  {
    title: 'B2B Commerce Portal',
    category: 'E-Commerce',
    description:
      'Unified distributor platform connecting dealers with inventory management, order processing, and analytics.',
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'Redis'],
    link: '#',
    gradient: 'from-emerald-500 to-teal-600',
    visualStyle: 'grid-lock',
  },
  {
    title: 'Institutional ERP',
    category: 'EdTech',
    description:
      'Comprehensive management system digitizing admin workflows, reducing manual data entry errors by 90%.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
    gradient: 'from-purple-500 to-pink-600',
    visualStyle: 'flow-chart',
  },
  {
    title: 'Internal Fintech Engine',
    category: 'Financial Services',
    description:
      'Optimized backend calculation engine increasing response speeds by 20% for complex financial instruments.',
    tech: ['Java', 'Kafka', 'Microservices', 'Docker'],
    link: '#',
    gradient: 'from-cyan-500 to-blue-600',
    visualStyle: 'data-stream',
  },
  {
    title: 'Cloud Scaling Solution',
    category: 'DevOps',
    description:
      'Enterprise-grade cloud architecture implementation achieving 99.9% uptime and 98% bug reduction.',
    tech: ['AWS', 'CI/CD', 'Terraform', 'Kubernetes'],
    link: '#',
    gradient: 'from-indigo-500 to-violet-600',
    visualStyle: 'cloud-mesh',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-slate-50/50 dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured{' '}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            High-impact enterprise solutions engineered for scalability and
            performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                {/* 1. Abstract UI Header (The "Visual" Replacement) */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                  {/* Dynamic Gradient Mesh */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Decorative Elements mimicking UI */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proj.gradient} shadow-lg flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <Layers className="w-8 h-8 opacity-90" />
                    </div>
                    {/* Abstract UI Lines */}
                    <div className="w-3/4 h-2 bg-slate-200 dark:bg-slate-700/50 rounded-full mb-2 overflow-hidden">
                      <div
                        className={`h-full w-2/3 bg-gradient-to-r ${proj.gradient} opacity-30`}
                      />
                    </div>
                    <div className="w-1/2 h-2 bg-slate-200 dark:bg-slate-700/50 rounded-full" />
                  </div>

                  {/* Overlay Link Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-slate-900 dark:text-white" />
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r ${proj.gradient}`}
                    >
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {proj.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/50 mt-auto">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide rounded-md bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-900/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
