'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend Ecosystem',
    icon: '⚡',
    description: 'High-performance server logic & data handling',
    color: 'emerald',
    skills: [
      { name: 'Java Spring Boot', level: 98 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL / SQL', level: 92 },
      { name: 'MongoDB / NoSQL', level: 95 },
      { name: 'Microservices', level: 88 },
    ],
  },
  {
    title: 'Frontend Experience',
    icon: '🎨',
    description: 'Responsive, accessible & interactive UIs',
    color: 'blue',
    skills: [
      { name: 'Next.js (App Router)', level: 95 },
      { name: 'React.js', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Scalable infrastructure & CI/CD pipelines',
    color: 'orange',
    skills: [
      { name: 'AWS Services', level: 88 },
      { name: 'Docker / K8s', level: 85 },
      { name: 'Apache Kafka', level: 82 },
      { name: 'Redis / Caching', level: 90 },
      { name: 'CI/CD Pipelines', level: 85 },
    ],
  },
];

const SkillBar = ({ level, color }: { level: number; color: string }) => {
  // Convert percentage to 10 segments
  const segments = 10;
  const filledSegments = Math.round((level / 100) * segments);

  const getSegmentColor = (isActive: boolean) => {
    if (!isActive) return 'bg-slate-200 dark:bg-slate-800';

    switch (color) {
      case 'emerald':
        return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]';
      case 'blue':
        return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]';
      case 'orange':
        return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex gap-1 h-2">
      {[...Array(segments)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3, scaleY: 0.5 }}
          whileInView={{
            opacity: i < filledSegments ? 1 : 0.3,
            scaleY: 1,
          }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className={`flex-1 rounded-sm transition-all duration-300 ${getSegmentColor(
            i < filledSegments
          )}`}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Proficiency
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A calibrated view of my technical stack and expertise levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div
                  className={`absolute -right-10 -top-10 w-32 h-32 bg-${category.color}-500/10 rounded-full blur-3xl group-hover:bg-${category.color}-500/20 transition-colors duration-500`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div
                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                    bg-${category.color}-100 dark:bg-${category.color}-900/30 
                    text-${category.color}-600 dark:text-${category.color}-400
                  `}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6 relative">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Custom Segmented Bar */}
                      <SkillBar level={skill.level} color={category.color} />
                    </div>
                  ))}
                </div>

                {/* Decorative Tech Lines */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
