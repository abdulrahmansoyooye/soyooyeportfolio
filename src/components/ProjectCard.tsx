
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
  horizontal?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags = [],
  githubLink,
  liveLink,
  type,
  horizontal = false
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

  if (horizontal) {
    return (
      <div 
        className={`card-project group ${primaryLink ? 'cursor-pointer' : ''} transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/15 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-8`}
        onClick={handleCardClick}
      >
        {/* Image Section */}
        <div className="overflow-hidden rounded-xl h-64 lg:h-80 relative">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 right-4 flex space-x-3">
              {githubLink && (
                <button
                  onClick={(e) => handleLinkClick(e, githubLink)}
                  className="glass p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </button>
              )}
              {liveLink && (
                <button
                  onClick={(e) => handleLinkClick(e, liveLink)}
                  className="glass p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={20} />
                </button>
              )}
            </div>
          </div>
          
          {primaryLink && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <div className="glass p-4 rounded-full">
                <ExternalLink size={28} className="text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <span className={`inline-block px-4 py-1.5 text-sm rounded-full mb-4 w-fit ${
            type === 'backend' 
              ? 'bg-accent-purple/20 text-accent-purple' 
              : type === 'frontend'
                ? 'bg-accent-blue/20 text-accent-blue'
                : 'bg-accent-green/20 text-green-500'
          }`}>
            {type === 'backend' ? 'Backend' : type === 'frontend' ? 'Frontend' : 'Ongoing'}
          </span>
          
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent-purple transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{description}</p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="tech-pill text-sm px-4 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

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
