import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowDown,
  ArrowRight,
  Code,
  Database,
  FileText,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TechStack from "../components/TechStack";
import Sphere3D from "../components/Sphere3D";
import Experience from "../components/Experience";
import GitHubAchievements from "../components/GitHubAchievements";
import WhatIDo from "../components/WhatIDo";
import DevelopmentProcess from "../components/DevelopmentProcess";

const featuredProjects = [
  {
    id: 11,
    title: "Digital Health Platform",
    description:
      "Leading development of a telemedicine platform aimed at improving healthcare accessibility in Nigeria. Features include remote consultations, medical record management, and medication tracking with local pharmacy integration.",
    image: "/lovable-uploads/digital-health-platform-image.png",
    tags: [
      "Typescript",
      "Node.js",
      "React",
      "MongoDB",
      "Postgreql",
      "Express",
      "Nextjs",
      "RabbitMQ",
      "Redis",
      "Prisma",
      "Docker",
    ],
    githubLink: "https://github.com/abdulrahmansoyooye",
    type: "ongoing" as "ongoing",
  },
  {
    id: 1,
    title: "Social Media Microservices",
    description:
      "A scalable microservice architecture for social media applications with authentication, content management, and real-time notifications using message queues.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: [
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "RabbitMQ",
      "Redis",
    ],
    githubLink: "https://github.com",
    type: "backend" as "backend",
  },
  {
    id: 9,
    title: "Sayf Network Website",
    description:
      "A dynamic productivity platform for Muslims featuring articles, podcasts, newsletters, and courses. The website helps users maximize their time, reach their goals, and live more joyfully.",
    image: "/lovable-uploads/191c6b59-ea83-46a7-b7f1-312d6799eefe.png",
    tags: ["Javascript", "Next.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    githubLink: "https://github.com",
    liveLink: "https://sayfnetwork.com",
    type: "frontend" as "frontend",
  },
  {
    id: 8,
    title: "Distinct Patterns",
    description:
      "An elegant e-commerce platform specializing in high-quality traditional and modern clothing. Features include product showcasing, shopping cart functionality, secure checkout, and user account management.",
    image: "/lovable-uploads/distinctpatterns-image2.jpg",
    tags: ["Typescript", "Next.js", "Sanity", "Tailwind CSS", "Paystack"],
    githubLink: "https://github.com",
    liveLink: "https://distinctpatterns.com.ng",
    type: "frontend" as "frontend",
  },
];

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize animation observer
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-b from-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 animate-on-scroll">
            Backend Developer with Frontend Experience
          </span>

          <h1 className="heading-xl max-lg:heading-2lg text-gradient mb-6 max-w-4xl animate-on-scroll">
            Launch Your <span className="text-gradient-purple">Startup</span> With a Reliable Developer
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-on-scroll">
            Helping Startups Build Scalable Web Applications and Cloud Systems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
            <Link to="/projects" className="button-primary">
              See My Work <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} />
          </div>
        </div>

        {/* 3D Elements positioned absolutely */}
        <div className="absolute top-1/4 right-[10%] hidden md:block">
          <Sphere3D size={150} color="#9b87f5" className="animate-float" />
        </div>
        <div className="absolute bottom-1/4 left-[10%] hidden md:block">
          <Sphere3D size={100} color="#33C3F0" className="animate-float" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-background">
        <div className="section-wrapper">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              My Work
            </span>
            <h2 className="heading-lg text-gradient mb-6">Some Of My Works. </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my favorite projects showcasing my problem-solving approach and technical skills.
            </p>
          </div>

          <div className="flex flex-col gap-8 animate-on-scroll opacity-0">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} horizontal />
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <Link
              to="/projects"
              className="button-secondary inline-flex items-center"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* What I Do Section */}
      <WhatIDo />

      {/* Tech Stack Section */}
      <TechStack />
      
      {/* GitHub Achievements Section - Now below Tech Stack */}
      <GitHubAchievements />

      {/* Development Process Section */}
      <DevelopmentProcess />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-radial from-accent-purple/20 via-background to-background">
        <div className="section-wrapper">
          <div className="glass p-8 md:p-12 rounded-2xl text-center animate-on-scroll opacity-0">
            <h2 className="heading-md text-gradient mb-6">
            Do You Have A Project In Mind? 
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's dicuss it, I'm open to new projects and opportunities. Click the button here and leave a message 
            </p>
            <Link to="/contact" className="button-primary">
              Start your MVP
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
