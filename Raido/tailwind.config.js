module.exports = {
  theme: {
    extend: {
      animation: {
        bike: "bikeMove 1s ease-in-out infinite",
    
      },
      keyframes: {
        bikeMove: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      
      },
    },
  },
};