import { useEffect, useState } from 'react';
import whiteTrain from '../assets/white-train-bg.gif';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background GIF for light mode */}
      <div 
        className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-0 transition-opacity duration-300"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={whiteTrain} 
          alt="White themed background with train" 
          className="w-full h-[120%] object-cover"
          style={{
            marginTop: '-10%'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="w-[50%] h-[40vh] mx-auto text-center bg-white/60 dark:bg-black/60 backdrop-blur-0 p-12 rounded-xl relative flex flex-col justify-center">
          <div className="relative z-10">
            <h1 className="font-pixel text-4xl sm:text-5xl mb-8 leading-tight">
              <span className="block">Hello World!</span>
              <span className="inline-block text-pixel-green dark:text-pixel-purple animate-float">
                I'm <span className="text-pixel-purple dark:text-pixel-green">Raaj</span>
              </span>
            </h1>
            
            <div className="font-pixel-body text-xl sm:text-2xl mb-10 relative animate-pixel-fade">
              <p className="mb-2">
                &lt;Software Engineer (Full Stack)/&gt;
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
      </div>
    </section>
  );
}
