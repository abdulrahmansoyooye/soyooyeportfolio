
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Bell, BellRing, ArrowRight, Newspaper, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BlogCard from "../components/BlogCard";
import { Button } from "@/components/ui/button";

const sampleBlogs = [
  {
    id: 1,
    title: "The Future of Digital Health in Nigeria",
    excerpt: "Exploring how telemedicine and health tech are transforming healthcare delivery in Nigeria.",
    date: "April 5, 2025",
    author: "Abdulrahman Soyooye",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Digital Health"
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "A technical deep dive into architecture patterns for robust backend systems.",
    date: "April 2, 2025",
    author: "Abdulrahman Soyooye",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Backend Development"
  },
  {
    id: 3,
    title: "Frontend Performance Optimization Techniques",
    excerpt: "Practical strategies to enhance the speed and responsiveness of your web applications.",
    date: "March 28, 2025",
    author: "Abdulrahman Soyooye",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Frontend Development"
  }
];

const Blog = () => {
  const [notificationPermission, setNotificationPermission] = useState("default");
  const [showGuide, setShowGuide] = useState(true);
  const [currentGuideStep, setCurrentGuideStep] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Check notification permission on load
    if ("Notification" in window) {
      setNotificationPermission(Notification.permission);
    }
    
    // Initialize animation observer
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    // Show guide automatically if notifications are not yet enabled
    if (notificationPermission !== "granted") {
      setTimeout(() => {
        setShowGuide(true);
      }, 2000);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      toast({
        title: "Browser Not Supported",
        description: "Your browser doesn't support notifications.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      
      if (permission === "granted") {
        toast({
          title: "Notifications Enabled",
          description: "You'll now receive updates when new blog posts are published!",
        });
        
        // Send a test notification
        const notification = new Notification("Welcome to Abdulrahman's Blog!", {
          body: "Thank you for enabling notifications. You'll be notified when new content is published.",
          icon: "/lovable-uploads/7dabc1dd-bc3f-4959-a589-ac41a719f761.png"
        });
        
        notification.onclick = function() {
          window.focus();
          notification.close();
        };
      }
      
      setShowGuide(false);
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      toast({
        title: "Something went wrong",
        description: "Could not request notification permission.",
        variant: "destructive",
      });
    }
  };

  const guideSteps = [
    {
      title: "Welcome to my Blog!",
      description: "Get notified when I publish new articles about software development, digital health, and more!",
      action: "Next",
      image: <Newspaper size={48} className="text-accent-purple mx-auto mb-4" />
    },
    {
      title: "Enable Notifications",
      description: "Stay updated with my latest insights and tutorials by allowing notifications.",
      action: "Enable Notifications",
      image: <BellRing size={48} className="text-accent-purple mx-auto mb-4" />
    }
  ];
  
  const handleGuideAction = () => {
    if (currentGuideStep < guideSteps.length - 1) {
      setCurrentGuideStep(currentGuideStep + 1);
    } else {
      requestNotificationPermission();
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-b from-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-16">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 animate-on-scroll opacity-0">
            Insights & Tutorials
          </span>

          <h1 className="heading-xl text-gradient mb-6 max-w-4xl animate-on-scroll opacity-0">
            My <span className="text-gradient-purple">Blog</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-on-scroll opacity-0">
            Thoughts, tutorials, and insights on software development, digital health innovation, and technology trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0">
            {notificationPermission !== "granted" && (
              <Button 
                onClick={requestNotificationPermission}
                className="button-primary flex items-center gap-2"
              >
                <BellRing size={16} />
                Get Notified on New Posts
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-background">
        <div className="section-wrapper">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              Latest Articles
            </span>
            <h2 className="heading-lg text-gradient mb-6">Recent Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my recent articles on software development, digital health innovation, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <div className="glass p-8 rounded-xl mt-16 animate-on-scroll opacity-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Subscribe for Updates</h3>
                <p className="text-muted-foreground">
                  Enable browser notifications to get alerted when new content is published.
                </p>
              </div>
              {notificationPermission !== "granted" ? (
                <Button 
                  onClick={requestNotificationPermission}
                  className="button-primary flex items-center gap-2 whitespace-nowrap"
                >
                  <Bell size={16} />
                  Enable Notifications
                </Button>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 text-green-500">
                  <BellRing size={16} />
                  <span>Notifications Enabled</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gray-900">
        <div className="section-wrapper">
          <div className="glass p-8 md:p-12 rounded-2xl text-center animate-on-scroll opacity-0">
            <h2 className="heading-md text-gradient mb-6">
              More Content Coming Soon!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm working on creating valuable content about software development, digital health innovation, and technology trends. 
              Enable notifications to be the first to know when new posts are published!
            </p>
            <a href="#" className="flex items-center justify-center gap-2 text-accent-purple">
              <ExternalLink size={16} />
              <span>Follow me on Twitter for updates</span>
            </a>
          </div>
        </div>
      </section>

      {/* Notification Guide Dialog */}
      <Dialog open={showGuide} onOpenChange={setShowGuide}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {guideSteps[currentGuideStep].title}
            </DialogTitle>
            <DialogDescription className="text-center">
              <div className="py-6">
                {guideSteps[currentGuideStep].image}
                <p className="text-center mb-6">{guideSteps[currentGuideStep].description}</p>
                <Button 
                  onClick={handleGuideAction}
                  className="button-primary w-full"
                >
                  {guideSteps[currentGuideStep].action}
                </Button>
                {currentGuideStep === guideSteps.length - 1 && (
                  <button 
                    className="mt-4 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setShowGuide(false)}
                  >
                    Maybe later
                  </button>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Blog;
