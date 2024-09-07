<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/vuejs/vitepress">VitePress</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/42willow/vitepress/stargazers"><img src="https://img.shields.io/github/stars/42willow/vitepress?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/42willow/vitepress/issues"><img src="https://img.shields.io/github/issues/42willow/vitepress?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/42willow/vitepress/contributors"><img src="https://img.shields.io/github/contributors/42willow/vitepress?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/42willow/vitepress/main/assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/42willow/vitepress/main/assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/42willow/vitepress/main/assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/42willow/vitepress/main/assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/42willow/vitepress/main/assets/mocha.webp"/>
</details>

## Usage

1. Install the theme using `npm install 42willow/vitepress`

2. Import the theme
    `.vitepress/theme/index.ts`

    ```ts
    import DefaultTheme from "vitepress/theme";
    import "@catppuccin/vitepress/theme/<flavor>/<accent>.css"

    export default DefaultTheme;
    ```

    See [extending the default theme](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) for more information.

    > [!NOTE]
    > Latte is included in all flavors as the light mode variant.

3. Set syntax highlighting to Catppuccin
    `.vitepress/config.mts`

    ```ts
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

## 💝 Thanks to

- [42Willow](https://github.com/42willow)
- [Strata Docs](https://github.com/StrataWM/strata/blob/5daa4f102a7a03bb73dbe84e43d7ae1cb64d2c54/docs/.vitepress/theme/colors.css)

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
