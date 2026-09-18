<template>
  <figure class="dia">
    <div class="layouts">
      <div class="lay-col">
        <svg viewBox="0 0 200 176" class="lay-svg" role="img" aria-label="纵向布局：根在上，后代向下展开">
          <rect x="72" y="10" width="56" height="26" rx="6" class="node root"/>
          <text x="100" y="27" class="nt">始祖</text>
          <path d="M100 36 V54 M54 54 H146 M54 54 V66 M146 54 V66" class="edge"/>
          <rect x="26" y="66" width="56" height="26" rx="6" class="node"/>
          <text x="54" y="83" class="nt">子</text>
          <rect x="118" y="66" width="56" height="26" rx="6" class="node mate"/>
          <text x="146" y="83" class="nt">配偶</text>
          <path d="M54 92 V110 M30 110 H78 M30 110 V122 M78 110 V122 M146 92 V122" class="edge"/>
          <rect x="6" y="122" width="48" height="26" rx="6" class="node"/>
          <rect x="54" y="122" width="48" height="26" rx="6" class="node"/>
          <rect x="122" y="122" width="48" height="26" rx="6" class="node"/>
        </svg>
        <p class="lay-name">纵向布局（默认）</p>
        <p class="lay-desc">始祖在上，一代代向下展开，符合族谱树直觉</p>
      </div>

      <div class="lay-col">
        <svg viewBox="0 0 200 176" class="lay-svg" role="img" aria-label="横向布局：根在左，后代向右展开，夫妻上下叠放">
          <rect x="8" y="74" width="50" height="26" rx="6" class="node root"/>
          <text x="33" y="91" class="nt">始祖</text>
          <path d="M58 87 H72 M72 70 V104 M72 70 H80 M72 104 H80" class="edge"/>
          <rect x="80" y="58" width="50" height="24" rx="6" class="node"/>
          <text x="105" y="74" class="nt">子</text>
          <rect x="80" y="94" width="50" height="24" rx="6" class="node mate"/>
          <text x="105" y="110" class="nt">配偶</text>
          <path d="M130 82 H146 M146 82 V88" class="edge"/>
          <rect x="146" y="76" width="48" height="24" rx="6" class="node"/>
          <text x="170" y="92" class="nt">孙</text>
        </svg>
        <p class="lay-name">横向布局</p>
        <p class="lay-desc">根在左侧、后代向右，夫妻上下叠放，适合代际很深的家族</p>
      </div>
    </div>
    <figcaption class="dia-cap">两种布局方向一键切换，切换后自动重排并把视角移回“我”</figcaption>
  </figure>
</template>

<script setup></script>

<style scoped>
.dia { margin: 24px 0; }
.layouts { display: flex; gap: 14px; flex-wrap: wrap; }
.lay-col {
  flex: 1 1 220px; min-width: 210px;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 14px; padding: 14px 14px 6px; text-align: center;
}
.lay-svg { width: 100%; height: auto; max-width: 260px; }
.node { fill: var(--vp-c-bg); stroke: var(--vp-c-brand-3); stroke-width: 1.3; }
.node.root { fill: var(--vp-c-brand-soft); stroke: var(--vp-c-brand-1); stroke-width: 1.6; }
.node.mate { stroke-dasharray: 4 3; }
.nt { font-size: 10.5px; fill: var(--vp-c-text-2); text-anchor: middle; }
.edge { stroke: var(--vp-c-brand-3); stroke-width: 1.3; fill: none; opacity: .75; }
.lay-name { font-size: 13px; font-weight: 700; color: var(--vp-c-text-1); margin: 6px 0 2px; }
.lay-desc { font-size: 11.5px; color: var(--vp-c-text-2); line-height: 1.5; margin: 0 0 8px; }
.dia-cap { text-align: center; font-size: 12.5px; color: var(--vp-c-text-2); margin-top: 12px; }
</style>
