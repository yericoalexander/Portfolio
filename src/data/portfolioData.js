/**
 * ============================================================================
 * PORTFOLIO DATA TEMPLATE
 * ============================================================================
 * Edit this file to customize your profile, projects, experience, stack, 
 * education, achievements, gallery, and links.
 * All pages and components automatically consume this centralized data!
 */

export const personalInfo = {
  name: "Yerico Alexander",
  greeting: "Hi! I'm",
  location: "Indonesia",
  role: "Software Developer",
  headline: "Full-Stack Software Engineer building products that bridge creativity and impact.",
  bio: "Software Developer specializing in React, SolidJS, TypeScript, and Rust building high-reliability enterprise systems, real-time analytics dashboards, and scalable architectures.",
  avatar: "/images/profile.webp",
  avatarCaption: "react · rust · typescript",
  email: "yericoalexander12@gmail.com",
  githubUsername: "yericoalexander",
  socials: [
    { label: "GitHub", url: "https://github.com/yericoalexander" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yericoalexander" },
    { label: "Schedule a Call", url: "https://calendly.com" }
  ],
  footerStatementTop: "let's build",
  footerStatementAccent: "something meaningful.",
  footerRole: "Developer • Builder • Creator",
  footerLocation: "purwokerto, indonesia · utc+07:00",
  footerCopy: "© 2026 yerico alexander"
};

/**
 * CONTACT PAGE LINKS
 */
export const contactLinks = [
  { label: "Email", href: "mailto:yericoalexander12@gmail.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/yericoalexander", external: true, icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yericoalexander", external: true, icon: "linkedin" },
  { label: "Schedule a call", href: "https://calendly.com", external: true, icon: "call" }
];

/**
 * FEATURED PROJECTS (Shown on About Me and Projects page)
 */
export const featuredProjects = [
  {
    id: "smartrmj",
    slug: "smartrmj",
    title: "SmartRMJ",
    sub: "Fiber Optic Project Management System",
    btnText: "View SmartRMJ",
    icon: "/props/atomiq.webp",
    mockup1: "/props/atomiq-mockup1.webp",
    mockup2: "/props/atomiq-mockup2.webp",
    link: "https://github.com/yericoalexander",
    tags: ["React", "TypeScript", "Rust", "SurrealDB", "AG Grid"]
  },
  {
    id: "smartguard",
    slug: "smartguard",
    title: "SmartGuard",
    sub: "Smart Attendance & Patrol Management",
    btnText: "View SmartGuard",
    icon: "/props/envirotrace.webp",
    mockup1: "/props/envirotrace-mockup1.webp",
    mockup2: "/props/envirotrace-mockup2.webp",
    link: "https://github.com/yericoalexander",
    tags: ["SolidJS", "TypeScript", "Rust (Actix)", "MapLibre GL"]
  },
  {
    id: "traveler",
    slug: "traveler-platform",
    title: "Traveler Platform",
    sub: "Staycation & Tourism Web Platform",
    btnText: "View Traveler",
    icon: "/images/logo1.png",
    mockup1: "/images/project-new-1.webp",
    mockup2: "/images/project1.webp",
    link: "https://yericoalexander.github.io/Travel-Website/",
    tags: ["JavaScript", "Bootstrap", "HTML5", "CSS3"]
  }
];

/**
 * ALL PROJECTS (Complete archive for /projects and /project/:slug)
 */
export const allProjects = [
  {
    slug: "smartrmj",
    title: "SmartRMJ",
    description: "Enterprise Fiber Optic Project Management System",
    longDescription: "SmartRMJ is a mission-critical enterprise web platform designed to streamline fiber optic route planning, field team dispatch, material inventory tracking, and executive KPI reporting. It incorporates high-performance data grids with real-time sync across distributed teams.",
    highlights: ["React", "TypeScript", "Rust", "SurrealDB", "AG Grid", "Tailwind CSS"],
    links: {
      live: "https://smartrmj.example.com",
      code: "https://github.com/yericoalexander"
    },
    icon: "/props/atomiq.webp",
    banner: "/img/banners/1.webp",
    preview: { logo: "/props/atomiq.webp" },
    gallery: [
      "/img/projects/atomiq/1.png",
      "/img/projects/atomiq/2.png",
      "/img/projects/atomiq/3.png",
      "/img/projects/atomiq/4.png"
    ]
  },
  {
    slug: "smartguard",
    title: "SmartGuard",
    description: "Geofenced Patrol & Real-Time Attendance System",
    longDescription: "SmartGuard modernizes security personnel dispatch and geofenced attendance with offline-first synchronization, dynamic incident reporting, and live GPS route tracing on interactive vector maps.",
    highlights: ["SolidJS", "TypeScript", "Rust", "Actix-Web", "MapLibre GL", "PostgreSQL"],
    links: {
      live: "https://smartguard.example.com",
      code: "https://github.com/yericoalexander"
    },
    icon: "/props/envirotrace.webp",
    banner: "/img/banners/2.webp",
    preview: { logo: "/props/envirotrace.webp" },
    gallery: [
      "/img/projects/envirotrace/1.png",
      "/img/projects/envirotrace/2.png",
      "/img/projects/envirotrace/3.png",
      "/img/projects/envirotrace/4.png"
    ]
  },
  {
    slug: "traveler-platform",
    title: "Traveler Platform",
    description: "Modern staycation & vacation tour discovery platform",
    longDescription: "A comprehensive travel platform featuring trip management, vacation booking, staycation discovery, and secure checkout processing. Built with modern web technologies and clean responsive design.",
    highlights: ["JavaScript", "Bootstrap", "HTML5", "CSS3", "Responsive UI"],
    links: {
      live: "https://yericoalexander.github.io/Travel-Website/",
      code: "https://github.com/yericoalexander/Travel-Website"
    },
    icon: "/images/logo1.png",
    banner: "/images/project-new-1.webp",
    preview: { logo: "/images/logo1.png" },
    gallery: [
      "/images/project-new-1.webp",
      "/images/project1.webp"
    ]
  },
  {
    slug: "pharmix",
    title: "Pharmix App",
    description: "Healthcare services & online pharmacy web application",
    longDescription: "Pharmix is a specialized health service application designed to provide easy access to medicines and verified health articles. Features real-time stock updates, order tracking, and intuitive mobile-friendly interfaces.",
    highlights: ["JavaScript", "Bootstrap", "HTML5", "CSS3", "Healthcare"],
    links: {
      live: "https://yericoalexander.github.io/pharmix/",
      code: "https://github.com/yericoalexander/pharmix"
    },
    icon: "/images/logo2.png",
    banner: "/images/project-new-2.webp",
    preview: { logo: "/images/logo2.png" },
    gallery: [
      "/images/project-new-2.webp",
      "/images/project2.webp"
    ]
  },
  {
    slug: "furniture-store",
    title: "E-commerce Furniture",
    description: "Modern interior & online furniture store platform",
    longDescription: "An advanced e-commerce platform for furniture shopping featuring product filtering, interactive cart checkout, user reviews, order tracking, and intuitive responsive design.",
    highlights: ["JavaScript", "Bootstrap", "HTML5", "CSS3", "E-Commerce"],
    links: {
      live: "https://yericoalexander.github.io/Toko-Online-Furniture/",
      code: "https://github.com/yericoalexander/Toko-Online-Furniture"
    },
    icon: "/images/logo3.png",
    banner: "/images/project-new-3.webp",
    preview: { logo: "/images/logo3.png" },
    gallery: [
      "/images/project-new-3.webp",
      "/images/project3.webp"
    ]
  },
  {
    slug: "wfm-ioan",
    title: "WFM IOAN",
    description: "High-Throughput Field Workforce Dispatch & Analytics",
    longDescription: "WFM IOAN is a high-concurrency microservice backend engineered in Rust to automate technician task allocation, SLA compliance tracking, and route optimization across regional service centers.",
    highlights: ["Rust", "PostgreSQL", "Docker", "REST API", "Redis", "Cube.js"],
    links: {
      live: "https://wfmp.example.com",
      code: "https://github.com/yericoalexander"
    },
    icon: "/props/sikhai.webp",
    banner: "/img/banners/3.webp",
    preview: { logo: "/props/sikhai.webp" },
    gallery: [
      "/img/projects/sikhai/1.png",
      "/img/projects/sikhai/2.png",
      "/img/projects/sikhai/3.png",
      "/img/projects/sikhai/4.png"
    ]
  },
  {
    slug: "envirotrace",
    title: "EnviroTrace",
    description: "Environmental Intelligence Platform for Cities",
    longDescription: "EnviroTrace is a full-stack environmental intelligence platform that modernizes pollution enforcement while enabling transparent, data-driven reforestation monitoring. It bridges the gap between fragmented environmental initiatives by combining real-time violation tracking with geospatial analytics.",
    highlights: ["React", "React Native", "Tauri", "FastAPI"],
    links: { live: "#", code: "#" },
    icon: "/props/envirotrace.webp",
    banner: "/img/banners/4.webp",
    preview: { logo: "/props/envirotrace.webp" },
    gallery: [
      "/img/projects/envirotrace/1.png",
      "/img/projects/envirotrace/2.png",
      "/img/projects/envirotrace/3.png"
    ]
  },
  {
    slug: "atomiq",
    title: "AtomIQ",
    description: "AI-Powered Nuclear Science Educational Platform",
    longDescription: "AtomIQ is an interactive mobile and web platform leveraging interactive 3D simulations and conversational AI tutors to explain complex atomic and nuclear physics concepts in engaging, digestible formats.",
    highlights: ["React Native", "Three.js", "Supabase", "TypeScript"],
    links: { live: "#", code: "#" },
    icon: "/props/atomiq.webp",
    banner: "/img/banners/5.webp",
    preview: { logo: "/props/atomiq.webp" },
    gallery: [
      "/img/projects/atomiq/1.png",
      "/img/projects/atomiq/2.png"
    ]
  }
];

/**
 * WORK EXPERIENCE (Shown in About Me preview and full /experience story page)
 */
export const experiences = [
  {
    role: "Software Developer",
    company: "PT. Smartelco Solusi Teknologi",
    period: "Sept 2025 — Present",
    description: "Architecting high-performance web systems and microservices for telecom operations. Engineered data synchronization pipelines with Rust and SurrealDB, cutting query latency by 45%. Implemented responsive client dashboards using React and SolidJS with interactive geospatial maps and AG Grid tables.",
    highlights: ["React", "SolidJS", "TypeScript", "Rust", "SurrealDB", "Docker"]
  },
  {
    role: "SolidJS Developer",
    company: "Appwrite Ecosystem",
    period: "April 2025 — Aug 2025",
    description: "Built high-performance cross-platform applications using SolidJS, integrating with Appwrite backend services. Improved application performance and user experience through aggressive code optimization and comprehensive unit testing.",
    highlights: ["SolidJS", "TypeScript", "Appwrite", "Mobile Optimization"]
  },
  {
    role: "Software Developer Intern",
    company: "Atase Perdagangan Canberra",
    period: "July 2024 — Nov 2024",
    description: "Built bilateral trade analytics dashboards and document management portals. Automated trade statistical exports and visual reporting using modern web technologies and secure API endpoints.",
    highlights: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "REST API"]
  },
  {
    role: "Wordpress Developer",
    company: "Freelance & Open Source",
    period: "June 2024 — Nov 2024",
    description: "Led development and customization of responsive web applications and custom themes. Integrated REST APIs seamlessly with frontend interfaces and optimized caching for superior load speeds.",
    highlights: ["WordPress", "PHP", "JavaScript", "REST API", "SEO"]
  }
];

/**
 * ACHIEVEMENTS & MILESTONES (Shown in About Me and full /achievements scrapbook)
 */
export const achievements = [
  {
    title: "Champion",
    event: "Smartelco Tech Innovation Hackathon 2025",
    year: "2025",
    description: "Claimed 1st place among nationwide development teams for designing an offline-capable geofenced emergency dispatch system."
  },
  {
    title: "Finalist",
    event: "National Software Engineering Competition 2025",
    year: "2025",
    description: "Selected as top finalist for building a distributed real-time analytics pipeline using modern Rust microservices."
  },
  {
    title: "2nd Place",
    event: "Google Developer Student Clubs Hackfest 2024",
    year: "2024",
    description: "Secured 2nd place for developing an AI-assisted community service coordination platform under a 48-hour sprint."
  },
  {
    title: "1st Place",
    event: "DOST Myth Smashers Nuclear Science Competition",
    year: "2026",
    description: "Won first place in the national science competition presenting interactive digital models."
  },
  {
    title: "Champion",
    event: "FEU Create & Conquer Hackathon 2025",
    year: "2025",
    description: "Won first place building an innovative software solution under strict time constraints."
  }
];

/**
 * SCRAPBOOK ENTRIES (Layout and photos for /achievements page)
 */
export const scrapbookEntries = [
  {
    layout: "split-left",
    main: { src: "/img/dost.webp", alt: "DOST competition stage", caption: "national science stage" }
  },
  {
    layout: "split-right",
    main: { src: "/img/ignite.webp", alt: "Innovation hackathon presentation" },
    support: [
      { src: "/gallery/2.jpg", alt: "Hackathon team photo" },
      { src: "/gallery/3.jpg", alt: "Hackathon building session" }
    ]
  },
  {
    layout: "full",
    main: { src: "/img/feu.webp", alt: "Create & Conquer hackathon stage", caption: "National Hackathon Finals" }
  },
  {
    layout: "featured",
    main: { src: "/img/sparkfest.webp", alt: "Google Developer Group Hackathon" },
    support: [
      { src: "/gallery/5.jpg", alt: "Judging presentation" },
      { src: "/img/sparkfest-1.webp", alt: "Product demo" }
    ]
  },
  {
    layout: "offset",
    main: { src: "/img/pitching.webp", alt: "Research pitching presentation" },
    support: [
      { src: "/props/envirotrace.webp", alt: "Pitch preparation" }
    ]
  }
];

/**
 * EDUCATION & LEADERSHIP (Shown in About Me and full /education page)
 */
export const educationList = [
  {
    degree: "Bachelor of Information Systems",
    school: "Telkom University Purwokerto",
    year: "2025 — 2029",
    description: `Specialization in Software Architecture, Full-Stack Web Development, and Distributed Systems.
Active member of technology communities and research initiatives.
Focused on building reliable cloud infrastructure and intuitive user interfaces.`,
    highlights: ["Software Engineering", "Full-Stack Web", "Distributed Systems", "Database Design"]
  },
  {
    degree: "Computer & Network Engineering",
    school: "Vocational High School",
    year: "2022 — 2025",
    description: `Specialized in Network Infrastructure, System Administration, and Web Programming.
Hands-on experience in Linux server management, routing, and scripting.`,
    highlights: ["Network Infrastructure", "System Administration", "Web Programming"]
  }
];

export const leadershipList = [
  {
    degree: "Core Member",
    school: "Google Developer Groups on Campus · Purwokerto",
    year: "2025 — Present",
    description: `Active contributor organizing technical workshops, community hackathons, and developer mentorship sessions.
Collaborated with student engineers to run hands-on labs in modern cloud and web development.
Delivered tech talks on reactive web frameworks and type-safe systems programming.`,
    highlights: ["Community Mentorship", "Technical Workshops", "Developer Outreach"]
  },
  {
    degree: "Lead Organizer",
    school: "Campus Programming & Innovation Club",
    year: "2024 — 2025",
    description: `Led weekly coding sessions and algorithm practice for junior developers.
Organized internal code jams and guided competitive programming teams.`,
    highlights: ["Curriculum Planning", "Code Reviews", "Team Mentorship"]
  }
];

export const campusPhotos = {
  primary: { src: "/img/edu-pup.webp", alt: "Telkom University Purwokerto Campus", caption: "Telkom University · Purwokerto" },
  secondary: { src: "/img/edu-sti.webp", alt: "Vocational Campus", caption: "Vocational Institute · Network Labs" },
  leadership1: { src: "/img/explicit.webp", alt: "GDG on Campus Event", caption: "GDG on Campus · Purwokerto" },
  leadership2: { src: "/gallery/3.jpg", alt: "Programming Club Workshop", caption: "Developer Club · Workshop Session" }
};

/**
 * TECH STACK (Categorized for /stack page and tag pills for About Me)
 */
export const coreTechSet = new Set([
  "React", "SolidJS", "TypeScript", "Rust", "Next.js", "Docker", "SurrealDB", "PostgreSQL", "Actix-Web", "Git"
]);

export const techCategories = [
  {
    key: "frontend",
    name: "Frontend",
    note: "Tools I reach for when crafting fluid, responsive, and accessible user interfaces.",
    tools: [
      { name: "React", role: "UI library", note: "Component-driven interfaces and interactive web experiences.", projects: ["SmartRMJ", "3D-Portfolio"], core: true, logo: "/images/logos/react.svg" },
      { name: "SolidJS", role: "reactive library", note: "Fine-grained reactive UI with zero virtual DOM overhead.", projects: ["SmartGuard"], core: true, logo: "/images/logos/solidjs.svg" },
      { name: "TypeScript", role: "typed javascript", note: "Type-safe code that scales across the whole stack.", projects: ["SmartRMJ", "SmartGuard"], core: true, logo: "/images/logos/typescript.svg" },
      { name: "Next.js", role: "react framework", note: "Full-stack React apps with SSR, routing, and performance built in.", projects: ["Portfolio"], core: true, logo: "/images/logos/nextjs.svg", monochrome: true },
      { name: "Three.js", role: "3D web graphics", note: "Interactive 3D WebGL scenes and interactive canvas animations.", projects: ["3D-Portfolio"], core: false, logo: "/images/logos/threejs.svg", monochrome: true },
      { name: "Tailwind CSS", role: "css framework", note: "Rapid, consistent styling with utility-first CSS.", projects: ["SmartRMJ"], core: false, logo: "/images/logos/tailwindcss.svg" },
      { name: "AG Grid", role: "data grid", note: "High-performance enterprise table rendering and filtering.", projects: ["SmartRMJ"], core: false, logo: "/images/logos/aggrid.svg" },
      { name: "MapLibre GL", role: "geospatial maps", note: "Interactive vector maps for real-time asset tracing.", projects: ["SmartGuard"], core: false, logo: "/images/logos/maplibre.svg" }
    ]
  },
  {
    key: "backend",
    name: "Backend & Systems",
    note: "High-throughput servers, microservices, and reliable data pipelines.",
    tools: [
      { name: "Rust", role: "systems language", note: "Blazing fast, memory-safe backend services and tooling.", projects: ["SmartRMJ", "SmartGuard", "WFM IOAN"], core: true, logo: "/images/logos/rust.svg", monochrome: true },
      { name: "Actix-Web", role: "rust web framework", note: "Extremely fast, concurrent HTTP server for microservices.", projects: ["SmartGuard"], core: true, logo: "/images/logos/actix.svg", monochrome: true },
      { name: "PostgreSQL", role: "relational database", note: "Battle-tested relational database for complex queries.", projects: ["WFM IOAN"], core: true, logo: "/images/logos/postgresql.svg" },
      { name: "SurrealDB", role: "multi-model database", note: "Graph, document, and relational database with live queries.", projects: ["SmartRMJ"], core: true, logo: "/images/logos/surrealdb.svg" },
      { name: "Node.js", role: "runtime", note: "JavaScript outside the browser — APIs, tooling, and scripts.", projects: ["Portfolio", "3D-Portfolio"], core: false, logo: "/images/logos/nodejs.svg" },
      { name: "Python", role: "scripting & data", note: "Automation scripts, data scraping, and backend services.", projects: [], core: false, logo: "/images/logos/python.svg" },
      { name: "Express", role: "node framework", note: "Minimal, flexible server-side routing and middleware.", projects: [], core: false, logo: "/images/logos/express.svg", monochrome: true }
    ]
  },
  {
    key: "devops",
    name: "DevOps & Cloud",
    note: "How I package, ship, and scale software with confidence.",
    tools: [
      { name: "Docker", role: "containers", note: "Reproducible environments that run identically everywhere.", projects: ["WFM IOAN"], core: true, logo: "/images/logos/docker.svg" },
      { name: "Git", role: "version control", note: "The foundation of every project I build — history I can trust.", projects: ["All Projects"], core: true, logo: "/images/logos/git.svg" },
      { name: "GitHub", role: "collaboration", note: "Where I host, review, and ship code with others.", projects: ["All Projects"], core: true, logo: "/images/logos/github.svg", monochrome: true },
      { name: "GitHub Actions", role: "ci/cd", note: "Automated builds, tests, and deployments on push.", projects: ["SmartRMJ"], core: false, logo: "/images/logos/githubactions.svg" },
      { name: "Vercel", role: "deployment", note: "Zero-config deployment platform for modern web apps.", projects: ["Portfolio"], core: true, logo: "/images/logos/vercel.svg", monochrome: true }
    ]
  },
  {
    key: "tools",
    name: "Developer Tools",
    note: "Everyday tools and workflows that shape productivity.",
    tools: [
      { name: "Visual Studio Code", role: "editor", note: "Primary editor tailored with custom keybindings and plugins.", projects: [], core: false, logo: "/images/logos/vscode.svg" },
      { name: "Postman", role: "api testing", note: "Exploring, testing, and verifying HTTP endpoints.", projects: [], core: false, logo: "/images/logos/postman.svg" },
      { name: "Figma", role: "design tool", note: "Designing interfaces, prototypes, and user flows.", projects: [], core: false, logo: "/images/logos/figma.svg" },
      { name: "pnpm / npm", role: "package manager", note: "Fast, disk-efficient dependency management.", projects: [], core: false, logo: "/images/logos/pnpm.svg" }
    ]
  }
];

export const currentlyExploring = [
  "Go", "WebAssembly", "Tauri 2.0", "SurrealQL", "Distributed Tracing"
];

/**
 * GALLERY (Moments, hackathons, and memories for /gallery)
 */
export const galleryItems = [
  { title: "CodeSpark", src: "/img/codespark.webp", alt: "CodeSpark event snapshot", size: "featured", location: "Purwokerto", year: "2025", tag: "event" },
  { title: "Enigma Build", src: "/img/enigma.webp", alt: "Enigma build session", size: "wide", location: "Hackathon Lab", year: "2025", tag: "build" },
  { title: "FEU Create", src: "/img/feu.webp", alt: "FEU Create stage photo", size: "wide", location: "Stage Presentation", year: "2025", tag: "competition" },
  { title: "Ignite Hackathon", src: "/img/ignite.webp", alt: "Ignite Hackathon presentation", size: "featured", location: "Innovation Hall", year: "2025", tag: "hackathon" },
  { title: "Campus Moments 1", src: "/gallery/1.jpg", alt: "Gallery image 1", size: "tall", location: "Campus Lab", year: "2025", tag: "memory" },
  { title: "Team Collaboration", src: "/gallery/2.jpg", alt: "Gallery image 2", size: "square", location: "Project Room", year: "2025", tag: "memory" },
  { title: "Workshop Build", src: "/gallery/3.jpg", alt: "Gallery image 3", size: "tall", location: "Workshop Hall", year: "2025", tag: "memory" },
  { title: "Hackathon Session", src: "/gallery/4.jpg", alt: "Gallery image 4", size: "square", location: "Hackathon Arena", year: "2025", tag: "memory" },
  { title: "Judging Demo", src: "/gallery/5.jpg", alt: "Gallery image 5", size: "tall", location: "Judging Stage", year: "2025", tag: "memory" },
  { title: "Tech Conference", src: "/gallery/6.jpg", alt: "Gallery image 6", size: "tall", location: "Auditorium", year: "2025", tag: "memory" },
  { title: "Code Sprint", src: "/gallery/7.jpg", alt: "Gallery image 7", size: "wide", location: "Innovation Hub", year: "2025", tag: "memory" },
  { title: "Community Meetup", src: "/gallery/8.jpg", alt: "Gallery image 8", size: "wide", location: "Campus Lounge", year: "2025", tag: "memory" }
];
