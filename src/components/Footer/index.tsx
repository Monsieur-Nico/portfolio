'use client';

import { Link } from '@nextui-org/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-surface dark:bg-surface-dark py-12 border-t border-border dark:border-border-dark"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 transition-colors"
            >
              NicoScript
            </Link>
            <p className="mt-4 text-text/80 dark:text-text-dark/80">
              Crafting exceptional digital experiences with modern web
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-text dark:text-text-dark">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#about"
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-text dark:text-text-dark">
              Get in Touch
            </h3>
            <Link
              href="mailto:contact@nicoscript.dev"
              className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-2 mb-4"
            >
              <Mail size={20} />
              contact@nicoscript.dev
            </Link>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                isExternal
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                isExternal
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                isExternal
                className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark text-center text-text/60 dark:text-text-dark/60">
          <p>
            &copy; {new Date().getFullYear()} NicoScript. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
