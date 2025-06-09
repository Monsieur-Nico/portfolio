import React from 'react';
import { Code2, Gauge, Palette, Github, Linkedin, Twitter } from 'lucide-react';

/**
 * Returns a lucide-react icon component based on the provided name.
 * @param iconName Name of the icon to render.
 * @param size Icon size in pixels.
 */
export function getIconComponent(iconName: string, size = 24): React.ReactElement | null {
  switch (iconName.toLowerCase()) {
    case 'code':
      return React.createElement(Code2, {
        size,
        className: 'text-accent dark:text-accent-dark',
      });
    case 'palette':
      return React.createElement(Palette, {
        size,
        className: 'text-accent dark:text-accent-dark',
      });
    case 'gauge':
      return React.createElement(Gauge, {
        size,
        className: 'text-accent dark:text-accent-dark',
      });
    case 'github':
      return React.createElement(Github, { size });
    case 'twitter':
      return React.createElement(Twitter, { size });
    case 'linkedin':
      return React.createElement(Linkedin, { size });
    default:
      return null;
  }
}
