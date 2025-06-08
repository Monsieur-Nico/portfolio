# NicoScript Theme System

This directory contains the centralized theme system for the NicoScript portfolio website. It provides a single source of truth for all design tokens and reusable styles.

## Usage

### Importing the Theme

Import the theme in your component:

```tsx
import { theme } from '@/lib/theme';
```

### Using Theme Values

You can access theme values directly in your JSX:

```tsx
// Using a section style
<section className={theme.components.section.default}>

// Using component styles
<div className={theme.components.card.base}>

// Using multiple styles with string concatenation
<h2 className={theme.components.heading.h2 + " mb-6"}>
```

### Helper Functions

The theme file includes two helper functions:

1. `getThemeValue<T>()` - Access a nested theme property by path:

```tsx
// Get a specific color
const accentColor = getThemeValue<string>('colors.accent.light');

// Get a shadow
const cardShadow = getThemeValue<string>('shadows.md');
```

2. `mode()` - Helper for dynamic light/dark values (for styled components):

```tsx
// In a styled component
const backgroundColor = mode(
  theme.colors.background.light,
  theme.colors.background.dark
);
```

## Theme Structure

The theme is organized into these major sections:

- **colors**: Brand colors, text colors, backgrounds, etc.
- **fonts**: Typography settings
- **fontSizes**: Text size scale
- **fontWeights**: Font weight options
- **radius**: Border radius values
- **spacing**: Common spacing values
- **shadows**: Box shadows and glows
- **transitions**: Animation timing
- **zIndices**: Z-index scale
- **components**: Ready-to-use component class combinations

## Best Practices

1. **Always use theme values** instead of hardcoding colors, sizes, etc.
2. **Component styles first**: Use `theme.components.*` for common elements
3. **Compose classes**: Combine theme classes with additional Tailwind classes
4. **Maintain consistency**: If you need a new style, add it to the theme file

## Extending the Theme

When adding new styles to components, consider if they should be part of the theme system. If you're using the same styling in multiple places, add it to the appropriate section in `theme.ts`.
