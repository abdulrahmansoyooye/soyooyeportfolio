
import React from 'react';

interface TechItemProps {
  name: string;
  icon: string;
  proficiency: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, proficiency }) => {
  return (
    <div className="glass p-4 rounded-xl flex flex-col items-center transition-all duration-300 hover:translate-y-[-5px]">
      <img src={icon} alt={name} className="w-12 h-12 mb-3" />
      <h3 className="font-medium mb-2">{name}</h3>
      <div className="w-full bg-secondary rounded-full h-2 mt-1">
        <div 
          className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full" 
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};

const TechStack = () => {
  const backendTech = [
    { name: 'Node.js', icon: '/placeholder.svg', proficiency: 95 },
    { name: 'Python', icon: '/placeholder.svg', proficiency: 90 },
    { name: 'Java', icon: '/placeholder.svg', proficiency: 85 },
    { name: 'SQL', icon: '/placeholder.svg', proficiency: 90 },
    { name: 'MongoDB', icon: '/placeholder.svg', proficiency: 85 },
    { name: 'GraphQL', icon: '/placeholder.svg', proficiency: 80 },
  ];

  const frontendTech = [
    { name: 'React', icon: '/placeholder.svg', proficiency: 85 },
    { name: 'TypeScript', icon: '/placeholder.svg', proficiency: 80 },
    { name: 'HTML/CSS', icon: '/placeholder.svg', proficiency: 85 },
    { name: 'Tailwind', icon: '/placeholder.svg', proficiency: 90 },
  ];

  const devOpsTech = [
    { name: 'Docker', icon: '/placeholder.svg', proficiency: 85 },
    { name: 'AWS', icon: '/placeholder.svg', proficiency: 80 },
    { name: 'CI/CD', icon: '/placeholder.svg', proficiency: 75 },
    { name: 'Git', icon: '/placeholder.svg', proficiency: 95 },
  ];

  return (
    <section className="section-padding">
      <div className="section-wrapper">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent-purple/20 text-accent-purple mb-4 inline-block">
              My Expertise
            </span>
          </div>
          <h2 className="heading-lg text-gradient mb-6">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging a diverse set of technologies to build robust, scalable solutions.
            From backend systems to frontend interfaces, I bring comprehensive skills to every project.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {backendTech.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendTech.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">DevOps & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {devOpsTech.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
