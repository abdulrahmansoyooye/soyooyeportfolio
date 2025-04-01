
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import TechStack from "../components/TechStack";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 pt-36 bg-background">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
                About Me
              </span>
              <h1 className="heading-lg text-gradient mb-6">
                The Journey of a{" "}
                <span className="text-gradient-purple">Developer</span>
              </h1>
              <p className="text-muted-foreground mb-6">
                A passionate backend developer with a strong interest in digital health solutions, particularly telemedicine in Nigeria. I blend technical expertise with a creative approach to problem-solving, delivering exceptional results for every project.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/projects" className="button-primary">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/contact" className="button-secondary">
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Code and technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-xl max-w-[250px]">
                <div className="text-2xl font-bold text-gradient-purple mb-2">
                  400+
                </div>
                <div className="text-sm">GitHub Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - Light Background */}
      <section className="light-section">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md text-gray-900 mb-6">My Story</h2>
              <p className="text-gray-700 mb-4">
                My journey in software development began years ago when I
                discovered my passion for creating efficient systems and solving
                complex problems through code.
              </p>
              <p className="text-gray-700 mb-4">
                With a track record of leading development efforts,
                collaborating with technical and non-technical teams, and
                optimizing deployment strategies, I stand out for my ability to
                turn complex problems into scalable solutions that drive
                business impact.
              </p>
              <p className="text-gray-700">
                I'm particularly passionate about digital health improvement, especially telemedicine solutions for Nigeria. I believe technology can bridge healthcare gaps and provide accessible services to underserved communities. This drive motivates me to continuously learn and apply my skills to create meaningful impact in the healthcare sector.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-gray-900 mb-6">My Approach</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-accent-purple/20">
                      <div className="w-6 h-6 flex items-center justify-center text-accent-purple font-bold">
                        1
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Understanding Requirements
                    </h3>
                    <p className="text-gray-700">
                      I take time to thoroughly understand project requirements,
                      business goals, and user needs before diving into
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-accent-blue/20">
                      <div className="w-6 h-6 flex items-center justify-center text-accent-blue font-bold">
                        2
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Architecting Solutions
                    </h3>
                    <p className="text-gray-700">
                      I design scalable, maintainable architectures that can
                      grow with your business and adapt to changing needs.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-accent-pink/20">
                      <div className="w-6 h-6 flex items-center justify-center text-accent-pink font-bold">
                        3
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Quality Implementation
                    </h3>
                    <p className="text-gray-700">
                      I write clean, well-documented code with comprehensive
                      tests to ensure reliability and performance.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-accent-purple/20">
                      <div className="w-6 h-6 flex items-center justify-center text-accent-purple font-bold">
                        4
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Continuous Improvement
                    </h3>
                    <p className="text-gray-700">
                      I believe in iterative development, gathering feedback,
                      and continuously refining solutions to deliver the best
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="section-padding bg-background">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
              My Background
            </span>
            <h2 className="heading-lg text-gradient mb-6">
              Experience & Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="mr-3 text-accent-purple" />
                <h3 className="text-xl font-semibold">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-8">
                <div className="glass p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Fullstack Engineer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      May 2024 - Present
                    </span>
                  </div>
                  <h5 className="text-accent-purple mb-4">Sayf Network</h5>
                  <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                    <li>Led the full-stack development of an admin dashboard, improving user efficiency by 35% through an intuitive UI and seamless backend integration.</li>
                    <li>Designed and implemented the system using Next.js, MongoDB, Mongoose, and Tailwind CSS, ensuring scalability and performance optimization.</li>
                    <li>Enhanced data management and security, leading to a 25% improvement in query performance and ensuring data integrity and reliability.</li>
                  </ul>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Lead Software Developer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      Nov 2024 – Present
                    </span>
                  </div>
                  <h5 className="text-accent-blue mb-4">
                    Nextage Digital Solutions Ltd.
                  </h5>
                  <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                    <li>Led the development of multiple applications, improving development speed by 40% through efficient code structuring and process automation.</li>
                    <li>Collaborated with cross-functional teams, effectively communicating technical requirements and solutions, resulting in 20% faster project delivery times.</li>
                    <li>Designed and deployed scalable, high-performance systems using Next.js, Sanity, TypeScript, Tailwind, ensuring 99.9% uptime and seamless data flow.</li>
                  </ul>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Frontend Developer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      Dec 2024 -Present
                    </span>
                  </div>
                  <h5 className="text-accent-pink mb-4">Rawaaq</h5>
                  <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                    <li>Assisted in building web applications and content management systems for educational institutions.</li>
                    <li>Collaborated on frontend and backend features as part of an agile team, improving product delivery times.</li>
                    <li>Implemented responsive designs and optimized user interfaces for improved engagement and usability.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="flex items-center mb-8">
                    <GraduationCap className="mr-3 text-accent-purple" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="glass p-6 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">
                          Computer Science
                        </h4>
                        <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          2025 
                        </span>
                      </div>
                      <h5 className="text-accent-purple mb-4">
                         University
                      </h5>
                      <p className="text-muted-foreground">
                        Specialized in Distributed Systems and Database
                        Management. Thesis on optimizing query performance in
                        NoSQL databases.
                      </p>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">
                          Computer Science
                        </h4>
                        <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          2025
                        </span>
                      </div>
                      <h5 className="text-accent-blue mb-4">
                         University
                      </h5>
                      <p className="text-muted-foreground">
                        Foundation in programming, algorithms, data structures,
                        and software engineering. Graduated with honors.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-8">
                    <Award className="mr-3 text-accent-blue" />
                    <h3 className="text-xl font-semibold">Certifications</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="glass p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        IBM Certification – Developing Cloud Applications with React and Node.js
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        IBM on Coursera, May 2023
                      </p>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        Front-End Development Libraries Certification
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        FreeCodeCamp, July 2023
                      </p>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        Responsive Web Design Certification
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        FreeCodeCamp, May 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-radial from-accent-purple/20 via-background to-background">
        <div className="section-wrapper">
          <div className="glass p-8 md:p-12 rounded-2xl text-center">
            <h2 className="heading-md text-gradient mb-6">
              Want to Work Together?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, opportunities, and
              partnerships.
            </p>
            <Link to="/contact" className="button-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
