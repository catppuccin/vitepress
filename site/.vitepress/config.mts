import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Catppuccin",
  description: "A VitePress theme",
  srcDir: "./src",
  base: "/vitepress/",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    logo: {
      src: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/1544x1544_circle.png?raw=true",
      alt: "Catppuccin logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/install" },
    ],
    sidebar: [
      {
        items: [
          { text: "Installation", link: "/install" },
          { text: "Components", link: "/components" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/42willow/vitepress" }],
  },
});
