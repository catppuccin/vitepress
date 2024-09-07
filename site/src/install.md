# Usage

1. Install the theme using your preferred package manager
   ::: code-group

   ```bash [npm]
   npm install 42willow/vitepress
   ```

   ```bash [Yarn]
   yarn add git+https://github.com/42willow/vitepress.git
   ```

   ```bash [pnpm]
   pnpm add github:42willow/vitepress
   ```

   ```bash [Bun]
   bun add github:42willow/vitepress
   ```

   :::

2. Import the theme
   `.vitepress/theme/index.ts`

   ```ts{2}
   import DefaultTheme from "vitepress/theme";
   import "@catppuccin/vitepress/theme/<flavor>/<accent>.css"

   export default DefaultTheme;
   ```

   See [extending the default theme](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) for more information.

   > [!NOTE]
   > Latte is included in all flavors as the light mode variant.

3. Set syntax highlighting to Catppuccin
   `.vitepress/config.mts`

   ```ts{6}
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
