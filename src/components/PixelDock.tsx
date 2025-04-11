
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
import { useState, useEffect } from 'react';

export default function PixelDock() {
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
    <div className='fixed bottom-6 left-1/2 z-50 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3 border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'>
        {navItems.map((item, idx) => (
          <DockItem
            key={idx}
            href={item.href}
            className='aspect-square bg-white dark:bg-black'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
        <DockItem
          onClick={toggleTheme}
          className='aspect-square bg-white dark:bg-black'
        >
          <DockLabel>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</DockLabel>
          <DockIcon>
            <SunMoon className='h-full w-full text-pixel-green dark:text-pixel-purple' />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
