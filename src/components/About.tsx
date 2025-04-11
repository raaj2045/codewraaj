
import { Code, BookOpen, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="pixel-heading text-center">ABOUT ME</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="pixel-container flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-pixel-blue overflow-hidden pixel-borders">
                {/* Placeholder for pixel art avatar - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-pixel-purple to-pixel-blue flex items-center justify-center">
                  <span className="font-pixel text-2xl text-white">:)</span>
                </div>
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
              <div key={index} className="pixel-container text-center group hover:bg-pixel-green dark:hover:bg-pixel-purple transition-colors">
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
