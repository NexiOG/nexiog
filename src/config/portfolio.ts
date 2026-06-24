export const PORTFOLIO_PROJECTS = [
  {
    id: "reliance-retail-app",
    title: "Reliance Retail Delivery App",
    category: "App Development",
    description: "A highly scalable eCommerce delivery app developed for a leading Indian retail giant, handling over 100k daily orders seamlessly.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/reliance-retail-app",
    tags: ["React Native", "Node.js", "AWS"],
    challenge: "The client was experiencing severe bottlenecks during peak festival seasons. Their monolithic legacy system was unable to handle concurrent spikes, resulting in failed transactions, frustrated customers, and lost revenue. They needed a complete mobile re-architecture.",
    solution: "We engineered a microservices-based backend using Node.js and AWS, coupled with a highly responsive React Native mobile app. We implemented Redis caching and elastic auto-scaling to dynamically handle traffic surges without latency.",
    results: [
      "Zero downtime during the Diwali peak sale.",
      "100,000+ daily orders processed seamlessly.",
      "40% reduction in average server response time."
    ]
  },
  {
    id: "hdfc-fintech-dash",
    title: "HDFC Wealth Dashboard",
    category: "Software Development - CRM",
    description: "A secure financial CRM dashboard for wealth managers at HDFC, providing real-time portfolio tracking and automated risk assessment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/hdfc-fintech-dash",
    tags: ["Next.js", "Python", "PostgreSQL"],
    challenge: "Wealth managers were relying on disjointed legacy systems and massive Excel spreadsheets to track client portfolios, leading to slow reporting, data fragmentation, and an inability to provide real-time advice.",
    solution: "We built a centralized, ultra-fast Next.js dashboard backed by a Python data engine. It integrates directly with internal APIs to provide real-time portfolio tracking, AI-driven risk assessment, and one-click PDF report generation.",
    results: [
      "Reduced report generation time from 2 hours to 30 seconds.",
      "Adopted by 500+ wealth managers nationwide.",
      "99.99% uptime with bank-grade security."
    ]
  },
  {
    id: "tata-motors-erp",
    title: "Tata Motors Supply Chain ERP",
    category: "Software Development - ERP",
    description: "An enterprise-grade supply chain ERP system optimizing inventory logistics across 50+ manufacturing plants in India.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/tata-motors-erp",
    tags: ["Angular", "Spring Boot", "MySQL"],
    challenge: "Supply chain opacity was causing massive inventory holding costs and production delays. The existing system lacked cross-plant visibility, making it impossible to optimize raw material distribution efficiently.",
    solution: "We developed a robust ERP platform using Angular and Spring Boot that unified data across 50+ manufacturing plants. We introduced predictive inventory algorithms and a centralized logistics tracking hub.",
    results: [
      "15% reduction in overall inventory holding costs.",
      "Real-time visibility achieved across 50+ plants.",
      "Automated procurement saving 100+ manual hours weekly."
    ]
  },
  {
    id: "zomato-vendor-portal",
    title: "Vendor Management Portal",
    category: "Web Development",
    description: "A comprehensive vendor management and onboarding portal used by thousands of restaurant partners across Tier-1 and Tier-2 Indian cities.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/zomato-vendor-portal",
    tags: ["React", "Express", "Redis"],
    challenge: "Onboarding new restaurant partners was a heavily manual, paper-driven process that took an average of 14 days per vendor, slowing down the platform's market expansion.",
    solution: "We created a self-serve React web portal with an Express backend, enabling vendors to upload documents, manage menus, and track payouts independently. We also integrated an automated OCR system for faster KYC verification.",
    results: [
      "Vendor onboarding time slashed from 14 days to 48 hours.",
      "Successfully onboarded 10,000+ vendors in the first quarter.",
      "Support ticket volume reduced by 60%."
    ]
  },
  {
    id: "apollo-telemed",
    title: "Apollo Telemedicine App",
    category: "App Development",
    description: "A secure telehealth application connecting rural Indian patients with specialist doctors via encrypted video consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/apollo-telemed",
    tags: ["Flutter", "Firebase", "WebRTC"],
    challenge: "Rural patients faced immense difficulties accessing specialist healthcare. The goal was to build a highly reliable telemedicine app that could function smoothly even on low-bandwidth rural networks.",
    solution: "We utilized Flutter to build a cross-platform app, leveraging WebRTC for encrypted, low-bandwidth video streaming. We integrated Firebase for real-time chat and prescription sharing, ensuring a seamless doctor-patient experience.",
    results: [
      "Facilitated over 50,000 successful remote consultations.",
      "Video calls optimized to work on 3G networks.",
      "HIPAA-compliant architecture deployed successfully."
    ]
  },
  {
    id: "byjus-lms",
    title: "EdTech Learning Management System",
    category: "Software Development - CMS",
    description: "A robust Learning Management System built for a major Indian EdTech startup, delivering video courses to over 2 million students.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    link: "/portfolio/byjus-lms",
    tags: ["Vue.js", "Django", "AWS S3"],
    challenge: "The startup's original platform crashed consistently when more than 10,000 students attempted to stream video content simultaneously, causing massive churn.",
    solution: "We migrated their entire video delivery infrastructure to AWS S3 with CloudFront CDN for global edge caching. The frontend was rewritten in Vue.js for a lightning-fast SPA experience, backed by a scalable Django REST framework.",
    results: [
      "Successfully supported 2 million active students.",
      "100,000+ concurrent users handled with zero lag.",
      "Video buffer rate reduced by 85%."
    ]
  }
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Development",
  "App Development",
  "Software Development - CRM",
  "Software Development - HRMS",
  "Software Development - CMS",
  "Software Development - ERP"
];
