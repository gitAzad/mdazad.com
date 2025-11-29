'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef } from 'react';

// --- Configuration: The Fintech/Enterprise Stack ---
// We position Backend/Data on the Left/Bottom and Frontend/Cloud on the Right/Top
// to create a balanced "Full Stack" visual.
const techNodes = [
  // Backend & Data (The "Heavy Lifting")
  {
    id: 1,
    text: 'Java',
    icon: '☕',
    x: 15,
    y: 20,
    color: 'border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400',
  },
  {
    id: 2,
    text: 'Spring Boot',
    icon: '🍃',
    x: 25,
    y: 45,
    color:
      'border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400',
  },
  {
    id: 3,
    text: 'PostgreSQL',
    icon: '🐘',
    x: 10,
    y: 65,
    color: 'border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    id: 4,
    text: 'Kafka',
    icon: '📨',
    x: 35,
    y: 75,
    color:
      'border-stone-500/20 bg-stone-500/10 text-stone-600 dark:text-stone-400',
  },

  // DevOps & Cloud (The "Infrastructure")
  {
    id: 5,
    text: 'Docker',
    icon: '🐳',
    x: 50,
    y: 85,
    color: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    id: 6,
    text: 'AWS',
    icon: '☁️',
    x: 85,
    y: 80,
    color:
      'border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400',
  },

  // Frontend (The "Experience")
  {
    id: 7,
    text: 'Next.js',
    icon: '▲',
    x: 80,
    y: 25,
    color:
      'border-slate-500/20 bg-slate-500/10 text-slate-800 dark:text-slate-200',
  },
  {
    id: 8,
    text: 'TypeScript',
    icon: 'TS',
    x: 65,
    y: 15,
    color: 'border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    id: 9,
    text: 'React',
    icon: '⚛️',
    x: 85,
    y: 55,
    color: 'border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
];

// Logical Connections reflecting your architecture expertise
// [Start Index, End Index]
const connections = [
  [0, 1], // Java -> Spring Boot
  [1, 2], // Spring -> Postgres
  [1, 3], // Spring -> Kafka
  [1, 4], // Spring -> Docker
  [4, 5], // Docker -> AWS
  [6, 1], // Next.js -> Spring Boot
  [6, 7], // Next.js -> TS
  [6, 8], // Next.js -> React
  [5, 6], // AWS -> Next.js
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Mouse position for Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement using a spring physics
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // Template strings for transform css
  const networkTransform = useMotionTemplate`translate(${smoothX}px, ${smoothY}px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate movement relative to center (dividing by 20 reduces sensitivity)
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500 pt-20"
    >
      {/* --- BACKGROUND: Gradient Orbs (Subtle Atmosphere) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* --- BACKGROUND: The Constellation Network --- */}
      <motion.div
        style={{ transform: networkTransform }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* SVG Layer for Architecture Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map(([startIdx, endIdx], i) => {
            const start = techNodes[startIdx];
            const end = techNodes[endIdx];
            return (
              <motion.line
                key={`line-${i}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                className="stroke-slate-400 dark:stroke-slate-600 stroke-[1.5]"
              />
            );
          })}
        </svg>

        {/* HTML Layer for Tech Nodes */}
        {techNodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {/* The Tech Chip */}
            <motion.div
              whileHover={{ scale: 1.15, y: -5 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + i, // Randomize float speed for natural feel
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full border 
                backdrop-blur-md shadow-sm transition-colors duration-300
                ${node.color} 
                pointer-events-auto cursor-default select-none
              `}
            >
              <span className="text-lg filter drop-shadow-sm">{node.icon}</span>
              <span className="text-xs font-semibold tracking-wide opacity-90">
                {node.text}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- FOREGROUND: Resume-Driven Content --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 1. Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-semibold backdrop-blur-md shadow-sm">
              🚀 5+ Years Experience • Delivering High-Impact Solutions
            </div>
          </motion.div>

          {/* 2. Personal Intro (YOUR NAME) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-3"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
              Hi, I&apos;m{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                Md Azad
              </span>
            </h2>
          </motion.div>

          {/* 3. Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="block mb-1 md:mb-2">Architecting Scalable</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Fintech & Enterprise Solutions
            </span>
          </h1>

          {/* 4. Subheading (Resume Hook) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I build secure, high-availability applications that drive business
            growth. Proven track record of boosting system efficiency by{' '}
            <span className="text-slate-900 dark:text-white font-bold">
              25%
            </span>{' '}
            for{' '}
            <span className="text-slate-900 dark:text-white font-bold">
              Leading Indian NBFCs
            </span>{' '}
            &{' '}
            <span className="text-slate-900 dark:text-white font-bold">
              Global Enterprises
            </span>
            .
          </motion.p>

          {/* 5. Key Tech Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Java Spring Boot
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-white" />
              Next.js Ecosystem
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
              Apache Kafka
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              AWS Cloud Native
            </span>
          </motion.div>

          {/* 6. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Featured Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold text-sm md:text-base hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
