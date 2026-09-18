<template>
  <div class="stat-band">
    <div v-for="s in stats" :key="s.label" class="stat-item">
      <div class="stat-num">{{ s.num }}<span class="stat-unit">{{ s.unit }}</span></div>
      <div class="stat-label">{{ s.label }}</div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { num: '200', unit: '+', label: '亲属称呼规则' },
  { num: '50', unit: ' 个', label: '无头回归测试' },
  { num: '3', unit: ' 万行', label: '前后端代码' },
  { num: '3', unit: ' 端', label: '小程序 / H5 / App' }
]
</script>

<style scoped>
.stat-band {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 14px;
  margin: 48px auto 8px;
  max-width: 900px;
  padding: 0 20px;
}
.stat-item {
  flex: 1 1 160px;
  min-width: 150px;
  text-align: center;
  padding: 22px 16px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: transform .2s ease, box-shadow .2s ease;
}
.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px -16px rgba(138, 90, 43, .5);
}
.stat-num {
  font-size: 34px; font-weight: 800; line-height: 1;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.stat-unit { font-size: 15px; font-weight: 600; }
.stat-label { margin-top: 8px; font-size: 13px; color: var(--vp-c-text-2); }
</style>
