module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0c0f',
        glass: 'rgba(255, 255, 255, 0.05)',
        neon: '#facc15',
        cyber: '#00f0ff',
        surface: '#1a1a1f',
        textLight: '#f1f5f9',
        textDim: '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        neon: '0 0 25px rgba(250, 204, 21, 0.7)',
        neonSoft: '0 0 8px rgba(250, 204, 21, 0.2)',
        cyber: '0 0 18px #80d4ee',
      },
      dropShadow: {
        neon: '0 0 8px #facc15',
        neonSoft: '0 0 4px #facc15',
      },
      backdropBlur: {
        glass: '8px',
      }
    }
  },
  plugins: [],
};
