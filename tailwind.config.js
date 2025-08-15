/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        red: {
          950: '#4c0519',
        },
        orange: {
          950: '#431407',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.8), 0 0 50px rgba(239, 68, 68, 0.3)' 
          },
        }
      },
      backgroundImage: {
        'texture-burn': 'radial-gradient(circle at 30% 40%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(234, 88, 12, 0.2) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
};