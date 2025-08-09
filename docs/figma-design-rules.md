# Figma Design System Integration Rules

## Design System Structure

### 1. Token Definitions

#### Location & Structure

Design tokens are defined in multiple locations:

**Tailwind Configuration** (`tailwind.config.ts`):

```typescript
// Primary token definitions
colors: {
  primary: {
    DEFAULT: '#00BCD4',
    50: '#E0F7FA',
    // ... scale from 50-900
  },
  secondary: {
    DEFAULT: '#9C27B0',
    // ... scale from 50-900
  },
  imperatives: {
    1: '#00BCD4', // Cyan
    2: '#FF6B6B', // Coral Red
    3: '#4ECDC4', // Teal
    4: '#FFD93D', // Yellow
    5: '#6C5CE7', // Purple
  }
}
```

**CSS Variables** (`app/globals.css`):

```css
:root {
  /* Color tokens in RGB format for opacity support */
  --color-primary: 0 188 212; /* #00BCD4 */
  --color-primary-50: 224 247 250;
  /* Typography tokens */
  --text-h1: 64px;
  --font-medium: 500;
  /* Spacing tokens */
  --spacing-lg: 24px;
}
```

#### Token Transformation

- Tailwind automatically transforms config tokens into utility classes
- CSS variables use RGB format for opacity modifiers
- No external token transformation system in place

### 2. Component Library

#### Component Location

- **UI Components**: `/components/` directory
- **Page Components**: `/app/` directory with App Router structure
- **Shared Utilities**: `/lib/` directory

#### Component Architecture

```typescript
// Example component structure
export default function ComponentName({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="tailwind-classes">{children}</div>
}
```

#### Component Documentation

- No Storybook currently
- Components use TypeScript for type safety
- Design system documentation in `/docs/design-system.md`

### 3. Frameworks & Libraries

#### Core Stack

- **Framework**: Next.js 15.4 (App Router)
- **UI Library**: React 19.1
- **Language**: TypeScript 5.9
- **State Management**: Zustand 5.0

#### Styling Stack

- **CSS Framework**: Tailwind CSS 3.4
- **PostCSS**: With Autoprefixer
- **CSS Architecture**: Utility-first with custom components

#### Build System

- **Bundler**: Next.js built-in (Webpack/Turbopack)
- **Development**: `next dev`
- **Production**: `next build`

### 4. Asset Management

#### Asset Storage

```typescript
// next.config.ts
images: {
  domains: ['localhost'],
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3845',
      pathname: '/assets/**',
    },
  ],
}
```

#### Asset Optimization

- Next.js Image component for automatic optimization
- Assets served from `localhost:3845` in development
- No CDN configuration yet

#### Asset Referencing Pattern

```tsx
import Image from 'next/image'
;<Image src="http://localhost:3845/assets/image.png" alt="Description" width={1920} height={1080} />
```

### 5. Icon System

#### Icon Storage & Usage

- **Important**: All icons should come from Figma Dev Mode MCP
- Do NOT install external icon packages
- Icons delivered as SVG from Figma payloads

#### Icon Implementation Pattern

```tsx
// Icons from Figma MCP should be used directly
// Example: When Figma MCP returns an SVG
<div dangerouslySetInnerHTML={{ __html: figmaSvgContent }} />
```

### 6. Styling Approach

#### CSS Methodology

- **Primary**: Tailwind utility classes
- **Custom Components**: @layer components in `globals.css`
- **CSS Variables**: For design tokens

#### Global Styles (`app/globals.css`)

```css
@layer base {
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer components {
  /* Reusable component classes */
  .btn-primary {
    @apply bg-primary-500 text-white hover:bg-primary-600;
  }
}

@layer utilities {
  /* Custom utilities */
  .text-gradient {
    @apply bg-gradient-primary bg-clip-text text-transparent;
  }
}
```

#### Responsive Design

```typescript
// Custom breakpoints in tailwind.config.ts
screens: {
  'mobile': { 'max': '767px' },
  'tablet': { 'min': '768px', 'max': '1919px' },
  'desktop': { 'min': '1920px' },
}
```

Usage pattern:

```tsx
<div className="text-h1-mobile md:text-h2 lg:text-h1">Responsive heading</div>
```

### 7. Project Structure

```
taejae-front/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   └── language-switcher.tsx
├── lib/                   # Core utilities
│   ├── store/            # Zustand stores
│   │   └── locale-store.ts
│   ├── translations/     # i18n utilities
│   └── types/           # TypeScript types
├── messages/             # Translation JSON files
│   ├── ko.json
│   └── en.json
├── docs/                 # Documentation
│   ├── design-system.md
│   └── figma-design-rules.md
└── public/              # Static assets

```

## Figma Integration Guidelines

### 1. Color Mapping

```typescript
// Figma Variable → Code Token
"Colors/Primary/500" → "primary-500" (Tailwind)
"Colors/Primary/500" → "var(--color-primary)" (CSS)
```

### 2. Typography Mapping

```typescript
// Figma Text Style → Code Class
"Heading/H1/Desktop" → "text-h1"
"Heading/H1/Mobile" → "text-h1-mobile"
"Body/Regular" → "text-body"
```

### 3. Spacing Mapping

```typescript
// Figma Spacing → Tailwind Class
"4px" → "p-1" or "m-1"
"8px" → "p-2" or "m-2"
"16px" → "p-4" or "m-4"
"24px" → "p-6" or "m-6"
```

### 4. Component Generation Rules

When generating components from Figma:

1. **Use existing Tailwind classes** where possible
2. **Reference CSS variables** for custom values
3. **Maintain responsive patterns** using breakpoint prefixes
4. **Follow TypeScript patterns** for props and types
5. **Use Next.js Image** for all images

Example component generation:

```tsx
// From Figma design
export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="card card-hover">
      <h3 className="text-h3 text-primary-500">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </div>
  )
}
```

### 5. Asset Handling Rules

1. **Images from Figma**: Use localhost URLs provided by Figma MCP
2. **Icons from Figma**: Use SVG content directly, no external packages
3. **Gradients**: Use predefined gradient classes (`bg-gradient-primary`)
4. **Shadows**: Use predefined shadow utilities (`shadow-cyan`)

### 6. Responsive Implementation

Always implement mobile-first responsive design:

```tsx
// Mobile → Tablet → Desktop
<div className="
  text-body-sm      // Mobile default
  md:text-body      // Tablet and up
  lg:text-body-lg   // Desktop
">
```

### 7. Animation & Interaction

Use predefined animation utilities:

```tsx
<div className="
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-lg
  animate-fade-in
">
```

## Important Notes for Figma MCP Integration

1. **Always use Figma-provided assets** - Don't create placeholder images or icons
2. **Respect the design token hierarchy** - Use semantic tokens over raw values
3. **Maintain consistency** - Use existing patterns and utilities
4. **Follow mobile-first approach** - Start with mobile styles, add breakpoints for larger screens
5. **Use TypeScript strictly** - All components must be properly typed
6. **Leverage Tailwind's JIT** - Use arbitrary values sparingly, prefer configured tokens
7. **Keep accessibility in mind** - Include proper ARIA labels and semantic HTML

## Code Generation Template

When generating code from Figma designs, follow this template:

```tsx
import type { FC } from 'react'

interface ComponentProps {
  // Define props based on Figma component properties
}

const ComponentName: FC<ComponentProps> = (
  {
    /* props */
  }
) => {
  return (
    <div
      className="
      {/* Base mobile styles */}
      {/* md: tablet styles */}
      {/* lg: desktop styles */}
    "
    >
      {/* Component content */}
    </div>
  )
}

export default ComponentName
```
