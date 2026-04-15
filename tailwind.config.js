/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3D5A3E',
        },
        secondary: {
          DEFAULT: '#F4F7F0',
        },
        tertiary: {
          DEFAULT: '#EDF2E6',
        },
        accent: {
          DEFAULT: '#7A9E7E',
        },
        decorative: {
          DEFAULT: '#C5D4B3',
        },
        text: {
          heading: '#2C3E2D',
          body: '#4A5548',
          muted: '#7A8B7C',
        },
        ui: {
          cardBg: '#FFFFFF',
          cardBorder: 'rgba(61, 90, 62, 0.08)',
          starGold: '#D4A843',
          divider: 'rgba(61, 90, 62, 0.12)',
        }
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
      spacing: {
        'section': '100px',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        'pill': '50px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(61, 90, 62, 0.06)',
        'card-hover': '0 8px 32px rgba(61, 90, 62, 0.10)',
        'btn': '0 2px 12px rgba(61, 90, 62, 0.15)',
        'img': '0 8px 40px rgba(61, 90, 62, 0.08)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
