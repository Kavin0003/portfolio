
export const personalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  subtitle: "AI/ML Enthusiast & Web Developer",
  bio: "Passionate developer specializing in modern web technologies and artificial intelligence. I love creating innovative solutions that bridge the gap between cutting-edge technology and user experience.",
  email: "alex.johnson@example.com",
  linkedin: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  resume: "/resume.pdf"
};

export const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 92, category: "Language" },
  { name: "Machine Learning", level: 85, category: "AI/ML" },
  { name: "TensorFlow", level: 80, category: "AI/ML" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "AWS", level: 82, category: "Cloud" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "GraphQL", level: 83, category: "Backend" },
  { name: "React Native", level: 80, category: "Mobile" }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "Smart task management application with AI-driven priority suggestions and natural language processing for task creation.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    github: "https://github.com/alexjohnson/ai-task-manager",
    demo: "https://ai-task-manager-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms with advanced data visualization and predictive analytics.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/alexjohnson/ecommerce-analytics",
    demo: "https://ecommerce-analytics-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Sentiment Analyzer",
    description: "Machine learning application that analyzes social media sentiment in real-time using NLP techniques.",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com/alexjohnson/sentiment-analyzer",
    demo: "https://sentiment-analyzer-demo.herokuapp.com",
    featured: false
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology with React frontend.",
    image: "/placeholder.svg",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    github: "https://github.com/alexjohnson/blockchain-voting",
    demo: "https://blockchain-voting-demo.netlify.app",
    featured: true
  }
];

export const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches to Natural Language Understanding",
    description: "Comprehensive analysis of transformer architectures and their applications in NLU tasks.",
    date: "2024-01-15",
    link: "https://medium.com/@alex/deep-learning-nlu",
    type: "Blog Post"
  },
  {
    id: 2,
    title: "Building Scalable React Applications: Best Practices",
    description: "Guide to architecting large-scale React applications with performance optimization techniques.",
    date: "2023-11-20",
    link: "https://dev.to/alex/scalable-react-apps",
    type: "Article"
  },
  {
    id: 3,
    title: "Machine Learning in Web Development: Current Trends",
    description: "Exploring the integration of ML models in modern web applications and their practical implementations.",
    date: "2023-09-10",
    link: "https://alex-blog.netlify.app/ml-web-dev",
    type: "Research"
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    year: "2022",
    description: "Specialized in Artificial Intelligence and Machine Learning"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Tech University",
    year: "2020",
    description: "Focus on Full-Stack Web Development and Data Structures"
  }
];
