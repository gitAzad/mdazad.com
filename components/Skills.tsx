'use client';
import { motion } from 'framer-motion';
import { Cloud, Code2, Server, type LucideIcon } from 'lucide-react';

type SkillGroup = {
  title: string;
  description: string;
  stackLabel: string;
  Icon: LucideIcon;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Ecosystem',
    description: 'High-performance server logic & data handling',
    stackLabel: 'Server',
    Icon: Server,
    skills: [
      'Java Spring Boot',
      'Spring Security',
      'Node.js / Express',
      'PostgreSQL / SQL',
      'MongoDB / NoSQL',
      'Microservices',
    ],
  },
  {
    title: 'Frontend Experience',
    description: 'Responsive, accessible & interactive UIs',
    stackLabel: 'Client',
    Icon: Code2,
    skills: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Jest / Cypress',
      'Framer Motion',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure & CI/CD pipelines',
    stackLabel: 'Infrastructure',
    Icon: Cloud,
    skills: [
      'AWS Services',
      'Docker / K8s',
      'Apache Kafka',
      'Redis / Caching',
      'CI/CD Pipelines',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] font-mono"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-primary) 36%, transparent)',
              color: 'var(--theme-primary)',
              background:
                'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
            }}
          >
            Technical Depth
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Technical{' '}
            <span style={{ color: 'var(--theme-primary)' }}>Proficiency</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            A calibrated view of the technologies I use to build stable,
            scalable products end-to-end.
          </p>
        </motion.div>

        <div className="grid gap-6 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2, duration: 0.5 }}
              className="group h-full"
            >
              <article
                className="relative flex h-full flex-col rounded-2xl border p-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  borderColor:
                    'color-mix(in oklch, var(--theme-border) 66%, transparent)',
                  background:
                    'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
                  boxShadow:
                    '0 8px 24px color-mix(in oklch, var(--theme-text) 7%, transparent)',
                }}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="inline-grid size-10 aspect-square shrink-0 place-items-center rounded-xl border"
                      style={{
                        borderColor:
                          'color-mix(in oklch, var(--theme-primary) 32%, transparent)',
                        color: 'var(--theme-primary)',
                        background:
                          'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
                      }}
                    >
                      <category.Icon
                        className="size-5 shrink-0"
                        strokeWidth={1.9}
                      />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight md:text-2xl">
                        {category.title}
                      </h3>
                      <p
                        className="mt-1 text-xs"
                        style={{ color: 'var(--theme-muted-text)' }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] font-mono"
                    style={{
                      borderColor:
                        'color-mix(in oklch, var(--theme-border) 60%, transparent)',
                      color: 'var(--theme-muted-text)',
                      background:
                        'color-mix(in oklch, var(--theme-surface) 92%, transparent)',
                    }}
                  >
                    {category.stackLabel}
                  </span>
                </div>

                <div className="mt-2 flex min-h-34 flex-wrap content-start gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] font-mono"
                      style={{
                        borderColor:
                          'color-mix(in oklch, var(--theme-border) 60%, transparent)',
                        color: 'var(--theme-muted-text)',
                        background:
                          'color-mix(in oklch, var(--theme-surface) 94%, transparent)',
                      }}
                    >
                      {skill}
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
