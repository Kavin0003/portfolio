
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-foreground/10">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold font-display gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-foreground/60">{personalInfo.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-secondary rounded-full text-neon-purple hover:text-neon-blue hover:bg-secondary/80 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-neon-blue hover:text-neon-green hover:bg-secondary/80 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-neon-green hover:text-neon-purple hover:bg-secondary/80 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right text-foreground/60"
          >
            <p>&copy; {currentYear} {personalInfo.name}</p>
            <p className="text-sm">Built with React & Three.js</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-foreground/10 text-center"
        >
          <p className="text-foreground/50 text-sm">
           Designed and developed by Kavin Anand. 
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
