/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'em-magenta': '#b6009a',
        'em-purple': '#6e0fa2',
        'em-crimson': '#e0282f',
        'em-pink': '#ff6fb6',
      },
      backgroundImage: {
        'em-gradient-1': 'radial-gradient(600px 400px at 10% 20%, rgba(182,0,154,0.12), transparent 25%), radial-gradient(500px 350px at 80% 80%, rgba(224,40,47,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
};