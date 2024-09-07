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

1. Add the theme to your VitePress theme configuration file:

`.vitepress/theme/index.ts`

```ts
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/<flavor>/<accent>.css";

export default DefaultTheme;
```

> [!NOTE]
> Latte is included in all flavors as the light mode variant.

See ["Extending the Default Theme | VitePress"](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) for more information.

> [!TIP]
> You can also set the [VitePress syntax highlighting theme](https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks) to Catppuccin by including the following `markdown` configuration object in your VitePress configuration file:
>
> `.vitepress/config.ts`
>
> ```ts
> export default {
>   markdown: {
>     theme: { light: "catppuccin-latte", dark: "catppuccin-macchiato" },
>   },
> };
> ```

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
