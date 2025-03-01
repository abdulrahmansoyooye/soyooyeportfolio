
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

// Sample project data - in a real app, you would fetch this from an API or CMS
const allProjects = [
  // Backend Projects
  {
    id: 1,
    title: 'E-commerce API Platform',
    description: 'A scalable REST API for e-commerce applications with authentication, product management, and order processing.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  {
    id: 2,
    title: 'Authentication Microservice',
    description: 'Secure authentication and authorization service with OAuth2, JWT, and multi-factor authentication support.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Java', 'Spring Boot', 'Redis', 'OAuth2'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  {
    id: 3,
    title: 'Real-time Analytics Engine',
    description: 'High-performance data processing system for real-time analytics and reporting of user behavior.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Python', 'Kafka', 'Spark', 'ElasticSearch'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  {
    id: 4,
    title: 'Microservice Architecture',
    description: 'A system of microservices for handling user authentication, payments, and notifications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Kubernetes', 'Docker', 'Node.js', 'gRPC'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  {
    id: 5,
    title: 'Serverless Backend',
    description: 'Cost-effective serverless backend for a mobile application with automatic scaling.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Serverless'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  {
    id: 6,
    title: 'Content Management API',
    description: 'Flexible API for managing digital content across multiple platforms and channels.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['GraphQL', 'Node.js', 'MongoDB', 'AWS S3'],
    githubLink: 'https://github.com',
    type: 'backend'
  },
  
  // Frontend Projects
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    type: 'frontend'
  },
  {
    id: 8,
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and customers of an e-commerce platform.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Material UI', 'Redux', 'Chart.js'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    type: 'frontend'
  },
  {
    id: 9,
    title: 'Travel Booking UI',
    description: 'User interface for a travel booking application with search, filtering, and booking functionality.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Vue.js', 'Vuetify', 'Nuxt.js', 'Mapbox'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    type: 'frontend'
  },
  {
    id: 10,
    title: 'Interactive Data Visualization',
    description: 'Interactive charts and graphs for visualizing complex datasets and analysis results.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['D3.js', 'React', 'SVG', 'TypeScript'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    type: 'frontend'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'frontend'>('all');
  
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
              Showcasing My <span className="text-gradient-purple">Projects</span>
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
