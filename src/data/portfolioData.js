// ============================================================
// PORTFOLIO DATA — Update this file to change personal info
// ============================================================

export const personalInfo = {
  name: "ARAVINTH L",
  role: "WEB DEVELOPER",
  subtitle: "& COMPUTER SCIENCE ENGINEER",
  description:
    "I build interactive web experiences, intelligent applications, and practical solutions using modern technologies.",
  location: "India",
  status: "Available",
  level: "Final Year",
  experience: "Project Based",
  phone: "+91-7339486437",
  email: "aravinthl266@gmail.com",
  linkedin: "https://www.linkedin.com/in/aravinth-logesh2632a/",
  github: "https://github.com/ARAVINTHL1",
  leetcode: "https://leetcode.com/u/23CSR021/",
  resumePath: "/resume aravinth (4).pdf",
};

export const aboutText = [
  "I am a passionate Computer Science Engineering student interested in software development, web technologies, artificial intelligence and building practical solutions.",
  "I enjoy turning ideas into functional and visually engaging applications while continuously improving my technical skills.",
];

export const stats = [
  { label: "CODING", value: 88 },
  { label: "PROBLEM SOLVING", value: 82 },
  { label: "CREATIVITY", value: 92 },
  { label: "LEARNING", value: 97 },
];

export const skills = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 92 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Vite", level: 80 },
    { name: "Tailwind CSS", level: 87 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Express.js", level: 75 },
    { name: "Flask", level: 82 },
    { name: "FastAPI", level: 72 },
  ],
  Database: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 77 },
  ],
  "AI / ML": [
    { name: "Python", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 83 },
    { name: "Scikit-learn", level: 78 },
    { name: "TensorFlow", level: 75 },
    { name: "Keras", level: 73 },
    { name: "Prophet", level: 70 },
    { name: "ARIMA", level: 68 },
  ],
  Tools: [
    { name: "Git", level: 88 },
    { name: "GitHub", level: 87 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 80 },
    { name: "Figma", level: 72 },
  ],
};

export const softSkills = [
  { name: "TEAMWORK", icon: "Users", description: "Collaborate effectively in teams" },
  { name: "TIME MANAGEMENT", icon: "Clock", description: "Deliver projects on schedule" },
  { name: "LEADERSHIP", icon: "Star", description: "Guide teams toward goals" },
  { name: "PROBLEM SOLVING", icon: "Lightbulb", description: "Break down complex challenges" },
  { name: "COMMUNICATION", icon: "MessageCircle", description: "Clear and concise expression" },
  { name: "ADAPTABILITY", icon: "Zap", description: "Thrive in dynamic environments" },
];

export const education = [
  {
    stage: "SCHOOL",
    institution: "Cheran Matric Hr Sec School",
    location: "Karur",
    degree: "Higher Secondary Certificate",
    year: "2022 – 2023",
    score: "Percentage: 80.63%",
    icon: "🏫",
  },
  {
    stage: "COLLEGE",
    institution: "Kongu Engineering College",
    location: "Perundurai",
    degree: "BE Computer Science and Engineering",
    year: "2023 – 2027",
    score: "CGPA: 7.54",
    icon: "🎓",
  },
  {
    stage: "DEVELOPER",
    institution: "Self-taught + Projects",
    location: "India",
    degree: "Web Developer & AI Enthusiast",
    year: "2023 – Present",
    score: "Ongoing",
    icon: "💻",
  },
];

export const projects = [
  {
    id: "01",
    title: "RETAIL DEMAND FORECASTING",
    subtitle: "AI-Powered Inventory Intelligence",
    difficulty: 5,
    description:
      "Developed a Retail Demand Forecasting system using Machine Learning and Facebook Prophet to predict future product demand. Used historical sales data to improve inventory planning and demand prediction.",
    technologies: ["Python", "Machine Learning", "Facebook Prophet", "Flask", "TensorFlow"],
    github: "https://github.com/ARAVINTHL1",
    demo: null,
    color: "#6C2BD9",
  },
  {
    id: "02",
    title: "AI-BASED FARMER QUERY SYSTEM",
    subtitle: "Smart Farming Platform",
    difficulty: 5,
    description:
      "Developed an AI-powered farming platform to help farmers with crop recommendations, disease detection, weather monitoring, multilingual assistance and government scheme information.",
    technologies: ["React.js", "JavaScript", "Python", "Machine Learning", "Flask", "TensorFlow", "OpenCV", "MongoDB"],
    github: "https://github.com/ARAVINTHL1",
    demo: null,
    color: "#00A8FF",
  },
];

export const certifications = [
  {
    id: 1,
    issuer: "MongoDB",
    title: "MongoDB Associate Developer",
    icon: "🏆",
    color: "#00ED64",
    year: "2025",
    image: "/MONGODB CERTIFICATE ARAVINTH .png",
    description: "Certified in building scalable database solutions, designing collections, performing aggregations, and managing data models with MongoDB.",
  },
  {
    id: 2,
    issuer: "Oracle",
    title: "Java Foundation",
    icon: "🏅",
    color: "#FF7A00",
    year: "2026",
    image: "/java.png",
    description: "Certified in foundational Java programming, including object-oriented programming concepts, Java platform, classes, and language syntax.",
  },
];

export const nextMissions = [
  { title: "WEB DEVELOPMENT", icon: "Globe", color: "#6C2BD9" },
  { title: "UI / UX DESIGN", icon: "Palette", color: "#FF2D75" },
  { title: "ARTIFICIAL INTELLIGENCE", icon: "Brain", color: "#00A8FF" },
  { title: "MACHINE LEARNING", icon: "Cpu", color: "#00E5FF" },
  { title: "APPLICATION DEVELOPMENT", icon: "Smartphone", color: "#FFD600" },
];

export const achievements = [
  {
    id: "first_run",
    emoji: "🏃",
    title: "FIRST RUN",
    description: "Visited the portfolio",
    section: "hero",
    points: 100,
  },
  {
    id: "code_runner",
    emoji: "💻",
    title: "CODE RUNNER",
    description: "Visited the skills section",
    section: "skills",
    points: 250,
  },
  {
    id: "mission_master",
    emoji: "🎯",
    title: "MISSION MASTER",
    description: "All projects viewed",
    section: "projects",
    points: 500,
  },
  {
    id: "trophy_hunter",
    emoji: "🏆",
    title: "TROPHY HUNTER",
    description: "Viewed certifications",
    section: "certifications",
    points: 300,
  },
  {
    id: "full_stack_runner",
    emoji: "🚀",
    title: "FULL STACK RUNNER",
    description: "Visited the entire portfolio",
    section: "contact",
    points: 1000,
  },
  {
    id: "player_known",
    emoji: "👤",
    title: "PLAYER KNOWN",
    description: "Checked the player profile",
    section: "about",
    points: 150,
  },
];

export const sectionScores = {
  hero: 100,
  about: 250,
  skills: 500,
  journey: 300,
  projects: 1000,
  certifications: 750,
  nextmissions: 200,
  contact: 500,
};
