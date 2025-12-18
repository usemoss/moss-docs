import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Moss SDK Documentation",
  description: "Get real-time retrieval inside apps, browsers, and enterprise agents — with centralized management, analytics, and scale built in.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'JavaScript SDK', link: '/reference/js/README.md' },
      { text: 'Python SDK', link: '/reference/python/README.md' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'SDK References',
        items: [
          { text: 'JavaScript SDK Overview', link: '/reference/js/README.md' },
          { text: 'JavaScript API Reference', link: '/reference/js/globals.md' },
          { text: 'Python SDK Overview', link: '/reference/python/README.md' },
          { text: 'Python API Reference', link: '/reference/python/globals.md' },
          { text: 'Samples', link: 'https://github.com/usemoss/moss-samples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/usemoss/moss-samples' }
    ]
  }
})
