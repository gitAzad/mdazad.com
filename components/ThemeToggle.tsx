'use client';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  if (!theme) {
    return (
      <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const currentTheme = theme ?? 'system';
  const visualTheme = resolvedTheme ?? 'light';

  const cycleTheme = () => {
    if (currentTheme === 'light') {
      setTheme('dark');
      return;
    }

    if (currentTheme === 'dark') {
      setTheme('system');
      return;
    }

    setTheme('light');
  };

  const getIcon = () => {
    if (currentTheme === 'system') return <Laptop className="w-4 h-4" />;
    return visualTheme === 'dark' ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Sun className="w-4 h-4" />
    );
  };

  const nextLabel =
    currentTheme === 'light'
      ? 'dark'
      : currentTheme === 'dark'
      ? 'system'
      : 'light';

  return (
    <motion.button
      onClick={cycleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      title={`Switch to ${nextLabel} mode`}
      aria-label={`Switch to ${nextLabel} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {getIcon()}
        </motion.div>
      </AnimatePresence>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}
