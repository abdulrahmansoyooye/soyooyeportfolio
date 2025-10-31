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
    company: "Nextage Digital Solutions",
    position: "Lead Software Developer",
    duration: "Nov 2024 - Present",
    location: "Remote",
    description: [
      "Led development of multiple applications, improving development speed by 40% through efficient code structuring and process automation",
      "Collaborated with cross-functional teams, effectively communicating technical requirements and solutions, resulting in 20% faster project delivery times",
      "Designed and deployed scalable, high-performance systems using Next.js, Sanity, TypeScript, Tailwind, ensuring 99.9% uptime and seamless data flow"
    ],
    technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "Node.js"],
    type: "work"
  },
  {
    id: 2,
    company: "Sayf Network",
    position: "Full-Stack Developer",
    duration: "May 2024 - Present",
    location: "Remote",
    description: [
      "Led full-stack development of admin dashboard, improving user efficiency by 3x through intuitive UI and seamless backend integration",
      "Designed and implemented system using Next.js, MongoDB, Mongoose, and Tailwind CSS, ensuring scalability and performance optimization",
      "Enhanced data management and security, leading to 25% improvement in query performance and ensuring data integrity and reliability",
      "Established direct communication process with stakeholders, reducing feedback cycles by 50%, leading to faster and more accurate development process"
    ],
    technologies: ["JavaScript", "Next.js", "MongoDB", "Mongoose", "Tailwind CSS", "Cloudinary"],
    website: "https://sayfnetwork.com",
    type: "work"
  },
  {
    id: 3,
    company: "Vyntra",
    position: "Backend Developer",
    duration: "2024 - Present",
    location: "Remote",
    description: [
      "Developed backend infrastructure for e-commerce platform serving students",
      "Implemented scalable APIs and database architecture to handle growing user base",
      "Optimized performance and ensured secure transaction processing"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript"],
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