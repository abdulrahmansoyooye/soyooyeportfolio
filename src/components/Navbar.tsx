
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gradient" onClick={handleLinkClick}>
            <span className="text-gradient-purple">devabdulrahman</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
            <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 nav-link"
            >
              <FileText size={16} />
              Resume
            </a>
            <Link to="/contact" className="button-primary" onClick={handleLinkClick}>Hire Me</Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none focus:ring-0"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} h-full`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-[100vh] justify-center  bg-background/95 backdrop-blur-sm items-center space-y-8 p-4">
            <Link to="/" className="nav-link text-xl" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="nav-link text-xl" onClick={handleLinkClick}>About</Link>
            <Link to="/projects" className="nav-link text-xl" onClick={handleLinkClick}>Projects</Link>
            <Link to="/contact" className="nav-link text-xl" onClick={handleLinkClick}>Contact</Link>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 nav-link text-xl"
            >
              <FileText size={18} />
              Resume
            </a>
            <Link to="/contact" className="button-primary text-xl" onClick={handleLinkClick}>Hire Me</Link>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
