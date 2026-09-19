import Theme from 'vitepress/theme'
import { h } from 'vue'
import './styles/vars.css'
import './styles/style.css'

import PhoneMockup from './components/PhoneMockup.vue'
import PlaceholderFrame from './components/PlaceholderFrame.vue'
import StatBadges from './components/StatBadges.vue'
import BrandLogo from './components/BrandLogo.vue'
import ArchitectureLayers from './components/diagrams/ArchitectureLayers.vue'
import CloneDiagram from './components/diagrams/CloneDiagram.vue'
import KinshipPipeline from './components/diagrams/KinshipPipeline.vue'
import PermissionViews from './components/diagrams/PermissionViews.vue'
import LayoutCompare from './components/diagrams/LayoutCompare.vue'

export default {
  extends: Theme,
  // 首页 hero 右侧放品牌标识（浅色黑墨 / 深色金墨，随主题切换）；
  // 产品形态的手机占位在功能卡之后的预览区展示
  Layout: () =>
    h(Theme.Layout, null, {
      'home-hero-image': () => h(BrandLogo)
    }),
  enhanceApp({ app }) {
    app.component('PhoneMockup', PhoneMockup)
    app.component('PlaceholderFrame', PlaceholderFrame)
    app.component('StatBadges', StatBadges)
    app.component('BrandLogo', BrandLogo)
    app.component('ArchitectureLayers', ArchitectureLayers)
    app.component('CloneDiagram', CloneDiagram)
    app.component('KinshipPipeline', KinshipPipeline)
    app.component('PermissionViews', PermissionViews)
    app.component('LayoutCompare', LayoutCompare)
  }
}
