import React from "react";
import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  website?: string;
  type: "work" | "freelance" | "volunteer";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Aknexis",
    position: "Full-Stack Developer Intern",
    duration: "Feb 2026 – Apr 2026",
    location: "Remote",
    description: [
      "Led a production-grade modernization initiative for a full-stack application, using AI-assisted engineering to accelerate system auditing, uncover hidden defects, and guide large-scale refactoring across frontend, backend, database, and infrastructure layers",
      "Remediated critical security vulnerabilities by enforcing secure secret management, strengthening authentication and role-based authorization, and implementing input validation and rate limiting aligned with OWASP best practices",
      "Refactored backend architecture by introducing centralized middleware for validation and error handling, standardizing API responses across over 10 services to improve maintainability and debugging efficiency",
      "Optimized database access patterns through query refactoring, indexing strategies, and selective data retrieval, improving API performance and scalability for production workloads",
      "Redesigned frontend data management using TanStack Query and Zustand, reducing unnecessary network requests and improving cache efficiency and UI responsiveness through robust loading and error states",
      "Implemented production-ready observability with structured logging and environment-aware log levels, and improved rendering performance through component memoization and refined state subscriptions"
    ],
    technologies: ["Node.js", "Express", "TypeScript", "JWT", "Mongoose", "MongoDB", "TanStack Query", "Zustand"],
    type: "work"
  },
  {
    id: 2,
    company: "Vyntra",
    position: "Backend Developer",
    duration: "Sept 2025 – Oct 2025",
    location: "Remote",
    description: [
      "Designed and implemented RESTful APIs for seller workflows including product listing, inventory, and order management, covering 10 endpoints",
      "Restructured backend architecture to separate seller and buyer logic into distinct service layers, cutting cross-domain bugs and reducing average feature turnaround time",
      "Wrote API documentation covering 10 endpoints",
      "Partnered with engineers and product stakeholders to scope and ship features aligned to business requirements within weeks"
    ],
    technologies: ["Node.js", "Express", "SQL", "Sequelize"],
    type: "work"
  },
  {
    id: 3,
    company: "Nextage Digital Solutions",
    position: "Software Developer",
    duration: "Nov 2024 – Dec 2025",
    location: "Remote",
    description: [
      "Led the development of 3 client-facing web applications",
      "Architected and built a full-stack e-commerce platform, including a customer storefront and admin dashboard with product management, cart, and checkout flows, and integrating Sanity CMS for non-technical catalog management — live at distinctpatterns.vercel.app"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    website: "https://distinctpatterns.vercel.app",
    type: "work"
  }
];

const Experience = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-wrapper">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            Experience
          </span>
          <h2 className="heading-lg text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a software engineer, building scalable applications 
            and leading technical initiatives for clients worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="relative animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-32 bg-gradient-to-b from-accent-purple to-transparent opacity-30 hidden md:block" />
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
                {/* Timeline dot */}
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${
                      experience.type === 'work' ? 'bg-accent-purple' :
                      experience.type === 'freelance' ? 'bg-accent-blue' : 'bg-accent-pink'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-11">
                  <div className="glass p-6 md:p-8 rounded-xl hover:shadow-lg hover:shadow-accent-purple/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {experience.position}
                          </h3>
                          {experience.website && (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-purple hover:text-accent-purple/80 transition-colors"
                              aria-label="Visit company website"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <h4 className="text-lg font-medium text-accent-purple mb-3">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          experience.type === 'work' ? 'bg-accent-purple/20 text-accent-purple' :
                          experience.type === 'freelance' ? 'bg-accent-blue/20 text-accent-blue' :
                          'bg-accent-pink/20 text-accent-pink'
                        }`}>
                          {experience.type === 'work' ? 'Full-time' :
                           experience.type === 'freelance' ? 'Freelance' : 'Volunteer'}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground hover:bg-accent-purple/20 hover:text-accent-purple transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <Link
            to="/about#experience"
            className="button-secondary inline-flex items-center"
          >
            View Full Experience & Education <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;