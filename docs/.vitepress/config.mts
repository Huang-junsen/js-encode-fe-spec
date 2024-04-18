import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "js-encode-fe-spec",
  description: "This project utilizes multi-package management supported by lerna and pnpm, standardizes front-end coding conventions, and employs customized lint tools and scaffolding to automate the integration and resolution of coding issues, thereby enhancing team efficiency.",
  rewrites: {
    "docs/(.*)": "(.*)",
  },
  base: '/js-encode-fe-spec/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/img/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduced' },
    ],

    sidebar: {
      "/introduced": [],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
