
import React from 'react';
import { Code, Database, Server, Check, Lightbulb, Users } from 'lucide-react';

const WhatIDo = () => {
  return (
    <section className="section-padding bg-gradient-radial from-accent-blue/10 via-background to-background">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            My Services
          </span>
          <h2 className="heading-lg text-gradient mb-6">How I Can Help You Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about creating digital solutions that solve real problems and help businesses thrive.
            Here's what I bring to the table:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          {/* What I Do */}
          <div className="glass p-6 rounded-xl">
            <div className="p-3 rounded-full bg-accent-purple/20 w-fit mb-6">
              <Code size={28} className="text-accent-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-purple">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-purple mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Build robust backend systems that scale with your business</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-purple mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Design intuitive user interfaces that your customers will love</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-purple mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Create digital health solutions that improve healthcare access</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-purple mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Optimize existing systems for better performance and reliability</p>
              </li>
            </ul>
          </div>
          
          {/* Why I Do It */}
          <div className="glass p-6 rounded-xl">
            <div className="p-3 rounded-full bg-accent-blue/20 w-fit mb-6">
              <Lightbulb size={28} className="text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-purple">Why I Do It</h3>
            <p className="text-muted-foreground mb-4">
              I believe technology should make life better for everyone. I'm driven by:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-blue mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Passion for solving complex problems with elegant solutions</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-blue mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Commitment to improving healthcare access in Nigeria through telemedicine</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-blue mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Joy in creating systems that make a real difference for users</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-blue mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Dedication to continuous learning and improvement</p>
              </li>
            </ul>
          </div>
          
          {/* Results You Get */}
          <div className="glass p-6 rounded-xl">
            <div className="p-3 rounded-full bg-accent-pink/20 w-fit mb-6">
              <Users size={28} className="text-accent-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-purple">Results You Get</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Reliable, scalable systems that grow with your business needs</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">User-friendly interfaces that keep your customers engaged</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Improved performance and faster load times for your applications</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Technical expertise without the technical headaches</p>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">A development partner who cares about your success</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
