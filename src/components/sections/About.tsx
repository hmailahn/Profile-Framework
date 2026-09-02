import { useRef } from 'react';
import { motion} from 'framer-motion';
import { FiActivity, FiShield ,FiCpu, FiCode, FiMapPin } from 'react-icons/fi';
import { personalInfo, skills } from '../../data/portfolio';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const category = 'cloud tools';

  const skillCategories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    [category]: skills.filter((s) => s.category === 'cloud tools'),
    design: skills.filter((s) => s.category === 'design'),
    AI: skills.filter((s) => s.category === 'AI'),
  };

  const stats = [
    { icon: <FiCode />, label: 'Years Experience', value: '4+' },
    // TO DO: update last 3 
    { icon: <FiCpu />, label: 'Event Processing', value: 'Real-time' },
    { icon: <FiShield />, label: 'Test Coverage', value: '90%+' },
    { icon: <FiActivity />, label: 'System Uptime', value: '99.99%' },
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative pb-20 pt-25 scroll-mt-20">
      
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 xl:text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div>
            <div className="prose prose-lg">
              {personalInfo.about.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 xl:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FiMapPin className="mr-3 text-primary-600" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.availability}</span>
              </div>
            </div>
            {/* Stats */}
            <div
              className="grid grid-cols-2 xl:grid-cols-4 mt-8 gap-x-6 gap-y-4 justify-items-center"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl w-36 h-36 md:w-40 md:h-40"
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 text-xl"
                    style={{
                      backgroundColor: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl xl:text-3xl font-bold mb-6 dark:text-white">Skills & Technologies</h3>
            
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

