
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 pt-36 bg-background">
        <div className="section-wrapper">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              Contact Me
            </span>
            <h1 className="heading-lg text-gradient mb-6">
              Let's <span className="text-gradient-purple">Connect</span>
            </h1>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Fill out the form below or reach out through any of my contact channels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="glass p-6 rounded-xl mb-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-accent-purple/20 mr-4">
                      <Mail className="text-accent-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:email@example.com" 
                        className="text-muted-foreground hover:text-white transition-colors"
                      >
                        email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-accent-blue/20 mr-4">
                      <Phone className="text-accent-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a 
                        href="tel:+11234567890" 
                        className="text-muted-foreground hover:text-white transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-accent-pink/20 mr-4">
                      <MapPin className="text-accent-pink h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        San Francisco, CA, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="glass p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Github className="h-6 w-6 mb-2" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="h-6 w-6 mb-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Twitter className="h-6 w-6 mb-2" />
                    <span className="text-sm">Twitter</span>
                  </a>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl mt-6">
                <h3 className="font-medium mb-4">Available for Freelance</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance projects and open to discussing new opportunities.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
