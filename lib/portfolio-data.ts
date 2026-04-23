export const personalInfo = {
  name: "Anant Masih",
  headline: "Building Autonomous Systems & AI Solutions",
  tagline: "Full-Stack Developer specializing in AI-integrated robotics and modern web development",
  email: "anant.16794@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/anant-masih/",
    github: "https://github.com/anant16794-wq",
    twitter: "https://x.com/infinity_5511",
    discord: "infinity.ink",
  },
};

export const projects = [
  {
    id: "cityzero",
    title: "CityZero",
    subtitle: "Smart Waste Management System",
    description:
      "An AI-powered urban waste management platform designed to optimize collection routes, reduce operational costs, and promote sustainable city living through real-time analytics and IoT integration.",
    problem:
      "Urban areas face inefficient waste collection leading to overflow bins, increased fuel consumption, and environmental impact.",
    solution:
      "Developed an intelligent system using IoT sensors, machine learning route optimization, and real-time dashboard for municipal coordination.",
    impact: [
      { metric: "30%", label: "Reduction in collection costs" },
      { metric: "40%", label: "Decrease in overflow incidents" },
      { metric: "25%", label: "Fuel savings through optimized routes" },
    ],
    techStack: ["React", "Node.js", "Python", "TensorFlow", "IoT Sensors", "MongoDB"],
    category: "AI/ML",
    featured: true,
    hackathon: "Infernoverse Hackathon",
  },
  {
    id: "parwaaz",
    title: "PARWAAZ",
    subtitle: "Career Counseling Platform",
    description:
      "A comprehensive career guidance application featuring interactive quizzes, personalized analysis, and AI-driven recommendations to help students discover their ideal career paths.",
    problem:
      "Students often lack access to quality career guidance and struggle to identify career paths aligned with their skills and interests.",
    solution:
      "Built a MERN stack platform with interactive assessments, personality analysis, and curated career recommendations based on user responses.",
    impact: [
      { metric: "500+", label: "Quiz completions" },
      { metric: "15+", label: "Career paths analyzed" },
      { metric: "85%", label: "User satisfaction rate" },
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    category: "Full-Stack",
    featured: true,
    hackathon: "Smart India Hackathon (SIH)",
  },
  {
    id: "food-bank",
    title: "Food Bank",
    subtitle: "Food Logging & Donation App",
    description:
      "A community-driven platform connecting food donors with those in need, featuring real-time inventory tracking, donation scheduling, and impact analytics.",
    problem:
      "Food waste remains a critical issue while many communities face food insecurity, with no efficient system to bridge the gap.",
    solution:
      "Created a JavaScript application for logging surplus food, coordinating pickups, and tracking donation impact in local communities.",
    impact: [
      { metric: "100+", label: "Meals facilitated" },
      { metric: "50kg", label: "Food waste prevented" },
      { metric: "20+", label: "Community partners" },
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Chart.js"],
    category: "Web App",
    featured: true,
    hackathon: "Hackathon 101",
  },
  {
    id: "blind-assist-robot",
    title: "Blind Assist Robot",
    subtitle: "Autonomous Navigation System",
    description:
      "A hardware-software robotics project designed to assist visually impaired individuals navigate indoor environments safely using ultrasonic sensors and haptic feedback.",
    problem:
      "Visually impaired individuals face challenges navigating unfamiliar indoor spaces without expensive commercial solutions.",
    solution:
      "Built an affordable autonomous robot using ESP32/Arduino with ultrasonic obstacle detection and haptic feedback system for real-time navigation assistance.",
    impact: [
      { metric: "20%", label: "Reduced obstacle detection latency" },
      { metric: "95%", label: "Obstacle detection accuracy" },
      { metric: "<$100", label: "Total hardware cost" },
    ],
    techStack: ["ESP32", "Arduino", "C", "Ultrasonic Sensors", "Python", "3D Printing"],
    category: "Robotics",
    featured: true,
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C", "Java", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  hardware: ["ESP32", "Arduino", "Raspberry Pi", "IoT Sensors", "3D Printing"],
  aiml: ["TensorFlow", "PyTorch", "OpenCV", "Machine Learning", "Computer Vision"],
};

export const certificates = [
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "Coursera",
    date: "2024",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2024",
  },
  {
    title: "IoT & Embedded Systems",
    issuer: "NPTEL",
    date: "2023",
  },
];

export const experience = [
  {
    title: "School Education",
    organization: "High School",
    period: "2023 - 2025",
    description: "Foundation in Computer Science with focus on Java programming and problem-solving",
    type: "education",
  },
  {
    title: "B.Tech in Computer Science",
    organization: "Lovely Professional University",
    period: "2025 - Present",
    description: "Pursuing degree with focus on AI, Machine Learning, and Full-Stack Development",
    type: "education",
  },
  {
    title: "Hackathon 101",
    organization: "First Hackathon",
    period: "2025",
    description: "Built Food Bank - a food logging and donation application using JavaScript",
    type: "hackathon",
    project: "Food Bank",
  },
  {
    title: "Smart India Hackathon (SIH)",
    organization: "Government of India",
    period: "2025",
    description: "Developed PARWAAZ - career counseling platform with interactive quizzes using MERN stack",
    type: "hackathon",
    project: "PARWAAZ",
  },
  {
    title: "Infernoverse Hackathon",
    organization: "Tech Community",
    period: "2025",
    description: "Created CityZero - AI-powered smart waste management system",
    type: "hackathon",
    project: "CityZero",
  },
];
