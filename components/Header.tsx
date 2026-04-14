'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Palette, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ThemeStudioPanel from './ThemeStudioPanel';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeStudioOpen, setThemeStudioOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const themeStudioRef = useRef<HTMLDivElement>(null);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple spy logic to update active section
      const sections = [
        'hero',
        'about',
        'projects',
        'experience',
        'skills',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!themeStudioRef.current) return;
      if (!themeStudioRef.current.contains(event.target as Node)) {
        setThemeStudioOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeStudioOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-[padding] duration-300 ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div
          className={`
            relative flex items-center justify-between rounded-full border px-4 sm:px-6 transition-[width,padding,background-color,border-color,box-shadow] duration-300 ease-out
            ${
              scrolled
                ? 'w-[95%] md:w-[85%] max-w-5xl py-2.5 backdrop-blur-md'
                : 'w-full max-w-7xl py-2'
            }
          `}
          style={
            scrolled
              ? {
                  background:
                    'color-mix(in oklch, var(--theme-background) 78%, transparent)',
                  borderColor:
                    'color-mix(in oklch, var(--theme-border) 72%, transparent)',
                  boxShadow:
                    '0 10px 24px color-mix(in oklch, var(--theme-text) 10%, transparent)',
                }
              : {
                  background: 'transparent',
                  borderColor: 'transparent',
                  boxShadow: 'none',
                }
          }
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-2xl tracking-tighter"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
              style={{
                background: 'var(--theme-text)',
                color: 'var(--theme-surface)',
                boxShadow:
                  'inset 0 0 0 1px color-mix(in oklch, var(--theme-border) 68%, transparent)',
              }}
            >
              MA
            </div>
            <span
              className="hidden sm:block"
              style={{ color: 'var(--theme-text)' }}
            >
              Md Azad
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm"
            style={{
              background:
                'color-mix(in oklch, var(--theme-surface) 78%, transparent)',
              borderColor:
                'color-mix(in oklch, var(--theme-border) 65%, transparent)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
                className={`
                  relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors z-10
                `}
                style={{
                  color:
                    activeSection === item.href.slice(1)
                      ? 'var(--theme-text)'
                      : 'var(--theme-muted-text)',
                }}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background:
                        'color-mix(in oklch, var(--theme-primary) 18%, var(--theme-surface))',
                      boxShadow:
                        'inset 0 0 0 1px color-mix(in oklch, var(--theme-primary) 45%, transparent)',
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <div className="relative hidden md:block" ref={themeStudioRef}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setThemeStudioOpen((prev) => !prev)}
                className="relative h-9 w-9 rounded-full border flex items-center justify-center"
                style={{
                  background:
                    'color-mix(in oklch, var(--theme-surface) 75%, transparent)',
                  color: 'var(--theme-muted-text)',
                  borderColor: themeStudioOpen
                    ? 'color-mix(in oklch, var(--theme-primary) 55%, transparent)'
                    : 'color-mix(in oklch, var(--theme-border) 70%, transparent)',
                }}
                aria-label="Open theme studio"
                aria-expanded={themeStudioOpen}
              >
                <Palette className="h-4 w-4" />
              </motion.button>

              <AnimatePresence>
                {themeStudioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-12 z-50"
                  >
                    <ThemeStudioPanel />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-5"
              style={{
                background: 'var(--theme-text)',
                color: 'var(--theme-surface)',
                boxShadow:
                  '0 8px 20px color-mix(in oklch, var(--theme-text) 28%, transparent), inset 0 0 0 1px color-mix(in oklch, var(--theme-border) 45%, transparent)',
              }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Hire Me</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              style={{
                background:
                  'color-mix(in oklch, var(--theme-surface) 78%, transparent)',
                color: 'var(--theme-text)',
                borderColor:
                  'color-mix(in oklch, var(--theme-border) 72%, transparent)',
              }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 backdrop-blur-xl md:hidden pt-28 px-6"
            style={{
              background:
                'color-mix(in oklch, var(--theme-background) 95%, transparent)',
            }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl border text-lg font-semibold"
                  style={{
                    background:
                      'color-mix(in oklch, var(--theme-surface) 88%, transparent)',
                    borderColor:
                      'color-mix(in oklch, var(--theme-border) 68%, transparent)',
                    color: 'var(--theme-text)',
                  }}
                >
                  {item.label}
                  <span
                    className="p-1 rounded-full"
                    style={{
                      background:
                        'color-mix(in oklch, var(--theme-surface) 72%, transparent)',
                      color: 'var(--theme-muted-text)',
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center font-bold"
                style={{
                  background: 'var(--theme-text)',
                  color: 'var(--theme-surface)',
                  boxShadow:
                    '0 10px 24px color-mix(in oklch, var(--theme-text) 30%, transparent), inset 0 0 0 1px color-mix(in oklch, var(--theme-border) 40%, transparent)',
                }}
              >
                <ArrowUpRight className="h-4 w-4" />
                <span>Hire Me Now</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
