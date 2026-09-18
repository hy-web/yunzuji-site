import Theme from 'vitepress/theme'
import { h } from 'vue'
import './styles/vars.css'
import './styles/style.css'

import PhoneMockup from './components/PhoneMockup.vue'
import PlaceholderFrame from './components/PlaceholderFrame.vue'
import StatBadges from './components/StatBadges.vue'
import ArchitectureLayers from './components/diagrams/ArchitectureLayers.vue'
import CloneDiagram from './components/diagrams/CloneDiagram.vue'
import KinshipPipeline from './components/diagrams/KinshipPipeline.vue'
import PermissionViews from './components/diagrams/PermissionViews.vue'
import LayoutCompare from './components/diagrams/LayoutCompare.vue'

export default {
  extends: Theme,
  // 首页 hero 右侧用手机占位替代纯 logo（logo 仍在导航栏）
  Layout: () =>
    h(Theme.Layout, null, {
      'home-hero-image': () =>
        h(PhoneMockup, {
          variant: 'tree',
          label: '族谱画布',
          topbar: '人际关系'
        })
    }),
  enhanceApp({ app }) {
    app.component('PhoneMockup', PhoneMockup)
    app.component('PlaceholderFrame', PlaceholderFrame)
    app.component('StatBadges', StatBadges)
    app.component('ArchitectureLayers', ArchitectureLayers)
    app.component('CloneDiagram', CloneDiagram)
    app.component('KinshipPipeline', KinshipPipeline)
    app.component('PermissionViews', PermissionViews)
    app.component('LayoutCompare', LayoutCompare)
  }
}
