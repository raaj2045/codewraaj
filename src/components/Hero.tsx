
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-pixel text-4xl sm:text-5xl mb-6 leading-tight">
            <span className="block">Hello World!</span>
            <span className="inline-block text-pixel-green dark:text-pixel-purple animate-float">
              I'm <span className="text-pixel-purple dark:text-pixel-green">Alex</span>
            </span>
          </h1>
          
          <div className="font-pixel-body text-xl sm:text-2xl mb-8 relative animate-pixel-fade">
            <p className="mb-2">
              &lt;Software Engineer/&gt;
            </p>
            <p className="inline-block after:content-['_'] after:animate-blink">
              Building pixel-perfect experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="pixel-button bg-pixel-green">
              View Projects
            </a>
            <a href="#contact" className="pixel-button bg-pixel-purple text-white dark:text-black">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-float w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white rounded"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
      
      {/* Pixel Art Decorations */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-pixel-red border-2 border-black dark:border-white hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pixel-blue border-2 border-black dark:border-white hidden sm:block"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-pixel-yellow border-2 border-black dark:border-white hidden sm:block"></div>
    </section>
  );
}
