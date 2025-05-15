import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Secret Echo - AI Chat Companion",
      description: "A real-time 1-to-1 messaging application with simulated AI responses. Features JWT authentication, real-time messaging with Socket.io, and offline message persistence.",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
      image: "/placeholder.svg",
      githubLink: "https://github.com/raaj2045/secret-echo",
      liveLink: "https://secret-echo-sigma.vercel.app/"
    },
    {
      title: "Ticketing Platform",
      description: "A microservices-based ticket booking application with features like authentication, ticket creation, and order management. Built with a focus on scalability and reliability.",
      tags: ["TypeScript", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes"],
      image: "/placeholder.svg",
      githubLink: "https://github.com/raaj2045/ticketing",
      liveLink: ""
    },
    {
      title: "NatalCare Hub",
      description: "A PoC application designed to empower expecting mothers with comprehensive prenatal care tools and resources, making pregnancy management more accessible and informed.",
      tags: ["React", "Node.js", "Healthcare", "UI/UX", "Mobile-First"],
      image: "/placeholder.svg",
      githubLink: "https://github.com/raaj2045/natalcare-hub",
      liveLink: "https://natalcare-hub.vercel.app/"
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
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      <Github className="mr-2" size={20} />
                      Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
