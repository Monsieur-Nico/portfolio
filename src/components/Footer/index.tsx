'use client';

import { companyInfo, siteInfo, socialLinks } from '@/lib/data';
import { theme } from '@/lib/theme';
import { Link } from '@nextui-org/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  // Helper function to get the correct icon component based on icon name
  const getIconComponent = (iconName: string, size = 24) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={size} />;
      case 'twitter':
        return <Twitter size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      default:
        return null;
    }
  };

  return (
    <footer
      id="contact"
      className="bg-surface dark:bg-surface-dark py-12 border-t border-border dark:border-border-dark"
    >
      <div className={theme.components.section.wrapper}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 transition-colors"
            >
              {siteInfo.siteName}
            </Link>
            <p className="mt-4 text-text/80 dark:text-text-dark/80">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={
                theme.components.heading.h4 +
                ' mb-4 text-text dark:text-text-dark'
              }
            >
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
            <h3
              className={
                theme.components.heading.h4 +
                ' mb-4 text-text dark:text-text-dark'
              }
            >
              Get in Touch
            </h3>
            <Link
              href={`mailto:${companyInfo.email}`}
              className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-2 mb-4"
            >
              <Mail size={20} />
              {companyInfo.email}
            </Link>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  className="text-text/80 dark:text-text-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  {getIconComponent(social.icon)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark text-center text-text/60 dark:text-text-dark/60">
          <p>
            &copy; {new Date().getFullYear()} {siteInfo.siteName}. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm">
            Founded in {companyInfo.foundedYear} | {companyInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
