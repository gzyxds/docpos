import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "POS支付网",
  description: "【POS支付网】专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端、移动收款设备、刷脸支付设备办理服务。支持电签POS机、手机POS、码牌收款、商户收款码等多种支付方式，银联正规认证，费率优惠，激活返现。提供数字经营、聚合支付、在线pos刷卡等全方位支付解决方案",
  head: [
    ['meta', { name: 'keywords', content: 'POS机办理,pos机官网,POS机支付网,pos支付网,POS网站,银盛POS机,拉卡拉POS机,中付POS机,乐刷POS机,银联正规pos机办理,智能收银终端,移动收款设备,刷脸支付设备,电签POS机,信用卡POS机,手机POS,智能终端,移动收银设备,刷卡POS机,码牌收款,商户收款码,收钱码,聚合码牌,移动收款,pos收单,支付服务,数字经营,智能设备,pos业务,在线pos刷卡,posapp下载,手机POS下载,拉卡拉pos机怎么办理,点刷pos官网下载手机版,pos圈支付网,posapp下载刷卡pos机' }]
  ],

  themeConfig: {
    siteTitle: "POS支付网", // 禁用网站标题显示，只显示logo
    logo: "/logo.svg", // logo图片地址
    lastUpdated: true,
    lastUpdatedText: "最后更新",
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
        link: "https://merch.PaYphp.cn/"
      },
      {
        text: "POS官网", // 使用简洁的emoji图标配合文字
        link: "https://PaYphp.cn/"
      },
      {
        text: "新闻资讯", // 使用简洁的emoji图标配合文字
        link: "/new/1"
      },
      {
        text: "联系客服", // 使用简洁的emoji图标配合文字
        link: "https://qm.qq.com/q/l8HDomqX4I"
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
              link: "/help/runtime"
            },
            {
              text: "🎨推广文案",
              link: "/help/Setup"
            },
            {
              text: "🔧 推广海报",
              link: "/help/cli"
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
            }
            {
              text: "联系客服",
              link: "/merch/contact"
            },
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
              text: "0.38%费率POS机",
              link: "/new/4"
            },
            {
              text: "POS机安全",
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
    prev: "上一篇",
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
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消"
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除"
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接"
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者"
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈"
                }
              }
            }
          },
          en: {
            placeholder: "Search docs",
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs"
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "Clear query",
                  resetButtonAriaLabel: "Clear query",
                  cancelButtonText: "Cancel",
                  cancelButtonAriaLabel: "Cancel"
                },
                startScreen: {
                  recentSearchesTitle: "Recent searches",
                  noRecentSearchesText: "No recent searches",
                  saveRecentSearchButtonTitle: "Save search",
                  removeRecentSearchButtonTitle: "Remove search",
                  favoriteSearchesTitle: "Favorites",
                  removeFavoriteSearchButtonTitle: "Remove from favorites"
                },
                errorScreen: {
                  titleText: "Unable to fetch results",
                  helpText: "You may want to check your network connection"
                },
                footer: {
                  selectText: "select",
                  navigateText: "navigate",
                  closeText: "close",
                  searchByText: "Search by"
                },
                noResultsScreen: {
                  noResultsText: "No results for",
                  suggestedQueryText: "You can try searching for",
                  reportMissingResultsText: "You think it should have results?",
                  reportMissingResultsLinkText: "Click here to report it"
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
  sitemap: {
    hostname: "https://PaYphp.cn",
    lastmodDateOnly: false
  },
  cacheDir: "./.vitepress/cache",
  titleTemplate: "POS支付网_电签POS机_手机POS办理_商户收款码_聚合支付服务平台",
  lang: "zh-CN",
  base: "/",
  outDir: "./.vitepress/dist",
  cleanUrls: false,
  rewrites: {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  },
  // VitePress 2.0 新增配置
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('-')
      }
    }
  }
});




