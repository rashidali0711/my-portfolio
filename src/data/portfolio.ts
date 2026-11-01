export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Python & AI" | "Cybersecurity" | "Java & Desktop" | "React";
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  reportFile?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Academic" | "Freelance" | "Full-time";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  iconName: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const portfolioData = {
  personal: {
    name: "Rashidali Sunasara",
    initials: "RS",
    title: "Aspiring Full-Stack Developer",
    tagline: "IT student and software developer passionate about building robust web applications, cybersecurity tools, and AI-driven solutions.",
    shortBio: "Information Technology student at LJ Polytechnic with industry internship experience at Infomatica Labs. Proficient in Python, Java, PHP, JavaScript, React, and MySQL, with growing expertise in AI/ML and cybersecurity.",
    location: "Ahmedabad, Gujarat, India",
    timezone: "UTC+5:30 (IST)",
    availability: "Open to internships and entry-level developer opportunities",
    email: "rashidali.sunasara08@gmail.com",
    github: "https://github.com/rashidali0711",
    linkedin: "https://www.linkedin.com/in/rashidali-sunasara",
    twitter: "https://github.com/rashidali0711",
    resumeUrl: "#",
    yearsOfCoding: "3+",
    projectsCompleted: 5,
    certificationsCount: 2,
    internshipDuration: "2 Months",
  },

  about: {
    headline: "Turning ideas into clean, functional, and dependable software.",
    paragraphs: [
      "I am an Information Technology student at LJ University (LJ Polytechnic, Ahmedabad) currently in my 3rd year / 6th semester. I enjoy building web applications, systems tools, and exploring the intersection of practical web engineering with AI and cybersecurity.",
      "Recently, I completed a 6-week web development internship at Infomatica Labs (Sidhpur, Gujarat), where I built an enterprise Attendance and Leaves Management System from scratch using PHP, MySQL, Chart.js, and FullCalendar with an innovative hardware device-certificate verification system.",
      "Alongside web development, I have developed a desktop Network Security Monitoring & Firewall Simulator in Python, a single-file TaskFlow manager in Java Swing, and an AI-powered educational portal integrating FAISS vector search and Gemini API."
    ],
    quickFacts: [
      { label: "College", value: "LJ Polytechnic" },
      { label: "Discipline", value: "Information Technology" },
      { label: "Status", value: "3rd Year (6th Sem)" },
      { label: "Location", value: "Ahmedabad, India" },
    ],
  },

  certifications: [
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      iconName: "ShieldCheck",
      description: "Core security principles, network defense, threat detection, and security posture management.",
    },
    {
      title: "JavaScript DOM Programming",
      issuer: "Packt Publishing",
      iconName: "FileCode2",
      description: "Advanced DOM manipulation, event bubbling/delegation, and dynamic interactive web interfaces.",
    },
  ] as Certification[],

  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "Java", level: "Proficient" },
        { name: "PHP", level: "Proficient" },
        { name: "JavaScript", level: "Proficient" },
        { name: "C Language", level: "Core Foundations" },
      ],
    },
    {
      name: "Web & Frontend",
      skills: [
        { name: "HTML5 & Semantic Markup", level: "Proficient" },
        { name: "CSS3 & Modern Styling", level: "Proficient" },
        { name: "React.js", level: "Working Knowledge" },
        { name: "Node.js", level: "Working Knowledge" },
        { name: "DOM Manipulation & AJAX", level: "Proficient" },
      ],
    },
    {
      name: "Databases & Storage",
      skills: [
        { name: "MySQL", level: "Proficient" },
        { name: "Relational Schema Design", level: "Proficient" },
        { name: "SQLite", level: "Proficient" },
        { name: "Database Normalization", level: "Proficient" },
      ],
    },
    {
      name: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub", level: "Proficient" },
        { name: "VS Code", level: "Daily Driver" },
        { name: "XAMPP / Apache", level: "Proficient" },
        { name: "OOP Concepts", level: "Solid Foundation" },
      ],
    },
    {
      name: "Specialized & Exploring",
      skills: [
        { name: "Network Security & Firewalls", level: "Active Focus" },
        { name: "AI & Machine Learning (RAG)", level: "Actively Learning" },
        { name: "CustomTkinter / GUI", level: "Proficient" },
        { name: "Java Swing & Java2D", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "infomatica-attendance",
      title: "Attendance & Leave Management System",
      subtitle: "Infomatica Labs Internship Project",
      description: "A production-grade web portal built for Infomatica Labs featuring office device auto-attendance certificates, multi-tier leave approval lifecycle, and printable reports.",
      longDescription: "Engineered an end-to-end full-stack web application with a 17-table MySQL relational database. Built an innovative 10-year HttpOnly cookie + localStorage digital certificate system to auto-mark attendance exclusively from registered office laptops. Includes smart leave balance calculation (skipping Sundays/holidays), RBAC across 3 user roles, FullCalendar visualization, Chart.js analytics, and A4 printable reports.",
      category: "Full Stack",
      tags: ["PHP 8", "MySQL", "JavaScript", "HTML/CSS", "Chart.js", "FullCalendar", "Python"],
      featured: true,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "10k+ Lines of Code • 17 DB Tables • 3 User Roles",
      reportFile: "Infomatica_Attendance_System_Project_Report.pdf",
    },
    {
      id: "nsmfs-firewall",
      title: "Network Security Monitoring & Firewall Simulator",
      subtitle: "Cybersecurity Desktop Application",
      description: "A full-featured cybersecurity tool in Python using CustomTkinter with real-time network traffic simulation, priority firewall rule engine, and threat detection.",
      longDescription: "Designed an interactive desktop cybersecurity environment that generates live network packets with source/dest IPs, ports, and protocols. Features a priority-ordered firewall engine (ALLOW/BLOCK), custom rule-based ThreatDetector for port scans and excessive connections, persistent SQLite logging via repository pattern, and embedded Matplotlib telemetry charts.",
      category: "Cybersecurity",
      tags: ["Python 3.10+", "CustomTkinter", "SQLite3", "Matplotlib", "Networking", "OOP"],
      featured: true,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "Live Packet Engine • 7 Security Pages • Dark Mode GUI",
      reportFile: "NSMFS_Report.pdf",
    },
    {
      id: "eduportal-ai",
      title: "EduPortal + AI Course Assistant",
      subtitle: "Intelligent Academic LMS & RAG Assistant",
      description: "An academic management portal with role-based access for students, teachers, and admins, integrated with a document-grounded AI course tutor.",
      longDescription: "Developed an academic management system supporting courses, syllabus chapters, assignments, and exam results across 33 relational database tables. Includes a RAG (Retrieval-Augmented Generation) assistant using PDF OCR, document chunking, Sentence Transformers, and FAISS vector search connected to the Gemini API to answer student questions strictly from verified course materials.",
      category: "Python & AI",
      tags: ["Python", "Flask", "MySQL", "FAISS", "Sentence Transformers", "Gemini API", "JavaScript"],
      featured: true,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "33 Database Tables • Multi-Role RBAC • RAG Vector Search",
      reportFile: "FULL PROJECT REPORT.pdf",
    },
    {
      id: "taskflow-java",
      title: "TaskFlow - Desktop Todo Manager",
      subtitle: "Pure Java Swing Desktop Application",
      description: "A lightweight, zero-dependency desktop productivity manager written in 1,758 lines of pure Java Swing with custom-painted Java2D vector UI.",
      longDescription: "Constructed a desktop task management application implementing full CRUD operations, priority tags, due date tracking with overdue detection, real-time search, and multi-criteria sorting. Features 37+ inner classes, custom-painted vector icons without external images, gradient headers, toast notifications, and binary file persistence using Java Object Serialization (tasks.dat).",
      category: "Java & Desktop",
      tags: ["Java", "Java Swing", "Java2D", "Object Serialization", "OOP Architecture"],
      featured: false,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "1,758 LOC • 37 Inner Classes • Zero External Dependencies",
      reportFile: "TaskFlow_Project_Documentation.pdf",
    },
    {
      id: "skill-showcase-react",
      title: "Skill Showcase - Interactive Portfolio Manager",
      subtitle: "Reactra Hackathon 2.0 Application",
      description: "A dynamic React dashboard built for Reactra Hackathon 2.0 to browse, search, and manage skills, projects, and printable achievement certificates.",
      longDescription: "Created an interactive single-page application featuring synchronized state across tabs using React useState. Displays skills with category filters, proficiency bars, and live stats. Features an Add Project workflow with dual 'Skills Used' and 'Skills Gained' tag inputs that automatically sync new skills into the master registry, plus an automated printable certificate generator with unique IDs.",
      category: "React",
      tags: ["React.js", "JavaScript", "Component State", "CSS Animations", "UI/UX Design"],
      featured: false,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "Hackathon Project • Cross-Tab State Sync • Certificate Generator",
      reportFile: "Reactra_Hackathon_2.0_Skill_Showcase_Report.pdf",
    },
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Web Development Intern",
      company: "Infomatica Labs",
      location: "Sidhpur, Gujarat, India",
      period: "15 May 2026 – 29 Jun 2026 (6 Weeks)",
      type: "Internship",
      description: "Completed an intensive web development internship focused on designing, building, and deploying full-stack web applications for organizational management.",
      achievements: [
        "Architected and developed the Attendance & Leave Management System using PHP 8, MySQL, and modern JavaScript.",
        "Engineered a tamper-resistant office device certificate mechanism (HttpOnly cookie + localStorage auto-restore) for automatic attendance from 5 authorized office laptops.",
        "Built a complete leave lifecycle engine with 5 statuses, automated monthly credit, and printable A4 compliance reports.",
        "Designed and normalized a 17-table relational schema with seeded audit and login histories.",
      ],
      technologies: ["PHP 8", "MySQL", "JavaScript", "HTML5", "CSS3", "Chart.js", "FullCalendar", "Python"],
    },
    {
      id: "exp-2",
      role: "Information Technology Student & Project Lead",
      company: "LJ Polytechnic (LJ University)",
      location: "Ahmedabad, Gujarat, India",
      period: "2024 - Present (3rd Year / 6th Sem)",
      type: "Academic",
      description: "Pursuing Diploma in Information Technology with coursework in Data Structures, Object-Oriented Programming, Database Management, Network Security, and Web Technologies.",
      achievements: [
        "Collaborated and led team mini-projects including the Network Security Monitoring & Firewall Simulator and EduPortal AI.",
        "Participated in Reactra Hackathon 2.0, designing the Skill Showcase interactive React application.",
        "Maintained consistent academic performance and authored comprehensive software documentation for major engineering projects.",
      ],
      technologies: ["Python", "Java", "PHP", "JavaScript", "MySQL", "Git & GitHub"],
    },
  ] as Experience[],

  services: [
    {
      id: "srv-1",
      title: "Web Application Development",
      description: "Developing responsive, database-driven web applications using PHP, JavaScript, React, and MySQL with clean, modular architecture.",
      icon: "Layers",
      deliverables: ["Full-Stack Web Portals", "Admin Dashboards & Portals", "Responsive Mobile-First UI"],
    },
    {
      id: "srv-2",
      title: "Database Design & MySQL",
      description: "Structuring normalized database schemas, writing optimized SQL queries, and implementing data integrity constraints.",
      icon: "Server",
      deliverables: ["Relational Schema Modeling (ERDs)", "Complex SQL Queries & Joins", "Data Audit & Logging Tables"],
    },
    {
      id: "srv-3",
      title: "Desktop Tools & Python Scripts",
      description: "Building desktop GUI utilities and automation tools using Python (CustomTkinter) and Java (Swing).",
      icon: "Cpu",
      deliverables: ["CustomTkinter Desktop GUIs", "Network Simulation & Monitoring", "Python Automation Scripts"],
    },
    {
      id: "srv-4",
      title: "Cybersecurity & Security Basics",
      description: "Applying foundational security practices: password hashing (BCrypt), session management, and firewall rule modeling.",
      icon: "Shield",
      deliverables: ["Role-Based Access Control (RBAC)", "Secure Auth & Session Guards", "Google Cybersecurity Certified"],
    },
  ] as Service[],
};
