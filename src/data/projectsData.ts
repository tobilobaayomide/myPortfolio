// Centralized project data for reuse across components
import bluepegImg from "../assets/bluepeg.png";
import FinTrackImg from "../assets/fintrack.png"
import flowlendImg from "../assets/FlowLend.png";
import shoplyImg from "../assets/Shoply.png";
import myRESUMEnowImg from "../assets/myRESUMEnow.png";
import paymeeImg from "../assets/paymee.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription?: string; 
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[]; 
  challenges?: string;
  solution?: string; 
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "FinTrack",
    category: "Full Stack & Web App",
    year: "2026",
    description:
      "A full-stack personal finance tracker for managing income, expenses and budgets with real-time insights and secure user authentication.",
    longDescription:
      "FinTrack is a full-stack personal finance dashboard built to help users take control of their monthly finances. It features a clean split-theme UI with a dark navy sidebar and light content area, interactive spending visualizations, per-category budget tracking with dynamic progress bars, and a smart insight banner that surfaces budget warnings in real time. The backend is a custom REST API built with Node.js, Express and MongoDB, with JWT-based authentication, bcrypt password hashing, and ownership-checked CRUD operations. Data syncs across devices via MongoDB Atlas, and the app is fully deployed with the frontend on Vercel and the backend on Railway.",
    image: FinTrackImg,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Axios",
    ],
    liveUrl: "https://fintrack26.vercel.app",
    githubUrl: "https://github.com/tobilobaayomide/fintrack",
    features: [
      "JWT authentication with register, login and auto logout on token expiry",
      "Full transaction management — add, edit, delete with confirmation",
      "Per-category budget limits with dynamic warning thresholds",
      "Interactive donut chart for categorized spending breakdown",
      "Month-by-month navigation with filtered data per month",
      "Smart insight banner with real-time over-budget warnings",
      "Animated summary cards with count-up numbers",
      "Fully responsive with mobile nav and slide-in transaction form",
      "Split-panel auth pages with separate branding per page",
      "Cloud data sync via MongoDB Atlas — data persists across devices",
    ],
    challenges:
      "Migrating a fully working localStorage-based frontend to a live REST API without breaking existing UI behavior, and handling MongoDB's _id format across all components that previously relied on client-generated ids.",
    solution:
      "Rewrote useTransactions and useBudgets hooks to use axios with JWT interceptors, replacing all localStorage reads and writes with API calls. Fixed all _id references systematically across components and added a response interceptor to handle token expiry gracefully at the axios level rather than in individual components.",
  },
 {
    id: 2,
    title: "PayMee",
    category: "FinTech & Payments",
    year: "2025",
    description:
      "A modern responsive financial dashboard with Supabase authentication, real-time analytics, and interactive charts. Built with Next.js, React, and Tailwind CSS.",
    longDescription:
      "PayMee is a next-generation financial dashboard designed for modern users and businesses. It features secure Google OAuth authentication via Supabase, real-time financial overviews, interactive analytics, and a beautiful, mobile-first UI. The dashboard includes transaction and card management, spending insights, and a seamless authentication flow. Built with the latest web technologies, PayMee delivers a fast, secure, and engaging user experience.",
    image: paymeeImg,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase Auth",
      "Google OAuth",
      "Tailwind CSS v4",
      "Recharts",
      "Heroicons",
      "Turbopack",
    ],
    liveUrl: "https://pay-mee.vercel.app/",
    githubUrl: "https://github.com/tobilobaayomide/PayMee",
    features: [
      "Google OAuth sign-in via Supabase",
      "User profile management with avatar support",
      "Real-time financial overview and analytics",
      "Interactive charts and spending breakdown",
      "Transaction and card management (with flip animation)",
      "Responsive, mobile-first design with Tailwind CSS",
      "Automatic session refresh and secure logout",
    ],
    challenges:
      "Integrating secure authentication, real-time analytics, and a modern UI while ensuring a seamless user experience across devices.",
    solution:
      "Utilized Supabase Auth for robust authentication, Next.js App Router for scalable routing, and Tailwind CSS for responsive, accessible design. Leveraged Recharts for interactive analytics and implemented best practices for authentication flow and error handling.",
  },

  {
    id: 3,
    title: "myRESUMEnow",
    category: "SaaS & Web App",
    year: "2025",
    description:
      "A responsive resume builder that helps users create professional resumes with ease. Features real-time preview, PDF export, DOCX upload, and cloud storage.",
    longDescription:
      "myRESUMEnow is a modern, full-featured resume builder application designed to help users create professional, ATS-friendly resumes quickly and easily. It offers a clean, responsive UI with gradient backgrounds and glassmorphism, advanced form management, real-time live preview, PDF export, DOCX upload and parsing, and secure cloud storage. Users can manage multiple resumes, use professional templates, and access their dashboard from any device. Built with React, Firebase, and modern web technologies for optimal performance and accessibility.",
    image: myRESUMEnowImg,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase (Auth & Firestore)",
      "React Hook Form",
      "jsPDF",
      "html2canvas",
      "Paged.js",
      "Mammoth.js",
      "Lucide React",
      "Modern CSS",
    ],
    liveUrl: "https://my-resume-now.vercel.app",
    githubUrl: "https://github.com/tobilobaayomide/myRESUMEnow",
    features: [
      "User authentication (Email/Password & Google OAuth)",
      "Modern, professional UI with gradients and glassmorphism",
      "Fully responsive design for desktop, tablet, and mobile",
      "Advanced form management with React Hook Form",
      "Export resumes as high-quality, clickable PDF files",
      "Upload and parse existing DOCX resumes",
      "Save and manage multiple resumes in the dashboard",
      "Guest mode (try without signing up)",
    ],
    challenges:
      "Integrating real-time preview, PDF export, and DOCX parsing while maintaining a seamless, responsive user experience across devices.",
    solution:
      "Leveraged modern React patterns, modular architecture, and third-party libraries (Paged.js, jsPDF, Mammoth.js) to deliver robust features. Used Firebase for secure authentication and cloud storage, and implemented advanced form management for reliability and ease of use.",
  },
 
  {
    id: 4,
    title: "FlowLend",
    category: "Blockchain & DeFi",
    year: "2025",
    description:
      "A decentralized lending platform on Ethereum. Lend and borrow crypto with instant liquidity, over-collateralized loans, and real-time analytics.",
    longDescription:
      "FlowLend is a cutting-edge DeFi platform that connects borrowers and lenders in a trustless, transparent, and efficient ecosystem. Built with Next.js, TypeScript, and Solidity, FlowLend enables users to lend crypto assets and earn competitive yields while providing instant liquidity to borrowers through over-collateralized loans.\n\nKey features include competitive returns for lenders, instant approval for borrowers, smart contract security, wallet integration (MetaMask, WalletConnect), real-time analytics, and a mobile-responsive UI. The platform is designed for global access, risk management, and seamless user experience.\n\nSecurity is ensured through over-collateralization, automated liquidation, and audited contracts using OpenZeppelin libraries. FlowLend is fully open-source and community-driven, with a roadmap for advanced analytics, multi-collateral support, governance, and cross-chain integration.",
    image: flowlendImg,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Solidity",
      "Hardhat",
      "Wagmi",
      "RainbowKit",
      "React Query",
      "OpenZeppelin",
      "Ethers.js",
    ],
    liveUrl: "https://flow-lend.vercel.app",
    githubUrl: "https://github.com/tobilobaayomide/FlowLend",
    features: [
      "Lend and borrow crypto assets",
      "Instant liquidity and approval",
      "Smart contract security and automated liquidation",
      "Wallet integration (MetaMask, WalletConnect, RainbowKit)",
      "Gas-optimized contracts",
      "Portfolio dashboard for lenders and borrowers",
      "Planned: multi-collateral, governance, cross-chain, yield farming",
    ],
    challenges:
      "Building secure, gas-optimized smart contracts and a seamless, real-time DeFi user experience across devices.",
    solution:
      "Used OpenZeppelin libraries for security, Hardhat for testing and deployment, and modern React/Next.js patterns for a responsive, analytics-rich frontend. Integrated wallet connection and real-time updates for a smooth DeFi experience.",
  },
  {
    id: 5,
    title: "Shoply",
    category: "E-commerce",
    year: "2025",
    description:
      "A professional e-commerce storefront with premium design, SEO, analytics, accessibility, and performance optimizations. Built with Next.js 15, TypeScript, and TailwindCSS.",
    longDescription:
      "Shoply is a modern, production-ready e-commerce storefront built with Next.js 15, TypeScript, and TailwindCSS. It features a premium design system, dynamic SEO, multi-platform analytics, accessibility-first development, and performance optimizations. Shoply includes Stripe integration, skeleton loading, custom error pages, and a mobile-first, responsive layout.\n\nKey features include dynamic meta tags, structured data, e-commerce analytics, GDPR-ready privacy, WCAG compliance, keyboard navigation, screen reader support, and a professional design system. The project is open source and ready for real-world deployment.",
    image: shoplyImg,
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Stripe",
      "Analytics (Google, Plausible, Vercel)",
    ],
    liveUrl: "https://shoply-chi-six.vercel.app",
    githubUrl: "https://github.com/tobilobaayomide/Shoply",
    features: [
      "Premium, minimal luxe design system",
      "Dynamic SEO with OpenGraph & Twitter Cards",
      "Multi-platform analytics and e-commerce tracking",
      "Stripe payment integration",
      "Product catalog and dynamic product pages",
      "Shopping cart and checkout flow",
      "Performance optimizations (lazy loading, code splitting, image optimization)",
    ],
    challenges:
      "Delivering a feature-rich, accessible, and high-performance e-commerce experience while maintaining a premium, consistent design system.",
    solution:
      "Used Next.js App Router, TailwindCSS, and Shadcn UI for a scalable, accessible frontend. Implemented dynamic SEO, analytics, and Stripe integration. Focused on accessibility, performance, and a polished user experience.",
  },
  {
    id: 6,
    title: "Bluepeg",
    category: "Enterprise Web",
    year: "2025",
    description:
      "An industrial operations company website built with Next.js 15, TypeScript, and Tailwind CSS. Showcases automation solutions, engineering expertise, and innovation.",
    longDescription:
      "Bluepeg is a cutting-edge industrial operations company website built with modern web technologies. The site showcases industrial automation solutions, engineering expertise, and innovation in the manufacturing sector.\n\nKey highlights include interactive navigation, tab-based technology showcases, responsive design, Core Web Vitals optimization, and built-in SEO. The platform features a modular architecture, modern UI/UX, accessibility, and performance optimizations.\n\nSections include About, Solutions, Case Studies, Innovation Lab, Resource Center, News, Careers, and Contact. The Innovation Lab features deep linking, smart navigation, and interactive technology tabs for AI, IoT, Cloud, Robotics, AR/VR, and Blockchain.",
    image: bluepegImg,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "ESLint"],
    liveUrl: "https://bluepeg.vercel.app",
    githubUrl: "https://github.com/tobilobaayomide/bluepeg-",
    features: [
      "Industrial automation and engineering focus",
      "Interactive, tab-based technology showcase",
      "Modular, reusable component architecture",
      "Modern UI/UX with industrial aesthetics",
    ],
    challenges:
      "Delivering a highly interactive, accessible, and performant industrial website with seamless navigation and modern design.",
    solution:
      "Used Next.js App Router, Tailwind CSS, and modular React components for scalability. Implemented tab-based navigation, deep linking, and accessibility best practices. Optimized for SEO, performance, and a premium user experience.",
  },
];

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
  return projectsData;
};
