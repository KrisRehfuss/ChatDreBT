/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontSize: {
        bio: "13px",
        QR: "15px",
      },
      colors: {
        IceBright: "#ecf2f5",
        IceDark: "#7f8c9a",
        Gunmetal: "#232e3b",
        GunBright: "#576d7d",
        coal: "#191919",
        pri: "#8e949e",
        whyte: "hsl(0, 0%, 100%)",
        Lgray: "hsl(212, 45%, 89%)",
      },
      fontFamily: {
        inter: ["inter", "serif"],
        mont: ["Montserrat", "sans-serif"],
        pop: ["poppins", "sans-serif"],
        tilt: ['Tilt Neon', 'cursive']
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
