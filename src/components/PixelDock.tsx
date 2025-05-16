import {
  HomeIcon,
  User,
  Code2,
  FolderGit2,
  Mail,
  SunMoon,
} from 'lucide-react';

import { Dock, DockItem, DockIcon, DockLabel } from '@/components/ui/dock';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function PixelDock() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    {
      title: 'Home',
      icon: <HomeIcon className='h-full w-full text-pixel-green dark:text-pixel-purple' />,
      href: '#home',
    },
    {
      title: 'About',
      icon: <User className='h-full w-full text-pixel-green dark:text-pixel-purple' />,
      href: '#about',
    },
    {
      title: 'Skills',
      icon: <Code2 className='h-full w-full text-pixel-green dark:text-pixel-purple' />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <FolderGit2 className='h-full w-full text-pixel-green dark:text-pixel-purple' />,
      href: '#projects',
    },
    {
      title: 'Contact',
      icon: <Mail className='h-full w-full text-pixel-green dark:text-pixel-purple' />,
      href: '#contact',
    },
  ];

  return (
    <Dock className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <DockItem href="#home" aria-label="Home">
        <DockIcon>
          <HomeIcon
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>Home</DockLabel>
      </DockItem>

      <DockItem href="#about" aria-label="About">
        <DockIcon>
          <User
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>About</DockLabel>
      </DockItem>

      <DockItem href="#skills" aria-label="Skills">
        <DockIcon>
          <Code2
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>Skills</DockLabel>
      </DockItem>

      <DockItem href="#projects" aria-label="Projects">
        <DockIcon>
          <FolderGit2
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>Projects</DockLabel>
      </DockItem>

      <DockItem href="#contact" aria-label="Contact">
        <DockIcon>
          <Mail
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>Contact</DockLabel>
      </DockItem>

      <DockItem 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }} 
        aria-label="Toggle theme"
      >
        <DockIcon>
          <SunMoon
            className={cn(
              "h-full w-full",
              isMobile ? "stroke-[2.5]" : "stroke-2"
            )}
          />
        </DockIcon>
        <DockLabel>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</DockLabel>
      </DockItem>
    </Dock>
  );
}
