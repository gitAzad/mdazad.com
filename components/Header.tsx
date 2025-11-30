'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div
          className={`
            relative flex items-center justify-between px-6 transition-all duration-300
            ${
              scrolled
                ? 'w-[95%] md:w-[85%] max-w-5xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-full shadow-lg py-3'
                : 'w-full max-w-7xl bg-transparent border-transparent py-2'
            }
          `}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-2xl tracking-tighter"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm">
              MA
            </div>
            <span
              className={`hidden sm:block ${
                scrolled
                  ? 'text-slate-800 dark:text-white'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              Md Azad
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
                className={`
                  relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors z-10
                  ${
                    activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }
                `}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-800 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden pt-28 px-6"
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
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-lg font-semibold text-slate-800 dark:text-slate-200"
                >
                  {item.label}
                  <span className="p-1 bg-white dark:bg-slate-800 rounded-full">
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
                className="mt-4 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-center shadow-xl"
              >
                Hire Me Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
