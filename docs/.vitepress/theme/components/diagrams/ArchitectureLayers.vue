<template>
  <figure class="dia">
    <div class="layer l-front">
      <div class="layer-head">
        <span class="layer-title">前端 · uni-app（一套代码编译三端）</span>
        <span class="layer-tag">小程序 / H5 / App</span>
      </div>
      <div class="chips">
        <span>页面</span><span>Canvas 族谱画布</span><span class="hot">称呼引擎（本地纯函数）</span>
        <span>Pinia 状态</span><span>统一云调用封装</span>
      </div>
    </div>
    <div class="flow">云函数调用 · 携带登录 token ▼</div>
    <div class="layer l-cloud">
      <div class="layer-head">
        <span class="layer-title">云端 · 云函数（按业务域拆分）</span>
        <span class="layer-tag">Serverless</span>
      </div>
      <div class="chips">
        <span>api-family</span><span>api-tree</span><span>api-identity</span>
        <span>api-transfer</span><span>api-record</span><span>api-user</span>
      </div>
      <div class="core">公共业务模块 yz-family-core：权限断言 · 匿名净化 · 认领合并 · 归档恢复</div>
    </div>
    <div class="flow">JQL 查询 · 受数据库 Schema 权限约束 ▼</div>
    <div class="layer l-db">
      <div class="layer-head">
        <span class="layer-title">云数据库 · 文档集合</span>
        <span class="layer-tag">事实源</span>
      </div>
      <div class="chips">
        <span>用户即成员</span><span>家族</span><span>分身可见性 / 主分身</span>
        <span>特批名单</span><span>归档留痕</span><span>导入批次</span><span>家族记录</span>
      </div>
    </div>
    <figcaption class="dia-cap">三层架构：前端只做展示与本地计算，权限裁决与事实源都在服务端</figcaption>
  </figure>
</template>

<script setup></script>

<style scoped>
.dia { margin: 24px 0; display: flex; flex-direction: column; gap: 6px; }
.layer {
  border: 1px solid var(--vp-c-divider);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 12px;
  padding: 12px 14px;
  background: var(--vp-c-bg-soft);
}
.l-cloud { border-left-color: #b07a3a; }
.l-db { border-left-color: #7a8c5c; }
.layer-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
.layer-title { font-weight: 700; font-size: 13.5px; color: var(--vp-c-text-1); }
.layer-tag { font-size: 11px; color: var(--vp-c-brand-1); border: 1px solid var(--vp-c-brand-3); border-radius: 20px; padding: 1px 9px; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chips span {
  font-size: 12px; padding: 3px 10px; border-radius: 8px;
  background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.chips span.hot { background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-3); color: var(--vp-c-brand-1); font-weight: 600; }
.core { margin-top: 8px; font-size: 11.5px; color: var(--vp-c-text-2); background: var(--vp-c-bg); border-radius: 8px; padding: 6px 10px; border: 1px dashed var(--vp-c-divider); }
.flow { text-align: center; font-size: 11.5px; color: var(--vp-c-brand-1); padding: 2px 0; }
.dia-cap { text-align: center; font-size: 12.5px; color: var(--vp-c-text-2); margin-top: 10px; }
</style>
