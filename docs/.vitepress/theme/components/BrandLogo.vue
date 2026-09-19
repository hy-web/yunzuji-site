<!--
  品牌标识（水墨墨龙·家姓 + 红葫芦）
  职责：首页 hero 右侧的品牌视觉；浅色模式显示黑墨版，深色模式显示金墨版。
  被谁使用：theme/index.js 的 home-hero-image 插槽。
  约定：两个 img 的浅/暗显隐由全局 style.css 控制（scoped 无法向上选中 html.dark）。
-->
<template>
  <div class="brand-logo">
    <img class="bl-light" src="/images/logo.png" alt="云族记" />
    <img class="bl-dark" src="/images/logo-gold.png" alt="云族记" />
  </div>
</template>

<script setup></script>

<style scoped>
.brand-logo {
  position: relative;
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  filter: drop-shadow(0 20px 44px rgba(138, 90, 43, 0.2));
}
.brand-logo img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 1180px) {
  .brand-logo {
    max-width: 286px;
  }
}
</style>
