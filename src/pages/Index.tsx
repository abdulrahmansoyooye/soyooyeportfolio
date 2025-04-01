
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowDown, ArrowRight, Code, Database, FileText, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import Sphere3D from '../components/Sphere3D';
import BioAndElevatorPitch from '../components/BioAndElevatorPitch';
import GitHubAchievements from '../components/GitHubAchievements';
import WhatIDo from '../components/WhatIDo';
import DevelopmentProcess from '../components/DevelopmentProcess';

const featuredProjects = [
  {
    id: 11,
    title: 'Digital Health Platform',
    description: 'Currently developing a comprehensive telemedicine platform aimed at improving healthcare accessibility in Nigeria through remote consultations, medical record management, and pharmacy integration.',
    image: '/lovable-uploads/b7005ebc-f4b0-411e-b9e0-db270ef96902.png',
    tags: ['Node.js', 'React', 'MongoDB', 'WebRTC', 'Express'],
    githubLink: 'https://github.com',
    type: 'ongoing' as 'ongoing'
  },
  {
    id: 1,
    title: 'Social Media Microservices',
    description: 'A scalable microservice architecture for social media applications with authentication, content management, and real-time notifications using message queues.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker',"RabbitMQ", "Redis"],
    githubLink: 'https://github.com',
    type: 'backend' as 'backend'
  },
  {
    id: 9,
    title: 'Sayf Network Website',
    description: 'A dynamic productivity platform for Muslims featuring articles, podcasts, newsletters, and courses that help users maximize their time, reach their goals, and live more joyfully.',
    image: '/lovable-uploads/d9b17563-95be-4699-b5db-5c5494442a34.png',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    githubLink: 'https://github.com',
    liveLink: 'https://sayfnetwork.com',
    type: 'frontend' as 'frontend'
  },
];

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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
            Backend Developer with Frontend Expertise
          </span>
          
          <h1 className="heading-xl text-gradient mb-6 max-w-4xl animate-on-scroll">
            Let's Build Something <span className="text-gradient-purple">Amazing</span> Together!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-on-scroll">
            Hi! I'm Abdulrahman, and I create scalable, elegant solutions that people love using. I'm especially passionate about improving healthcare through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
            <Link to="/projects" className="button-primary">
              See My Work <ArrowRight size={16} className="ml-2" />
            </Link>
            <a 
              target="_blank" 
              href={"https://docs.google.com/document/d/1gyPjPSXf0ZGtf1PtNxjiBtZYnypBaXW3SAITIkww0ns/edit?usp=sharing"}
              rel="noopener noreferrer" 
              className="button-secondary flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={16} />
              Check Resume
            </a>
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
      
      {/* About Section - Light Background */}
      <section className="light-section">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent-purple/20 text-accent-purple mb-4 inline-block">
                About Me
              </span>
              <h2 className="heading-lg text-gray-900 mb-6">
                Hey There! I'm Abdulrahman, Your Friendly Tech Partner
              </h2>
              <p className="text-gray-700 mb-6">
                I'm a backend developer who loves creating awesome digital experiences. With over 2 years of hands-on experience, 
                I build everything from powerful APIs to user-friendly interfaces that make life easier.
              </p>
              <p className="text-gray-700 mb-6">
                I'm super passionate about digital health innovation, especially telemedicine in Nigeria. I believe technology 
                can transform healthcare delivery and make quality medical services accessible to everyone, no matter where they are!
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-accent-purple/10 mr-4">
                    <Server size={24} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Backend</h3>
                    <p className="text-sm text-gray-600">Scalable Architecture</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-accent-blue/10 mr-4">
                    <Database size={24} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Database</h3>
                    <p className="text-sm text-gray-600">Optimized Performance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-accent-pink/10 mr-4">
                    <Code size={24} className="text-accent-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Frontend</h3>
                    <p className="text-sm text-gray-600">Intuitive Interfaces</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/about" className="inline-flex items-center text-accent-purple font-medium">
                  More About Me <ArrowRight size={16} className="ml-2" />
                </Link>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-accent-blue font-medium"
                >
                  <FileText size={16} className="mr-2" />
                  View Resume
                </a>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  alt="Developer working"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 glass rounded-xl max-w-[250px]">
                <div className="text-2xl font-bold text-gradient-purple mb-2">500+</div>
                <div className="text-sm text-slate-300">GitHub contributions in the last year</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio and Elevator Pitch Section */}
      <BioAndElevatorPitch />
      
      {/* What I Do Section */}
      <WhatIDo />
      
      {/* Development Process Section */}
      <DevelopmentProcess />
      
      {/* Featured Projects Section */}
      <section className="section-padding bg-background">
        <div className="section-wrapper">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              My Work
            </span>
            <h2 className="heading-lg text-gradient mb-6">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my favorite projects! These showcase my problem-solving approach 
              and technical skills across different domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/projects" 
              className="button-secondary inline-flex items-center"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <TechStack />
      
      {/* GitHub Achievements Section - Now below Tech Stack */}
      <GitHubAchievements />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-radial from-accent-purple/20 via-background to-background">
        <div className="section-wrapper">
          <div className="glass p-8 md:p-12 rounded-2xl text-center animate-on-scroll">
            <h2 className="heading-md text-gradient mb-6">Let's Create Something Amazing Together!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind? Whether you need a robust backend service, an intuitive frontend, 
              or a digital health solution, I'd love to hear about it and see how I can help!
            </p>
            <Link to="/contact" className="button-primary">
              Let's Chat
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
