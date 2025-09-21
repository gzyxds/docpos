// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SEOEnhancer from './components/SEOEnhancer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 在文档内容前添加SEO增强组件
      'doc-before': () => h(SEOEnhancer),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('SEOEnhancer', SEOEnhancer)

    // 添加路由守卫来优化SEO
    router.onAfterRouteChanged = (to) => {
      // 更新页面标题
      if (typeof document !== 'undefined') {
        // 确保页面标题格式正确
        const title = document.title
        if (!title.includes('POS支付网')) {
          document.title = `${title} - POS支付网`
        }

        // 添加页面加载完成的标记，有利于性能监控
        document.documentElement.setAttribute('data-page-loaded', 'true')

        // 触发自定义事件，可用于分析工具
        if (window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
          })
        }
      }
    }
  }
} satisfies Theme
