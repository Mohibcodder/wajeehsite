// tailwind.config.js
module.exports = {
  
    theme: {
      extend: {
        animation: {
          rotate: 'rotate 6s linear infinite',
        },
        keyframes: {
          rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      }
    }
  }