/**
 * Central data file containing company information and social links
 * Used across the website for consistent information display
 */

// Company Information
export const companyInfo = {
  name: 'NicoScript',
  tagline:
    'Crafting exceptional digital experiences with modern web technologies.',
  description:
    "Modern web solutions that combine stunning design with powerful performance. Let's build something extraordinary together.",
  heroHeading: 'Crafting Digital Experiences',
  email: 'info@nicoscript.com',
  location: 'Ottawa, ON, Canada',
  aboutDescription:
    'We are a passionate team of developers and designers dedicated to creating exceptional web experiences. Our approach combines cutting-edge technology with thoughtful design to deliver solutions that make an impact. With expertise in modern frameworks and a deep understanding of user experience, we help businesses transform their digital presence and achieve their goals.',
  foundedYear: 2023,
};

// Site Information
export const siteInfo = {
  siteName: companyInfo.name,
  tagline: companyInfo.tagline,
};

// Social Media Links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/nicoscript',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/nicoscript',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/nicoscript',
    icon: 'twitter',
  },
];

// Technologies & Skills
export const technologies = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'AWS', 'CI/CD', 'Vercel'],
  },
];

// Project Information
export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with real-time inventory and seamless checkout.',
    placeholderClass: 'ecommerce',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Dashboard',
    description:
      'Analytics dashboard with AI-powered insights and data visualization.',
    placeholderClass: 'dashboard',
    tags: ['React', 'Python', 'TensorFlow'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Platform',
    description:
      'Community-driven platform with real-time messaging and content sharing.',
    placeholderClass: 'social',
    tags: ['Vue.js', 'Node.js', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

// Services offered
export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description:
      'Intuitive and engaging user interfaces that provide seamless experiences across all devices and platforms.',
  },
  {
    icon: 'gauge',
    title: 'Performance Optimization',
    description:
      'Speed optimization, caching strategies, and performance tuning to ensure your website loads quickly and efficiently.',
  },
];

// Theme configuration
export const themeConfig = {
  primaryColor: 'your-primary-color',
  secondaryColor: 'your-secondary-color',
};
