'use client';
import { motion } from 'framer-motion';

const experience = [
  {
    company: 'Ataloud Technologies',
    role: 'Full Stack Engineer',
    period: 'Jan 2023 - Present',
    description:
      'Engineering high-volume fintech solutions for leading NBFCs. Leading development of internal platforms and optimizing backend performance for high-throughput systems.',
    achievements: [
      'Boosted asset efficiency by 25% via architecture optimization',
      'Reduced data latency by 30% with Redis caching strategies',
      'Cut transaction processing time by 15% using async processing',
    ],
    tech: ['Spring Boot', 'Next.js', 'MongoDB', 'Kafka'],
  },
  {
    company: 'Applore Technologies',
    role: 'Full Stack Engineer',
    period: 'Dec 2021 - Dec 2022',
    description:
      'Led development for major enterprise projects including Fleet Management and Cloud Solutions. Implemented rigorous testing protocols to ensure 99.9% stability.',
    achievements: [
      'Delivered 8 enterprise-grade solutions from scratch',
      'Achieved 98% reduction in critical bugs via Cypress testing',
      'Improved API response times by 25% through query optimization',
    ],
    tech: ['Node.js', 'React', 'AWS', 'Docker'],
  },
  {
    company: 'Freelance & Consulting',
    role: 'Full Stack Developer',
    period: 'Jan 2018 - Nov 2021',
    description:
      'Solely architected custom ERP systems and digital solutions for educational institutions. Managed entire lifecycle from requirements to deployment.',
    achievements: [
      'Digitized manual records reducing errors by 90%',
      'Architected school ERP handling 10k+ daily requests',
      'Automated reporting saving 10+ hours/week for admin staff',
    ],
    tech: ['PHP/Laravel', 'MySQL', 'JavaScript', 'DigitalOcean'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Work{' '}
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900 z-20 mt-6 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]">
                  <div className="w-full h-full rounded-full bg-blue-500/50 animate-ping" />
                </div>

                {/* Empty Space for Grid Alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <svg
                            className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-md"
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
      </div>
    </section>
  );
}
