export default {
  base: '/',
  appearance: 'light',
  title: '云族纪',
  titleTemplate: '云族纪 - 家族族谱应用',
  description: '云族纪 - 支持分身体系、跨家关系、归档可逆的家族族谱应用',
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: '云族纪',
    nav: [
      { text: '功能', link: '/guide/features' },
      { text: '部署', link: '/guide/deployment' },
      { text: '常见问题', link: '/about/faq' }
    ],
    outlineTitle: '目录',
    sidebar: [
      {
        text: '开始',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '这是什么？', link: '/guide/introduction' },
          { text: '功能亮点', link: '/guide/features' },
        ]
      },
      {
        text: '使用',
        collapsible: true,
        items: [
          { text: '部署指南', link: '/guide/deployment' },
          { text: '快速上手', link: '/guide/getting-started' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hy_ATfield/YunZuJi' },
    ],
    footer: {
      message: '私有部署 · 家族专用',
      copyright: 'Copyright © 2024-present 云族纪'
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  markdown: {
    lineNumbers: true
  }
}
