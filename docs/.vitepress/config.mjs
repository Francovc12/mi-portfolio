import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mi Portfolio",
  description: "Is a portfolio of Ignacio Villca",
  base: "/mi-portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Proyectos', link: '/proyectos' },
      { text: 'Sobre mi', link: '/sobre-mi' }
    ],

    sidebar: [
      {
        text: 'Rutas',
        items: [
          { text: 'Proyectos', link: '/proyectos' },
          { text: 'Sobre mi', link: '/sobre-mi' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Francovc12' }
    ]
  }
})
