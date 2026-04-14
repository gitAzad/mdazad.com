'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Securitization Platform',
    category: 'Fintech Core',
    description:
      'High-volume asset management system for a leading NBFC. Optimized transaction flows boosting asset efficiency by 25%.',
    outcome: 'Boosted asset workflow efficiency by 25% in production.',
    tech: ['Spring Boot', 'Next.js', 'MongoDB', 'AWS'],
    link: '#',
  },
  {
    title: 'Enterprise Fleet Manager',
    category: 'Logistics Tech',
    description:
      'Real-time tracking & analytics platform handling thousands of concurrent data streams for enterprise logistics.',
    outcome: 'Improved response time by 25% under peak fleet traffic.',
    tech: ['Node.js', 'Google Maps', 'Redis', 'Socket.io'],
    link: '#',
  },
  {
    title: 'B2B Commerce Portal',
    category: 'E-Commerce',
    description:
      'Unified distributor platform connecting dealers with inventory management, order processing, and analytics.',
    outcome: 'Reduced critical production bugs by 98% after hardening.',
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'Redis'],
    link: '#',
  },
  {
    title: 'Institutional ERP',
    category: 'EdTech',
    description:
      'Comprehensive management system digitizing admin workflows, reducing manual data entry errors by 90%.',
    outcome: 'Significantly reduced errors through workflow automation.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
  },
  {
    title: 'Internal Fintech Engine',
    category: 'Financial Services',
    description:
      'Optimized backend calculation engine increasing response speeds by 20% for complex financial instruments.',
    outcome: 'Reduced response time for high-complexity computations.',
    tech: ['Java', 'Kafka', 'Microservices', 'Docker'],
    link: '#',
  },
  {
    title: 'Cloud Scaling Solution',
    category: 'DevOps',
    description:
      'Enterprise-grade cloud architecture implementation achieving 99.9% uptime and 98% bug reduction.',
    outcome: 'Improved release stability and service availability.',
    tech: ['AWS', 'CI/CD', 'Terraform', 'Kubernetes'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span
            className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-primary) 36%, transparent)',
              color: 'var(--theme-primary)',
              background:
                'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
            }}
          >
            Featured Work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Featured{' '}
            <span style={{ color: 'var(--theme-primary)' }}>Projects</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            High-impact enterprise products designed for reliability, scale, and
            measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group h-full"
            >
              <article
                className="flex h-full flex-col rounded-2xl border p-6 transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  borderColor:
                    'color-mix(in oklch, var(--theme-border) 66%, transparent)',
                  background:
                    'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
                  boxShadow:
                    '0 8px 24px color-mix(in oklch, var(--theme-text) 7%, transparent)',
                }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] font-mono"
                    style={{
                      borderColor:
                        'color-mix(in oklch, var(--theme-primary) 34%, transparent)',
                      color: 'var(--theme-primary)',
                      background:
                        'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
                    }}
                  >
                    {proj.category}
                  </span>

                  <a
                    href={proj.link}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border"
                    style={{
                      borderColor:
                        'color-mix(in oklch, var(--theme-border) 62%, transparent)',
                      color: 'var(--theme-muted-text)',
                      background:
                        'color-mix(in oklch, var(--theme-surface) 92%, transparent)',
                    }}
                    aria-label={`Open ${proj.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold leading-tight md:text-2xl">
                  {proj.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed md:text-[15px]"
                  style={{ color: 'var(--theme-muted-text)' }}
                >
                  {proj.description}
                </p>

                <div
                  className="mt-5 min-h-22 rounded-xl border px-4 py-3"
                  style={{
                    borderColor:
                      'color-mix(in oklch, var(--theme-border) 58%, transparent)',
                    background:
                      'color-mix(in oklch, var(--theme-surface) 94%, transparent)',
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    Outcome
                  </p>
                  <p className="mt-1 text-sm font-medium">{proj.outcome}</p>
                </div>

                <div className="mt-auto flex min-h-17 flex-wrap content-start gap-2 pt-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] font-mono"
                      style={{
                        borderColor:
                          'color-mix(in oklch, var(--theme-border) 62%, transparent)',
                        color: 'var(--theme-muted-text)',
                        background:
                          'color-mix(in oklch, var(--theme-surface) 94%, transparent)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
