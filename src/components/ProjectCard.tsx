
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  type: 'backend' | 'frontend' | 'ongoing';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
  type
}) => {
  return (
    <div className="card-project group">
      <div className="overflow-hidden rounded-lg mb-4 h-48 md:h-64 relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <span className={`inline-block px-3 py-1 text-xs rounded-full mb-2 ${
        type === 'backend' 
          ? 'bg-accent-purple/20 text-accent-purple' 
          : type === 'frontend'
            ? 'bg-accent-blue/20 text-accent-blue'
            : 'bg-accent-green/20 text-green-500'
      }`}>
        {type === 'backend' ? 'Backend' : type === 'frontend' ? 'Frontend' : 'Ongoing'}
      </span>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span key={index} className="tech-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
