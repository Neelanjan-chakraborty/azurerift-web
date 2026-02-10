import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";

// Service data mapping
const serviceData = {
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Native iOS & Android Applications",
    description: "Create powerful, user-friendly mobile applications that deliver exceptional performance and seamless user experiences across iOS and Android platforms.",
    image: "/images/services-details/mobile-app-development.jpg",
    features: [
      "Native iOS Development with Swift",
      "Native Android Development with Kotlin",
      "Cross-platform solutions with React Native",
      "App Store & Play Store optimization",
      "Push notifications & real-time features",
      "Offline functionality & data synchronization",
      "Performance optimization & testing",
      "Post-launch support & maintenance"
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS", "REST APIs"],
    process: "Our mobile app development process includes requirement analysis, UI/UX design, native development, comprehensive testing, app store deployment, and ongoing maintenance to ensure your app stays current with platform updates."
  },
  "web-application-development": {
    title: "Web Application Development",
    subtitle: "Modern Web Platforms & Enterprise Solutions",
    description: "Build scalable, responsive web applications with cutting-edge technologies that provide exceptional user experiences and robust functionality.",
    image: "/images/services-details/web-development.jpg",
    features: [
      "Responsive web design across all devices",
      "Progressive Web App (PWA) development",
      "Single Page Applications (SPA)",
      "E-commerce platform development",
      "Content Management Systems",
      "API development and integration",
      "Database design and optimization",
      "Performance monitoring & analytics"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    process: "We follow agile development methodology with continuous integration and deployment, ensuring your web application is built efficiently, tested thoroughly, and deployed securely."
  },
  "ai-powered-solutions": {
    title: "AI-Powered Solutions",
    subtitle: "Intelligent Automation & Machine Learning",
    description: "Leverage artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent systems that drive business growth.",
    image: "/images/services-details/ai-solutions.jpg",
    features: [
      "Machine Learning model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics & forecasting",
      "Chatbots & virtual assistants",
      "Process automation with AI",
      "Data mining & pattern recognition",
      "AI model deployment & monitoring"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "AWS AI", "Google Cloud AI"],
    process: "Our AI development approach includes data analysis, model training, validation testing, integration with existing systems, and continuous monitoring to ensure optimal performance."
  },
  "cloud-integration-backend": {
    title: "Cloud Integration & Backend",
    subtitle: "Scalable Infrastructure & Data Management",
    description: "Design and implement robust cloud infrastructure with secure backend systems that scale with your business needs and ensure optimal performance.",
    image: "/images/services-details/cloud-backend.jpg",
    features: [
      "Multi-cloud platform integration",
      "Serverless architecture design",
      "Database architecture & optimization",
      "API development & management",
      "Security implementation & monitoring",
      "Load balancing & auto-scaling",
      "Backup & disaster recovery",
      "Performance monitoring & optimization"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Node.js", "Python", "PostgreSQL"],
    process: "We design cloud-native architectures that are secure, scalable, and cost-effective, with comprehensive monitoring and automated deployment processes."
  },
  "ui-ux-design-strategy": {
    title: "UI/UX Design & Strategy",
    subtitle: "User-Centered Design & Experience Optimization",
    description: "Create intuitive, engaging user interfaces and experiences that delight users and drive business results through research-backed design strategies.",
    image: "/images/services-details/ui-ux-design.jpg",
    features: [
      "User research & persona development",
      "Information architecture design",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing & optimization",
      "Accessibility compliance (WCAG)",
      "Design system development",
      "Cross-platform design consistency"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Zeplin"],
    process: "Our design process is user-centered, starting with research and ending with tested, validated designs that provide exceptional user experiences and meet business objectives."
  },
  "game-development": {
    title: "Game Development",
    subtitle: "Unity & Unreal Engine Game Creation",
    description: "Develop engaging, high-performance games for mobile, PC, and console platforms using industry-leading engines and cutting-edge technologies.",
    image: "/images/services-details/game-development.jpg",
    features: [
      "2D & 3D game development",
      "Multi-platform game deployment",
      "Game mechanics & physics implementation",
      "Character design & animation",
      "Multiplayer functionality",
      "In-app purchases & monetization",
      "Performance optimization",
      "Game analytics & user retention"
    ],
    technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Photoshop", "Firebase", "PlayFab"],
    process: "From concept to launch, we handle all aspects of game development including design, development, testing, and post-launch support to ensure your game succeeds in the market."
  },
  "xr-ar-vr-experiences": {
    title: "XR/AR/VR Experiences",
    subtitle: "Immersive Reality Solutions",
    description: "Create cutting-edge immersive experiences using extended reality, augmented reality, and virtual reality technologies that transform user engagement.",
    image: "/images/services-details/xr-ar-vr.jpg",
    features: [
      "Virtual Reality (VR) applications",
      "Augmented Reality (AR) experiences",
      "Mixed Reality (MR) solutions",
      "3D modeling & environment design",
      "Interactive simulations",
      "Training & educational applications",
      "Marketing & visualization tools",
      "Cross-platform XR deployment"
    ],
    technologies: ["Unity", "Unreal Engine", "ARKit", "ARCore", "Oculus SDK", "HoloLens", "WebXR"],
    process: "We create immersive experiences through careful planning, 3D design, development, and thorough testing across different XR platforms to ensure optimal user experiences."
  },
  "enterprise-software": {
    title: "Enterprise Software",
    subtitle: "Custom Business Applications & Systems",
    description: "Develop comprehensive enterprise software solutions that streamline operations, improve efficiency, and provide scalable platforms for business growth.",
    image: "/images/services-details/enterprise-software.jpg",
    features: [
      "Custom business application development",
      "Enterprise resource planning (ERP)",
      "Customer relationship management (CRM)",
      "Workflow automation systems",
      "Document management solutions",
      "Business intelligence dashboards",
      "Integration with existing systems",
      "Security & compliance features"
    ],
    technologies: ["Java", "C#", ".NET", "Spring Boot", "Angular", "React", "SQL Server", "Oracle"],
    process: "We work closely with stakeholders to understand business requirements, design scalable architectures, and deliver enterprise solutions with comprehensive testing and support."
  },
  "mvp-development": {
    title: "MVP Development",
    subtitle: "Rapid Prototyping for Startups",
    description: "Quickly validate your business ideas with minimum viable products that allow you to test market fit and iterate based on real user feedback.",
    image: "/images/services-details/mvp-development.jpg",
    features: [
      "Rapid prototype development",
      "Market validation strategies",
      "User feedback integration",
      "Scalable architecture design",
      "Cost-effective development",
      "Quick time-to-market",
      "Iterative improvement process",
      "Growth-ready foundation"
    ],
    technologies: ["React", "Node.js", "Firebase", "MongoDB", "Heroku", "Vercel", "Stripe", "Analytics"],
    process: "Our MVP development focuses on core features that validate your concept, with the ability to scale and add features based on user feedback and market response."
  },
  "technical-consulting-support": {
    title: "Technical Consulting & Support",
    subtitle: "Expert Guidance & Ongoing Maintenance",
    description: "Provide comprehensive technical consulting and ongoing support to ensure your technology solutions remain optimized, secure, and aligned with business goals.",
    image: "/images/services-details/technical-consulting.jpg",
    features: [
      "Technology strategy consulting",
      "Architecture review & optimization",
      "Performance monitoring & tuning",
      "Security audits & improvements",
      "Code review & quality assurance",
      "Team training & mentoring",
      "Legacy system modernization",
      "24/7 technical support"
    ],
    technologies: ["Various based on client needs", "Monitoring tools", "Security tools", "CI/CD pipelines"],
    process: "We provide ongoing partnership through regular reviews, proactive monitoring, strategic planning, and immediate support to ensure your technology investments continue to drive success."
  }
};

export default function ServiceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const service = serviceData[slug] || serviceData["mobile-app-development"]; // Fallback to mobile app development

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={service.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={service.title}
      />

      <ServiceDetailsContent service={service} />

      <Footer />
    </>
  );
}

// Generate static paths for all service pages
export async function getStaticPaths() {
  const paths = Object.keys(serviceData).map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false // Show 404 for non-existing services
  };
}

// Generate static props for each service page
export async function getStaticProps({ params }) {
  const service = serviceData[params.slug];
  
  if (!service) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      service
    }
  };
}