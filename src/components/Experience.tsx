import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

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
    company: "Freelance Development",
    position: "Full-Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    description: [
      "Developed scalable web applications for startups and SMEs across various industries",
      "Built e-commerce platforms, telemedicine systems, and productivity tools",
      "Implemented microservices architecture with Docker containerization",
      "Collaborated with international teams to deliver high-quality solutions"
    ],
    technologies: ["TypeScript", "Node.js", "React", "Next.js", "MongoDB", "PostgreSQL", "Docker", "Redis"],
    type: "freelance"
  },
  {
    id: 2,
    company: "Sayf Network",
    position: "Frontend Developer",
    duration: "2023 - 2024",
    location: "Remote",
    description: [
      "Developed and maintained the company's main website and productivity platform",
      "Implemented responsive design and optimized performance for mobile users",
      "Integrated content management system and newsletter functionality",
      "Collaborated with design team to create engaging user interfaces"
    ],
    technologies: ["JavaScript", "Next.js", "Tailwind CSS", "MongoDB", "Cloudinary"],
    website: "https://sayfnetwork.com",
    type: "work"
  },
  {
    id: 3,
    company: "Distinct Patterns",
    position: "E-commerce Developer",
    duration: "2023",
    location: "Nigeria",
    description: [
      "Built comprehensive e-commerce platform for traditional and modern clothing",
      "Implemented secure payment integration with Paystack",
      "Developed admin dashboard for inventory and order management",
      "Optimized site performance and SEO for better conversion rates"
    ],
    technologies: ["TypeScript", "Next.js", "Sanity CMS", "Tailwind CSS", "Paystack"],
    website: "https://distinctpatterns.com.ng",
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
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional experience building scalable applications and delivering 
            impactful solutions for clients worldwide.
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
      </div>
    </section>
  );
};

export default Experience;