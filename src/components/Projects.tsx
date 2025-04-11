
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Pixel Weather App",
      description: "A weather application with retro pixel art style, built with React and OpenWeather API.",
      tags: ["React", "API", "CSS", "OpenWeather"],
      image: "/placeholder.svg",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Task Quest",
      description: "A gamified task management app that makes productivity fun with pixel art rewards.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Retro Code Editor",
      description: "A code editor with syntax highlighting and a nostalgic UI inspired by old-school IDEs.",
      tags: ["JavaScript", "CodeMirror", "CSS"],
      image: "/placeholder.svg",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Pixel Art Generator",
      description: "A tool that helps users create and export pixel art sprites for games and websites.",
      tags: ["Canvas API", "JavaScript", "HTML5"],
      image: "/placeholder.svg",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
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
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-pixel-green transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-pixel-purple transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
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
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pixel-button">
              See More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
