import skillsLight from '../assets/skills-light.png';
import skillsDark from '../assets/skills-dark.png';

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Microfrontends", level: 85 },
        { name: "Module Federation", level: 80 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Kafka", level: 75 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 85 },
        { name: "GitLab CI/CD", level: 90 },
        { name: "AWS/GCP/Azure", level: 80 },
        { name: "Cloud Foundry", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background for light theme */}
      <div className="absolute inset-0 w-full h-full block dark:hidden">
        <img 
          src={skillsLight} 
          alt="Skills background light theme" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Background for dark theme */}
      <div className="absolute inset-0 w-full h-full hidden dark:block">
        <img 
          src={skillsDark} 
          alt="Skills background dark theme" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="pixel-heading text-center">MY SKILLS</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="pixel-container bg-white/40 dark:bg-black/40 backdrop-blur-sm">
                <h3 className="font-pixel text-xl mb-4 text-center text-pixel-purple dark:text-pixel-green">
                  {category.name}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-pixel-body text-lg">{skill.name}</span>
                        <span className="font-pixel-body">{skill.level}%</span>
                      </div>
                      
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 pixel-borders overflow-hidden">
                        <div 
                          className="h-full bg-pixel-green dark:bg-pixel-purple"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block pixel-container bg-pixel-yellow/60 dark:bg-black/40 backdrop-blur-sm">
              <h3 className="font-pixel text-black dark:text-white mb-4">Expertise & Achievements</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "System Design", "Distributed Systems", "Cybersecurity",
                  "CI/CD Expert", "Test-Driven Development", "Team Leadership",
                  "Cross-Team Collaboration", "Accessibility", "AI Integration"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1 font-pixel-body text-black border-2 border-black bg-white inline-block"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
