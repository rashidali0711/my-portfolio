export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Python & AI" | "Cybersecurity" | "Java & Desktop" | "React" | "WebGL & Game";
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  reportFile?: string;
  status?: "In Active Development" | "Completed";
  ownership?: "Personal Project (Built with AI)" | "College Academic Project" | "Industry Internship";
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
  id: string;
  title: string;
  issuer: string;
  organization: string;
  category: "AI & Security" | "Programming & CS" | "Web & Development" | "Engineering & Professional";
  issueDate: string;
  credentialUrl?: string;
  pdfFile: string;
  skills: string[];
  description: string;
  instructor?: string;
  featured?: boolean;
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
    projectsCompleted: 6,
    certificationsCount: 10,
    internshipDuration: "2 Months",
  },

  about: {
    headline: "Turning ideas into clean, functional, and dependable software.",
    paragraphs: [
      "I am an Information Technology student at LJ University (LJ Polytechnic, Ahmedabad) currently in my 3rd year / 6th semester. I enjoy building web applications, systems tools, and exploring the intersection of practical web engineering with modern AI tools and cybersecurity.",
      "Recently, I completed a 6-week web development internship at Infomatica Labs (Sidhpur, Gujarat), where I built an enterprise Attendance and Leaves Management System from scratch using PHP, MySQL, Chart.js, and FullCalendar with an innovative hardware device-certificate verification system.",
      "Currently, I am actively building VoxelCraft — my own in-browser 3D voxel sandbox game engine utilizing Three.js and AI-assisted workflows — while concurrently engineering the EduPortal + AI course assistant as my college diploma capstone project at LJ Polytechnic."
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
      id: "cert-cybersecurity-google",
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      organization: "Google Career Certificates",
      category: "AI & Security",
      issueDate: "Sep 2026",
      credentialUrl: "https://coursera.org/verify/3ETYEOA3G4V9",
      pdfFile: "/certificates/Foundations of Cybersecurity.pdf",
      skills: ["Network Security", "Threat Detection", "SIEM Tools", "Security Compliance"],
      description: "Comprehensive coverage of core cybersecurity domains, risk management frameworks, network defense protocols, and security posture evaluation.",
      instructor: "Amanda Brophy (Global Director, Google Career Certificates)",
      featured: true,
    },
    {
      id: "cert-ai-ibm",
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      organization: "IBM Skills Network",
      category: "AI & Security",
      issueDate: "Feb 2026",
      credentialUrl: "https://coursera.org/verify/33RB18868T3R",
      pdfFile: "/certificates/Introduction to AI.pdf",
      skills: ["Generative AI", "Machine Learning", "Neural Networks", "AI Ethics"],
      description: "Rigorous curriculum covering artificial intelligence fundamentals, machine learning algorithms, deep learning applications, and ethical considerations.",
      instructor: "Rav Ahuja (Global Program Director, IBM Skills Network)",
      featured: true,
    },
    {
      id: "cert-python-upenn",
      title: "Introduction to Python Programming",
      issuer: "University of Pennsylvania",
      organization: "Penn Engineering (UPenn)",
      category: "Programming & CS",
      issueDate: "Sep 2025",
      credentialUrl: "https://coursera.org/verify/8Z8H1SS8K0GN",
      pdfFile: "/certificates/Python.pdf",
      skills: ["Python 3", "Data Structures", "Algorithms", "Modular Code"],
      description: "Algorithmic problem solving, Python data structures, functional modularity, and object-oriented program design.",
      instructor: "Brandon Krakowsky (Lecturer, School of Engineering, UPenn)",
      featured: true,
    },
    {
      id: "cert-sql-cuboulder",
      title: "The Structured Query Language (SQL)",
      issuer: "University of Colorado Boulder",
      organization: "CU Boulder Computer Science",
      category: "Programming & CS",
      issueDate: "Sep 2025",
      credentialUrl: "https://coursera.org/verify/OJIRPW18C97X",
      pdfFile: "/certificates/SQL.pdf",
      skills: ["Relational Database", "Complex Joins", "Aggregations", "Subqueries"],
      description: "Advanced relational database querying, multi-table joins, subqueries, grouping aggregations, and schema design.",
      instructor: "Alan Paradise (Teaching Professor, Computer Science, CU Boulder)",
      featured: true,
    },
    {
      id: "cert-js-dom-packt",
      title: "JavaScript DOM - Interactive and Dynamic Web Pages",
      issuer: "Packt Publishing",
      organization: "Packt Web Development",
      category: "Web & Development",
      issueDate: "Sep 2026",
      credentialUrl: "https://coursera.org/verify/DQDITN7FFCY2",
      pdfFile: "/certificates/JavaScript DOM.pdf",
      skills: ["DOM APIs", "Event Bubbling", "Dynamic Rendering", "Browser APIs"],
      description: "In-depth dynamic DOM manipulation, event-driven architecture, interactive UI components, and modern vanilla JavaScript.",
      featured: true,
    },
    {
      id: "cert-internship-infomatica",
      title: "Summer Internship in Full-Stack Web Development",
      issuer: "Infomatica Labs",
      organization: "Infomatica Labs Pvt. Ltd.",
      category: "Web & Development",
      issueDate: "Jun 2026",
      pdfFile: "/certificates/Summer Internship Certificate.pdf",
      skills: ["PHP 8", "MySQL Relational Schemas", "HttpOnly Auth", "Chart.js"],
      description: "6-week intensive production internship. Designed and engineered the Attendance & Leave Management web portal with 17 MySQL tables.",
      instructor: "Hasan Sunasara (Internship Mentor, Infomatica Labs)",
      featured: true,
    },
    {
      id: "cert-math-bits-pilani",
      title: "Basic Engineering Mathematics",
      issuer: "BITS Pilani",
      organization: "Birla Institute of Technology & Science, Pilani",
      category: "Engineering & Professional",
      issueDate: "Apr 2025",
      credentialUrl: "https://coursera.org/verify/VJD7VCPADZPG",
      pdfFile: "/certificates/Engeneering Mathematics.pdf",
      skills: ["Calculus", "Linear Algebra", "Mathematical Modeling", "Logic"],
      description: "Core mathematical foundations for computer science and engineering, including matrices, differential equations, and computational models.",
      instructor: "Rajiv Tandon (CEO, Strategic Initiatives, BITS Pilani)",
    },
    {
      id: "cert-wordpress-packt",
      title: "WordPress 101 - The Complete Guide",
      issuer: "Packt Publishing",
      organization: "Packt Web Engineering",
      category: "Web & Development",
      issueDate: "Apr 2025",
      credentialUrl: "https://coursera.org/verify/OKYIGM5DGAZT",
      pdfFile: "/certificates/WordPress.pdf",
      skills: ["CMS Architecture", "Theme Customization", "Plugin Setup", "Hosting"],
      description: "Full-spectrum CMS architecture, custom themes, plugin configuration, security best practices, and production site deployment.",
    },
    {
      id: "cert-interpersonal-ibm",
      title: "Developing Interpersonal Skills",
      issuer: "IBM",
      organization: "IBM Skills Network",
      category: "Engineering & Professional",
      issueDate: "Dec 2024",
      credentialUrl: "https://coursera.org/verify/HEIL6NFDQZAF",
      pdfFile: "/certificates/Developing Interpersonal Skills.pdf",
      skills: ["Workplace Communication", "Active Listening", "Teamwork", "Agility"],
      description: "Professional technical team communication, stakeholder collaboration, conflict resolution strategies, and engineering workplace agility.",
      instructor: "Rav Ahuja (Global Program Director, IBM Skills Network)",
    },
    {
      id: "cert-scratch-hkust",
      title: "Programming with Scratch",
      issuer: "HKUST",
      organization: "Hong Kong University of Science and Technology",
      category: "Programming & CS",
      issueDate: "Dec 2024",
      credentialUrl: "https://coursera.org/verify/EV4MC6PKNSBV",
      pdfFile: "/certificates/Scratch.pdf",
      skills: ["Computational Thinking", "Visual Programming", "Event-Driven Logic"],
      description: "Foundational computer science principles, event-driven architectures, loops, conditionals, and creative interactive program design.",
      instructor: "Prof. Kenneth W T Leung (Computer Science and Engineering, HKUST)",
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
      id: "voxelcraft-3d",
      title: "VoxelCraft — 3D Browser Voxel Sandbox",
      subtitle: "Personal Project • Active Development (AI-Assisted)",
      description: "An authentic Minecraft-inspired 3D voxel sandbox running completely in the browser via Three.js with zero image or audio asset dependencies. Features procedural chunk meshing, DDA raycasting, crafting, 3D extruded voxel tools, and 100% procedurally synthesized Web Audio.",
      longDescription: "Built independently with AI-assisted engineering, VoxelCraft is an authentic client-side 3D voxel sandbox game engine built in TypeScript, Three.js, and Vite. The entire world, block textures, lighting, mob AI (zombies, skeletons, creepers), archery physics, dynamic TNT explosions, hunger/armor mechanics, and 3D extruded voxel items are generated at runtime. Features a 100% procedural sound engine synthesized via the Web Audio API with zero external media files. Tested with 170 unit tests and Playwright smoke tests, and deployed live on Cloudflare Pages.",
      category: "WebGL & Game",
      tags: ["TypeScript", "Three.js", "Vite", "WebGL", "Web Audio API", "AI-Assisted", "Playwright", "Procedural Generation"],
      featured: true,
      liveUrl: "https://voxelcraft-dmr.pages.dev",
      githubUrl: "https://github.com/rashidali0711/VoxelCraft",
      metrics: "Active Development • 170 Unit Tests • Zero Media Files",
      status: "In Active Development",
      ownership: "Personal Project (Built with AI)",
    },
    {
      id: "eduportal-ai",
      title: "EduPortal + AI Course Assistant",
      subtitle: "LJ Polytechnic College Capstone Project • In Active Development",
      description: "An academic management LMS portal with role-based access for students, teachers, and admins, coupled with a document-grounded AI course assistant. Currently in active development for LJ Polytechnic diploma capstone.",
      longDescription: "Currently under active development as an academic diploma capstone at LJ Polytechnic (LJ University). The platform manages courses, syllabus chapters, student attendance, assignments, and grade results across 33 relational MySQL database tables. Features a document-grounded RAG (Retrieval-Augmented Generation) assistant using PDF OCR, document chunking, Sentence Transformers, and FAISS vector search connected to the Gemini API to answer student queries strictly from verified course syllabi.",
      category: "Python & AI",
      tags: ["Python", "Flask", "MySQL", "FAISS", "Sentence Transformers", "Gemini API", "JavaScript", "College Project"],
      featured: true,
      githubUrl: "https://github.com/rashidali0711",
      metrics: "College Capstone • Active Development • 33 Tables • RAG Vector Search",
      reportFile: "FULL PROJECT REPORT.pdf",
      status: "In Active Development",
      ownership: "College Academic Project",
    },
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
      status: "Completed",
      ownership: "Industry Internship",
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
      status: "Completed",
      ownership: "College Academic Project",
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
      status: "Completed",
      ownership: "College Academic Project",
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
      status: "Completed",
      ownership: "College Academic Project",
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
