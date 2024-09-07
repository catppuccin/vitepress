# Usage

1. Install the theme package to your project with your preferred package manager:

   ::: code-group

   ```bash [npm]
   npm install @catppuccin/vitepress
   ```

   ```bash [Yarn]
   yarn add @catppuccin/vitepress
   ```

   ```bash [pnpm]
   pnpm add @catppuccin/vitepress
   ```

   ```bash [Bun]
   bun add @catppuccin/vitepress
   ```

   :::

2. Add the theme to your VitePress theme configuration file:

   ::: code-group

   ```ts {2} [.vitepress/theme/index.ts]
   import DefaultTheme from "vitepress/theme";
   import "@catppuccin/vitepress/theme/<flavor>/<accent>.css";

   export default DefaultTheme;
   ```

   :::

   > [!NOTE]
   > Latte is included in all flavors as the light mode variant.

   See ["Extending the Default Theme | VitePress"](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) for more information.

3. Configure syntax highlighting in your VitePress configuration file:

   ::: code-group

   ```ts{6} [.vitepress/config.mts]
   export default defineConfig({
     // ...
     markdown: {
       theme: {
         light: 'catppuccin-latte',
         dark: 'catppuccin-<flavor>',
       },
     },
     // ...
   });
   ```

   :::

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
