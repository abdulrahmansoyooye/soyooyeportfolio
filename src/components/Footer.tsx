import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MessageCircle } from 'lucide-react';
import BackToTop from './BackToTop';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="bg-background py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 text-2xl font-bold" onClick={handleLinkClick}>
                <Avatar className="h-10 w-10 border border-accent-purple/30">
                  <AvatarImage src="/lovable-uploads/7dabc1dd-bc3f-4959-a589-ac41a719f761.png" alt="Abdulrahman" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-gradient-purple">Abdulrahman</span>
              </Link>
              <p className="mt-4 text-muted-foreground max-w-md">
                Hey there! I'm your friendly neighborhood developer who loves building amazing digital experiences. 
                I blend backend magic with frontend finesse to create solutions that make life easier and more enjoyable!
              </p>
              <div className="flex mt-6 space-x-4">
                <a href="https://github.com/abdulrahmansoyooye" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abdulrahman-soyooye-814435294/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/abdulrahmansoyo" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="mailto:abdulrahmansoyooye@gmail.com" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=2347011280726" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-green-400 transition-colors">
                  <MessageCircle size={20} />
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
                <li className="text-muted-foreground">+ (234) 70-1128 0726</li>
                <li className="text-muted-foreground">Lagos, Nigeria</li>
                <li>
                  <a 
                    href="https://api.whatsapp.com/send?phone=2347011280726" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green-400 flex items-center gap-1 transition-colors"
                  >
                    <MessageCircle size={16} className="text-green-500" />
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Abdulrahman. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
};

export default Footer;
