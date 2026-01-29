# Project Context: LaslesVPN Landing Page

## 📋 Overview

A modern, premium landing page for LaslesVPN - a VPN service provider. This project focuses on creating a pixel-perfect, responsive, and visually stunning web experience that converts visitors into customers.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Modules
- **UI Components**: Custom components (no external UI library)
- **Icons**: Lucide React
- **State Management**: React Context API + Hooks
- **Animations**: CSS Transitions + Framer Motion (for complex animations)
- **Forms**: React Hook Form + Zod validation
- **Image Optimization**: Next.js Image component

## 📁 Repository Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── common/                  # Shared reusable components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Navigation/
│   │   └── Footer/
│   └── pages/                   # Page-specific components
│       └── [page-name]/         # Organized by page
│           └── [section-name]/  # Then by section
├── hooks/                       # Custom React hooks
├── lib/                         # Utilities and helpers
├── styles/                      # Global styles and design tokens
│   ├── tokens/                  # Design system tokens
│   │   ├── colors.css
│   │   ├── typography.css
│   │   └── spacing.css
│   └── mixins/                  # Reusable CSS mixins
├── types/                       # TypeScript type definitions
└── public/                      # Static assets
    ├── images/
    └── icons/

figma-agent/                     # Extracted design data
├── common/                      # Design system tokens
│   ├── colors/
│   ├── typography/
│   ├── styles/
│   └── components/
└── pages/                       # Page-specific data
    └── [page-name]/
        └── [section-name]/
            ├── data.json
            ├── specs.md
            └── components/
```

## 🎨 Design System

### Colors

- Use HSL format for all colors
- Primary: Brand colors from Figma
- Semantic: success, warning, error, info
- Neutral: grayscale palette
- All colors defined in `styles/tokens/colors.css`

### Typography

- Font Family: Primary font from Figma (likely Rubik or similar)
- Scale: H1-H6, Body (Large, Medium, Small), Caption
- Line heights: 1.2 for headings, 1.6 for body text
- Letter spacing: Follow Figma specs exactly

### Spacing

- Base unit: 4px or 8px (determined from Figma)
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Use CSS custom properties: `var(--spacing-4)`, etc.

### Effects

- Shadows: Defined in design tokens
- Glassmorphism: backdrop-blur + semi-transparent backgrounds
- Gradients: Linear and radial as specified in Figma

## 🎯 Coding Standards

### Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Files**: Match component name (e.g., `HeroSection.tsx`, `HeroSection.module.css`)
- **Variables/Functions**: camelCase (e.g., `handleSubmit`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_URL`)
- **CSS Classes**: kebab-case (e.g., `hero-section`, `cta-button`)
- **CSS Modules**: camelCase in TypeScript (e.g., `styles.heroSection`)

### Component Structure

```typescript
// 1. Imports (React, Next.js, external libraries)
// 2. Type definitions
// 3. Component definition
// 4. Exports

import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
  description?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

### TypeScript Rules

- **Mandatory**: All components, hooks, and utilities must be typed
- **Interfaces over Types**: Use `interface` for object shapes
- **Explicit Return Types**: For functions and components
- **No `any`**: Use `unknown` or proper types
- **Strict Mode**: Enabled in `tsconfig.json`

### CSS Standards

- **Mobile-First**: Start with mobile styles, add desktop with media queries
- **CSS Modules**: One module per component
- **Custom Properties**: Use for all design tokens
- **BEM-like**: Within modules (e.g., `.card`, `.card__title`, `.card--featured`)
- **No Inline Styles**: Except for dynamic values
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Documentation

- **JSDoc**: For complex functions and utilities
- **Component Props**: Document all props with descriptions
- **README**: In component folders for complex components
- **Comments**: Explain "why", not "what"

### File Organization

- One component per file
- Co-locate related files (component, styles, tests)
- Index files for clean imports
- Separate business logic from UI

## 🤖 AI Instructions

### Design-to-Code Workflow

1. **Always Read Figma Data First**: All design-to-code tasks MUST read `figma-agent/` data before implementation
2. **Follow Structure**: Adhere to `.agent/skills/figma-analysis/SKILL.md` and `.agent/skills/figma-to-code/SKILL.md`
3. **Pixel-Perfect**: Match Figma specs exactly (spacing, colors, typography, effects)
4. **Use Design Tokens**: Reference `figma-agent/common/` for colors, typography, and styles
5. **Component Reuse**: Check `figma-agent/common/components/` before creating new components

### Implementation Priorities

1. **Accuracy**: Pixel-perfect implementation over speed
2. **Responsiveness**: Mobile-first, fully responsive
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
4. **Performance**: Optimized images, lazy loading, minimal bundle size
5. **Premium Feel**: Smooth animations, micro-interactions, polished UI

### Quality Checklist

- [ ] Matches Figma design exactly
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Accessible (WCAG 2.1 AA)
- [ ] TypeScript with no errors
- [ ] CSS follows naming conventions
- [ ] No hardcoded values (use design tokens)
- [ ] Optimized images and assets
- [ ] Smooth animations and transitions
- [ ] Cross-browser compatible

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 📝 Notes

- This project emphasizes **visual excellence** and **premium aesthetics**
- All components should feel **modern, dynamic, and interactive**
- Follow the **Figma design religiously** - no creative liberties unless approved
- **Performance matters**: Optimize for Core Web Vitals
- **SEO-ready**: Proper meta tags, semantic HTML, structured data

---

**Last Updated**: 2026-01-29
**Project Status**: Active Development
**Design Source**: Figma - LaslesVPN Landing Page
