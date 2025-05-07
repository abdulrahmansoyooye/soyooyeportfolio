
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
                My Journey as a{" "}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
        My Background
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
        Experience & Education
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
        A journey of continuous learning and professional growth
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Experience */}
      <div>
        <div className="flex items-center mb-6">
          <Briefcase className="mr-3 text-accent-purple w-5 h-5" />
          <h3 className="text-xl font-semibold">Professional Experience</h3>
        </div>

        <div className="space-y-6">
          {[{
            title: "Fullstack Engineer",
            org: "Sayf Network",
            color: "text-accent-purple",
            date: "May 2024 - Present",
            points: [
              "Led the full-stack development of an admin dashboard, improving user efficiency by 35%.",
              "Built scalable systems with Next.js, MongoDB, Mongoose, and Tailwind CSS.",
              "Improved database performance by 25% with optimized querying and security."
            ]
          },
          {
            title: "Lead Software Developer",
            org: "Nextage Digital Solutions Ltd.",
            color: "text-accent-blue",
            date: "Nov 2024 – Present",
            points: [
              "Spearheaded product development, increasing delivery speed by 40%.",
              "Drove cross-functional team efficiency with strong communication.",
              "Used Sanity, Next.js, and TypeScript to achieve high-performance builds."
            ]
          },
          {
            title: "Frontend Developer",
            org: "Rawaaq",
            color: "text-accent-pink",
            date: "Dec 2024 - Present",
            points: [
              "Built educational dashboards and CMS platforms.",
              "Contributed to frontend/backend logic for fast release cycles.",
              "Designed responsive, accessible interfaces for better engagement."
            ]
          }].map(({ title, org, color, date, points }, idx) => (
            <div key={idx} className="glass p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{title}</h4>
                <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap">
                  {date}
                </span>
              </div>
              <h5 className={`${color} mb-3`}>{org}</h5>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2 text-sm">
                {points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education + Certifications */}
      <div className="space-y-12">
        <div>
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-3 text-accent-purple w-5 h-5" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                field: "Computer Science",
                color: "text-accent-purple",
                school: "University",
                year: "2025",
                note: "Specialized in Distributed Systems and DBMS. Thesis on NoSQL performance."
              },
              {
                field: "Computer Science",
                color: "text-accent-blue",
                school: "University",
                year: "2025",
                note: "Covered programming, data structures, software engineering. Graduated with honors."
              }
            ].map(({ field, color, school, year, note }, i) => (
              <div key={i} className="glass p-6 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{field}</h4>
                  <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {year}
                  </span>
                </div>
                <h5 className={`${color} mb-3`}>{school}</h5>
                <p className="text-muted-foreground text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Award className="mr-3 text-accent-blue w-5 h-5" />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "IBM Cloud Apps with React & Node.js",
                source: "IBM on Coursera, May 2023"
              },
              {
                title: "Front-End Dev Libraries",
                source: "FreeCodeCamp, July 2023"
              },
              {
                title: "Responsive Web Design",
                source: "FreeCodeCamp, May 2023"
              }
            ].map(({ title, source }, i) => (
              <div key={i} className="glass p-6 rounded-xl">
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



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
