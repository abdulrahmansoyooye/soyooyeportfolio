
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, company, rating }) => {
  return (
    <div className="glass p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl animate-fade-in">
      <div className="flex items-start mb-4">
        <div className="p-3 rounded-full bg-accent-purple/20 mr-4">
          <Quote size={24} className="text-accent-purple" />
        </div>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="text-accent-purple fill-accent-purple" />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground mb-6 italic">{quote}</p>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-muted-foreground">{role}, {company}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Abdulrahman's expertise in backend development transformed our business. He delivered a robust solution that scales effortlessly with our growing user base.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechGrowth Inc.",
      rating: 5
    },
    {
      quote: "Working with Abdulrahman on our telemedicine platform was an incredible experience. His passion for digital health innovation in Nigeria really shows in his work.",
      name: "Dr. Adebayo",
      role: "Director",
      company: "HealthConnect Nigeria",
      rating: 5
    },
    {
      quote: "The e-commerce solution Abdulrahman built for us has significantly increased our conversion rates and provided a seamless shopping experience for our customers.",
      name: "Emma Chen",
      role: "Product Manager",
      company: "Retail Solutions",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gradient-radial from-accent-purple/10 via-background to-background">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-fade-in">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            Client Feedback
          </span>
          <h2 className="heading-lg text-gradient mb-6">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm honored to work with amazing clients who value the solutions I build.
            Here's what some of them have to say about our collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
