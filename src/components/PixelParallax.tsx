
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
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
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
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
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
          <div className={`w-full h-full bg-repeat-x pixel-bg-${isDarkMode ? 'dark' : 'light'}-${layer.image}`}></div>
        </div>
      ))}
    </div>
  );
}
