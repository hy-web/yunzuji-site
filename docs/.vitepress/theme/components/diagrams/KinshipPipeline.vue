<template>
  <figure class="dia">
    <div class="pipe">
      <template v-for="(step, i) in steps" :key="i">
        <div class="pipe-step" :class="step.cls">
          <div class="pipe-no">{{ i + 1 }}</div>
          <div class="pipe-name">{{ step.name }}</div>
          <div class="pipe-desc">{{ step.desc }}</div>
        </div>
        <div v-if="i < steps.length - 1" class="pipe-arrow" aria-hidden="true">→</div>
      </template>
    </div>
    <figcaption class="dia-cap">称呼计算四步流水线：从两个节点到一对中文称谓</figcaption>
  </figure>
</template>

<script setup>
const steps = [
  { name: '构造观察者', desc: '确定登录者在当前家族以什么身份存在', cls: '' },
  { name: '提取特征', desc: '找最近共同祖先，得到代差·父/母系·性别·长幼', cls: 'hl' },
  { name: '规则表匹配', desc: '200+ 条规则子集匹配，表序即优先级', cls: '' },
  { name: '渲染称谓', desc: '双向各算一次，加排行前缀，缺失则回落姓名', cls: 'hl' }
]
</script>

<style scoped>
.dia { margin: 24px 0; }
.pipe {
  display: flex; align-items: stretch; flex-wrap: nowrap;
  gap: 6px; justify-content: center;
}
.pipe-step {
  flex: 1 1 0; min-width: 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 12px 10px 14px;
}
.pipe-step.hl { border-color: var(--vp-c-brand-3); background: var(--vp-c-brand-soft); }
.pipe-no {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--vp-c-brand-1); color: var(--vp-c-bg);
  font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 7px;
}
.pipe-name { font-size: 13px; font-weight: 700; color: var(--vp-c-text-1); margin-bottom: 4px; }
.pipe-desc { font-size: 11.5px; line-height: 1.5; color: var(--vp-c-text-2); }
.pipe-arrow {
  flex: none; width: 16px;
  display: flex; align-items: center; justify-content: center;
  color: var(--vp-c-brand-1); font-size: 18px; font-weight: 700;
}
@media (max-width: 600px) {
  .pipe { flex-direction: column; align-items: center; }
  .pipe-step { width: 100%; max-width: 420px; }
  .pipe-arrow { transform: rotate(90deg); }
}
.dia-cap { text-align: center; font-size: 12.5px; color: var(--vp-c-text-2); margin-top: 12px; }
</style>
