<template>
  <div class="pm-wrap">
    <div class="pm-phone">
      <!-- 听筒 / 刘海 -->
      <div class="pm-notch"><span class="pm-speaker"></span></div>

      <!-- 屏幕内容 -->
      <div class="pm-screen">
        <!-- 顶部标题条 -->
        <div class="pm-topbar">
          <span class="pm-topbar-title">{{ topbar }}</span>
          <span class="pm-topbar-dot"></span>
        </div>

        <!-- 族谱树线框 -->
        <svg v-if="variant === 'tree'" class="pm-art" viewBox="0 0 240 360" fill="none" aria-hidden="true">
          <!-- 连线：始祖 → 父母辈 -->
          <path d="M120 66 V92 H76 V104" class="pm-line" />
          <path d="M120 92 H164 V104" class="pm-line" />
          <!-- 婚姻连线（夫妻） -->
          <path d="M98 119 H142" class="pm-line pm-line-mate" />
          <!-- 父母辈 → 子嗣 -->
          <path d="M120 134 V158 H68 V170" class="pm-line" />
          <path d="M120 158 H120 V170" class="pm-line" />
          <path d="M120 158 H172 V170" class="pm-line" />
          <!-- 子嗣 → 再下一代（右侧一支） -->
          <path d="M172 200 V222 H150 V234" class="pm-line" />
          <path d="M172 222 H196 V234" class="pm-line" />

          <!-- 始祖 -->
          <rect x="88" y="36" width="64" height="30" rx="6" class="pm-node pm-node-root" />
          <text x="120" y="55" class="pm-node-text">始祖</text>
          <!-- 父母辈：本家 + 配偶（配偶虚线） -->
          <rect x="54" y="104" width="44" height="26" rx="6" class="pm-node" />
          <text x="76" y="121" class="pm-node-text-sm">本人</text>
          <rect x="142" y="104" width="44" height="26" rx="6" class="pm-node pm-node-mate" />
          <text x="164" y="121" class="pm-node-text-sm">配偶</text>
          <!-- 子嗣三个 -->
          <rect x="46" y="170" width="44" height="26" rx="6" class="pm-node" />
          <rect x="98" y="170" width="44" height="26" rx="6" class="pm-node" />
          <rect x="150" y="170" width="44" height="26" rx="6" class="pm-node pm-node-mate" />
          <!-- 匿名节点 "？" -->
          <rect x="128" y="234" width="44" height="26" rx="6" class="pm-node pm-node-anon" />
          <text x="150" y="252" class="pm-node-text-sm pm-anon-q">?</text>
          <rect x="174" y="234" width="44" height="26" rx="6" class="pm-node" />
        </svg>

        <!-- 关系匹配线框 -->
        <svg v-else-if="variant === 'relation'" class="pm-art" viewBox="0 0 240 360" fill="none" aria-hidden="true">
          <path d="M56 110 V140 H92 V158" class="pm-line" />
          <path d="M184 110 V140 H148 V158" class="pm-line" />
          <rect x="22" y="76" width="68" height="34" rx="7" class="pm-node pm-node-root" />
          <text x="56" y="97" class="pm-node-text">陆某</text>
          <rect x="150" y="76" width="68" height="34" rx="7" class="pm-node pm-node-root" />
          <text x="184" y="97" class="pm-node-text">黄某</text>

          <rect x="36" y="158" width="168" height="92" rx="12" class="pm-rel-card" />
          <text x="120" y="184" class="pm-rel-label">陆某 称 黄某</text>
          <text x="120" y="212" class="pm-rel-big">二表哥</text>
          <text x="120" y="236" class="pm-rel-label">黄某 称 陆某：三表妹</text>

          <circle cx="108" cy="290" r="5" class="pm-dot pm-dot-on" />
          <circle cx="120" cy="290" r="5" class="pm-dot" />
          <circle cx="132" cy="290" r="5" class="pm-dot" />
          <text x="120" y="314" class="pm-node-text-sm">切换分身</text>
        </svg>

        <!-- 事务列表线框 -->
        <div v-else class="pm-list">
          <div class="pm-list-tabs">
            <span class="pm-tab pm-tab-on"></span><span class="pm-tab"></span>
          </div>
          <div v-for="n in 4" :key="n" class="pm-list-card">
            <span class="pm-list-thumb"></span>
            <span class="pm-list-lines">
              <i class="pm-line-long"></i>
              <i class="pm-line-short"></i>
            </span>
          </div>
          <div class="pm-fab"></div>
        </div>

        <!-- 占位遮罩标签 -->
        <div class="pm-placeholder">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
            <path d="M4 8h3l2-2h6l2 2h3v11H4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <circle cx="12" cy="13" r="3.2" stroke="currentColor" stroke-width="1.6"/>
          </svg>
          <span>截图占位</span>
          <small>{{ label }}</small>
        </div>
      </div>

      <!-- 底部 tab bar -->
      <div class="pm-tabbar">
        <span class="pm-tabbar-item pm-on"></span>
        <span class="pm-tabbar-item"></span>
        <span class="pm-tabbar-item"></span>
        <span class="pm-tabbar-item"></span>
      </div>
    </div>
    <p v-if="caption" class="pm-caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'tree' }, // tree | list
  label: { type: String, default: '族谱画布' },
  topbar: { type: String, default: '人际关系' },
  caption: { type: String, default: '' }
})
</script>

<style scoped>
.pm-wrap { display: flex; flex-direction: column; align-items: center; gap: 12px; }

.pm-phone {
  position: relative;
  width: 264px;
  height: 540px;
  border-radius: 42px;
  padding: 12px;
  background: linear-gradient(160deg, #3a332a, #1c1813);
  box-shadow:
    0 24px 60px -18px rgba(60, 40, 20, 0.45),
    inset 0 0 0 2px rgba(255, 255, 255, 0.06);
}
.pm-notch {
  position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
  width: 110px; height: 22px; border-radius: 0 0 16px 16px;
  background: #14110d; z-index: 3;
  display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;
}
.pm-speaker { width: 42px; height: 4px; border-radius: 2px; background: #4a4238; }

.pm-screen {
  position: relative;
  width: 100%; height: 100%;
  border-radius: 32px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  display: flex; flex-direction: column;
}

.pm-topbar {
  height: 46px; flex: none;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 18px; padding-top: 6px;
}
.pm-topbar-title { font-size: 12px; font-weight: 600; color: var(--vp-c-text-1); }
.pm-topbar-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--vp-c-brand-soft); border: 1px solid var(--vp-c-brand-3); }

.pm-art { width: 100%; flex: 1; }
.pm-line { stroke: var(--vp-c-brand-3); stroke-width: 1.4; opacity: 0.7; }
.pm-line-mate { stroke-dasharray: 3 3; opacity: 0.55; }
.pm-node { fill: var(--vp-c-bg); stroke: var(--vp-c-brand-3); stroke-width: 1.3; }
.pm-node-root { fill: var(--vp-c-brand-soft); stroke: var(--vp-c-brand-1); stroke-width: 1.5; }
.pm-node-mate { stroke-dasharray: 3 3; }
.pm-node-anon { fill: var(--vp-c-bg-alt); stroke: var(--vp-c-text-3); stroke-width: 1.2; stroke-dasharray: 2 2; }
.pm-node-text { font-size: 11px; fill: var(--vp-c-brand-1); text-anchor: middle; font-weight: 600; }
.pm-node-text-sm { font-size: 9.5px; fill: var(--vp-c-text-2); text-anchor: middle; }
.pm-anon-q { fill: var(--vp-c-text-3); }

/* relation 变体 */
.pm-rel-card { fill: var(--vp-c-bg); stroke: var(--vp-c-brand-1); stroke-width: 1.5; }
.pm-rel-label { font-size: 9.5px; fill: var(--vp-c-text-2); text-anchor: middle; }
.pm-rel-big { font-size: 19px; fill: var(--vp-c-brand-1); text-anchor: middle; font-weight: 800; }
.pm-dot { fill: var(--vp-c-bg-alt); stroke: var(--vp-c-text-3); stroke-width: 1; }
.pm-dot-on { fill: var(--vp-c-brand-1); stroke: var(--vp-c-brand-1); }

/* list 变体 */
.pm-list { flex: 1; padding: 6px 14px 14px; position: relative; }
.pm-list-tabs { display: flex; gap: 8px; margin-bottom: 12px; }
.pm-tab { width: 44px; height: 16px; border-radius: 8px; background: var(--vp-c-bg-alt); }
.pm-tab-on { background: var(--vp-c-brand-soft); border: 1px solid var(--vp-c-brand-3); }
.pm-list-card {
  display: flex; align-items: center; gap: 10px;
  padding: 10px; margin-bottom: 10px;
  border-radius: 12px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider);
}
.pm-list-thumb { width: 34px; height: 34px; border-radius: 8px; background: var(--vp-c-brand-soft); flex: none; }
.pm-list-lines { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.pm-line-long { height: 7px; border-radius: 4px; background: var(--vp-c-bg-alt); width: 90%; }
.pm-line-short { height: 7px; border-radius: 4px; background: var(--vp-c-bg-alt); width: 55%; }
.pm-fab {
  position: absolute; right: 14px; bottom: 14px;
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--vp-c-brand-1); opacity: 0.85;
}

/* 占位遮罩 */
.pm-placeholder {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  background: color-mix(in srgb, var(--vp-c-bg) 72%, transparent);
  backdrop-filter: blur(0.5px);
  color: var(--vp-c-brand-1);
}
.pm-placeholder span { font-size: 13px; font-weight: 700; letter-spacing: 1px; }
.pm-placeholder small { font-size: 11px; color: var(--vp-c-text-2); }

.pm-tabbar {
  position: absolute; bottom: 12px; left: 12px; right: 12px;
  height: 46px; border-radius: 0 0 32px 32px;
  background: var(--vp-c-bg-elv); border-top: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: space-around; padding: 0 28px;
}
.pm-tabbar-item { width: 22px; height: 22px; border-radius: 7px; background: var(--vp-c-bg-alt); }
.pm-tabbar-item.pm-on { background: var(--vp-c-brand-soft); border: 1px solid var(--vp-c-brand-3); }

.pm-caption { font-size: 13px; color: var(--vp-c-text-2); text-align: center; margin: 0; }

@media (max-width: 640px) {
  .pm-phone { width: 230px; height: 470px; }
}
</style>
