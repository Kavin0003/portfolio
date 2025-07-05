
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, personalInfo } from '../data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-neon-blue mb-4">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With a strong foundation in AI and web development, I am passionate about creating innovative solutions that enhance user experiences. My journey has been fueled by a love for technology and a desire to make a meaningful impact through my work.
              </p>
            </div>

            <motion.div
              className="glass-effect rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-neon-green mb-4">Interests & Goals</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                  Building AI-powered web applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Contributing to open-source projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                  Exploring emerging web technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                  Learning and sharing knowledge through blogs and tutorials  
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-neon-orange mb-8">Education</h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 hover-scale"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-neon-gradient rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-neon-blue font-medium mb-1">{edu.school}</p>
                    <p className="text-neon-green text-sm mb-3">{edu.year}</p>
                    <p className="text-foreground/70">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="glass-effect rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-neon-pink mb-2">Always Learning</h4>
              <p className="text-foreground/70">
                Continuously expanding my knowledge through online courses, workshops, and hands-on projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
