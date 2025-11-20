import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kanut's Developer Logs",
  // TODO: Update the descriptions
  description: "",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/about-me' }
    ],

    sidebar: [
      {
        text: 'Profile',
        items: [
          { text: 'About me', link: '/about-me' }
        ]
      },
      {
        text: 'AI',
        items: []
      },
      {
        text: 'Personal',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jaybe1234' }
    ]
  },
  markdown: {
    math: true
  }
})
