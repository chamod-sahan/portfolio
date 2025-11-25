export const personalInfo = {
    name: "Sahan Chamod",
    title: "Full Stack Developer & UI/UX Designer",
    bio: [
        "I'm a Junior Full-Stack Software Developer with a strong foundation in building scalable web applications. My experience spans across Node.js, Python, and React, where I've optimized API response times by 20% and automated critical workflows.",
        "Currently pursuing my BSc Hons in Computer Science at Kingston University, I combine academic knowledge with practical industry experience. I specialize in creating user-friendly interfaces and robust backend systems, always striving for code quality and performance."
    ],
    stats: [
        { icon: "💡", value: "2+ Years", label: "Professional Experience" },
        { icon: "🚀", value: "6+ Projects", label: "Major Projects Delivered" },
        { icon: "🎓", value: "BSc Hons", label: "Computer Science" }
    ],
    experience: [
        {
            company: "Adventa Holdings",
            role: "Junior Full-Stack Software Developer",
            period: "2023 - 2024",
            description: "Implemented backend RESTful endpoints using Node.js/Express and Python. Optimized MySQL queries and leveraged AWS/Azure services to reduce API response time by 20%. Built React UI components and automated workflows using Bubble.io."
        },
        {
            company: "Adventa Holdings",
            role: "Internship Full-Stack Software Developer",
            period: "2022 - 2023",
            description: "Developed backend RESTful APIs, optimized database queries, and deployed services on cloud platforms. Assisted in creating AI bots and supported CI/CD workflows."
        }
    ],
    education: [
        {
            institution: "Kingston University",
            degree: "BSc Hons Computer Science (Software Engineering)",
            period: "2024 - 2025"
        },
        {
            institution: "Higher National Diploma",
            degree: "Computing (Software Development)",
            period: "2022 - 2024"
        }
    ],
    contact: {
        email: "sahan@example.com",
        location: "Sri Lanka",
        phone: "+94 71 234 5678",
        resume: "/resume.pdf",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
};

export const skills = [
    { name: "React / Next.js", level: 95, icon: "⚛️", category: "Frontend" },
    { name: "Node.js / Express", level: 90, icon: "🟢", category: "Backend" },
    { name: "Python / Django", level: 85, icon: "🐍", category: "Backend" },
    { name: "MySQL / PostgreSQL", level: 88, icon: "🗄️", category: "Database" },
    { name: "AWS / Azure", level: 80, icon: "☁️", category: "Cloud" },
    { name: "Flutter / Dart", level: 82, icon: "📱", category: "Mobile" }
];

export const techStack = [
    "React", "Next.js", "Node.js", "Python", "Django", "MySQL", "PostgreSQL",
    "AWS", "Azure", "Docker", "Flutter", "Firebase", "TensorFlow", "Wireshark"
];

export const projects = [
    {
        id: 1,
        title: "Dyslexia Support Mobile App",
        description: "ML-powered literacy support app for students with dyslexia. Personalized exercises improved test group reading speed by 15%. Built with Flutter, Firebase, and TensorFlow Lite.",
        image: "/project-mobile.png",
        tags: ["Flutter", "Firebase", "TensorFlow Lite", "ML"],
        link: "#",
        featured: true,
        caseStudy: {
            challenge: "Students with dyslexia often struggle with traditional learning methods, leading to frustration and slower progress. Existing apps lacked personalization and real-time feedback mechanisms tailored to individual learning patterns.",
            solution: "Developed a cross-platform mobile application using Flutter that leverages TensorFlow Lite for on-device machine learning. The app analyzes user interaction patterns to dynamically adjust the difficulty and type of literacy exercises. Firebase was used for real-time progress tracking and user management.",
            outcomes: [
                "15% improvement in reading speed for the test group over a 3-month period.",
                "High user engagement with an average daily active use of 25 minutes.",
                "Positive feedback from educators regarding the customizable curriculum features."
            ]
        }
    },
    {
        id: 2,
        title: "Network Traffic Analysis System",
        description: "ML-based intrusion detection system for malicious activity. Improved detection accuracy by 25% compared to baseline using Wireshark and Python.",
        image: "/project-web.png",
        tags: ["Python", "Machine Learning", "Wireshark", "Security"],
        link: "#",
        featured: true,
        caseStudy: {
            challenge: "Traditional rule-based intrusion detection systems were failing to identify novel attack patterns and generated a high volume of false positives, overwhelming security analysts.",
            solution: "Built a machine learning model using Python (Scikit-learn) trained on captured network traffic datasets. Integrated Wireshark for packet capture and feature extraction. The system uses anomaly detection algorithms to flag suspicious activities that deviate from normal traffic baselines.",
            outcomes: [
                "25% increase in detection accuracy for previously unknown attack signatures.",
                "40% reduction in false positive alerts, saving significant analyst time.",
                "Successfully processed live traffic streams with minimal latency."
            ]
        }
    },
    {
        id: 3,
        title: "School Management System",
        description: "Admin platform for managing student records and communication. Successfully used by 100+ students in testing phase.",
        image: "/project-web.png",
        tags: ["Angular", "Node.js", "MySQL"],
        link: "#",
        featured: true,
        caseStudy: {
            challenge: "The client's previous paper-based system for student records was inefficient, prone to errors, and made communication between parents and teachers difficult.",
            solution: "Designed and developed a comprehensive web-based management system using Angular for the frontend and Node.js/Express for the backend. Implemented a MySQL database to securely store student data, grades, and attendance. Features include a parent portal, real-time notifications, and automated report generation.",
            outcomes: [
                "Adoption by 100+ students and 20 staff members during the beta phase.",
                "Reduced administrative time for report card generation by 60%.",
                "Improved parent-teacher engagement through direct messaging features."
            ]
        }
    },
    {
        id: 4,
        title: "Car Rental Management System",
        description: "User-friendly car rental system that improved booking efficiency by automating reservation workflows.",
        image: "/project-web.png",
        tags: ["C#", ".NET", "Automation"],
        link: "#",
        featured: false,
        caseStudy: {
            challenge: "Manual booking processes resulted in double-bookings and lost revenue. The lack of a centralized system made fleet management and maintenance tracking chaotic.",
            solution: "Developed a desktop application using C# and .NET framework. The system automates the reservation process, tracks vehicle availability in real-time, and schedules maintenance alerts. It includes a reporting module for financial tracking.",
            outcomes: [
                "Eliminated double-booking incidents entirely.",
                "Increased fleet utilization efficiency by 20%.",
                "Streamlined billing and invoicing, reducing errors by 90%."
            ]
        }
    },
    {
        id: 5,
        title: "Movie App",
        description: "Dynamic web app with real-time API integration, featuring advanced search and filter functions for enhanced usability.",
        image: "/project-web.png",
        tags: ["Angular", "REST APIs", "Real-time"],
        link: "#",
        featured: false,
        caseStudy: {
            challenge: "Users wanted a seamless way to discover movies with advanced filtering options that were not available in standard aggregators. Performance was a key concern with large datasets.",
            solution: "Created a responsive web application using Angular. Integrated with a third-party movie database API to fetch real-time data. Implemented client-side caching and optimized search algorithms to ensure instant filtering by genre, rating, and release year.",
            outcomes: [
                "Achieved sub-second response times for search queries.",
                "High user retention rate due to the intuitive and responsive UI.",
                "Showcased ability to handle complex state management and API integrations."
            ]
        }
    }
];
