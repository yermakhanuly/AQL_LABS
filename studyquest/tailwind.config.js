module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sqblue: {
          light: '#60a5fa',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        sqviolet: {
          light: '#a78bfa',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
        },
        sqgreen: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        sqyellow: {
          light: '#fde68a',
          DEFAULT: '#facc15',
          dark: '#b45309',
        },
        sqpink: {
          light: '#f9a8d4',
          DEFAULT: '#ec4899',
          dark: '#be185d',
        },
        sqbg: {
          DEFAULT: '#f8fafc',
          dark: '#18181b',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'sq-gradient': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        'sq-gradient-green': 'linear-gradient(135deg, #6ee7b7 0%, #facc15 100%)',
        'sq-gradient-pink': 'linear-gradient(135deg, #f9a8d4 0%, #a78bfa 100%)',
      },
    },
  },
  plugins: [],
}; 