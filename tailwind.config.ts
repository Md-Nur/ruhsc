import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#1e2e54",
      //     secondary: "#30475f",
      //     accent: "#3e6993",
      //     neutral: "#31578c",
      //     "base-100": "#32476b",
      //   },
      // },
      "light",
      "dark",
    ],
  },
};
export default config;
