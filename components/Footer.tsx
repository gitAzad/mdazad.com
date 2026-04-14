'use client';
import { motion } from 'framer-motion';
import { type LucideIcon, Github, Linkedin, Mail, Twitter } from 'lucide-react';

type SocialLink = {
  name: string;
  url: string;
  Icon: LucideIcon;
};

export default function Footer() {
  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/gitAzad', Icon: Github },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mr-azad',
      Icon: Linkedin,
    },
    { name: 'Twitter', url: 'https://x.com/mdazadx', Icon: Twitter },
    { name: 'Email', url: 'mailto:hello@mdazad.com', Icon: Mail },
  ];

  return (
    <footer
      className="relative overflow-hidden px-6 pb-10 pt-16"
      style={{
        borderTopColor:
          'color-mix(in oklch, var(--theme-border) 70%, transparent)',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        background:
          'linear-gradient(180deg, color-mix(in oklch, var(--theme-surface) 28%, transparent) 0%, color-mix(in oklch, var(--theme-background) 96%, var(--theme-surface)) 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.14,
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--theme-border) 30%, transparent) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage:
              'radial-gradient(ellipse 75% 55% at 50% 0%, black 65%, transparent 100%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <a href="#hero" className="inline-flex items-center gap-3">
              <span
                className="inline-grid h-10 w-10 place-items-center rounded-lg text-sm font-semibold"
                style={{
                  background: 'var(--theme-text)',
                  color: 'var(--theme-surface)',
                  boxShadow:
                    'inset 0 0 0 1px color-mix(in oklch, var(--theme-border) 70%, transparent)',
                }}
              >
                MA
              </span>
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: 'var(--theme-text)' }}
              >
                Md Azad
              </span>
            </a>

            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              Architecting scalable digital solutions. Bridging complex backend
              systems with intuitive user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: 'var(--theme-muted-text)' }}
            >
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-grid h-10 w-10 place-items-center rounded-lg border text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary hover:border-primary/50 focus-visible:border-primary/50 focus-visible:outline-none"
                  style={{
                    borderColor:
                      'color-mix(in oklch, var(--theme-border) 68%, transparent)',
                    background:
                      'color-mix(in oklch, var(--theme-surface) 90%, transparent)',
                  }}
                  title={social.name}
                  aria-label={social.name}
                >
                  <social.Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          className="flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm md:flex-row md:items-center"
          style={{
            borderColor:
              'color-mix(in oklch, var(--theme-border) 62%, transparent)',
            color: 'var(--theme-muted-text)',
          }}
        >
          <p>© {new Date().getFullYear()} Md Azad. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="mailto:hello@mdazad.com"
              className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              hello@mdazad.com
            </a>
            <span
              className="h-1 w-1 rounded-full"
              style={{
                background:
                  'color-mix(in oklch, var(--theme-border) 85%, transparent)',
              }}
            />
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
