/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax: ["var(--font-chillax)"],
        pally: ["var(--font-pally)"],
        body: ["Ubuntu", "PingFang SC", "微软雅黑"],
      },
    },
  },
  plugins: [],
};
