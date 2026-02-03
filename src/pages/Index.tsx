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
    id: 1,
    title: "TheCompanion App",
    description:
      "An AI-powered conversational system designed to act as a context-aware, real-time guide rather than a static content source.",
    image: "/lovable-uploads/thecompanion-app-image.png",
    tags: ["Node.js", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Tailwind"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    liveLink: "https://thecompanionapp.vercel.app/",
    type: "fullstack" as "fullstack",
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
