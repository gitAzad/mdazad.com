'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Securitization Platform',
    icon: '🏦',
    description:
      'High-volume fintech platform for leading NBFC using Spring Boot, Next.js, and MongoDB. Boosted asset efficiency by 25% with secure RESTful APIs.',
    tech: ['Spring Boot', 'Next.js', 'MongoDB', 'AWS'],
    link: '#',
    color: 'blue', // For specific hover styling
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Fleet Management System',
    icon: '🚚',
    description:
      'Enterprise fleet management platform with real-time tracking, analytics, route optimization, and advanced API integrations.',
    tech: ['Next.js', 'Node.js', 'Google Maps API', 'Tailwind'],
    link: '#',
    color: 'orange',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'B2B Sales Portal',
    icon: '🎯',
    description:
      'Enterprise B2B platform connecting dealers and distributors with inventory management, order processing, and analytics dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Educational ERP System',
    icon: '📚',
    description:
      'Custom ERP solution digitizing payment records and administrative processes. Reduced manual data entry errors by 90%.',
    tech: ['Node.js', 'MongoDB', 'React', 'AWS'],
    link: '#',
    color: 'purple',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Internal Fintech Platform',
    icon: '🏢',
    description:
      'Enterprise fintech solution with optimized backend scripts, increasing response time by 20% for high-frequency operations.',
    tech: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
    link: '#',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Cloud Enterprise Solution',
    icon: '☁️',
    description:
      'Scalable cloud-based platform with complex integrations and real-time data processing, achieving 98% bug reduction.',
    tech: ['Next.js', 'MongoDB', 'Jest', 'Cypress'],
    link: '#',
    color: 'teal',
    gradient: 'from-teal-500 to-green-600',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Pattern - Same as About for consistency */}
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
            A selection of high-impact solutions engineered for performance and
            scalability.
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
              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${proj.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                {/* Header: Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`
                    w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                    bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                    group-hover:scale-110 transition-transform duration-300
                  `}
                  >
                    {proj.icon}
                  </div>
                  <motion.a
                    href={proj.link}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm flex-grow">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
