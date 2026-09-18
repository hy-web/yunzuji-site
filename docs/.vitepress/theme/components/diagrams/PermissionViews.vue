<template>
  <figure class="dia">
    <div class="views">
      <div v-for="v in views" :key="v.title" class="view-col">
        <div class="view-head">
          <span class="view-eye">{{ v.icon }}</span>
          <span class="view-title">{{ v.title }}</span>
        </div>
        <div class="view-tree">
          <span
            v-for="(n, i) in v.nodes" :key="i"
            class="vnode" :class="n"
          >{{ n === 'real' ? '名' : '?' }}</span>
        </div>
        <p class="view-desc">{{ v.desc }}</p>
      </div>
    </div>
    <figcaption class="dia-cap">同一棵家族树，三种身份打开看到的范围（名＝实名可见，？＝匿名骨架）</figcaption>
  </figure>
</template>

<script setup>
const R = 'real', A = 'anon'
const views = [
  {
    icon: '👁', title: '本家成员 / 管理员',
    nodes: [R, R, R, R, R, R],
    desc: '整棵树实名可见，管理员另有治理与删除权限'
  },
  {
    icon: '🪪', title: '已认证配偶',
    nodes: [R, R, R, A, A, A],
    desc: '本家与近亲实名，远支匿名成“？”骨架，树不断裂'
  },
  {
    icon: '🚪', title: '外族旁观者（半开放）',
    nodes: [R, A, A, A, A, A],
    desc: '只开放与自己沾亲的近亲窗口，窗口外旁支不返回'
  }
]
</script>

<style scoped>
.dia { margin: 24px 0; }
.views { display: flex; gap: 12px; flex-wrap: wrap; }
.view-col {
  flex: 1 1 200px; min-width: 190px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 14px;
}
.view-head { display: flex; align-items: center; gap: 7px; margin-bottom: 12px; }
.view-eye { font-size: 16px; }
.view-title { font-size: 13px; font-weight: 700; color: var(--vp-c-text-1); }
.view-tree { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; }
.vnode {
  aspect-ratio: 1.4; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700;
}
.vnode.real { background: var(--vp-c-brand-soft); border: 1.4px solid var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.vnode.anon {
  background: var(--vp-c-bg-alt);
  border: 1.3px dashed var(--vp-c-text-3);
  color: var(--vp-c-text-3);
}
.view-desc { margin: 0; font-size: 11.5px; line-height: 1.55; color: var(--vp-c-text-2); }
.dia-cap { text-align: center; font-size: 12.5px; color: var(--vp-c-text-2); margin-top: 12px; }
</style>
