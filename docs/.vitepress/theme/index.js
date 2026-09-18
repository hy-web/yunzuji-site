import Theme from 'vitepress/theme'
import './styles/vars.css'
import './styles/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // 纯文档站，不需要额外组件
  }
}
