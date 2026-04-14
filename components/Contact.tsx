'use client';

import { motion } from 'framer-motion';
import {
  type LucideIcon,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';

type ContactMethod = {
  title: string;
  value: string;
  href: string;
  Icon: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

const protectedPhoneCodePoints = [
  43, 57, 49, 32, 55, 48, 48, 55, 57, 55, 49, 54, 49, 57,
];

function decodeProtectedPhone() {
  return String.fromCharCode(...protectedPhoneCodePoints);
}

const emailMethod: ContactMethod = {
  title: 'Email',
  value: 'hello@mdazad.com',
  href: 'mailto:hello@mdazad.com',
  Icon: Mail,
};

const locationMethod: ContactMethod = {
  title: 'Location',
  value: 'Mumbai, India',
  href: 'https://maps.google.com/?q=Mumbai,India',
  Icon: MapPin,
};

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    Icon: Github,
    href: 'https://github.com/gitAzad',
  },
  {
    label: 'LinkedIn',
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/mr-azad',
  },
  {
    label: 'X',
    Icon: Twitter,
    href: 'https://x.com/mdazadx',
  },
  {
    label: 'Website',
    Icon: Globe,
    href: 'https://mdazad.com',
  },
];

export default function Contact() {
  const [activeField, setActiveField] = useState<
    'name' | 'email' | 'message' | null
  >(null);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);

  const phoneNumber = useMemo(() => decodeProtectedPhone(), []);

  const methodCardStyle = {
    borderColor: 'color-mix(in oklch, var(--theme-border) 64%, transparent)',
    background: 'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
    boxShadow:
      '0 6px 18px color-mix(in oklch, var(--theme-text) 6%, transparent)',
  };

  const iconBadgeStyle = {
    borderColor: 'color-mix(in oklch, var(--theme-primary) 32%, transparent)',
    color: 'var(--theme-primary)',
    background: 'color-mix(in oklch, var(--theme-primary) 8%, transparent)',
  };

  const getFieldStyle = (fieldName: 'name' | 'email' | 'message') => {
    const isActive = activeField === fieldName;

    return {
      borderColor: isActive
        ? 'color-mix(in oklch, var(--theme-primary) 70%, oklch(0.75 0.11 220))'
        : 'color-mix(in oklch, var(--theme-border) 64%, transparent)',
      background: 'color-mix(in oklch, var(--theme-surface) 94%, transparent)',
      color: 'var(--theme-text)',
      caretColor: 'var(--theme-primary)',
      boxShadow: isActive
        ? '0 0 0 3px color-mix(in oklch, var(--theme-primary) 22%, transparent)'
        : 'none',
    };
  };

  const handlePhoneAction = () => {
    if (!isPhoneRevealed) {
      setIsPhoneRevealed(true);
      return;
    }

    window.location.href = `tel:${phoneNumber.replace(/[^+\d]/g, '')}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = encodeURIComponent(
      `Portfolio Inquiry${name ? ` from ${name}` : ''}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name || 'Not provided'}`,
        `Email: ${email || 'Not provided'}`,
        '',
        message || 'No message provided.',
      ].join('\n'),
    );

    window.location.href = `mailto:hello@mdazad.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
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
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Get In <span style={{ color: 'var(--theme-primary)' }}>Touch</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--theme-muted-text)' }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                Let&apos;s talk about your project
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--theme-muted-text)' }}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={emailMethod.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.0, duration: 0.5 }}
                whileHover={{ x: 3 }}
                className="group flex items-center gap-4 rounded-xl border p-4 transition-transform"
                style={methodCardStyle}
              >
                <span
                  className="inline-grid size-11 shrink-0 place-items-center rounded-lg border"
                  style={iconBadgeStyle}
                >
                  <emailMethod.Icon className="size-5" />
                </span>

                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    {emailMethod.title}
                  </div>
                  <div
                    className="font-semibold"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {emailMethod.value}
                  </div>
                </div>
              </motion.a>

              <motion.button
                type="button"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ x: 3 }}
                onClick={handlePhoneAction}
                className="group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-transform"
                style={methodCardStyle}
                aria-label={
                  isPhoneRevealed ? 'Call phone number' : 'Reveal phone number'
                }
              >
                <span
                  className="inline-grid size-11 shrink-0 place-items-center rounded-lg border"
                  style={iconBadgeStyle}
                >
                  <Phone className="size-5" />
                </span>

                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    Phone
                  </div>
                  <div
                    className="font-semibold"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {isPhoneRevealed ? phoneNumber : 'Click to reveal number'}
                  </div>
                  <div
                    className="mt-0.5 text-xs"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    {isPhoneRevealed
                      ? 'Click again to call'
                      : 'Protected via JavaScript'}
                  </div>
                </div>
              </motion.button>

              <motion.a
                href={locationMethod.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ x: 3 }}
                className="group flex items-center gap-4 rounded-xl border p-4 transition-transform"
                style={methodCardStyle}
              >
                <span
                  className="inline-grid size-11 shrink-0 place-items-center rounded-lg border"
                  style={iconBadgeStyle}
                >
                  <locationMethod.Icon className="size-5" />
                </span>

                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--theme-muted-text)' }}
                  >
                    {locationMethod.title}
                  </div>
                  <div
                    className="font-semibold"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {locationMethod.value}
                  </div>
                </div>
              </motion.a>
            </div>

            <div>
              <h4
                className="mb-4 text-sm font-semibold uppercase tracking-[0.14em]"
                style={{ color: 'var(--theme-muted-text)' }}
              >
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="inline-grid size-11 place-items-center rounded-xl border"
                    style={{
                      borderColor:
                        'color-mix(in oklch, var(--theme-border) 62%, transparent)',
                      color: 'var(--theme-muted-text)',
                      background:
                        'color-mix(in oklch, var(--theme-surface) 90%, transparent)',
                    }}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.Icon className="size-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border p-8"
            style={{
              borderColor:
                'color-mix(in oklch, var(--theme-border) 66%, transparent)',
              background:
                'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
              boxShadow:
                '0 10px 26px color-mix(in oklch, var(--theme-text) 8%, transparent)',
            }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  className="w-full rounded-xl border px-4 py-3 text-base placeholder:opacity-80 outline-none transition-[border-color,box-shadow] duration-200"
                  style={getFieldStyle('name')}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  className="w-full rounded-xl border px-4 py-3 text-base placeholder:opacity-80 outline-none transition-[border-color,box-shadow] duration-200"
                  style={getFieldStyle('email')}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-text)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  className="w-full resize-none rounded-xl border px-4 py-3 text-base placeholder:opacity-80 outline-none transition-[border-color,box-shadow] duration-200"
                  style={getFieldStyle('message')}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold md:text-base"
                style={{
                  background: 'var(--theme-text)',
                  color: 'var(--theme-surface)',
                  boxShadow:
                    '0 8px 20px color-mix(in oklch, var(--theme-text) 20%, transparent)',
                }}
              >
                <span>Send Message</span>
                <Send className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
