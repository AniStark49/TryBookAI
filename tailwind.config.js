/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#6366f1',
          secondary: '#a5b4fc',
          accent: '#22d3ee',
          codebg: '#1e293b',
          sectionbg: '#1e293b',
          border: '#334155',
          background: '#0f172a',
          text: '#e2e8f0',
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  

