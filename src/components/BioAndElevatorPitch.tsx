
import React from 'react';
import { FileText, Video, UserRound, MessageSquare, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const BioAndElevatorPitch = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            About Me
          </span>
          <h2 className="heading-lg text-gradient mb-6">Meet Abdulrahman: Your Coding Partner!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better through my professional summary and video introduction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-on-scroll">
          {/* Bio Section */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <Avatar className="h-16 w-16 border-2 border-accent-purple/30 mr-4">
                <AvatarImage src="/lovable-uploads/7dabc1dd-bc3f-4959-a589-ac41a719f761.png" alt="Abdulrahman" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gradient-purple">Hey There, I'm Your Backend Wizard!</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hey there! I'm Abdulrahman, a passionate backend developer with over 2 years of experience
                crafting robust, scalable solutions that power modern web applications.
              </p>
              <p>
                My journey in tech started with a fascination for how systems work behind the scenes. This curiosity
                led me to specialize in backend technologies, where I've developed expertise in Node.js, Express,
                microservices architecture, and database optimization.
              </p>
              <p>
                What sets me apart is my holistic understanding of the development process. While my primary focus is backend,
                I'm comfortable working across the full stack, ensuring seamless integration between server-side logic and user interfaces.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/about" className="button-secondary flex items-center gap-2">
                  <UserRound size={16} />
                  More About Me
                </Link>
                <a 
                  href={"https://docs.google.com/document/d/1gyPjPSXf0ZGtf1PtNxjiBtZYnypBaXW3SAITIkww0ns/edit?usp=sharing"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-secondary flex items-center gap-2"
                >
                  <FileText size={16} />
                  Resume
                </a>
                <a 
                  href="https://wa.me/2347011280726" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-secondary flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Elevator Pitch Section */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent-blue/20 mr-4">
                <MessageSquare size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gradient-purple">I Turn Complex Problems Into Elegant Solutions</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a solution-oriented backend developer who builds scalable infrastructure that powers reliable web applications.
                My expertise spans from RESTful APIs to microservices architecture, and I deliver clean, maintainable code that solves
                real business problems.
              </p>
              
              <div className="mt-6 relative">
                <div className="aspect-w-16 aspect-h-9 bg-black/30 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-6">
                      <Video size={48} className="mx-auto mb-4 text-accent-purple" />
                      <p className="text-muted-foreground">
                        Video elevator pitch coming soon! 
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        I'm working on a concise video introduction to better showcase my skills and personality.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center gap-4">
                  <a href="/contact" className="button-primary flex items-center gap-2">
                    <MessageSquare size={16} />
                    Let's Connect
                  </a>
                  <a 
                    href="https://wa.me/2347011280726" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle size={16} />
                    Quick Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioAndElevatorPitch;
