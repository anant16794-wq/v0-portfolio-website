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
    techStack: ["ESP32", "Arduino", "C++", "Ultrasonic Sensors", "Python", "3D Printing"],
    category: "Robotics",
    featured: true,
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  hardware: ["ESP32", "Arduino", "Raspberry Pi", "IoT Sensors", "3D Printing"],
  aiml: ["TensorFlow", "PyTorch", "OpenCV", "Machine Learning", "Computer Vision"],
};

export const experience = [
  {
    title: "B.Tech in Computer Science",
    organization: "Lovely Professional University",
    period: "2022 - Present",
    description: "Focusing on AI, Machine Learning, and Full-Stack Development",
  },
  {
    title: "AI Innovation Summit",
    organization: "Participant",
    period: "2024",
    description: "Presented robotics project and networked with industry professionals",
  },
];
