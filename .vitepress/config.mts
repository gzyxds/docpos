import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "POS支付网",
  description: "【POS支付网】专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端、移动收款设备、刷脸支付设备办理服务。支持电签POS机、手机POS、码牌收款、商户收款码等多种支付方式，银联正规认证，费率优惠，激活返现。提供数字经营、聚合支付、在线pos刷卡等全方位支付解决方案",

  // SEO优化配置
  head: [
    // 基础SEO meta标签
    ['meta', { name: 'keywords', content: 'POS机办理,pos机官网,POS机支付网,pos支付网,POS网站,银盛POS机,拉卡拉POS机,中付POS机,乐刷POS机,银联正规pos机办理,智能收银终端,移动收款设备,刷脸支付设备,电签POS机,信用卡POS机,手机POS,智能终端,移动收银设备,刷卡POS机,码牌收款,商户收款码,收钱码,聚合码牌,移动收款,pos收单,支付服务,数字经营,智能设备,pos业务,在线pos刷卡,posapp下载,手机POS下载,拉卡拉pos机怎么办理,点刷pos官网下载手机版,pos圈支付网,posapp下载刷卡pos机' }],
    ['meta', { name: 'author', content: 'POS支付网' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['meta', { name: 'bingbot', content: 'index,follow' }],

    // 网站验证标签（需要替换为实际的验证码）
    ['meta', { name: 'google-site-verification', content: 'your-google-verification-code' }],
    ['meta', { name: 'msvalidate.01', content: 'your-bing-verification-code' }],
    ['meta', { name: 'baidu-site-verification', content: 'your-baidu-verification-code' }],

    // Open Graph标签（社交媒体分享）
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'POS支付网' }],
    ['meta', { property: 'og:title', content: 'POS支付网 - 专业POS机办理平台' }],
    ['meta', { property: 'og:description', content: '专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端办理服务，银联正规认证，费率优惠，激活返现' }],
    ['meta', { property: 'og:url', content: 'https://posnfc.cn' }],
    ['meta', { property: 'og:image', content: 'https://posnfc.cn/logo.svg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],

    // Twitter Cards标签
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@POS支付网' }],
    ['meta', { name: 'twitter:title', content: 'POS支付网 - 专业POS机办理平台' }],
    ['meta', { name: 'twitter:description', content: '专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端办理服务' }],
    ['meta', { name: 'twitter:image', content: 'https://posnfc.cn/logo.svg' }],

    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'POS支付网' }],

    // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#5bbad5' }],

    // DNS预解析和预连接
    ['link', { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: '//www.google-analytics.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],

    // 结构化数据 - 组织信息
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "POS支付网",
      "url": "https://posnfc.cn",
      "logo": "https://posnfc.cn/logo.svg",
      "description": "专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端办理服务",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://qm.qq.com/q/l8HDomqX4I"
      },
      "sameAs": [
        "https://github.com/gzyxds/PaYphp"
      ]
    })],

    // 结构化数据 - 网站信息
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "POS支付网",
      "url": "https://posnfc.cn",
      "description": "专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端办理服务",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://posnfc.cn/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })]
  ],

  themeConfig: {
    siteTitle: "POS支付网", // 禁用网站标题显示，只显示logo
    logo: "/logo.svg", // logo图片地址
    lastUpdated: {
      text: "最后更新"
    },
    sidebarMenuLabel: "目录",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gzyxds/PaYphp"
      }
    ],
    editLink: {
      pattern: "https://github.com/gzyxds/PaYphp",
      text: "编辑本页"
    },
    nav: [
      {
        text: "网站首页", // 使用简洁的emoji图标配合文字
        link: "/"
      },
      {
        text: "商户教程", // 使用简洁的emoji图标配合文字
        link: "/merch/index"
      },
      {
        text: "帮助中心", // 使用简洁的emoji图标配合文字
        link: "/help/index"
      },
      {
        text: "领取设备", // 使用简洁的emoji图标配合文字
        link: "https://www.posnfc.cn/new"
      },
      {
        text: "POS官网", // 使用简洁的emoji图标配合文字
        link: "https://www.posnfc.cn/"
      },
      {
        text: "新闻资讯", // 使用简洁的emoji图标配合文字
        link: "/new/1"
      },
      {
        text: "联系客服", // 使用简洁的emoji图标配合文字
        link: "/merch/contact"
      }
    ],

    // 侧边栏配置 - 根据不同路径显示不同侧边栏
    sidebar: {
      // 根路径下的侧边栏
      '/': [
        {
          text: "🖥️帮助中心",
          collapsed: false,
          items: [
            {
              text: "🎉关于我们",
              link: "/help/index"
            },
            {
              text: "🏅联系我们",
              link: "/help/shop"
            }
          ]
        },
        {
          text: "📖常见问题",
          collapsed: false,
          items: [
            {
              text: "✨常见问题",
              link: "/help/faq"
            },
            {
              text: "🎨推广文案",
              link: "/help/wn"
            },
            {
              text: "🔧 推广海报",
              link: "/help/hb"
            },
            {
              text: "📝 平台奖励",
              link: "/help/fl"
            }
          ]
        },
         {
          text: "📖代理加盟",
          collapsed: false,
          items: [
            {
              text: "代理加盟",
              link: "/help/dljm"
            },
            {
              text: "商户扩展",
              link: "/help/shkz"
            },
            {
              text: "代理政策",
              link: "/help/dlzc"
            },
            {
              text: "分润结算",
              link: "/help/frjs"
            },
            {
              text: "激活返现",
              link: "/help/jhfx"
            },
            {
              text: "办理指南",
              link: "/help/blzn"
            },
            {
              text: "联系我们",
              link: "/help/lxwm"
            },
            {
              text: "APP下载",
              link: "/help/appxz"
            }
          ]
        },
        {
          text: "🍵友情连接",
          collapsed: false,
          items: [
            {
              text: "POS支付网",
              link: "https://www.cloudcvm.com"
            },
            {
              text: "💡免费领卡",
              link: "https://artaigc.cn/"
            },
            {
              text: "🎯5GWIFI",
              link: "https://www.cnai.art/"
            },
            {
              text: "📲172号卡",
              link: "https://www.urlka.cn"
            }
          ]
        }
      ],
      // merch路径下的侧边栏
      '/merch/': [
        {
          text: "教程中心",
          collapsed: false,
          items: [
            {
              text: "操作指南",
              link: "/merch/index"
            },
            {
              text: "联系客服",
              link: "/merch/contact"
            }
          ]
        },
        {
          text: "PSO产品教程",
          collapsed: false,
          items: [
            {
              text: "1. 海多财电签(循环版)",
              link: "/merch/hdl"
            },
            {
              text: "2. 汇来掌柜(扫码盒）",
              link: "/merch/hlb"
            },
            {
              text: "3. 汇来掌柜(台卡）",
              link: "/merch/hlc"
            },
            {
              text: "4. 汇来掌柜（音箱）",
              link: "/merch/hls"
            },
            {
              text: "5. 惠客收 音箱",
              link: "/merch/hks"
            },
            {
              text: "6. 拉多财大POS（循环版）",
              link: "/merch/ldp"
            },
            {
              text: "7. 拉多财电签（循环版）",
              link: "/merch/ldl"
            },
            {
              text: "8. 碰一下（银盛小Y版）",
              link: "/merch/yst"
            },
            {
              text: "9. 小Y贴纸",
              link: "/merch/yss"
            },
            {
              text: "10. 移掌柜码牌",
              link: "/merch/yzc"
            },
            {
              text: "11. 移掌柜贴纸",
              link: "/merch/yzs"
            },
            {
              text: "12. 银多财大POS(循环版)",
              link: "/merch/ydp"
            },
            {
              text: "13. 银多财电签（循环版）",
              link: "/merch/ydl"
            },
            {
              text: "14. 云银-码牌",
              link: "/merch/yyc"
            },
            {
              text: "15. 云银扫码盒",
              link: "/merch/yyb"
            },
            {
              text: "16. 云银-贴纸",
              link: "/merch/yys"
            },
            {
              text: "17. 云银-云音箱",
              link: "/merch/yyy"
            },
            {
              text: "18. 智能屏（买断版）",
              link: "/merch/znb"
            },
            {
              text: "19. 智能屏（循环版）",
              link: "/merch/znl"
            },
            {
              text: "20. 智能终端电签",
              link: "/merch/zne"
            },
            {
              text: "21. 中多财电签(循环版)",
              link: "/merch/zdl"
            },
            {
              text: "22. 中付红蓝圈（码牌）",
              link: "/merch/zfc"
            },
            {
              text: "23. 中付智能屏",
              link: "/merch/zfn"
            },
            ]
        },
        // 教程结束

        // 通道管理
        {
          text: "📖代理加盟",
          collapsed: false,
          items: [
            {
              text: "代理加盟",
              link: "/help/dljm"
            },
            {
              text: "商户扩展",
              link: "/help/shkz"
            },
            {
              text: "代理政策",
              link: "/help/dlzc"
            },
            {
              text: "分润结算",
              link: "/help/frjs"
            },
            {
              text: "激活返现",
              link: "/help/jhfx"
            },
            {
              text: "办理指南",
              link: "/help/blzn"
            },
            {
              text: "联系我们",
              link: "/help/lxwm"
            },
            {
              text: "APP下载",
              link: "/help/appxz"
            }
          ]
        },

        {
          text: "🍵友情连接",
          collapsed: false,
          items: [
            {
              text: "PSO产品",
              link: "https://www.cloudcvm.com"
            },
            {
              text: "免费领卡",
              link: "https://artaigc.cn/"
            },
            {
              text: "5GWIFI",
              link: "https://www.cnai.art/"
            },
            {
              text: "172号卡",
              link: "https://www.urlka.cn"
            }
          ]
        }
      ],
      // new路径下的侧边栏
      '/new/': [
        {
          text: "📰新闻资讯",
          collapsed: false,
          items: [
            {
              text: "POS机怎么办理",
              link: "/new/1"
            },
            {
              text: "拉卡拉POS",
              link: "/new/2"
            },
            {
              text: "银盛电签POS机",
              link: "/new/3"
            },
            {
              text: "POS机刷卡不到账",
              link: "/new/4"
            },
            {
              text: "POS机代理怎么做",
              link: "/new/5"
            },
            {
              text: "POS机代理哪家靠谱",
              link: "/new/6"
            },
            {
              text: "POS机总部直签",
              link: "/new/7"
            },
            {
              text: "POS机代理骗局",
              link: "/new/8"
            },
            {
              text: "POS机二级代理",
              link: "/new/9"
            },
            {
              text: "手机POS机安全吗",
              link: "/new/5"
            }

          ]
        }
      ]
    },

    footer: {
      message: "赣ICP备2023002309号-8",
      copyright: "© 2024 PaYphp. 保留所有权利。"
    },
    returnToTopLabel: "返回顶部",
    outline: {
      label: "本页目录", // 右侧大纲标题的中文显示
      level: [2, 6] // 显示h2到h6级别的标题
    },
    externalLinkIcon: true,
    i18nRouting: false,
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭"
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs"
              },
              modal: {
                footer: {
                  selectText: "select",
                  navigateText: "navigate",
                  closeText: "close"
                }
              }
            }
          }
        }
      }
    },
    langMenuLabel: "多语言",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    docFooter: {
      prev: "上一页",
      next: "下一页"
    }
  },
  srcDir: "./",
  assetsDir: "static",
  // SEO优化的sitemap配置
  sitemap: {
    hostname: "https://doc.posnfc.cn",
    lastmodDateOnly: false,
    transformItems: (items) => {
      // 为sitemap添加优先级和更新频率
      return items.map((item) => ({
        ...item,
        changefreq: item.url === '/' ? 'daily' :
                   item.url.includes('/merch/') ? 'weekly' :
                   item.url.includes('/help/') ? 'monthly' : 'weekly',
        priority: item.url === '/' ? 1.0 :
                 item.url.includes('/merch/') ? 0.8 :
                 item.url.includes('/help/') ? 0.6 : 0.7
      }))
    }
  },

  // 缓存配置
  cacheDir: "./.vitepress/cache",

  // SEO友好的标题模板
  titleTemplate: ":title【POS支付网】",

  // 语言和地区设置
  lang: "zh-CN",

  // 基础路径
  base: "/",

  // 输出目录
  outDir: "./.vitepress/dist",

  // 启用干净的URL（SEO友好）
  cleanUrls: true,

  // URL重写规则（SEO友好的URL结构）
  rewrites: {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  },

  // 性能优化配置
  vite: {
    build: {
      // 启用代码分割
      rollupOptions: {
        output: {
          // VitePress会自动处理代码分割
        }
      },
      // 启用压缩
      minify: true
    },
    // 优化依赖预构建
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  },

  // Markdown配置优化
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    // 启用代码块的复制功能
    config: (md) => {
      // 可以在这里添加markdown插件
    }
  },

  // Vue配置
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('-')
      }
    }
  },

  // 添加transformHead函数来动态设置canonical URL
  transformHead: ({ pageData }) => {
    const head: any[] = []

    // 添加canonical URL
    const canonicalUrl = `https://posnfc.cn${pageData.relativePath.replace(/\.md$/, '.html').replace(/index\.html$/, '')}`
    head.push(['link', { rel: 'canonical', href: canonicalUrl }] as const)

    // 根据页面类型添加特定的meta标签
    if (pageData.frontmatter.title) {
      head.push(['meta', { property: 'og:title', content: `${pageData.frontmatter.title} - POS支付网` }] as const)
      head.push(['meta', { name: 'twitter:title', content: `${pageData.frontmatter.title} - POS支付网` }] as const)
    }

    if (pageData.frontmatter.description) {
      head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }] as const)
      head.push(['meta', { name: 'twitter:description', content: pageData.frontmatter.description }] as const)
    }

    // 添加页面特定的结构化数据
    if (pageData.relativePath.includes('merch/')) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": pageData.frontmatter.title || "POS机使用教程",
        "description": pageData.frontmatter.description || "详细的POS机操作指南",
        "url": canonicalUrl,
        "publisher": {
          "@type": "Organization",
          "name": "POS支付网",
          "url": "https://posnfc.cn"
        }
      }
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)] as const)
    }

    return head
  }
});




