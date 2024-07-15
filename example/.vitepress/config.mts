import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Catppuccin",
  description: "A VitePress theme",
  srcDir: "./src",
  base: "/vitepress/",
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
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Specifications", link: "/specs" },
      //     { text: "Style Guide", link: "/style-guide" },
      //     { text: "Port Creation", link: "/port-creation" },
      //     { text: "Translation table", link: "/translation-table" },
      //   ],
      // },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/42willow/vitepress" }],
  },
});
