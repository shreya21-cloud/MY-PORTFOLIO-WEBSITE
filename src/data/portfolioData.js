/**
 * Central Configuration File for Shreya Sharma's Portfolio
 * All data, links, descriptions, projects, skills and contacts are managed here.
 */

export const portfolioData = {
  personal: {
    name: "Shreya Sharma",
    title: "Full Stack Developer | AI Enthusiast | Computer Science Student",
    typingHeadlines: [
      "Full Stack Developer",
      "AI & Multimodal Enthusiast",
      "BTech CSE Student @ GLA University",
      "MERN Stack Builder",
      "Problem Solver & Software Crafter"
    ],
    institution: "GLA University, Mathura",
    degree: "BTech in Computer Science and Engineering",
    location: "Mathura, Uttar Pradesh, India",
    email: "sharmashreyaa21@gmail.com",
    github: "https://github.com/shreya21-cloud",
    linkedin: "https://linkedin.com/in/shreya-sharma-cse",
    statusBadge: "Available for Internships & Full-Time Roles",
    shortBio: "BTech Computer Science Engineering student at GLA University, Mathura, with a keen passion for building robust full-stack web applications and exploring state-of-the-art multimodal AI systems.",
    aboutLong: [
      "I am a Computer Science & Engineering undergraduate at GLA University, Mathura, driven by a deep fascination for how software architectures and artificial intelligence intersect to solve practical challenges.",
      "During my research internship at IIT Delhi, I worked on cutting-edge multimodal vision-language models (CLIP and LLaVA) to architect an intelligent fashion recommendation engine. This experience cemented my enthusiasm for developing end-to-end intelligent systems that deliver fast, meaningful user experiences.",
      "Currently, I am actively sharpening my expertise across full-stack engineering (React.js, Node.js, Express, MongoDB), modern frontend design systems, and algorithmic problem-solving. I thrive on clean code, modular design, and continuous learning."
    ],
    highlights: [
      {
        label: "Primary Focus",
        value: "Full-Stack Development & Multimodal AI",
        icon: "HiCodeBracket"
      },
      {
        label: "University",
        value: "GLA University, Mathura (BTech CSE)",
        icon: "HiAcademicCap"
      },
      {
        label: "Internship",
        value: "Research Intern at IIT Delhi",
        icon: "HiBriefcase"
      },
      {
        label: "Certification",
        value: "NPTEL 12-Week MIS Course",
        icon: "HiCheckBadge"
      }
    ],
    stats: [
      { number: "4+", label: "Featured Projects" },
      { number: "1", label: "IIT Delhi Internship" },
      { number: "12", label: "Weeks NPTEL MIS Course" },
      { number: "100%", label: "Dedication to Craft" }
    ]
  },

  skills: {
    categories: [
      { id: "all", name: "All Skills" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend & DB" },
      { id: "ai", name: "AI & Multimodal" },
      { id: "languages", name: "Languages" },
      { id: "tools", name: "Tools & Workflow" }
    ],
    list: [
      // Frontend
      { name: "React.js", category: "frontend", level: "Advanced", icon: "SiReact", color: "#61DAFB", description: "Hooks, Context API, Component Lifecycle, Virtual DOM" },
      { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E", description: "Async/Await, Closures, DOM manipulation, ESNext features" },
      { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", icon: "SiHtml5", color: "#E34F26", description: "Semantic markup, Flexbox, Grid, Canvas, Web Standards" },
      { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "SiTailwindcss", color: "#06B6D4", description: "Custom themes, Glassmorphism, Responsive layouts, JIT" },
      { name: "UI/UX Fundamentals", category: "frontend", level: "Intermediate", icon: "SiFigma", color: "#A855F7", description: "Design hierarchy, Accessibility (a11y), User journey mapping" },
      
      // Backend & Database
      { name: "Node.js", category: "backend", level: "Intermediate", icon: "SiNodedotjs", color: "#339933", description: "Event loop, Streams, Modules, RESTful API architecture" },
      { name: "Express.js", category: "backend", level: "Intermediate", icon: "SiExpress", color: "#E2E8F0", description: "Middleware, Routing, Error handling, Token authentication" },
      { name: "MongoDB", category: "backend", level: "Intermediate", icon: "SiMongodb", color: "#47A248", description: "Mongoose ODM, Aggregations, Schema design, Indexing" },
      { name: "RESTful APIs", category: "backend", level: "Advanced", icon: "SiPostman", color: "#FF6C37", description: "API contract design, CRUD operations, HTTP status conventions" },

      // AI & Multimodal
      { name: "CLIP (OpenAI)", category: "ai", level: "Specialized", icon: "SiPytorch", color: "#EE4C2C", description: "Joint vision-language representations & zero-shot classification" },
      { name: "LLaVA", category: "ai", level: "Specialized", icon: "TbBrandOpenai", color: "#10A37F", description: "Large Language and Vision Assistant multimodal instruction tuning" },
      { name: "Image Embeddings", category: "ai", level: "Advanced", icon: "SiTensorflow", color: "#FF6F00", description: "Feature vector extraction, High-dimensional spatial encoding" },
      { name: "Cosine Similarity", category: "ai", level: "Advanced", icon: "SiPython", color: "#3776AB", description: "Vector distance metrics, Similarity search & ranking algorithms" },

      // Languages
      { name: "Python", category: "languages", level: "Proficient", icon: "SiPython", color: "#3776AB", description: "Data science libraries, PyTorch basics, Scripting, Automation" },
      { name: "Java (Basics)", category: "languages", level: "Foundational", icon: "SiOpenjdk", color: "#ED8B00", description: "Object-Oriented Programming (OOP), Polymorphism, Core APIs" },
      { name: "C / C++ Basics", category: "languages", level: "Foundational", icon: "SiCplusplus", color: "#00599C", description: "Pointers, Memory allocation, Procedural programming basics" },

      // Tools & Workflow
      { name: "Git & GitHub", category: "tools", level: "Proficient", icon: "SiGithub", color: "#FFFFFF", description: "Version control, Branching workflows, PR reviews, CI/CD basics" },
      { name: "Postman", category: "tools", level: "Proficient", icon: "SiPostman", color: "#FF6C37", description: "Endpoint debugging, API testing suites, Environment variables" },
      { name: "VS Code", category: "tools", level: "Advanced", icon: "VscCode", color: "#007ACC", description: "Extensions, Debugging, Custom snippets, Integrated terminal" }
    ]
  },

  experience: [
    {
      id: "iit-delhi",
      role: "AI Research & Development Intern",
      organization: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi, India (Hybrid / Research)",
      period: "Internship Project",
      badge: "Featured Internship",
      projectTitle: "AI-Based T-Shirt Recommendation System",
      overview: "Conducted focused research and engineering on multimodal deep learning to build an intelligent, visual-semantic fashion recommendation pipeline.",
      keyContributions: [
        "Leveraged OpenAI's CLIP (Contrastive Language-Image Pre-Training) to map apparel product imagery and natural language queries into a unified latent vector space.",
        "Integrated LLaVA (Large Language and Vision Assistant) to parse nuanced visual attributes such as collar styles, print graphics, fabric textures, and sleeve patterns.",
        "Extracted high-density image embeddings from extensive catalog datasets and implemented vector indexing.",
        "Built a vector search pipeline using Cosine Similarity metrics to compute semantic similarity distances between user queries and candidate products in sub-second latency.",
        "Engineered an interactive demonstration interface that permits cross-modal search (text-to-image and image-to-image recommendations) without requiring manual metadata tagging."
      ],
      technologies: ["CLIP", "LLaVA", "Image Embeddings", "Cosine Similarity", "Python", "PyTorch", "Vector Search", "REST APIs"],
      impact: "Eliminated reliance on manual text tag taxonomy by achieving zero-shot visual recommendation capabilities with high semantic accuracy."
    }
  ],

  projects: [
    {
      id: "ai-tshirt",
      title: "AI T-Shirt Recommendation System",
      category: "Multimodal AI & Research",
      featured: true,
      tagline: "Multimodal visual search & recommendation engine using CLIP and LLaVA",
      summary: "Developed during an internship at IIT Delhi, this system transforms e-commerce fashion discovery by utilizing state-of-the-art vision-language models to recommend apparel based on visual semantics rather than rigid text filters.",
      problem: "Traditional fashion recommendation engines rely heavily on rigid metadata tags (color, size, category) which fail to capture intricate aesthetic styles, graphic prints, or informal user descriptions.",
      solution: "Engineered a zero-shot multimodal retrieval pipeline using OpenAI CLIP and LLaVA to project both apparel images and conversational prompts into a shared high-dimensional embedding space, calculating cosine similarity for instantaneous matching.",
      techStack: ["CLIP", "LLaVA", "Python", "Image Embeddings", "Cosine Similarity", "PyTorch", "FastAPI"],
      metrics: [
        { label: "Search Latency", value: "<150ms" },
        { label: "Model Architecture", value: "Vision-Language" },
        { label: "Retrieval Type", value: "Multimodal Zero-Shot" }
      ],
      features: [
        "Text-to-Image and Image-to-Image similarity search",
        "Fine-grained visual feature extraction with LLaVA",
        "High-dimensional vector indexing & Cosine Similarity ranking",
        "Intuitive visual dashboard for real-time recommendation testing"
      ],
      github: "https://github.com/shreya21-cloud/IITD-AI-TShirt-Recommender",
      demo: "https://github.com/shreya21-cloud/IITD-AI-TShirt-Recommender",
      demoNotice: "Research project developed under IIT Delhi internship. Repository contains model implementation, pipeline benchmarks, and evaluation notebooks."
    },
    {
      id: "foodsaathi",
      title: "FoodSaathi – Smart Food Donation & Redistribution",
      category: "Full Stack (MERN)",
      featured: true,
      tagline: "Connecting surplus food donors with NGOs and hunger-relief networks",
      summary: "A production-ready full-stack MERN platform designed to mitigate food wastage across urban cities by seamlessly connecting banquet halls, restaurants, and individuals with certified local NGOs.",
      problem: "Massive quantities of edible surplus food from events and restaurants go to waste daily due to lack of real-time coordination, dynamic geo-tracking, and trustworthy distribution channels.",
      solution: "Built a centralized web portal with interactive geolocation mapping, instant donor-to-NGO matching, automated route dispatching, and verified receipt logging.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet Maps", "Tailwind CSS", "JWT Auth"],
      metrics: [
        { label: "Architecture", value: "MERN Stack" },
        { label: "Role Management", value: "4 Distinct Portals" },
        { label: "Mapping", value: "Leaflet & OpenStreetMap" }
      ],
      features: [
        "Interactive real-time map displaying surplus food pickup points",
        "Multi-role authentication: Donors, NGOs, Delivery Volunteers, and Admins",
        "Instant request matching and automated delivery status tracker",
        "Social impact counter computing meals rescued and environmental footprint"
      ],
      github: "https://github.com/shreya21-cloud/FoodSaathi",
      demo: "https://github.com/shreya21-cloud/FoodSaathi",
      demoNotice: "Full MERN stack project with comprehensive backend REST APIs, authentication, and dynamic interactive client frontend."
    },
    {
      id: "nexthire",
      title: "NextHire – AI-Powered Job Recruitment Platform",
      category: "Full Stack & AI",
      featured: true,
      tagline: "Intelligent candidate scoring and automated resume screening portal",
      summary: "A modern web application built to streamline corporate hiring pipelines by applying automated natural language resume parsing, competency indexing, and candidate-job alignment scoring.",
      problem: "Recruiters spend an average of 30+ hours reviewing mismatched resumes manually for every technical opening, introducing human bias and hiring fatigue.",
      solution: "Created an intelligent recruitment portal that extracts key technical proficiencies, parses PDF resumes, computes relevance scores against job descriptions, and organizes candidates into a Kanban workflow.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP Parsing", "Tailwind CSS"],
      metrics: [
        { label: "Resume Screening", value: "Automated" },
        { label: "Pipeline View", value: "Kanban Board" },
        { label: "Candidate Analytics", value: "Visual Skill Match" }
      ],
      features: [
        "Automated semantic keyword & technical competence extractor",
        "Dynamic job-fit percentage score calculation",
        "Interactive applicant tracking board with drag-and-drop interview stages",
        "Recruiter dashboard with rich candidate analytics and export options"
      ],
      github: "https://github.com/shreya21-cloud/Next_Hire",
      demo: "https://github.com/shreya21-cloud/Next_Hire",
      demoNotice: "End-to-end recruitment platform with full candidate workflows and automated applicant scoring."
    },
    {
      id: "eseva-india",
      title: "e-Seva India – Citizen Public Service Portal",
      category: "Public Sector & Web",
      featured: true,
      tagline: "Transparent, accessible citizen service delivery and tracking portal",
      summary: "A responsive, accessible digital governance portal engineered to democratize access to public utility forms, citizen welfare schemes, and grievance redressal tracking.",
      problem: "Citizens frequently struggle with complex, fragmented government websites with poor mobile support, slow load times, and opaque application statuses.",
      solution: "Developed a citizen-first, mobile-friendly interface featuring clean step-by-step application flows, real-time tracking IDs, secure document uploads, and fast load speeds even on 3G connections.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
      metrics: [
        { label: "Accessibility", value: "WCAG Compliant" },
        { label: "Load Speed", value: "Sub-second 3G" },
        { label: "Service Tracking", value: "Real-time UUID" }
      ],
      features: [
        "Unified service directory with search and category filtering",
        "Real-time application status tracker using unique reference tokens",
        "Secure digital document vault with client-side format validation",
        "High-contrast, responsive layout optimized for accessibility across devices"
      ],
      github: "https://github.com/shreya21-cloud/e-seva-india",
      demo: "https://github.com/shreya21-cloud/e-seva-india",
      demoNotice: "Full-stack citizen digital service portal with role-based status updating and tracking APIs."
    }
  ],

  certifications: [
    {
      id: "nptel-mis",
      title: "Management Information System (MIS)",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      duration: "12-Week Rigorous Course",
      badge: "Verified Academic Credential",
      organization: "Funded by Ministry of Education, Govt. of India",
      description: "A comprehensive 12-week course covering enterprise-level information architecture, database design, decision support systems, and organizational technology planning.",
      keyTopics: [
        "Enterprise Resource Planning (ERP) & Supply Chain Architectures",
        "Database Management Systems & Relational Data Modeling",
        "Business Process Reengineering & Workflow Automation",
        "Decision Support Systems (DSS) & Executive Information Systems",
        "Strategic IT Alignment & Cyber Governance Frameworks"
      ],
      relevance: "Provides deep architectural perspective on how modern software engineering delivers strategic enterprise business value.",
      verificationUrl: "https://nptel.ac.in/noc"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science & Engineering",
      institution: "GLA University",
      location: "Mathura, Uttar Pradesh, India",
      status: "Currently Pursuing (Undergraduate)",
      description: "Rigorous curriculum focused on theoretical computer science foundations, software engineering practices, algorithmic problem-solving, and hands-on system building.",
      coursework: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (Java / C++)",
        "Database Management Systems (DBMS & SQL)",
        "Operating Systems & Process Management",
        "Computer Networks & Protocols",
        "Artificial Intelligence & Machine Learning",
        "Web Technologies & Distributed Systems",
        "Software Engineering & System Design"
      ],
      highlights: [
        "Active member of university technical clubs and coding forums",
        "Consistently pursuing hands-on research and practical development projects",
        "Represented department in competitive hackathons and project showcases"
      ]
    }
  ],

  contact: {
    heading: "Let's Connect & Collaborate",
    subheading: "Whether you're looking to discuss full-stack opportunities, AI research collaborations, or want to learn more about my work, my inbox is always open.",
    channels: [
      {
        type: "Email",
        value: "sharmashreyaa21@gmail.com",
        actionText: "Send an Email",
        href: "mailto:sharmashreyaa21@gmail.com",
        icon: "HiEnvelope",
        note: "Direct Response within 24 hours"
      },
      {
        type: "LinkedIn",
        value: "linkedin.com/in/shreya-sharma-cse",
        actionText: "Connect on LinkedIn",
        href: "https://linkedin.com/in/shreya-sharma-cse",
        icon: "SiLinkedin",
        note: "Professional networking & updates"
      },
      {
        type: "GitHub",
        value: "github.com/shreya21-cloud",
        actionText: "Explore Repositories",
        href: "https://github.com/shreya21-cloud",
        icon: "SiGithub",
        note: "Open-source projects & codebases"
      },
      {
        type: "Location",
        value: "GLA University, Mathura, UP, India",
        actionText: "Open to Relocation & Remote",
        href: "https://maps.google.com/?q=GLA+University+Mathura",
        icon: "HiMapPin",
        note: "Available for on-site & remote roles"
      }
    ]
  }
};
