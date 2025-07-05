
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { publications } from '../data/portfolio';

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Research & Publications
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-6 border-l-4 border-neon-purple"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    publication.type === 'Research' 
                      ? 'bg-neon-purple/20 text-neon-purple'
                      : publication.type === 'Article'
                      ? 'bg-neon-blue/20 text-neon-blue'
                      : 'bg-neon-green/20 text-neon-green'
                  }`}>
                    {publication.type}
                  </span>
                  <span className="text-foreground/60 text-sm">
                    {new Date(publication.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {publication.title}
              </h3>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                {publication.description}
              </p>

              <motion.a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/60 mb-6">
            Interested in collaborating on research or have questions about my work?
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-neon-gradient text-white font-semibold rounded-lg neon-glow hover-scale"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
