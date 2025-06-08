/**
 * Theme.ts - Central repository for design tokens and reusable styles
 *
 * This file contains all the design tokens and reusable styles that should be
 * consistently applied across the portfolio project. Import this file whenever
 * you need to access design values instead of hardcoding them.
 */

// Define theme type for proper type checking
export type ThemeType = {
  colors: {
    background: {
      light: string;
      dark: string;
    };
    surface: {
      light: string;
      dark: string;
    };
    text: {
      light: string;
      dark: string;
      lightMuted: string;
      darkMuted: string;
    };
    accent: {
      light: string;
      dark: string;
      hover: {
        light: string;
        dark: string;
      };
    };
    accentSoft: {
      light: string;
      dark: string;
    };
    border: {
      light: string;
      dark: string;
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeights: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: {
      accent: string;
      accentDark: string;
    };
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  zIndices: {
    base: number;
    overlay: number;
    modal: number;
    toast: number;
  };
  components: {
    card: {
      base: string;
      interactive: string;
      stat: string;
    };
    button: {
      primary: string;
      secondary: string;
      icon: string;
    };
    section: {
      default: string;
      wrapper: string;
    };
    heading: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      stat: string;
    };
    animation: {
      fadeIn: string;
    };
  };
};

export const theme: ThemeType = {
  // Colors from tailwind.config.ts
  colors: {
    background: {
      light: '#F0F2F5', // Light blue-gray
      dark: '#0F0F1B',
    },
    surface: {
      light: '#FFFFFF',
      dark: '#1E1E2E',
    },
    text: {
      light: '#1E1E2E',
      dark: '#F5F5F7',
      lightMuted: 'rgba(30, 30, 46, 0.8)', // text/80
      darkMuted: 'rgba(245, 245, 247, 0.8)', // text-dark/80
    },
    accent: {
      light: '#00D1B2', // Teal
      dark: '#00FFE0',
      hover: {
        light: 'rgba(0, 209, 178, 0.8)',
        dark: 'rgba(0, 255, 224, 0.8)',
      },
    },
    accentSoft: {
      light: '#7DD3FC', // Soft blue
      dark: '#B3FFAB',
    },
    border: {
      light: '#E2E8F0',
      dark: '#2E2E3E',
    },
  },

  // Typography
  fonts: {
    heading: 'var(--font-orbitron), sans-serif',
    body: 'var(--font-inter), sans-serif',
  },

  // Font sizes
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },

  // Font weights
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Border radius
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    glow: {
      accent: '0 0 20px rgba(0, 209, 178, 0.5)',
      accentDark: '0 0 20px rgba(0, 255, 224, 0.5)',
    },
  },

  // Transitions
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },

  // Z-indices
  zIndices: {
    base: 0,
    overlay: 40,
    modal: 50,
    toast: 60,
  },

  // Common component styles
  components: {
    // Card styles
    card: {
      base: 'bg-background dark:bg-background-dark border-border dark:border-border-dark',
      interactive:
        'hover:border-accent dark:hover:border-accent-dark transition-colors',
      stat: 'p-6 bg-surface/95 dark:bg-surface-dark/95 rounded-lg border border-border dark:border-border-dark backdrop-blur-sm shadow-sm',
    },
    // Button styles
    button: {
      primary:
        'bg-accent dark:bg-accent-dark text-background dark:text-background-dark hover:bg-accent/90 dark:hover:bg-accent-dark/90',
      secondary:
        'border border-border dark:border-border-dark text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark',
      icon: 'flex items-center justify-center w-10 h-10 rounded-full',
    },
    // Section styles
    section: {
      default: 'py-20',
      wrapper: 'container mx-auto px-4',
    },
    // Text styles
    heading: {
      h1: 'font-heading text-4xl md:text-6xl lg:text-7xl font-bold',
      h2: 'font-heading text-3xl md:text-4xl font-bold',
      h3: 'font-heading text-xl font-bold',
      h4: 'font-heading text-lg font-bold',
      stat: 'font-heading text-5xl font-bold text-accent dark:text-accent-dark mb-2',
    },
    // Animation properties
    animation: {
      fadeIn:
        'initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}',
    },
  },
};

// Helper function to get a theme value by path with proper typing
export function getThemeValue<T>(path: string): T {
  return path.split('.').reduce((obj, key) => {
    return obj && (obj as Record<string, unknown>)[key];
  }, theme as unknown) as T;
}

// Utility for handling dark mode in styled components
type ThemeProps = { theme: { isDark?: boolean } };
export const mode = (lightValue: string, darkValue: string) => {
  return ({ theme }: ThemeProps) => (theme.isDark ? darkValue : lightValue);
};

export default theme;
