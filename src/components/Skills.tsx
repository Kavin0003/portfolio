
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-neon-blue mb-6">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-neon-purple text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className="bg-neon-gradient h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-neon-green mb-8 text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    skill.level >= 90
                      ? 'border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white'
                      : skill.level >= 85
                      ? 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white'
                      : 'border-neon-green text-neon-green hover:bg-neon-green hover:text-white'
                  }`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
