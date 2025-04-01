import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

// Sample project data - in a real app, you would fetch this from an API or CMS
const allProjects = [
  // Ongoing Projects
  {
    id: 11,
    title: 'Digital Health Platform',
    description: 'Leading development of a telemedicine platform aimed at improving healthcare accessibility in Nigeria. Features include remote consultations, medical record management, and medication tracking with local pharmacy integration.',
    image: '/lovable-uploads/b7005ebc-f4b0-411e-b9e0-db270ef96902.png',
    tags: ['Node.js', 'React', 'MongoDB', 'WebRTC', 'Express'],
    githubLink: 'https://github.com',
    type: 'ongoing' as 'ongoing'
  },
  {
    id: 12,
    title: 'Rawaaq School Management',
    description: 'Developing a comprehensive school management system with features for student tracking, class management, fee collection, and academic performance monitoring. Includes an intuitive dashboard for administrators and teachers.',
    image: '/lovable-uploads/a3abd497-ebad-48f9-914e-db38b49b5c53.png',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Charts.js'],
    githubLink: 'https://github.com',
    type: 'ongoing' as 'ongoing'
  },
  {
    id: 13,
    title: 'Naas Educators',
    description: 'A platform dedicated to providing resources and mentorship for parents focused on homeschooling. Features include curriculum planning tools, progress tracking, and community discussion forums.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    githubLink: 'https://github.com',
    type: 'ongoing' as 'ongoing'
  },
  // Backend Projects
  {
    id: 1,
    title: 'Social Media API Platform',
    description: 'A scalable microservice architecture for social media applications with authentication, content management, and real-time notifications using message queues.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'RabbitMQ', 'Redis'],
    githubLink: 'https://github.com',
    type: 'backend' as 'backend'
  },
  {
    id: 2,
    title: 'Sayf Network Backend',
    description: 'Robust backend system and admin dashboard for Sayf Network, handling content management, user authentication, newsletter subscriptions, and course enrollment functionality.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Next.js'],
    githubLink: 'https://github.com',
    type: 'backend' as 'backend'
  },
  {
    id: 3,
    title: 'Distinct Patterns Backend',
    description: 'E-commerce backend infrastructure using Sanity CMS for product management, inventory tracking, and order processing. Includes custom APIs for frontend integration.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Sanity.io', 'Node.js', 'Express', 'Stripe API', 'Webhooks'],
    githubLink: 'https://github.com',
    type: 'backend' as 'backend'
  },
  
  // Frontend Projects
  {
    id: 9,
    title: 'Sayf Network Website',
    description: 'A dynamic productivity platform for Muslims featuring articles, podcasts, newsletters, and courses. The website helps users maximize their time, reach their goals, and live more joyfully.',
    image: '/lovable-uploads/d9b17563-95be-4699-b5db-5c5494442a34.png',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    githubLink: 'https://github.com',
    liveLink: 'https://sayfnetwork.com',
    type: 'frontend' as 'frontend'
  },
  {
    id: 8,
    title: 'Distinct Patterns',
    description: 'An elegant e-commerce platform specializing in high-quality traditional and modern clothing. Features include product showcasing, shopping cart functionality, secure checkout, and user account management.',
    image: '/lovable-uploads/dd19b65f-d683-402e-a407-3ae955eb5102.png',
    tags: ['Next.js', 'Sanity', 'Tailwind CSS', 'Paystack'],
    githubLink: 'https://github.com',
    liveLink: 'https://distinctpatterns.com',
    type: 'frontend' as 'frontend'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'frontend' | 'ongoing'>('all');
  
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
            <div className="glass p-1 rounded-full">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-white text-background'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('ongoing')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'ongoing'
                    ? 'bg-white text-background'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setFilter('backend')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'backend'
                    ? 'bg-white text-background'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setFilter('frontend')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'frontend'
                    ? 'bg-white text-background'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                Frontend
              </button>
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
