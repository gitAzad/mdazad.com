'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const trustMetrics = [
  {
    value: '25%',
    label: 'System Efficiency Uplift',
  },
  {
    value: '30%',
    label: 'Data Latency Reduction',
  },
  {
    value: '98%',
    label: 'Critical Bug Reduction',
  },
];

const coreStack = ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Next.js'];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-24 text-foreground md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.24,
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--theme-border) 32%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--theme-border) 32%, transparent) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, 10, 0], y: [0, -8, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 top-6 h-96 w-96 rounded-full blur-[120px]"
          style={{
            background:
              'color-mix(in oklch, var(--theme-primary) 14%, transparent)',
          }}
        />
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, -8, 0], y: [0, 10, 0] }
          }
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 right-0 h-88 w-88 rounded-full blur-[120px]"
          style={{
            background:
              'color-mix(in oklch, var(--theme-accent) 12%, transparent)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto min-h-[84vh] px-6 pb-14">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold md:text-sm font-mono"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-primary) 35%, transparent)',
              background:
                'color-mix(in oklch, var(--theme-primary) 10%, transparent)',
              color: 'var(--theme-primary)',
            }}
          >
            Senior Full Stack Engineer | 5+ Years Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl"
          >
            <span className="block">Architecting Scalable</span>
            <span
              className="block"
              style={{
                color:
                  'color-mix(in oklch, var(--theme-primary) 78%, var(--theme-text))',
              }}
            >
              Fintech & Enterprise Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            I engineer secure, high-availability platforms using Java Spring
            Boot and Next.js, with a proven track record of delivering
            cloud-native solutions for enterprise clients like Piramal Finance
            and JK Tyre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.45 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition hover:scale-[1.02] md:text-base"
              style={{
                background: 'var(--theme-text)',
                color: 'var(--theme-surface)',
                boxShadow:
                  '0 6px 14px color-mix(in oklch, var(--theme-text) 16%, transparent)',
              }}
            >
              View Featured Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold transition hover:scale-[1.02] md:text-base"
              style={{
                color: 'var(--theme-text)',
                borderColor:
                  'color-mix(in oklch, var(--theme-border) 72%, transparent)',
                background:
                  'color-mix(in oklch, var(--theme-surface) 86%, transparent)',
              }}
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-mono"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            {coreStack.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: 'var(--theme-primary)' }}
                />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46, duration: 0.45 }}
            className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-border) 62%, transparent)',
              background:
                'color-mix(in oklch, var(--theme-surface) 86%, transparent)',
            }}
          >
            <div className="grid sm:grid-cols-3">
              {trustMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`px-4 py-4 text-left sm:text-center ${
                    index < trustMetrics.length - 1
                      ? 'border-b sm:border-b-0 sm:border-r'
                      : ''
                  }`}
                  style={{
                    borderColor:
                      'color-mix(in oklch, var(--theme-border) 54%, transparent)',
                  }}
                >
                  <p
                    className="text-2xl font-bold md:text-3xl font-mono tabular-nums"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
