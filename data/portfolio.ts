/**
 * Portfolio content lives here so projects, skills, experience and links can be
 * updated without editing the page layout. Keep public asset paths under /public.
 */
export const portfolio = {
  name: "Praveen Rathnayake",
  firstName: "Praveen",
  heroLines: ["Praveen", "Rathnayake"],
  role: "Software developer & DevOps enthusiast",
  availability: "Open to internships",
  cvPath: "/cv/Praveen-Thathsara-CV.pdf",
  email: "praveenstudy823@gmail.com",
  location: "Sri Lanka",
  links: {
    github: "https://github.com/Praveen-Thathsara",
    linkedin: "https://linkedin.com/in/praveen-thathsara-rathnayake-994389316/",
  },
  intro: {
    before: "I build web and mobile applications and I’m growing into cloud, DevOps and reliable software delivery: APIs, containers, pipelines and deployments that actually ship.",
  },
  about: {
    title: "Building skills through real projects.",
    paragraphs: [
      "I’m a Computer Science undergraduate at Sabaragamuwa University of Sri Lanka, based in Sri Lanka. I like practical software that solves real problems.",
      "My development work spans React, Flutter, Firebase, Node.js, APIs and databases. Alongside it, I’m deliberately building a stronger foundation in Linux, Docker, CI/CD, cloud platforms and DevOps.",
    ],
    principle: "I learn by shipping: build it, deploy it, break it, document it, then do it better.",
    focus: [
      { title: "Full-stack development", detail: "React, Next.js, Node.js and Flutter apps end to end." },
      { title: "Cloud & DevOps fundamentals", detail: "AWS, containers, orchestration and monitoring." },
      { title: "CI/CD and automation", detail: "Pipelines and deployments that run without hand-holding." },
      { title: "Maintainable code", detail: "Clear APIs, backend design and documentation." },
    ],
  },
  projects: [
    {
      name: "OnTime", shortName: "OnTime", label: "Featured project", image: "/images/projects/ontime.jpeg",
      description: "Employee management platform with scheduling, attendance, leave management and an administrative dashboard.",
      stack: ["React", "Firebase", "Firestore", "Flutter", "Tailwind"],
      github: "https://github.com/OnTime-HR/OnTime-web", liveDemo: "https://www.ontimeadmin.me/",
    },
    {
      name: "CallDoc", shortName: "CallDoc", label: "Full-stack web app", image: "/images/projects/calldoc.png",
      description: "Doctor channeling platform where patients find doctors, view available schedules and book appointments.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Praveen-Thathsara/Doctor-Channeling-Website-CallDoc",
    },
    {
      name: "GearXpert", shortName: "GearXpert", label: "Full-stack web app · Ongoing", image: "/images/projects/gearxpert.png",
      description: "Automotive spare parts platform to browse products, submit parts requests and manage product information.",
      stack: ["Next.js", "Node.js", "Express", "Supabase"],
      github: "https://github.com/Praveen-Thathsara/GearXpert",
    },
    {
      name: "Trending Movies API", shortName: "Movies API", label: "Backend / API", image: "/images/projects/trending-movies.jpg",
      description: "FastAPI service built around external movie data, with REST endpoints and backend practice.",
      stack: ["Python", "FastAPI", "REST API"],
      github: "https://github.com/Praveen-Thathsara/trending-movies",
    },
    {
      name: "Gallery Website", shortName: "Gallery", label: "Front-end project", image: "/images/projects/gallery.jpg",
      description: "Photo gallery app with upload and download, built while learning full-stack development.",
      stack: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Praveen-Thathsara/Gallery-website-Praveen-s-Gallery-",
    },
  ],
  skills: [
    { name: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "Dart", "C"] },
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs"] },
    { name: "Mobile", items: ["Flutter"] },
    { name: "Databases", items: ["Firebase", "Firestore", "MongoDB", "MySQL"] },
    { name: "Cloud", items: ["AWS", "EC2", "Elastic Beanstalk", "RDS", "CloudWatch", "SNS"] },
    { name: "DevOps", items: ["Docker", "Docker Compose", "Kubernetes", "Jenkins", "CI/CD"] },
    { name: "Version control", items: ["Git", "GitHub", "GitHub Actions"] },
  ],
  pipeline: [
    { command: "aws", tools: "ec2 · elastic beanstalk · rds", note: "cloud deployment" },
    { command: "aws", tools: "elb · auto scaling", note: "load balancing" },
    { command: "aws", tools: "cloudwatch · sns", note: "monitoring and alerts" },
    { command: "docker compose up", tools: "", note: "containerized services" },
    { command: "kubectl apply", tools: "", note: "orchestration, persistent volumes" },
    { command: "jenkins build", tools: "", note: "CI/CD and automated deployments" },
  ],
  experience: [
    {
      title: "Digital Marketing Assistant", organization: "People’s Bank", period: "2024",
      highlights: [
        "Supported digital marketing campaigns for banking products and services across online channels.",
        "Monitored campaign performance and prepared reports to support data-driven decisions.",
        "Worked with the marketing team to create digital content and improve customer engagement.",
      ],
    },
  ],
  certifications: [
    { category: "Containers", title: "Docker Foundations Professional Certificate", issuer: "Docker, Inc.", date: "Nov 2025", image: "dockerfoundation.png", url: "https://www.linkedin.com/learning/certificates/a192464705c89e81b48143e745010b03af8a831096f5ef1e59d55113a82cd572" },
    { category: "DevOps", title: "DevOps Foundations", issuer: "LinkedIn", date: "Oct 2025", image: "devops1.png", url: "https://www.linkedin.com/learning/certificates/3d49c07e690cd0239cb5685cb5221c67cf79ad1bd05e4c588427c89812c0ca7c" },
    { category: "Git & GitHub", title: "Career Essentials in GitHub Professional Certificate", issuer: "GitHub", date: "Oct 2025", image: "github1.png", url: "https://www.linkedin.com/learning/certificates/dc5d8daac161a4fa2eeccd01a023d892e26ee73e96c47f139415ac07c66288ad" },
    { category: "CI/CD", title: "Practical GitHub Actions", issuer: "LinkedIn", date: "Oct 2025", image: "github1.png", url: "https://www.linkedin.com/learning/certificates/adb8eafcb0e682150019e8e173703f2e9762007a9eda84c4eb8bcc2b92447c75" },
    { category: "Cloud", title: "AWS Educate: Getting Started with Cloud Ops", issuer: "Amazon Web Services", date: "Dec 2025", image: "aws1.png", url: "https://www.credly.com/badges/4fb7c378-6f04-426d-bd6f-6567c2f80715/linked_in_profile" },
    { category: "Cloud", title: "AWS Educate: Getting Started with Compute", issuer: "Amazon Web Services", date: "Dec 2025", image: "aws1.png", url: "https://www.credly.com/badges/25fd0713-67b8-417e-91a5-e03b7de24b6b/linked_in_profile" },
    { category: "Cloud", title: "AWS Educate: Getting Started with Networking", issuer: "Amazon Web Services", date: "Dec 2025", image: "aws1.png", url: "https://www.credly.com/badges/3c9c2e53-4252-43c7-ad3e-397393b8b703/linked_in_profile" },
    { category: "Cloud security", title: "AWS Educate: Getting Started with Security", issuer: "Amazon Web Services", date: "Dec 2025", image: "aws1.png", url: "https://www.credly.com/badges/9bf1b9d8-b21c-4859-b26f-503135fdd6f1/linked_in_profile" },
  ],
  navigation: [
    { id: "about", label: "About" }, { id: "flagships", label: "Work" },
    { id: "matrix", label: "Skills" }, { id: "experience", label: "Experience" },
    { id: "certs", label: "Certifications" }, { id: "contact", label: "Contact" },
  ],
} as const;



