import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1919px' },
      desktop: { min: '1920px' },
      // Default breakpoints for utility
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#00BCD4',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        // Secondary Colors (Purple for gradient)
        secondary: {
          DEFAULT: '#9C27B0',
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
        },
        // Accent Colors for Taejae Imperatives (1-5)
        imperatives: {
          1: '#00BCD4', // Cyan
          2: '#FF6B6B', // Coral Red
          3: '#4ECDC4', // Teal
          4: '#FFD93D', // Yellow
          5: '#6C5CE7', // Purple
        },
        // Base Colors
        white: '#FFFFFF',
        black: '#000000',
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#FAFAFA',
        },
        text: {
          primary: '#000000',
          secondary: '#4A4A4A',
          tertiary: '#6B6B6B',
          disabled: '#9E9E9E',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Status Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        'eb-garamond': ['var(--font-eb-garamond)', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        // Headings
        h1: ['64px', { lineHeight: '1.1', fontWeight: '500' }],
        'h1-mobile': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
        h2: ['48px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-mobile': ['32px', { lineHeight: '1.25', fontWeight: '500' }],
        h3: ['30px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3-mobile': ['24px', { lineHeight: '1.35', fontWeight: '500' }],
        h4: ['22px', { lineHeight: '1.35', fontWeight: '500' }],
        'h4-mobile': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        h5: ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        h6: ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        // Body Text
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        // Navigation
        nav: ['15px', { lineHeight: '1.2', fontWeight: '400' }],
        'nav-mobile': ['14px', { lineHeight: '1.2', fontWeight: '400' }],
        // Links
        link: ['16px', { lineHeight: '1.2', fontWeight: '500' }],
        'link-sm': ['14px', { lineHeight: '1.2', fontWeight: '500' }],
        // Button
        button: ['16px', { lineHeight: '1', fontWeight: '500' }],
        'button-sm': ['14px', { lineHeight: '1', fontWeight: '500' }],
        // Caption
        caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.07)',
        md: '0 6px 10px rgba(0, 0, 0, 0.08)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.12)',
        inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        cyan: '0 10px 40px rgba(0, 188, 212, 0.2)',
        purple: '0 10px 40px rgba(156, 39, 176, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00BCD4 0%, #9C27B0 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
        'gradient-purple': 'linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)',
        'gradient-hero':
          'linear-gradient(180deg, rgba(0, 188, 212, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.3s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        gradient: 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
