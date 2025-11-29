'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-slate-50/50 dark:bg-[#0B1120] transition-colors duration-500"
    >
      {/* Background Pattern - Technical Grid */}
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
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              Driving Digital Transformation through Code
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a high-impact{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                Full Stack Engineer
              </span>{' '}
              with over{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                5+ years
              </span>{' '}
              of experience architecting scalable fintech and enterprise
              solutions.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My expertise lies in the{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                Java Spring Boot
              </span>{' '}
              and{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                Next.js
              </span>{' '}
              ecosystems, where I bridge the gap between complex backend logic
              and intuitive frontend experiences.
            </p>

            {/* Quote Block */}
            <div className="pt-4 p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <p className="text-slate-700 dark:text-slate-300 italic">
                &quot;I don&apos;t just write code; I build systems that reduce
                latency, enhance security, and drive measurable business
                growth.&quot;
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-2 group"
            >
              Let&apos;s build something scalable
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Column: Bento Grid Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Large Highlight Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="sm:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {/* Abstract Icon */}
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-1">25%</div>
                <div className="text-blue-100 font-medium">
                  System Efficiency Boost
                </div>
                <p className="text-sm text-blue-200 mt-2 opacity-80">
                  Optimized legacy code & microservices for clients like Piramal
                  Finance.
                </p>
              </div>
            </motion.div>

            {/* Small Stat Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                5+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Years Experience
              </div>
            </motion.div>

            {/* Small Stat Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                15+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Projects Delivered
              </div>
            </motion.div>

            {/* Wide Split Card Bottom */}
            <motion.div
              whileHover={{ y: -5 }}
              className="sm:col-span-2 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between"
            >
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  30%
                </div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Lower Data Latency
                </div>
              </div>
              <div className="h-8 w-px bg-slate-300 dark:bg-slate-600 mx-4"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  40%
                </div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Fewer Vulnerabilities
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
