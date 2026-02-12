import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

// Sample project data - in a real app, you would fetch this from an API or CMS
const allProjects = [
  // Fullstack Projects
  {
    id: 1,
    title: "Distinct Patterns",
    description:
      "An elegant e-commerce platform specializing in high-quality traditional and modern clothing. Features include product showcasing, shopping cart functionality, secure checkout, and user account management.",
    image: "/lovable-uploads/distinctpatterns-image2.jpg",
    tags: ["TypeScript", "Next.js", "Sanity", "Tailwind CSS", "Paystack"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    liveLink: "https://distinctpatterns.com.ng",
    type: "fullstack" as "fullstack",
  },
  {
    id: 2,
    title: "TheCompanion App",
    description:
      "An AI-powered conversational system designed to act as a context-aware, real-time guide rather than a static content source.",
    image: "/lovable-uploads/thecompanion-app-image.png",
    tags: ["Node.js", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Tailwind"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    liveLink: "https://thecompanionapp.vercel.app/",
    type: "fullstack" as "fullstack",
  },
  {
    id: 3,
    title: "ID Card Management Platform",
    description:
      "A streamlined system for generating and managing student identification cards. Features include bulk card generation, QR code integration, and administrative dashboard.",
    image: "/lovable-uploads/idcard-portal-image.png",
    tags: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    liveLink: "https://studentidmanagement.vercel.app/",
    type: "fullstack" as "fullstack",
  },
  // Ongoing Projects
  {
    id: 11,
    title: "Digital Health Platform",
    description:
      "Leading development of a telemedicine platform aimed at improving healthcare accessibility in Nigeria. Features include remote consultations, medical record management, and medication tracking with local pharmacy integration.",
    image: "/lovable-uploads/digital-health-platform-image.png",
    tags: ["Node.js", "React", "MongoDB", "PostgreSQL", "Express", "Next.js", "RabbitMQ", "Redis", "Prisma", "Docker"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    type: "ongoing" as "ongoing",
  },
  {
    id: 12,
    title: "Rawaaq School Management",
    description:
      "Developing a comprehensive school management system with features for student tracking, class management, fee collection, and academic performance monitoring.",
    image: "/lovable-uploads/rawaaq-image.png",
    tags: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS", "Charts.js"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    type: "ongoing" as "ongoing",
  },
  {
    id: 13,
    title: "Naas Educators",
    description:
      "A platform dedicated to providing resources and mentorship for parents focused on homeschooling. Features include curriculum planning tools, progress tracking, and community discussion forums.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    type: "ongoing" as "ongoing",
  },
  // Backend Projects
  {
    id: 4,
    title: "Social Media API Platform",
    description:
      "A scalable microservice architecture for social media applications with authentication, content management, and real-time notifications using message queues.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Docker", "RabbitMQ", "Redis"],
    githubLink: "https://github.com/abdulrahmansoyooye",
    type: "backend" as "backend",
  },
];
const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'fullstack' | 'ongoing'>('all');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(project => project.type === filter);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 pt-36 bg-background">
        <div className="section-wrapper">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              My Work
            </span>
            <h1 className="heading-lg text-gradient mb-6">
             A Few Selection of My <span className="text-gradient-purple">Projects</span>
            </h1>
            <p className="text-muted-foreground">
              A collection of my work across backend and frontend development.
              Each project represents a unique challenge and solution.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="section-wrapper">
          {/* Filter Controls */}
          <div className="flex justify-center mb-12">
            <div className="glass p-2 rounded-full w-full max-w-[90vw] overflow-x-auto">
              <div className="flex gap-2 sm:gap-3 justify-center flex-wrap sm:flex-nowrap">
                {[
                  { label: "All Projects", value: "all" },
                  { label: "Fullstack", value: "fullstack" },
                  { label: "Ongoing", value: "ongoing" },
                  { label: "Backend", value: "backend" },
                ].map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value as any)}
                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      filter === value
                        ? "bg-white text-background"
                        : "text-foreground hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-radial from-accent-purple/20 via-background to-background">
        <div className="section-wrapper">
          <div className="glass p-8 md:p-12 rounded-2xl text-center">
            <h2 className="heading-md text-gradient mb-6">Have a Project in Mind?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how I can help bring your ideas to life with a custom solution 
              tailored to your specific needs.
            </p>
            <Link to="/contact" className="button-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Projects;
