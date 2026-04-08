// Centralized project data for reuse across components
import bluepegImg from "../assets/bluepeg1.png";
import bluepegImg2 from "../assets/bluepeg2.png";
import bluepegImg3 from "../assets/bluepeg3.png";
import bluepegImg4 from "../assets/bluepeg4.png";
import FinTrackImg from "../assets/fintrack1.png"
import FinTrackImg2 from "../assets/fintrack2.png"
import FinTrackImg3 from "../assets/fintrack3.png"
import FinTrackImg4 from "../assets/fintrack4.png"
import FashionistaImg from "../assets/fashionista1.png"
import FashionistaImg2 from "../assets/fashionista2.png"
import FashionistaImg3 from "../assets/fashionista3.png"
import FashionistaImg4 from "../assets/fashionista4.png"
import W3Img from "../assets/w31.png"
import W3Img2 from "../assets/w32.png"
import W3Img3 from "../assets/w33.png"
import W3Img4 from "../assets/w34.png"
import PayMeeImg from "../assets/paymee1.png"
import PayMeeImg2 from "../assets/paymee2.png"
import PayMeeImg3 from "../assets/paymee3.png"
import PayMeeImg4 from "../assets/paymee4.png"
import myRESUMEnowImg from "../assets/myresume1.png"
import myRESUMEnowImg2 from "../assets/myresume2.png"
import myRESUMEnowImg3 from "../assets/myresume3.png"
import myRESUMEnowImg4 from "../assets/myresume4.png"
import resumeenowImg from "../assets/resumeenow1.png"
import resumeenowImg2 from "../assets/resumeenow2.png"
import resumeenowImg3 from "../assets/resumeenow3.png"
import resumeenowImg4 from "../assets/resumeenow4.png"
import shoplyImg from "../assets/shoply1.png"
import shoplyImg2 from "../assets/shoply2.png"
import shoplyImg3 from "../assets/shoply3.png"
import shoplyImg4 from "../assets/shoply4.png"
import ARTHUBImg from "../assets/arthub1.png";
import ARTHUBImg2 from "../assets/arthub2.png";
import ARTHUBImg3 from "../assets/arthub3.png";
import ARTHUBImg4 from "../assets/arthub4.png";

export interface Project {
  id: number;
  slug: string;
  homeOrder: number;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription?: string; 
  image: string;
  galleryImages?: string[];
  galleryLabels?: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[]; 
  challenges?: string;
  solution?: string; 
  spotlight?: {
    role: string;
    focus: string;
    outcome: string;
  };
  showcase?: {
    blurb: string;
    why: string;
    stack?: string[];
  };
  mobileTitleSize?: 'default' | 'compact';
}

export const projectsData: Project[] = [
  {
    id: 7,
    slug: "fintrack",
    homeOrder: 6,
    title: "FinTrack",
    category: "Full Stack & Web App",
    year: "2026",
    description:
      "A full-stack personal finance tracker for managing income, expenses and budgets with real-time insights and secure user authentication.",
    longDescription:
      "FinTrack is a full-stack personal finance dashboard built to help users take control of their monthly finances. It features a clean split-theme UI with a dark navy sidebar and light content area, interactive spending visualizations, per-category budget tracking with dynamic progress bars, and a smart insight banner that surfaces budget warnings in real time. The backend is a custom REST API built with Node.js, Express and MongoDB, with JWT-based authentication, bcrypt password hashing, and ownership-checked CRUD operations. Data syncs across devices via MongoDB Atlas, and the app is fully deployed with the frontend on Vercel and the backend on Railway.",
    image: FinTrackImg,
  galleryImages: [FinTrackImg, FinTrackImg2, FinTrackImg3, FinTrackImg4],
  galleryLabels: [
  'Fintrack dashboard overview',
  'Fintrack sign in',
  'Fintrack transaction modal',
  'Fintrack transaction history',
],
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
    spotlight: {
      role: 'Frontend architecture, API integration, dashboard UX',
      focus: 'Move a local-first finance tool onto a real backend without losing clarity.',
      outcome: 'A full-stack finance dashboard with persistent data, stable auth flows, and clearer budgeting feedback.',
    },
    showcase: {
      blurb:
        'A finance dashboard designed to make budgets, transactions, and alerts legible at a glance.',
      why:
        'Money products fail quickly when dense information feels unclear or unreliable.',
      stack: ['React', 'Node.js', 'MongoDB'],
    },
  },
 

  {
    id: 10,
    slug: "myresume-now",
    homeOrder: 9,
    title: "myRESUMEnow",
    category: "SaaS & Web App",
    year: "2025",
    description:
      "A responsive resume builder that helps users create professional resumes with ease. Features real-time preview, PDF export, DOCX upload, and cloud storage.",
    longDescription:
      "myRESUMEnow is a modern, full-featured resume builder application designed to help users create professional, ATS-friendly resumes quickly and easily. It offers a clean, responsive UI with gradient backgrounds and glassmorphism, advanced form management, real-time live preview, PDF export, DOCX upload and parsing, and secure cloud storage. Users can manage multiple resumes, use professional templates, and access their dashboard from any device. Built with React, Firebase, and modern web technologies for optimal performance and accessibility.",
    image: myRESUMEnowImg,
  galleryImages: [myRESUMEnowImg, myRESUMEnowImg2, myRESUMEnowImg3, myRESUMEnowImg4],
  galleryLabels: [
  'myRESUMEnow landing page',
  'myRESUMEnow dashboard',
  'myRESUMEnow form page',
  'myRESUMEnow preview page',
],
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
    spotlight: {
      role: 'Form architecture, live preview UX, export workflow design',
      focus: 'Keep a complex resume workflow calm while users edit, preview, and export in real time.',
      outcome: 'A resume builder with stronger editing flow, clearer preview feedback, and reliable output paths.',
    },
    showcase: {
      blurb:
        'A resume builder shaped to make editing, previewing, and exporting feel continuous instead of fragmented.',
      why:
        'Document tools break down when input, preview, and export behave like separate products.',
      stack: ['React', 'Firebase', 'jsPDF'],
    },
    mobileTitleSize: 'compact',
  },
 
  {
    id: 8,
    slug: "shoply",
    homeOrder: 7,
    title: "Shoply",
    category: "E-commerce",
    year: "2025",
    description:
      "A professional e-commerce storefront with premium design, SEO, analytics, accessibility, and performance optimizations. Built with Next.js 15, TypeScript, and TailwindCSS.",
    longDescription:
      "Shoply is a modern, production-ready e-commerce storefront built with Next.js 15, TypeScript, and TailwindCSS. It features a premium design system, dynamic SEO, multi-platform analytics, accessibility-first development, and performance optimizations. Shoply includes Stripe integration, skeleton loading, custom error pages, and a mobile-first, responsive layout.\n\nKey features include dynamic meta tags, structured data, e-commerce analytics, GDPR-ready privacy, WCAG compliance, keyboard navigation, screen reader support, and a professional design system. The project is open source and ready for real-world deployment.",
      image: shoplyImg,
  galleryImages: [shoplyImg, shoplyImg2, shoplyImg3, shoplyImg4],
  galleryLabels: [
  'Shoply landing page',
  'Shoply Collection page',
  'Shoply product page',
  'Shoply cart page',
],
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
    spotlight: {
      role: 'Design system, storefront UI, SEO and analytics implementation',
      focus: 'Balance premium presentation with accessibility and performance.',
      outcome: 'A production-ready storefront with stronger product storytelling and scalable UI structure.',
    },
    showcase: {
      blurb: 'A premium storefront shaped around conversion, accessibility, and speed.',
      why:
        'Commerce UX had to feel polished without slowing down discovery, browsing, or checkout.',
      stack: ['Next.js', 'TypeScript', 'Stripe'],
    },
  },
  {
    id: 9,
    slug: "bluepeg",
    homeOrder: 8,
    title: "Bluepeg",
    category: "Enterprise Web",
    year: "2025",
    description:
      "An industrial operations company website built with Next.js 15, TypeScript, and Tailwind CSS. Showcases automation solutions, engineering expertise, and innovation.",
    longDescription:
      "Bluepeg is a cutting-edge industrial operations company website built with modern web technologies. The site showcases industrial automation solutions, engineering expertise, and innovation in the manufacturing sector.\n\nKey highlights include interactive navigation, tab-based technology showcases, responsive design, Core Web Vitals optimization, and built-in SEO. The platform features a modular architecture, modern UI/UX, accessibility, and performance optimizations.\n\nSections include About, Solutions, Case Studies, Innovation Lab, Resource Center, News, Careers, and Contact. The Innovation Lab features deep linking, smart navigation, and interactive technology tabs for AI, IoT, Cloud, Robotics, AR/VR, and Blockchain.",
    image: bluepegImg,
  galleryImages: [bluepegImg, bluepegImg2, bluepegImg3, bluepegImg4],
  galleryLabels: [
  'Bluepeg landing page',
  'Bluepeg Solutions Portfolio',
  'Bluepeg Innovations page',
  'Bluepeg Resources page',
],
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
    spotlight: {
      role: 'Information architecture, interaction design, technical storytelling',
      focus: 'Present dense industrial capability in a way that still feels sharp, modern, and easy to move through.',
      outcome: 'A more navigable enterprise site with clearer pathways into solutions, technologies, and innovation content.',
    },
    showcase: {
      blurb:
        'An enterprise website structured to make industrial capability feel organized, credible, and current.',
      why:
        'Complex company sites need stronger hierarchy before visitors can trust the depth behind the claims.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
  },
  {
  id: 5,
  slug: "arthub",
  homeOrder: 5,
  title: "ARTHUB",
  category: "Frontend & Web App",
  year: "2026",
  description:
    "A responsive digital art marketplace client for discovering collectible photography, exploring live auctions, tracking upcoming drops, and completing wallet or card-based checkout flows.",
  longDescription:
    "ARTHUB is a frontend client for a digital art marketplace built around collectible photography, curated artwork, and auction-style experiences. It combines an editorial landing page with animated hero sections, featured collections, a searchable marketplace, detailed product pages, live bid screens, and an upcoming drops experience with real-time countdown states. The app also includes login and registration flows, a shared cart powered by Zustand, and a multi-step checkout covering shipping and payment. The interface supports both light and dark themes, uses dedicated mobile and desktop layouts for key views, and is structured with reusable React components, custom hooks, and route-based navigation for a polished browsing experience.",
  image: ARTHUBImg,
  galleryImages: [ARTHUBImg, ARTHUBImg2, ARTHUBImg3, ARTHUBImg4],
  galleryLabels: [
  'Arthub Landing page',
  'Arthub Maarketplace',
  'Arthub Checkout',
  'Arthub Auction Livebid',
],
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Zustand",
    "@headlessui/react",
    "React Icons",
    "React Slick",
    "React Swipeable",
  ],
  liveUrl: "https://your-arthub.com",
  githubUrl: "https://github.com/tobilobaayomide/art--hub",
  features: [
    "Editorial-style homepage with animated hero carousels for desktop and mobile",
    "Searchable marketplace with category, artist, year, price, and sort filters",
    "Dedicated product pages with quantity controls, collection browsing, and add-to-cart flow",
    "Shared cart state with item updates, removal, and route-based checkout progression",
    "Multi-step checkout covering shopping cart, shipping details, and payment details",
    "Wallet and card payment forms with custom network and token selectors",
    "Live auction interface with bidding UI, chat layout, reactions, and mobile/desktop variations",
    "Upcoming drops page with real-time countdowns and automatic UPCOMING, LIVE NOW, and ENDED states",
    "Dark and light mode toggle with localStorage persistence and system-theme fallback",
    "Frontend auth flows for register and login, wired to API-ready endpoints through Vite proxying",
  ],
  challenges:
    "Balancing an expressive, editorial art direction with utility-heavy marketplace and checkout screens, while keeping the experience responsive across mobile and desktop without duplicating too much UI logic.",
  solution:
    "Structured the app into reusable route-level pages, modular UI components, and focused custom hooks for theme management, menu transitions, marketplace filtering, and auth handling. Zustand keeps cart actions consistent across product, cart, shipping, and payment screens, while Headless UI powers custom selectors for wallet, network, and token inputs without sacrificing interaction quality.",
  spotlight: {
    role: "Frontend development, component architecture, responsive UX",
    focus: "Build a digital art marketplace that feels immersive on the homepage and clear in transactional flows.",
    outcome: "A polished marketplace client with strong visual identity, responsive auction and drop experiences, and a smoother cart-to-checkout journey.",
  },
  showcase: {
    blurb:
      "A digital art marketplace that blends gallery-style presentation with search, auction, and checkout flows.",
    why:
      "Art platforms need to feel visually memorable without making browsing, discovery, or purchasing feel confusing.",
    stack: ["React", "TypeScript", "Zustand"],
  },
},
 {
     id: 3,
  slug: "fashionista",
  homeOrder: 3,
  title: "Fashionista",
  category: "Luxury Fashion",
  year: "2025",
  description:
    "An immersive luxury fashion editorial site with bold storytelling, animated section transitions, and a high-contrast visual system built to showcase collections and brand philosophy.",
  longDescription:
    "Fashionista is a luxury fashion editorial experience built with Next.js 16, React 19, TypeScript, and TailwindCSS. The site combines cinematic imagery, oversized typography, scroll-triggered motion, and a tightly controlled color palette to create a high-end brand narrative. It includes a collection gallery, editorial storytelling sections, and a visually dramatic navigation system that keeps the focus on fashion content.\n\nKey features include layered hero art direction, GSAP-powered scroll animations, Framer Motion entrance transitions, a curated gallery page, and a consistent typography system across the brand story. The project is intentionally desktop-first to preserve the editorial composition and immersive pacing of the experience.",
  image: FashionistaImg,
  galleryImages: [FashionistaImg, FashionistaImg2, FashionistaImg3, FashionistaImg4],
  galleryLabels: [
  'Fashionista Interface',
  'Fashionista Closing section',
  'Fashionista Collections ',
  'Fashionista Credit page',
],
  technologies: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "GSAP",
    "locomo tive-scroll",
    "react-fast-marquee"
  ],
    liveUrl: "https://fashionistaaa.com",
  githubUrl: "https://github.com/tobilobaayomide/fashionista",
  features: [
    "Immersive luxury editorial hero",
    "Animated scroll storytelling with GSAP and Framer Motion",
    "Curated collection sections and brand narrative",
    "Gallery page with horizontal scroll composition",
    "Distinctive typography and color system",
    "Desktop-first presentation with a strong visual hierarchy",
    "Motion-led navigation and transition patterns",
  ],
  challenges:
    "Balancing high-impact fashion art direction with readable hierarchy, smooth scroll choreography, and a consistent brand voice across multiple editorial sections.",
  solution:
    "Used Next.js App Router, TypeScript, TailwindCSS, Framer Motion, and GSAP to build a layered editorial experience with reusable section patterns, controlled motion timing, and image-forward composition.",
  spotlight: {
    role: "Art direction, editorial layout, motion design, and brand storytelling",
    focus: "Keep the experience luxurious and cinematic without losing structure or readability.",
    outcome:
      "A visually distinctive fashion site with stronger storytelling, smoother motion, and a cohesive luxury identity.",
  },
  showcase: {
    blurb: "A luxury fashion editorial site shaped around motion, atmosphere, and brand storytelling.",
    why:
      "The concept needed to feel premium and immersive while keeping the collection narrative clear from hero to gallery.",
    stack: ["Next.js", "TailwindCSS", "GSAP"],
  },
  },
{
  id: 4,
  slug: "w3",
  homeOrder: 4,
  title: "W3",
  category: "Bitcoin / Web3",
  year: "2026",
  description:
    "A Bitcoin-native Web3 landing page built as a motion-led single-page experience with cinematic reveals, scroll-triggered sections, and responsive interaction patterns.",
  longDescription:
    "W3 Landing Page is a Bitcoin-native Web3 marketing experience built with React 19, TypeScript, Vite, Tailwind CSS v4, and GSAP. Designed as a single-page journey, the site uses bold composition, layered animation, and controlled pacing to guide users through product messaging, supporting modules, editorial-style content, and clear calls to action.\n\nThe experience features an intro overlay that reveals the hero, sequenced section animations, expandable content modules, a pinned blog reveal, a floating circular CTA, and a mobile-aware footer interaction system. A shared reduced-motion hook helps keep the animation-heavy interface accessible, allowing the site to feel dynamic without sacrificing usability or maintainability.",
  image: W3Img,
  galleryImages: [W3Img, W3Img2, W3Img3, W3Img4],
  galleryLabels: [
  'W3 primary interface',
  'W3 loading screen',
  'W3 module page',
  'W3 module page',
],
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind",
    "GSAP",
  ],
  liveUrl: "https://w3-protocol.vercel.app/",
  githubUrl: "https://github.com/tobilobaayomide/w3",
  features: [
    "Motion-heavy intro overlay with hero reveal",
    "Animated hero with layered sequencing",
    "Expandable feature and infrastructure modules",
    "Scroll-driven content transitions",
    "Pinned blog reveal section",
    "Floating circular call-to-action",
    "Responsive footer with mobile accordion behavior",
    "Reduced-motion accessibility fallback",
  ],
  challenges:
    "Building a motion-heavy landing page that feels immersive and premium without losing readability, accessibility, or responsive behavior across sections.",
  solution:
    "Structured the project as modular React components, used GSAP to coordinate section-level animation timelines, and added a shared reduced-motion hook so the interface could stay visually expressive while remaining accessible and easier to maintain.",
  spotlight: {
    role: "Frontend engineering, motion design, component architecture, and responsive UI implementation",
    focus:
      "Create a cinematic Bitcoin-native experience with strong motion and clear content flow without overwhelming the user.",
    outcome:
      "A polished single-page Web3 landing experience with stronger visual rhythm, clearer section transitions, and better accessibility support.",
  },
  showcase: {
    blurb:
      "A Bitcoin-native Web3 landing page shaped around motion, pacing, and high-impact visual storytelling.",
    why:
      "The project needed to feel bold and modern while still presenting product messaging, feature modules, and calls to action in a clear, structured way.",
    stack: ["React", "Tailwind", "GSAP"],
  },
},

{
  id: 2,
  slug: "paymee",
  homeOrder: 2,
  title: "PayMee",
  category: "Fintech / Payments",
  year: "2026",
  description:
    "A mobile-first fintech platform with a polished landing page and authenticated dashboard for managing balances, transactions, cards, analytics, and account settings.",
  longDescription:
    "PayMee is a modern fintech product experience built with Next.js, React 19, TypeScript, Tailwind CSS, Supabase, Framer Motion, and Recharts. The public-facing site uses a clear landing-page flow with hero, features, transactions, testimonials, FAQ, CTA, and footer sections, while the authenticated app extends the same design language into a responsive dashboard.\n\nInside the product, users can review account balances, inspect spending trends across different date ranges, manage cards with PIN-protected actions, export transaction history, and update profile, security, notification, and card-limit settings. The interface stays compact and mobile-first so dense financial data remains readable without sacrificing visual polish.",
  image: PayMeeImg,
  galleryImages: [PayMeeImg, PayMeeImg2, PayMeeImg3, PayMeeImg4],
  galleryLabels: [
  'Paymee Primary Interface',
  'Paymee CTA & Footer',
  'Paymee Dashboard',
  'Paymee Features',
],
  technologies: [
    "Next.js",
    "React 19",
    "Tailwind CSS",
    "Supabase",
    "Framer Motion",
    "Recharts",
  ],
  liveUrl: "https://pay-mee.vercel.app/",
  githubUrl: "https://github.com/tobilobaayomide/paymee",
  features: [
    "Mobile-first landing page with anchored section navigation",
    "Authenticated dashboard with balance, income, and expense overview",
    "Interactive analytics with date-range filtering and charting",
    "Transaction history with search, filters, and CSV export",
    "Card management with PIN verification and control toggles",
    "Quick actions for send, receive, bills, top up, investment, and exchange",
    "Profile, security, notification, and session management",
    "Responsive sidebar, dark mode support, and modal-driven workflows",
  ],
  challenges:
    "Balancing a dense financial interface with responsive layouts, secure account actions, and readable data visualization across mobile and desktop.",
  solution:
    "Structured the app into modular React components, centralized Supabase access in typed helpers and hooks, and used a responsive dashboard shell with modal-based workflows to keep complex finance tasks clear and maintainable.",
  spotlight: {
    role: "Frontend engineering, dashboard UX, responsive UI implementation, and data visualization integration",
    focus:
      "Create a trustworthy, mobile-first fintech experience that handles both marketing content and authenticated workflows cleanly.",
    outcome:
      "A polished fintech platform with clearer hierarchy, stronger responsive behavior, and smoother account-management flows.",
  },
  showcase: {
    blurb:
      "A mobile-first fintech platform that combines a polished marketing site with a production-style financial dashboard.",
    why:
      "The product needed to feel approachable for new users while still supporting rich account management, analytics, and card controls.",
    stack: ["Next.js", "Supabase", "Recharts"],
  },
},

{
  id: 1,
  slug: "resumeenow",
  homeOrder: 1,
  title: "ResumeeNow",
  category: "AI SaaS & Web App",
  year: "2026",
  description:
    "A rebuilt AI-assisted resume platform that lets users import, edit, tailor, audit, and export recruiter-ready resumes from one focused workspace.",
  longDescription:
    "ResumeeNow is the rebuilt 2026 version of the product, expanded from a simple resume builder into a more complete AI resume platform. Users can upload existing PDF, DOCX, or TXT resumes, parse them into editable sections, manage multiple resume versions, switch between professional templates, preview changes instantly, and export polished PDFs through a dedicated print workflow. The builder also includes AI Tailor, ATS Audit, and role-specific cover letter generation, while the platform adds authentication, plan-aware usage limits, notifications, public docs, and an internal admin console for user operations, waitlist handling, and campaign messaging. Built with React, TypeScript, Supabase, Vite, Tailwind CSS, and server-backed AI/export flows for speed, reliability, and scale.",
  image: resumeenowImg,
  galleryImages: [resumeenowImg, resumeenowImg2, resumeenowImg3, resumeenowImg4],
  galleryLabels: [
  'ResumeeNow Primary Interface',
  'ResumeeNow Dashboard',
  'ResumeeNow Builder',
  'ResumeeNow Templates',
],
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "TanStack Query",
    "Zustand",
    "Zod",
    "Google Gemini",
    "pdfjs-dist",
    "unpdf",
    "Mammoth.js",
    "Playwright + Chromium",
  ],
  liveUrl: "https://resumeenow.xyz",
  githubUrl: "https://github.com/tobilobaayomide/resumeenow",
  features: [
    "Email/password and Google OAuth authentication",
    "Upload and parse PDF, DOCX, and TXT resumes into editable sections",
    "Multi-template builder with real-time preview and responsive editing",
    "AI Tailor for job-specific resume rewriting and keyword alignment",
    "ATS Audit with actionable keyword and formatting feedback",
    "Cover letter generation inside the same builder workflow",
    "Dashboard for creating, duplicating, managing, and exporting multiple resumes",
    "Plan-aware AI limits, notification flows, and internal admin tools",
  ],
  challenges:
    "Rebuilding the product from a basic resume builder into a fuller platform meant connecting parsing, editing, AI generation, export fidelity, and plan-aware backend flows without making the experience feel fragmented.",
  solution:
    "I split the app into clear product surfaces for landing, workspace, builder, docs, and admin; used Supabase for auth and data, a dedicated Gemini proxy for AI workflows, and server routes for export, parsing, notifications, and privileged actions. That kept the editing flow fast while making the platform easier to scale and maintain.",
  spotlight: {
    role: "Product architecture, builder UX, AI workflow integration, export system",
    focus: "Make importing, editing, AI optimization, and export feel like one continuous workflow instead of separate tools.",
    outcome: "A stronger V2 platform with better resume import, smarter optimization flows, and more reliable output and operations.",
  },
  showcase: {
    blurb:
      "A rebuilt resume platform where upload, editing, AI optimization, and export happen in one calm workspace.",
    why:
      "Most resume tools split parsing, writing, ATS feedback, and final export into disconnected steps that break momentum.",
    stack: ["React", "Supabase", "Gemini API"],
  },
  mobileTitleSize: 'compact',
},






];

export const getProjectByIdentifier = (identifier: string | number): Project | undefined => {
  const normalizedIdentifier = String(identifier).trim();

  if (!normalizedIdentifier) {
    return undefined;
  }

  const slugMatch = projectsData.find((project) => project.slug === normalizedIdentifier);

  if (slugMatch) {
    return slugMatch;
  }

  const numericId = Number(normalizedIdentifier);

  if (!Number.isInteger(numericId)) {
    return undefined;
  }

  return projectsData.find((project) => project.id === numericId);
};

export const getHomeProjects = (): Project[] => {
  return [...projectsData].sort((projectA, projectB) => projectA.homeOrder - projectB.homeOrder);
};
