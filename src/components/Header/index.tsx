'use client';

import { Button } from '@nextui-org/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-border dark:border-border-dark z-50">
        <nav className="container h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl text-accent dark:text-accent-dark hover:text-accent-soft dark:hover:text-accent-soft-dark transition-colors"
          >
            NicoScript
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-border dark:border-border-dark z-50">
      <nav className="container h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl text-accent dark:text-accent-dark hover:text-accent-soft dark:hover:text-accent-soft-dark transition-colors"
        >
          NicoScript
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            Contact
          </Link>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark">
            <div className="flex flex-col p-4 gap-4">
              <Link
                href="#about"
                className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                isIconOnly
                variant="light"
                onPress={toggleTheme}
                className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark w-fit"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
