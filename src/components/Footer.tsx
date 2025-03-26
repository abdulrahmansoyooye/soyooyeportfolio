
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-background py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold" onClick={handleLinkClick}>
              <span className="text-gradient-purple">DevAbdulrahman</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Passionate backend developer with frontend expertise, creating scalable
              and elegant solutions for modern web applications.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:email@example.com" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">abdulrahmansoyooye@gmail.com</li>
              <li className="text-muted-foreground">+1 (123) 456-7890</li>
              <li className="text-muted-foreground">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevAbdulrahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
