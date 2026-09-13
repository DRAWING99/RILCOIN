import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SMARTKEY AI',
  description: 'عمله ربط بلوكشين متطوره - Advanced Blockchain Connection Currency',
  lang: 'ar',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DRAWING99/RILCOIN' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SMARTKEY AI'
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'SMARTKEY AI' }],
    ['meta', { name: 'og:description', content: 'عمله ربط بلوكشين متطوره' }],
  ]
})
