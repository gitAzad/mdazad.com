'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const impactStats = [
  { value: '25%', label: 'System Efficiency Uplift' },
  { value: '30%', label: 'Lower Data Latency' },
  { value: '40%', label: 'Fewer Vulnerabilities' },
];

const deliveryHighlights = [
  'Designed scalable Java Spring Boot services for fintech workloads.',
  'Bridged backend complexity with production-grade Next.js interfaces.',
  'Improved performance and operational stability across enterprise systems.',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.18,
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
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
            About
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            About <span style={{ color: 'var(--theme-primary)' }}>Me</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold md:text-3xl">
              Driving Digital Transformation through Code
            </h3>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              I am a high-impact{' '}
              <strong style={{ color: 'var(--theme-text)' }}>
                Full Stack Engineer
              </strong>{' '}
              with over{' '}
              <strong style={{ color: 'var(--theme-primary)' }}>
                5+ years
              </strong>{' '}
              of experience architecting scalable fintech and enterprise
              solutions.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              My expertise lies in{' '}
              <strong style={{ color: 'var(--theme-text)' }}>
                Java Spring Boot
              </strong>{' '}
              and{' '}
              <strong style={{ color: 'var(--theme-text)' }}>Next.js</strong>,
              where I bridge complex backend logic with intuitive user-facing
              experiences.
            </p>

            <div
              className="rounded-2xl border px-5 py-4"
              style={{
                borderColor:
                  'color-mix(in oklch, var(--theme-border) 66%, transparent)',
                background:
                  'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
              }}
            >
              <p
                className="italic"
                style={{ color: 'var(--theme-muted-text)' }}
              >
                {`"I don&apos;t just write code. I build systems that reduce
                latency, enhance security, and drive measurable business
                growth."`}
              </p>
              <p
                className="mt-3 text-right text-sm font-medium"
                style={{ color: 'var(--theme-muted-text)' }}
              >
                - Md Azad
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 text-sm font-semibold md:text-base"
              style={{ color: 'var(--theme-primary)' }}
            >
              Let&apos;s build something scalable
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-3xl border p-6"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-border) 68%, transparent)',
              background:
                'color-mix(in oklch, var(--theme-surface) 86%, transparent)',
              boxShadow:
                '0 10px 26px color-mix(in oklch, var(--theme-text) 8%, transparent)',
            }}
          >
            <h4 className="text-lg font-semibold">Proven Outcomes</h4>

            <div
              className="mt-4 overflow-hidden rounded-2xl border"
              style={{
                borderColor:
                  'color-mix(in oklch, var(--theme-border) 60%, transparent)',
                background:
                  'color-mix(in oklch, var(--theme-surface) 92%, transparent)',
              }}
            >
              <div className="grid sm:grid-cols-3">
                {impactStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-4 py-4 text-left sm:text-center ${
                      index < impactStats.length - 1
                        ? 'border-b sm:border-b-0 sm:border-r'
                        : ''
                    }`}
                    style={{
                      borderColor:
                        'color-mix(in oklch, var(--theme-border) 56%, transparent)',
                    }}
                  >
                    <p
                      className="text-2xl font-bold md:text-3xl font-mono tabular-nums"
                      style={{ color: 'var(--theme-primary)' }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="my-5 h-px"
              style={{
                background:
                  'color-mix(in oklch, var(--theme-border) 56%, transparent)',
              }}
            />

            <p
              className="text-center text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              Delivery Focus
            </p>

            <ul className="mt-3 space-y-2">
              {deliveryHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed"
                  style={{ color: 'var(--theme-muted-text)' }}
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 rounded-full"
                    style={{ background: 'var(--theme-primary)' }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
