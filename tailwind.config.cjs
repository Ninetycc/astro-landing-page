module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },

      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        lacquer: ["Lacquer", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        glitch: ["Rubik Glitch", "cursive"],
        paint: ["Rubik Wet Paint", "cursive"],
      },
    },
  },
  plugins: [],
};
