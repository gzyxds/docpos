<template>
  <div class="seo-enhancer" style="display: none;">
    <!-- SEO增强组件 - 隐藏但提供结构化数据 -->
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { page, frontmatter, site } = useData()

// 简化的SEO增强组件
// 主要的SEO优化已经在config.mts中的transformHead函数中实现
</script>

<style scoped>
.seo-enhancer {
  margin-bottom: 1rem;
}

.breadcrumb {
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.breadcrumb ol {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.75rem;
  }
  
  .separator {
    margin: 0 0.25rem;
  }
}
</style>