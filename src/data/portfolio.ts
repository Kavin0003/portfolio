export const personalInfo = {
  name: "Kavin Anand J",
  title: "AI Engineer",
  subtitle: "AI/ML Enthusiast & Full Stack Developer",
  bio: "Passionate AI Engineer specializing in modern web technologies and artificial intelligence. I thrive on building innovative, real-world solutions that merge cutting-edge AI with seamless user experiences. Constantly learning, always building.",
  email: "kavinanand.j0003@gmail.com",
  linkedin: "https://www.linkedin.com/in/kavin-anand-143a13289/",
  github: "https://github.com/Kavin0003",
  resume: "/resume.pdf",
  photo: "/images/profile.jpg"
};

export const skills = [
  { name: "Python", level: 90, category: "Language" },
  { name: "TypeScript", level: 40, category: "Language" },
  { name: "JavaScript", level: 70, category: "Language" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Flask", level: 80, category: "Backend" },
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "API Integration", level: 75, category: "Backend" },
  { name: "RESTful APIs", level: 80, category: "Backend" },
  { name: "Machine Learning", level: 85, category: "AI/ML" },
  { name: "Deep Learning", level: 75, category: "AI/ML" },
  { name: "Data Preprocessing", level: 80, category: "AI/ML" },
  { name: "Data Analysis", level: 80, category: "AI/ML" },
  { name: "Computer Vision", level: 70, category: "AI/ML" },
  { name: "Natural Language Processing", level: 70, category: "AI/ML" },
  { name: "TensorFlow", level: 75, category: "AI/ML" },
  { name: "Scikit-learn", level: 80, category: "AI/ML" },
  { name: "Pandas", level: 85, category: "AI/ML" },
  { name: "NumPy", level: 85, category: "AI/ML" },
  { name: "Tkinter", level: 70, category: "UI/GUI" },
  { name: "Git", level: 75, category: "Tools" },
  { name: "GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
  { name: "Docker", level: 60, category: "DevOps" },
  { name: "Linux", level: 70, category: "Tools" },
  { name: "Web Development", level: 80, category: "Frontend" },
  { name: "Database Design", level: 80, category: "Database" },
  { name: "System Architecture", level: 70, category: "Architecture" },
  { name: "Problem Solving", level: 85, category: "Soft Skill" },
  { name: "Project Planning", level: 75, category: "Management" },
  { name: "Research & Development", level: 80, category: "Soft Skill" },
  { name: "Technical Writing", level: 75, category: "Soft Skill" }
];

export const projects = [
  {
    id: 1,
    title: "AI-based Weather Prediction Application",
    description: "AI-powered weather prediction application using advanced machine learning algorithms for accurate forecasts. Features real-time data processing and intuitive user interface.",
    image: "/images/weather-app.png", // Add your screenshot here
    technologies: ["Python", "Tkinter", "Regression", "OpenWeatherMap API"],
    github: "https://github.com/Kavin0003/ai-weather-prediction",
    demo: "https://your-weather-app-demo.vercel.app", // Add your live demo URL
    featured: true
  },
  {
    id: 2,
    title: "Hospital Management Database System",
    description: "Comprehensive database system for managing hospital operations, patient records, and staff information with secure authentication and reporting features.",
    image: "/images/hospital-management.png", // Add your screenshot here
    technologies: ["Python", "Flask", "MySQL", "HTML/CSS"],
    github: "https://github.com/Kavin0003/hospital-management-system",
    demo: "https://your-hospital-system-demo.netlify.app", // Add your live demo URL
    featured: true
  },
  {
    id: 3,
    title: "LinkedIn Profile Analyzer",
    description: "Analyzes LinkedIn profiles for key skills, endorsements, and overall effectiveness using AI-powered insights and recommendations.",
    image: "/images/linkedin-analyzer.png", // Add your screenshot here
    technologies: ["JavaScript", "Node.js", "React", "Gemini API"],
    github: "https://github.com/Kavin0003/linkedin-profile-analyzer",
    demo: "https://your-linkedin-analyzer-demo.vercel.app", // Add your live demo URL
    featured: false
  }
];


export const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    school: "Jerusalem College of Engineering",
    year: "2023-2027",
    description: "Focused on AI/ML technologies and their applications in real-world scenarios."
  }
];

export const publications = [
  {
    id: 1,
    title: "Machine Learning in Web Development: A Comprehensive Study",
    description: "An analysis of how machine learning algorithms can be integrated into modern web applications to enhance user experience and functionality.",
    date: "2024-03-15",
    type: "Research",
    link: "https://medium.com/@kavinanand.j0003/ml-in-web-dev", // Update with your actual article URL
    tags: ["Machine Learning", "Web Development", "AI", "UX"]
  },
  {
    id: 2,
    title: "AI-Powered Weather Prediction: Technical Deep Dive",
    description: "Exploring the technical implementation and machine learning algorithms behind accurate weather prediction systems.",
    date: "2024-02-20",
    type: "Article",
    link: "https://dev.to/kavinanand/ai-weather-prediction", // Update with your actual article URL
    tags: ["AI", "Weather Prediction", "Python", "Machine Learning"]
  },
  {
    id: 3,
    title: "Hospital Management Systems: Database Design Best Practices",
    description: "A comprehensive guide to designing efficient database systems for healthcare management applications.",
    date: "2024-01-10",
    type: "Tutorial",
    link: "https://hashnode.com/@kavinanand/hospital-db-design", // Update with your actual article URL
    tags: ["Database Design", "Healthcare", "MySQL", "System Architecture"]
  }
];
