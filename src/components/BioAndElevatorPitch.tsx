
import {
  FileText,
  Video,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const BioAndElevatorPitch = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            About Me
          </span>
          <h2 className="heading-lg text-gradient mb-6">
            👋 Meet Me Once Again
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-on-scroll">
          {/* Bio Section */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <Avatar className="h-16 w-16 border-2 border-accent-purple/30 mr-4">
                <AvatarImage
                  src="/lovable-uploads/6b8578f2-674e-4131-a5bb-b51b55dbc340.png"
                  alt="Abdulrahman"
                />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gradient-purple">
               This Is Who I Am
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Soyooye Abdulrahman, a software developer passionate about exploring new ideas and building solutions. I specialize in bridging backend efficiency with frontend experience—creating applications that deliver real value.
              </p>
              <p>
                I'm driven by digital health innovation because I believe technology can transform healthcare delivery in Nigeria.
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-black/30 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-6">
                      <Video
                        size={48}
                        className="mx-auto mb-4 text-accent-purple"
                      />
                      <p className="text-muted-foreground">
                        I'm working on bringing this soon inshaAllah!
                      </p>
                    </div>
                  </div>
                </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full flex items-center gap-2"
                >
                  <FileText size={16} />
                  Resume
                </a>
               
              </div>
            </div>
          </div>

          {/* Elevator Pitch Section */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent-blue/20 mr-4">
                <MessageSquare size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gradient-purple">
                This Is What I Do
              </h3>
            </div>

            <div className="space-y-4">
              <div className="text-muted-foreground">
                <p>
                I build fast, clean, and user-focused web applications and software products — from beautiful interfaces to powerful backend systems.
                </p>
                <p className="mt-3">
                Whether it’s a responsive dashboard, a content-rich platform, or a feature-packed admin panel, Your ideas come to life with code. I focus on simplicity, performance, and making sure you actually enjoy the experience
                </p>
              </div>

              <div className="mt-6 relative">
       

                <div className="mt-6 flex flex-wrap justify-between gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=2347011280726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle size={16} />
                  Book a free 15-min consult
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioAndElevatorPitch;
