
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // You would typically integrate with a form service here
    alert('Message sent successfully!');
  };

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'text-neon-purple hover:text-neon-blue'
    },
    {
      name: 'LinkedIn',  
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: 'text-neon-blue hover:text-neon-green'
    },
    {
      name: 'GitHub',
      href: personalInfo.github,
      icon: Github,
      color: 'text-neon-green hover:text-neon-purple'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-6">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-neon-blue mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-foreground/20 rounded-lg focus:border-neon-purple focus:outline-none transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-foreground/20 rounded-lg focus:border-neon-purple focus:outline-none transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground/80 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-foreground/20 rounded-lg focus:border-neon-purple focus:outline-none transition-colors text-foreground"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-foreground/80 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-foreground/20 rounded-lg focus:border-neon-purple focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-neon-gradient text-white font-semibold rounded-lg neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-neon-green mb-6">Get In Touch</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                collaborations, or just having a chat about technology and innovation.
              </p>

              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg transition-all duration-300 ${link.color} hover:bg-secondary`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <link.icon size={24} />
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-foreground/60">
                        {link.name === 'Email' ? personalInfo.email : `@${link.name.toLowerCase()}`}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-effect rounded-2xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold text-neon-orange mb-4">Download Resume</h4>
              <p className="text-foreground/70 mb-6">
                Get a detailed overview of my experience and skills.
              </p>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-neon-orange text-neon-orange font-semibold rounded-lg hover:bg-neon-orange hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
