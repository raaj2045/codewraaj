
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b-2 border-black dark:border-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-pixel text-lg sm:text-xl">
          <span className="text-pixel-green">Dev</span>
          <span className="text-pixel-purple">Quest</span>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 sm:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 pixel-borders"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b-2 border-black dark:border-white animate-pixel-slide sm:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block font-pixel text-sm py-2 px-4 border-2 border-black dark:border-white hover:bg-pixel-green dark:hover:bg-pixel-purple transition-colors"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        
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
  );
}
