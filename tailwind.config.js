/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      colors: {
          deepBlue: '#4F35EF',
          whiteBlue: '#d8d6e6',
          gray : 'hsl(0, 4%, 21%)',
          dBlue : 'rgba(1, 1, 68, 0.911)',
          lBlack: 'rgba(0, 0, 30, 0.76)',
          hBlue : '#645b9',
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
       gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      
    }
  },
  plugins: [],
  }
  


