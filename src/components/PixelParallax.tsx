
import { useEffect, useState } from 'react';

// Define the layers for both light and dark modes
const lightModeLayers = [
  { image: 'sky', depth: 0.1, yOffset: 0 },
  { image: 'clouds', depth: 0.2, yOffset: 50 },
  { image: 'mountains', depth: 0.4, yOffset: 150 },
  { image: 'trees', depth: 0.6, yOffset: 250 },
  { image: 'ground', depth: 0.8, yOffset: 350 },
];

const darkModeLayers = [
  { image: 'night-sky', depth: 0.1, yOffset: 0 },
  { image: 'stars', depth: 0.2, yOffset: 50 },
  { image: 'night-mountains', depth: 0.4, yOffset: 150 },
  { image: 'night-trees', depth: 0.6, yOffset: 250 },
  { image: 'night-ground', depth: 0.8, yOffset: 350 },
];

export default function PixelParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Set up scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const layers = isDarkMode ? darkModeLayers : lightModeLayers;

  return (
    <div className="fixed inset-0 w-full h-screen -z-10 overflow-hidden">
      {layers.map((layer, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * layer.depth}px)`,
            top: layer.yOffset,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div 
            className={`w-full h-full bg-repeat-x bg-[length:100px_100px] pixel-bg-${isDarkMode ? 'dark' : 'light'}-${layer.image}`}
            style={{ 
              backgroundSize: layer.image.includes('ground') ? '100px 20px' : 
                             layer.image.includes('trees') ? '120px 100px' : 
                             layer.image.includes('mountains') ? '300px 100px' : 
                             layer.image.includes('clouds') || layer.image.includes('stars') ? '200px 100px' : 
                             '100px 100px'
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
