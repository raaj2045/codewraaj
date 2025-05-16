import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm' : 'bg-white dark:bg-black'
      } border-b-2 border-black dark:border-white`}>
        <div className="container mx-auto px-3 py-2 sm:py-3 sm:px-4 flex justify-between items-center">
          <div className="font-pixel text-base sm:text-lg z-20">
            <span className="text-pixel-green">Dev</span>
            <span className="text-pixel-purple">Quest</span>
          </div>
          
          {/* Mobile Theme Toggle */}
          <div className="flex items-center space-x-2 sm:hidden z-20">
            <ThemeToggle />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-pixel text-sm hover:text-pixel-purple dark:hover:text-pixel-green transition-colors"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-white dark:bg-black border-t border-black dark:border-white">
        <nav className="container mx-auto px-1">
          <ul className="flex justify-between items-center py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="flex-1">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex flex-col items-center gap-0.5 py-1 text-center hover:text-pixel-purple dark:hover:text-pixel-green transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-pixel text-[8px]">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
