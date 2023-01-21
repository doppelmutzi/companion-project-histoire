import { defineConfig, defaultColors } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  vite: {
    base: process.env.HISTOIRE_BASE || "/",
  },
  theme: {
    title: "LogRocket companion project",
    logo: {
      square: "./assets/images/logrocket-logo-square.png",
      light: "./assets/images/logrocket-logo.png",
      dark: "./assets/images/logrocket-logo-dark.svg",
    },
    logoHref: "https://blog.logrocket.com/",
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.pink,
    },
    favicon: "./public/favicon.ico",
  },
  setupFile: "./histoire.setup.ts",
});
