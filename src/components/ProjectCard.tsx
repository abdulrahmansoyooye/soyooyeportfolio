
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  githubLink?: string;
  liveLink?: string;
  type: 'backend' | 'frontend' | 'ongoing';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags = [],
  githubLink,
  liveLink,
  type
}) => {
  // Determine which link to open when card is clicked
  const primaryLink = liveLink || githubLink;
  
  const handleCardClick = () => {
    if (primaryLink) {
      window.open(primaryLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent card click when clicking on specific links
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`card-project group ${primaryLink ? 'cursor-pointer' : ''} transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/10`}
      onClick={handleCardClick}
    >
      <div className="overflow-hidden rounded-lg mb-4 h-48 md:h-64 relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-3">
            {githubLink && (
              <button
                onClick={(e) => handleLinkClick(e, githubLink)}
                className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </button>
            )}
            {liveLink && (
              <button
                onClick={(e) => handleLinkClick(e, liveLink)}
                className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </button>
            )}
          </div>
        </div>
        
        {/* Click indicator overlay */}
        {primaryLink && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <div className="glass p-3 rounded-full">
              <ExternalLink size={24} className="text-white" />
            </div>
          </div>
        )}
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
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="tech-pill">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
