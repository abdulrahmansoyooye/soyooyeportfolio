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
                A passionate backend developer with a knack for creating
                elegant, efficient solutions. I blend technical expertise with a
                creative approach to problem-solving, delivering exceptional
                results for every project.
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
                  10+
                </div>
                <div className="text-sm">Projects completed successfully</div>
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
                My journey in software development began over 5 years ago when I
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
                I believe in continuous learning and staying updated with the
                latest technologies and best practices in the field. This
                curiosity and dedication to growth have allowed me to deliver
                innovative solutions that meet and exceed client expectations.
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
                    <h4 className="font-semibold">Senior Backend Developer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      2020 - Present
                    </span>
                  </div>
                  <h5 className="text-accent-purple mb-4">
                    Tech Innovations Inc.
                  </h5>
                  <p className="text-muted-foreground">
                    Led the development of scalable backend services for
                    enterprise clients. Designed and implemented microservice
                    architectures, API gateways, and database optimization
                    strategies.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Backend Developer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      2018 - 2020
                    </span>
                  </div>
                  <h5 className="text-accent-blue mb-4">
                    Digital Solutions Ltd.
                  </h5>
                  <p className="text-muted-foreground">
                    Developed RESTful APIs and integrations for e-commerce
                    platforms. Implemented payment processing systems and
                    inventory management solutions.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Junior Developer</h4>
                    <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      2016 - 2018
                    </span>
                  </div>
                  <h5 className="text-accent-pink mb-4">Web Creators Co.</h5>
                  <p className="text-muted-foreground">
                    Assisted in building web applications and content management
                    systems. Collaborated on frontend and backend features as
                    part of an agile team.
                  </p>
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
                          Master of Computer Science
                        </h4>
                        <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          2014 - 2016
                        </span>
                      </div>
                      <h5 className="text-accent-purple mb-4">
                        Tech University
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
                          Bachelor of Science in Computer Science
                        </h4>
                        <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          2010 - 2014
                        </span>
                      </div>
                      <h5 className="text-accent-blue mb-4">
                        State University
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
                        AWS Certified Solutions Architect
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Amazon Web Services, 2022
                      </p>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        Certified Kubernetes Administrator
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cloud Native Computing Foundation, 2021
                      </p>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        MongoDB Certified Developer
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        MongoDB Inc., 2019
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
