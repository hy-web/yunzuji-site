export default {
  base: '/',
  appearance: true,
  title: '云族纪',
  titleTemplate: '云族纪 - 家族族谱应用',
  description: '云族纪 - 支持分身体系、跨家关系、归档可逆的家族族谱应用',
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: '云族纪',
    nav: [
      { text: '功能', link: '/guide/features' },
      {
        text: '技术',
        items: [
          { text: '技术架构', link: '/guide/architecture' },
          { text: '称呼计算引擎', link: '/guide/kinship-engine' },
          { text: '权限与隐私模型', link: '/guide/permission' }
        ]
      },
      {
        text: '上手',
        items: [
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '部署指南', link: '/guide/deployment' }
        ]
      },
      { text: '路线图', link: '/about/roadmap' },
      { text: '常见问题', link: '/about/faq' }
    ],
    outlineTitle: '目录',
    sidebar: [
      {
        text: '了解',
        collapsed: false,
        items: [
          { text: '这是什么？', link: '/guide/introduction' },
          { text: '功能亮点', link: '/guide/features' },
          { text: '现状与路线图', link: '/about/roadmap' }
        ]
      },
      {
        text: '核心设计',
        collapsed: false,
        items: [
          { text: '技术架构', link: '/guide/architecture' },
          { text: '称呼计算引擎', link: '/guide/kinship-engine' },
          { text: '权限与隐私模型', link: '/guide/permission' }
        ]
      },
      {
        text: '上手',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '部署指南', link: '/guide/deployment' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/about/faq' }
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
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部'
  },
  markdown: {
    lineNumbers: true
  }
}
