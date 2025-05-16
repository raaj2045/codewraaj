import { ExternalLink, Github } from 'lucide-react';
import gseImage from '../assets/gse.png';
import natalCareImage from '../assets/natalcare.png';
import secretEchoImage from '../assets/secretecho.png';
import ticketingImage from '../assets/ticketing.png';

export default function Projects() {
  const projects = [
    {
      title: "Secret Echo - AI Chat Companion",
      description: "A real-time 1-to-1 messaging application with simulated AI responses, featuring JWT authentication, real-time messaging with Socket.io, and offline message persistence.",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "JWT", "TailwindCSS"],
      image: secretEchoImage,
      githubLink: "https://github.com/raaj2045/secret-echo",
      liveLink: "https://secret-echo-sigma.vercel.app/"
    },
    {
      title: "Ticketing Platform (In Progress)",
      description: "A microservices-based ticket booking application with features like authentication, ticket creation, and order management. Built with a focus on scalability and reliability.",
      tags: ["TypeScript","React.js", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes"],
      image: ticketingImage,
      githubLink: "https://github.com/raaj2045/ticketing",
      liveLink: "https://stubhub.com/"
    },
    {
      title: "NatalCare Hub",
      description: "A PoC application designed to empower expecting mothers with comprehensive prenatal care tools and resources, making pregnancy management more accessible and informed.",
      tags: ["React", "Node.js", "Healthcare", "UI/UX", "Mobile-First"],
      image: natalCareImage,
      githubLink: "https://github.com/raaj2045/natalcare-hub",
      liveLink: "https://natalcare-hub.vercel.app/"
    },
     {
      title: "Gandhi School of Engineering",
      description: "A comprehensive educational institution website built with modern web technologies. Features include dynamic course catalog, student portal integration, responsive design, and interactive campus tour showcasing state-of-the-art facilities.",
      tags: ["Wordpress", "PHP", "SQL", "Elementor", "UI/UX", "Mobile-First"],
      image: gseImage,
      githubLink: null,
      liveLink: "https://gse.ac.in/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="pixel-heading text-center">MY PROJECTS</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="pixel-container group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all">
                <div className="relative mb-4 overflow-hidden border-2 border-black dark:border-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                     {project.githubLink && (
                       <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-pixel-green transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                     )}

                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="p-2 bg-white text-black rounded-full hover:bg-pixel-purple transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-pixel text-lg mb-2 text-pixel-purple dark:text-pixel-green">{project.title}</h3>
                  <p className="font-pixel-body mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 text-xs font-pixel bg-gray-200 dark:bg-gray-700 border border-black dark:border-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/raaj2045" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pixel-button"
            >
              See More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
