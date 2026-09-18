<template>
  <figure class="pf-figure">
    <div class="pf-frame" :style="{ aspectRatio: ratio }">
      <!-- 模拟窗口顶栏 -->
      <div v-if="chrome" class="pf-chrome">
        <span class="pf-dots"><i></i><i></i><i></i></span>
        <span class="pf-url">{{ chrome }}</span>
      </div>
      <div class="pf-body">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="8.5" cy="10.5" r="1.6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M4 17l4.5-4 3.5 3 3-2.5L20 17" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
        <p class="pf-title">{{ title }}</p>
        <p v-if="hint" class="pf-hint">{{ hint }}</p>
      </div>
    </div>
    <figcaption v-if="caption" class="pf-caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  title: { type: String, default: '此处放置功能截图' },
  hint: { type: String, default: '' },
  ratio: { type: String, default: '16 / 9' },
  chrome: { type: String, default: '' }, // 传入文字则显示窗口顶栏
  caption: { type: String, default: '' }
})
</script>

<style scoped>
.pf-figure { margin: 20px 0; }
.pf-frame {
  border: 2px dashed var(--vp-c-brand-3);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-c-brand-soft);
  display: flex; flex-direction: column;
}
.pf-chrome {
  height: 30px; flex: none;
  display: flex; align-items: center; gap: 10px;
  padding: 0 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.pf-dots { display: flex; gap: 5px; }
.pf-dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--vp-c-text-3); opacity: 0.5; }
.pf-url {
  flex: 1; height: 16px; border-radius: 8px;
  background: var(--vp-c-bg-alt);
  font-size: 10px; color: var(--vp-c-text-3);
  display: flex; align-items: center; justify-content: center;
}
.pf-body {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 8px;
  color: var(--vp-c-brand-1);
  padding: 16px; text-align: center;
}
.pf-title { margin: 4px 0 0; font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); }
.pf-hint { margin: 0; font-size: 12px; color: var(--vp-c-text-2); }
.pf-caption { margin: 8px 2px 0; font-size: 12.5px; color: var(--vp-c-text-2); text-align: center; }
</style>
