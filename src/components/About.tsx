import { Code, BookOpen, Coffee } from 'lucide-react';
import meWhite from '../assets/me-white.png';
import meDark from '../assets/me-dark.png';
import starWarsWhite from '../assets/starwars-white.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 relative">
      {/* Background image for light theme */}
      <div className="absolute inset-0 w-[80%] h-[80%] block dark:hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <img 
          src={starWarsWhite} 
          alt="Star Wars themed background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="pixel-heading text-center">ABOUT ME</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="pixel-container flex flex-col md:flex-row gap-8 mb-8 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 overflow-hidden pixel-borders relative">
                {/* Light theme image */}
                <img 
                  src={meWhite} 
                  alt="Profile picture light theme" 
                  className="w-full h-full object-cover block dark:hidden"
                />
                {/* Dark theme image */}
                <img 
                  src={meDark} 
                  alt="Profile picture dark theme" 
                  className="w-full h-full object-cover hidden dark:block"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="font-pixel-body text-lg space-y-4">
                <p>
                  Welcome to my digital realm! I'm a software engineer with a passion for crafting clean code and creating engaging user experiences.
                </p>
                <p>
                  With a background in computer science and a love for all things tech, I specialize in full-stack development using modern technologies like React, Node.js, and TypeScript.
                </p>
                <p>
                  When I'm not coding, you can find me gaming, contributing to open source, or exploring the great outdoors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8 mb-4 text-pixel-purple dark:text-pixel-green" />,
                title: "Developer",
                description: "I enjoy bringing ideas to life through clean, maintainable code."
              },
              {
                icon: <BookOpen className="w-8 h-8 mb-4 text-pixel-purple dark:text-pixel-green" />,
                title: "Learner",
                description: "Always exploring new technologies and design patterns."
              },
              {
                icon: <Coffee className="w-8 h-8 mb-4 text-pixel-purple dark:text-pixel-green" />,
                title: "Coffee Enthusiast",
                description: "Fueled by curiosity and a good cup of coffee."
              }
            ].map((item, index) => (
              <div key={index} className="pixel-container text-center group hover:bg-pixel-green dark:hover:bg-pixel-purple transition-colors bg-white/30 dark:bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="font-pixel text-lg mb-2 group-hover:text-black dark:group-hover:text-white">{item.title}</h3>
                  <p className="font-pixel-body group-hover:text-black dark:group-hover:text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
