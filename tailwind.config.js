/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      gray: '#F9FAFB', // gray
      white: '#FFF', // white background
      line: '#E5E7EB', // gray line
      text: '#4B5563', // text color
      'text-strong': '#21262D',

      primary: '#FF1818', // gray
      'primary-thin': '#E3F5E9', // primary thin
      secondary: '#5f5f62', // gold
      warning: '#F5CD65', // yellow
      danger: '#cb183f', // red
      success: '#38B2AC', // blue
      info: '#AEE2FF', // blue
      light: '#ABABAB', // light gray
      dark: '#1A202C', // dark
      placeholder: '#c4c2c2', // light grey
      'aksara-orange': '#fd8d00',
      'aksara-red': '#cb183f',
      'aksara-yellow': '#FFA800',
      'moss-green': '#609EA2',
      natural: {
        gray: '#292C2D',
        dark: '#171717',
        light: '#676767',
        green: '#27CF5D'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      sidebar: '#212121'
    }),
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      "noto-serif": ['Noto Serif', 'serif'],
      "gupter": ['Gupter', 'sans-serif'],
      matemasie: ['Matemasie', 'sans-serif'],
      plusjakartasans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        // fade in
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        // fade out
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        'shake' : {
            '10%, 90%': {
                transform: 'translate3d(-1px, 0, 0)'
            },
            '20%, 80%' : {
                transform: 'translate3d(2px, 0, 0)'
            },
            '30%, 50%, 70%': {
                transform: 'translate3d(-4px, 0, 0)'
            },
            '40%, 60%': {
                transform: 'translate3d(4px, 0, 0)'
            }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      width: {
        18: '4.5rem'
      },
      transitionProperty: {
        height: 'height'
        // 'spacing': 'margin, padding'
      },
      colors: {
        base: {
          primary: 'rgba(var(--color-primary-300), <alpha-value>)',
          secondary: 'rgba(var(--color-secondary), <alpha-value>)',
          success: 'rgba(var(--color-success-500), <alpha-value>)',
          warning: 'rgba(var(--color-warning-500), <alpha-value>)',
          danger: 'rgba(var(--color-danger-500), <alpha-value>)',
          info: 'rgba(var(--color-info-500), <alpha-value>)'
        },
        icon: {
          primary: 'rgba(var(--color-secondary), <alpha-value>)',
          secondary: 'rgba(var(--color-secondary-100), <alpha-value>)'
        },
        border: {
          primary: 'rgba(var(--color-secondary), <alpha-value>)',
          'primary-invert': 'rgba(var(--color-secondary-500), <alpha-value>)',
          secondary: 'rgba(var(--color-secondary-100), <alpha-value>)',
          'secondary-invert': 'rgba(var(--color-secondary-300), <alpha-value>)',
          tertiary: 'rgba(var(--color-primary-300), <alpha-value>)'
        },
        button: {
          // Primary
          primary: 'rgba(var(--color-primary-300), <alpha-value>)',
          'primary-hover': 'rgba(var(--color-primary-400), <alpha-value>)',
          'primary-active': 'rgba(var(--color-primary-500), <alpha-value>)',
          'primary-disabled': 'rgba(var(--color-primary-200), <alpha-value>)',
          'primary-text': 'rgba(var(--color-secondary), <alpha-value>)',
          'primary-text-disabled': 'rgba(var(--color-primary-100), <alpha-value>)',

          // Secondary
          secondary: 'rgba(var(--color-secondary), <alpha-value>)',
          'secondary-hover': 'rgba(var(--color-primary-100), <alpha-value>)',
          'secondary-active': 'rgba(var(--color-primary-50), <alpha-value>)',
          'secondary-disabled': 'rgba(var(--color-secondary-100), <alpha-value>)',
          'secondary-text': 'rgba(var(--color-secondary-800), <alpha-value>)',
          'secondary-text-disabled': 'rgba(var(--color-secondary-200), <alpha-value>)',

          // Success
          success: 'rgba(var(--color-success-500), <alpha-value>)',
          'success-hover': 'rgba(var(--color-success-600), <alpha-value>)',
          'success-active': 'rgba(var(--color-success-800), <alpha-value>)',
          'success-disabled': 'rgba(var(--color-success-300), <alpha-value>)',
          'success-text': 'rgba(var(--color-secondary), <alpha-value>)',
          'success-text-disabled': 'rgba(var(--color-success-200), <alpha-value>)',

          // Warning
          warning: 'rgba(var(--color-warning-500), <alpha-value>)',
          'warning-hover': 'rgba(var(--color-warning-600), <alpha-value>)',
          'warning-active': 'rgba(var(--color-warning-800), <alpha-value>)',
          'warning-disabled': 'rgba(var(--color-warning-300), <alpha-value>)',
          'warning-text': 'rgba(var(--color-secondary), <alpha-value>)',
          'warning-text-disabled': 'rgba(var(--color-warning-200), <alpha-value>)',

          // Danger
          danger: 'rgba(var(--color-danger-500), <alpha-value>)',
          'danger-hover': 'rgba(var(--color-danger-600), <alpha-value>)',
          'danger-active': 'rgba(var(--color-danger-800), <alpha-value>)',
          'danger-disabled': 'rgba(var(--color-danger-300), <alpha-value>)',
          'danger-text': 'rgba(var(--color-secondary), <alpha-value>)',
          'danger-text-disabled': 'rgba(var(--color-danger-200), <alpha-value>)',

          // Info
          info: 'rgba(var(--color-info-500), <alpha-value>)',
          'info-hover': 'rgba(var(--color-info-600), <alpha-value>)',
          'info-active': 'rgba(var(--color-info-800), <alpha-value>)',
          'info-disabled': 'rgba(var(--color-info-300), <alpha-value>)',
          'info-text': 'rgba(var(--color-secondary), <alpha-value>)',
          'info-text-disabled': 'rgba(var(--color-info-200), <alpha-value>)'
        },
        surface: {
          primary: 'rgba(var(--color-secondary-300), <alpha-value>)',
          secondary: 'rgba(var(--color-secondary-500), <alpha-value>)',
          tertiary: 'rgba(var(--color-secondary-900), <alpha-value>)'
        },
        table: {
          border: 'rgba(var(--color-secondary-200), <alpha-value>)',
          header: 'rgba(var(--color-secondary-500), <alpha-value>)',
          content: 'rgba(var(--color-secondary-300), <alpha-value>)',
          'content-hover': 'rgba(var(--color-secondary-500), <alpha-value>)'
        },
        text: {
          primary: 'rgba(var(--color-secondary), <alpha-value>)',
          secondary: 'rgba(var(--color-secondary-100), <alpha-value>)',
          'primary-invert': 'rgba(var(--color-secondary-800), <alpha-value>)',
          'secondary-invert': 'rgba(var(--color-secondary-400), <alpha-value>)'
        }
      }
    }
  },
  plugins: []
};
