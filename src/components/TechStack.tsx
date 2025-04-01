import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  LayoutGrid, 
  Leaf, 
  Server, 
  Store 
} from 'lucide-react';

interface TechItemProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, proficiency }) => {
  return (
    <div className="glass p-4 rounded-xl flex flex-col items-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        {typeof(icon) === "string" ? <img src={`/stacks/${icon}.svg`} alt="" />: icon}
      </div>
      <h3 className="font-medium mb-2">{name}</h3>
      <div className="w-full bg-secondary rounded-full h-2 mt-1">
        <div 
          className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full animate-slide-in-right" 
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};

const TechStack = () => {
  const backendTech = [
    { name: 'Node.js', icon: "nodejs", proficiency: 95 },
    { name: 'Express', icon: "express", proficiency: 95 },
    { name: 'NestJS', icon: "nest", proficiency: 85 },
    { name: 'REST API', icon: <Globe className="text-blue-500" size={32} />, proficiency: 95 },
    { name: 'Microservices', icon: <LayoutGrid className="text-purple-500" size={32} />, proficiency: 90 },
    { name: 'MongoDB', icon: "mongodb", proficiency: 90 },
    { name: 'PostgreSQL', icon: <Database className="text-blue-600" size={32} />, proficiency: 85 },
    { name: 'Prisma', icon: <Database className="text-red-600" size={32} />, proficiency: 80 },
    { name: 'Mongoose', icon: <Database className="text-green-600" size={32} />, proficiency: 90 },
    { name: 'Redis', icon: "redis", proficiency: 80 },
    { name: 'RabbitMQ', icon: "rabbitmq", proficiency: 75 },
    { name: 'Grafana', icon: "grafana", proficiency: 75 },
    { name: 'Deno', icon: "deno", proficiency: 65 },
  ];

  const frontendTech = [
    { name: 'TypeScript', icon: "typescript", proficiency: 90 },
    { name: 'JavaScript', icon: "javascript", proficiency: 95 },
    { name: 'React', icon: "react", proficiency: 90 },
    { name: 'NextJS', icon: "next", proficiency: 85 },
    { name: 'Tailwind CSS', icon: "tailwind", proficiency: 95 },
    { name: 'Shadcn ui', icon: "shadcn", proficiency: 80 },
  ];

  const devOpsTech = [
    { name: 'Docker', icon: "docker", proficiency: 80 },
    { name: 'Github', icon: "github", proficiency: 95 },
    { name: 'Git', icon: "git", proficiency: 95 },
    { name: 'Postman', icon: "postman", proficiency: 90 },
    { name: 'Jira', icon: <LayoutGrid className="text-blue-500" size={32} />, proficiency: 80 },
    { name: 'Caching', icon: <Store className="text-green-500" size={32} />, proficiency: 85 },
    { name: 'Adapter Pattern', icon: <Code className="text-purple-400" size={32} />, proficiency: 90 },
  ];

  return (
    <section className="section-padding" id="tech-stack">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-fade-in">
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

        <div className="mt-12 animate-on-scroll opacity-0">
          <h3 className="text-xl font-semibold mb-6">High-Demand Backend Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {backendTech.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-12 animate-on-scroll opacity-0">
          <h3 className="text-xl font-semibold mb-6">High-Demand Frontend Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {frontendTech.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-12 animate-on-scroll opacity-0">
          <h3 className="text-xl font-semibold mb-6">Developer Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
