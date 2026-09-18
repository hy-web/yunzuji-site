<template>
  <figure class="dia">
    <svg viewBox="0 0 640 300" class="dia-svg" role="img" aria-label="分身体系示意图：一个真人在两个家族各有一个分身节点">
      <!-- 两个家族区域 -->
      <rect x="16" y="36" width="196" height="232" rx="14" class="fam-box"/>
      <text x="114" y="60" class="fam-title">陆家（本家）</text>
      <rect x="428" y="36" width="196" height="232" rx="14" class="fam-box"/>
      <text x="526" y="60" class="fam-title">黄家（配偶家）</text>

      <!-- 陆家小树 -->
      <rect x="84" y="78" width="64" height="30" rx="7" class="node"/>
      <text x="116" y="97" class="node-t">陆父</text>
      <path d="M116 108 V132 M116 132 H78 V150 M116 132 H158 V150" class="edge"/>
      <rect x="46" y="150" width="64" height="30" rx="7" class="node"/>
      <text x="78" y="169" class="node-t">陆哥</text>
      <rect x="126" y="150" width="64" height="30" rx="7" class="node hot"/>
      <text x="158" y="169" class="node-t hot-t">陆某·女</text>

      <!-- 黄家小树 -->
      <rect x="492" y="78" width="64" height="30" rx="7" class="node"/>
      <text x="524" y="97" class="node-t">黄父</text>
      <path d="M524 108 V150" class="edge"/>
      <rect x="456" y="150" width="60" height="30" rx="7" class="node"/>
      <text x="486" y="169" class="node-t">黄男</text>
      <path d="M516 165 H530" class="edge mate"/>
      <rect x="530" y="150" width="64" height="30" rx="7" class="node hot dash"/>
      <text x="562" y="169" class="node-t hot-t">配偶</text>

      <!-- 中央真人 -->
      <ellipse cx="320" cy="150" rx="58" ry="38" class="person"/>
      <text x="320" y="146" class="person-t">陆某</text>
      <text x="320" y="164" class="person-s">真人 · 一行数据</text>

      <!-- 分身连线 -->
      <path d="M262 150 H190" class="clone-line"/>
      <path d="M378 150 H530" class="clone-line"/>
      <text x="226" y="142" class="clone-label">分身</text>
      <text x="414" y="142" class="clone-label">分身</text>

      <!-- 底部说明 -->
      <text x="320" y="240" class="note">两个节点背后是同一个真人，资料只存一份、处处同步</text>
      <text x="320" y="262" class="note">可单独把某个家族里的分身匿名，不影响其本家身份</text>
    </svg>
    <figcaption class="dia-cap">分身体系：真人唯一，身份节点随家族呈现</figcaption>
  </figure>
</template>

<script setup></script>

<style scoped>
.dia { margin: 24px 0; }
.dia-svg { width: 100%; height: auto; }
.fam-box { fill: var(--vp-c-bg-soft); stroke: var(--vp-c-divider); stroke-width: 1; }
.fam-title { font-size: 12px; fill: var(--vp-c-text-2); text-anchor: middle; font-weight: 600; }
.node { fill: var(--vp-c-bg); stroke: var(--vp-c-brand-3); stroke-width: 1.3; }
.node.hot { fill: var(--vp-c-brand-soft); stroke: var(--vp-c-brand-1); stroke-width: 1.6; }
.node.dash { stroke-dasharray: 4 3; }
.node-t { font-size: 11px; fill: var(--vp-c-text-2); text-anchor: middle; }
.node-t.hot-t { fill: var(--vp-c-brand-1); font-weight: 700; }
.edge { stroke: var(--vp-c-brand-3); stroke-width: 1.3; fill: none; opacity: .75; }
.edge.mate { stroke-dasharray: 3 3; opacity: .6; }
.person { fill: var(--vp-c-brand-1); }
.person-t { font-size: 14px; fill: var(--vp-c-bg); text-anchor: middle; font-weight: 700; }
.person-s { font-size: 9.5px; fill: var(--vp-c-bg); text-anchor: middle; opacity: .85; }
.clone-line { stroke: var(--vp-c-brand-1); stroke-width: 1.6; stroke-dasharray: 5 3; fill: none; }
.clone-label { font-size: 10px; fill: var(--vp-c-brand-1); text-anchor: middle; font-weight: 600; }
.note { font-size: 11px; fill: var(--vp-c-text-2); text-anchor: middle; }
</style>
