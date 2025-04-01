
import React from 'react';
import { Search, FileCode, Zap, ArrowRight, Microscope, Rocket } from 'lucide-react';

const DevelopmentProcess = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            How I Work
          </span>
          <h2 className="heading-lg text-gradient mb-6">My Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I follow a structured yet flexible approach to ensure your project is delivered efficiently, 
            with the highest quality standards, and meets all your requirements.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink hidden md:block" />
          
          {/* Process Steps */}
          <div className="space-y-16 relative animate-on-scroll">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3 text-gradient-purple">Discovery & Requirements</h3>
                <p className="text-muted-foreground">
                  I start by understanding your needs, objectives, and constraints. This involves 
                  detailed discussions, analyzing your existing systems (if any), and documenting 
                  clear requirements to guide the development process.
                </p>
              </div>
              <div className="relative order-1 md:order-2 mb-6 md:mb-0 md:w-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-accent-purple z-10">
                  <Search className="text-white" size={24} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3" />
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 order-1 hidden md:block" />
              <div className="relative order-2 mb-6 md:mb-0 md:w-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-accent-blue z-10">
                  <FileCode className="text-white" size={24} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-3">
                <h3 className="text-xl font-semibold mb-3 text-gradient-purple">Planning & Architecture</h3>
                <p className="text-muted-foreground">
                  With clear requirements in place, I design the system architecture, select appropriate 
                  technologies, and create a development roadmap. This step ensures that we build on a 
                  solid foundation that can scale and adapt to future needs.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3 text-gradient-purple">Development & Implementation</h3>
                <p className="text-muted-foreground">
                  This is where I bring your project to life, writing clean, efficient code following 
                  best practices. I implement features incrementally, allowing for regular feedback and 
                  adjustments throughout the development process.
                </p>
              </div>
              <div className="relative order-1 md:order-2 mb-6 md:mb-0 md:w-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-accent-pink z-10">
                  <Zap className="text-white" size={24} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3" />
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 order-1 hidden md:block" />
              <div className="relative order-2 mb-6 md:mb-0 md:w-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-accent-purple z-10">
                  <Microscope className="text-white" size={24} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-3">
                <h3 className="text-xl font-semibold mb-3 text-gradient-purple">Testing & Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Quality is non-negotiable. I thoroughly test all aspects of your application, from 
                  functionality and performance to security and user experience. This ensures that 
                  the final product is reliable, secure, and meets all requirements.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3 text-gradient-purple">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  Once everything is tested and approved, I deploy your application to the appropriate 
                  environment. I provide ongoing support and maintenance, ensuring your system continues 
                  to perform optimally and can evolve with your changing needs.
                </p>
              </div>
              <div className="relative order-1 md:order-2 mb-6 md:mb-0 md:w-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-accent-blue z-10">
                  <Rocket className="text-white" size={24} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/contact" className="button-primary inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
