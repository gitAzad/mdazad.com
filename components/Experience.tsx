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
      'Boosted asset efficiency by 25% via architecture optimization.',
      'Reduced data latency by 30% with Redis caching strategies.',
      'Cut transaction processing time by 15% using async processing.',
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
      'Delivered 8 enterprise-grade solutions from scratch.',
      'Achieved 98% reduction in critical bugs via Cypress testing.',
      'Improved API response times by 25% through query optimization.',
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
      'Digitized manual records reducing errors by 90%.',
      'Architected school ERP handling 10k+ daily requests.',
      'Automated reporting saving 10+ hours/week for admin staff.',
    ],
    tech: ['Node.js', 'MongoDB', 'JavaScript', 'DigitalOcean'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background px-6 py-24 text-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.16,
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <span
            className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] font-mono"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-primary) 36%, transparent)',
              color: 'var(--theme-primary)',
              background:
                'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
            }}
          >
            Career Journey
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Work{' '}
            <span style={{ color: 'var(--theme-primary)' }}>Experience</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            A focused track record of shipping performant products and
            measurable improvements across fintech, enterprise, and consulting
            projects.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute bottom-4 left-1.5 top-4 w-px"
            style={{
              background:
                'color-mix(in oklch, var(--theme-border) 58%, transparent)',
            }}
          />

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative pl-8"
              >
                <span
                  className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border"
                  style={{
                    borderColor:
                      'color-mix(in oklch, var(--theme-primary) 62%, transparent)',
                    background: 'var(--theme-surface)',
                    boxShadow:
                      '0 0 0 3px color-mix(in oklch, var(--theme-primary) 14%, transparent)',
                  }}
                />

                <article
                  className="rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor:
                      'color-mix(in oklch, var(--theme-border) 66%, transparent)',
                    background:
                      'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
                    boxShadow:
                      '0 8px 22px color-mix(in oklch, var(--theme-text) 7%, transparent)',
                  }}
                >
                  <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold md:text-2xl">
                        {exp.role}
                      </h3>
                      <p
                        className="mt-1 text-sm md:text-base"
                        style={{ color: 'var(--theme-muted-text)' }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="inline-flex rounded-full border px-3 py-1 text-xs font-medium font-mono tabular-nums"
                      style={{
                        borderColor:
                          'color-mix(in oklch, var(--theme-border) 60%, transparent)',
                        color: 'var(--theme-muted-text)',
                        background:
                          'color-mix(in oklch, var(--theme-surface) 92%, transparent)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed md:text-[15px]"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                        style={{ color: 'var(--theme-muted-text)' }}
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ background: 'var(--theme-primary)' }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] font-mono"
                        style={{
                          borderColor:
                            'color-mix(in oklch, var(--theme-border) 60%, transparent)',
                          color: 'var(--theme-muted-text)',
                          background:
                            'color-mix(in oklch, var(--theme-surface) 94%, transparent)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
