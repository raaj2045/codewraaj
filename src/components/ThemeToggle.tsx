
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for system preference or stored preference
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      toast({
        title: "Dark mode activated!",
        description: "You've entered the night realm.",
      });
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      toast({
        title: "Light mode activated!",
        description: "Welcome to the bright side.",
      });
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="w-10 h-10 p-2 rounded-md pixel-borders flex items-center justify-center bg-white dark:bg-black"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-800" />
      )}
    </button>
  );
}
