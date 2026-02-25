/**
 * 网站信息接口
 * 定义单个网站的基本信息
 */
export interface Website {
  // 网站名称
  name: string;
  // 网站描述
  description: string;
  // 网站URL
  url: string;
  // 网站logo
  logo?: string;
}

/**
 * 分类信息接口
 * 定义网站分类的基本信息
 */
export interface Category {
  // 分类图标
  icon: string;
  // 分类名称
  name: string;
  // 分类描述
  description?: string;
  // 分类下的网站列表
  websites?: Website[];
}

/**
 * 网站分类配置
 * 包含前端开发、后端开发、UI/UX设计、移动开发、开发工具、学习资源、游戏开发、人工智能、云服务、安全、数据分析、多媒体、效率工具等分类
 */
export const categories: Category[] = [
  {
    icon: "🔥",
    name: "前端开发",
    description: "前端开发相关资源",
    websites: [
      {
        name: "MDN Web Docs",
        description: "Web 开发者的权威文档",
        url: "https://developer.mozilla.org",
      },
      {
        name: "Vue.js 官方文档",
        description: "渐进式JavaScript框架",
        url: "https://vuejs.org",
        logo: "https://vuejs.org/logo.svg",
      },
      {
        name: "React 官方文档",
        description: "用于构建用户界面的JavaScript库",
        url: "https://reactjs.org",
      },
      {
        name: "TypeScript 官方文档",
        description: "JavaScript的超集，添加了类型系统",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Nuxt",
        description: "基于 Vue.js 的通用应用框架",
        url: "https://nuxt.com",
      },
      {
        name: "Astro",
        description: "现代化的静态网站生成器",
        url: "https://astro.build",
        logo: "https://astro.build/favicon.svg",
      },
      {
        name: "Starlight",
        description: "基于 Astro 的文档网站生成器",
        url: "https://starlight.astro.build/zh-cn/",
        logo: "https://starlight.astro.build/favicon.svg",
      },
      {
        name: "TailwindCSS",
        description: "实用优先的CSS框架",
        url: "https://tailwindcss.com",
      },
      {
        name: "TailwindCSS Blocks",
        description: "TailwindCSS 组件库",
        url: "https://tailblocks.cc/",
        logo: "https://tailblocks.cc/favicon.png",
      },
      {
        name: "TailwindCSS Playground",
        description: "在线 TailwindCSS 实验环境",
        url: "https://play.tailwindcss.com/",
        logo: "https://play.tailwindcss.com/favicons/favicon-32x32.png?v=3",
      },
      {
        name: "shadcn-vue",
        description: "基于 Radix Vue 的组件库",
        url: "https://www.shadcn-vue.com",
      },
      {
        name: "DaisyUI",
        description: "TailwindCSS 组件库",
        url: "https://daisyui.com",
        logo: "https://img.daisyui.com/images/daisyui/daisyui-logo-192.png",
      },
      {
        name: "Lucide Icons",
        description: "由社区打造的精美且一致的图标工具包",
        url: "https://lucide.dev",
        logo: "https://lucide.dev/logo.dark.svg",
      },
      {
        name: "Simple Icons",
        description: "流行品牌的 SVG 图标",
        url: "https://simpleicons.org/",
      },
      {
        name: "SVG Repo",
        description: "免费的 SVG 图标库",
        url: "https://www.svgrepo.com/",
        logo: "https://www.svgrepo.com/logo.svg",
      },
      {
        name: "Free SVG Download",
        description: "免费的 SVG 图标库",
        url: "https://www.freesvgdownload.com/",
        logo: "https://www.freesvgdownload.com/wp-content/uploads/2021/05/Varlik-26-300x300.png",
      },
      {
        name: "UIverse",
        description: "在 Uiverse 上，您可以发现一系列开源且可定制的组件，适用于网页和移动应用。您可以浏览丰富的按钮、卡片、加载器、输入框等元素，以优化您的应用程序的用户界面，并提升您的设计体验",
        url: "https://uiverse.io/elements",
        logo: "https://uiverse.io/favicon-32x32.png",
      },
    ],
  },
  {
    icon: "⚙️",
    name: "后端开发",
    description: "后端开发相关资源",
    websites: [
      {
        name: "Node.js 官方文档",
        description: "基于Chrome V8引擎的JavaScript运行时",
        url: "https://nodejs.org",
      },
      {
        name: "Python 官方文档",
        description: "简单易学的编程语言",
        url: "https://www.python.org",
      },
      {
        name: "Java 官方文档",
        description: "企业级应用开发首选语言",
        url: "https://www.java.com",
      },
      {
        name: "Go 官方文档",
        description: "简单高效的编程语言",
        url: "https://golang.org",
      },
      {
        name: "Spring Boot",
        description: "基于 Spring 框架的快速开发工具",
        url: "https://spring.io/projects/spring-boot",
        logo: "https://spring.io/favicon.svg",
      },
      {
        name: "MyBatis-Plus",
        description: "MyBatis 的增强工具",
        url: "https://baomidou.com",
        logo: "https://baomidou.com/favicon.svg",
      },
      {
        name: "PostgreSQL",
        description: "强大的开源对象关系数据库",
        url: "https://www.postgresql.org",
      },
      {
        name: "Hutool",
        description: "Java 工具类库",
        url: "https://hutool.cn",
      },
    ],
  },
  {
    icon: "🎨",
    name: "UI/UX设计",
    description: "UI/UX设计相关资源",
    websites: [
      {
        name: "Figma",
        description: "协作式界面设计工具",
        url: "https://www.figma.com",
        logo: "https://static.figma.com/app/icon/2/icon-128.png",
      },
      {
        name: "Sketch",
        description: "Mac平台的UI设计工具",
        url: "https://www.sketch.com",
      },
      {
        name: "Dribbble",
        description: "设计师灵感分享社区",
        url: "https://dribbble.com",
        logo: "https://cdn.dribbble.com/assets/favicon-99944ff731bb44d3a947810ca8728f177f8deac035a3a4342120c385fd7acb9d.svg",
      },
    ],
  },
  {
    icon: "📱",
    name: "移动开发",
    description: "移动端开发相关资源",
    websites: [
      {
        name: "React Native",
        description: "用于构建移动端应用的框架",
        url: "https://reactnative.dev",
      },
      {
        name: "Flutter",
        description: "Google推出的跨平台移动应用开发框架",
        url: "https://storage.googleapis.com/cms-storage-bucket/favicon.4fd0db61df0567c0f352.png",
      },
      {
        name: "UniApp",
        description: "基于Vue.js的跨平台移动应用开发框架",
        url: "https://uniapp.dcloud.net.cn",
        logo: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788",
      },
    ],
  },
  {
    icon: "🔧",
    name: "开发工具",
    description: "开发工具相关资源",
    websites: [
      {
        name: "Visual Studio Code",
        description: "微软推出的免费代码编辑器",
        url: "https://code.visualstudio.com",
      },
      {
        name: "GitHub",
        description: "全球最大的代码托管平台",
        url: "https://github.com",
      },
      {
        name: "Stack Overflow",
        description: "程序员问答社区",
        url: "https://stackoverflow.com",
      },
      {
        name: "JetBrains",
        description: "专业的开发工具提供商",
        url: "https://www.jetbrains.com",
      },
    ],
  },
  {
    icon: "📚",
    name: "学习资源",
    description: "学习资源相关网站",
    websites: [
      {
        name: "freeCodeCamp",
        description: "免费的编程学习平台",
        url: "https://www.freecodecamp.org",
        logo: "https://www.freecodecamp.org/favicon-32x32.png",
      },
      {
        name: "Coursera",
        description: "全球顶尖大学的在线课程",
        url: "https://www.coursera.org",
      },
      {
        name: "Udemy",
        description: "在线学习平台",
        url: "https://www.udemy.com",
        logo: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v8/favicon-32x32.png",
      },
    ],
  },
  {
    icon: "🎮",
    name: "游戏开发",
    description: "游戏开发相关资源",
    websites: [
      {
        name: "Unity",
        description: "跨平台游戏开发引擎",
        url: "https://unity.com",
      },
      {
        name: "Unreal Engine",
        description: "Epic Games推出的游戏引擎",
        url: "https://www.unrealengine.com",
      },
    ],
  },
  {
    icon: "🤖",
    name: "人工智能",
    description: "人工智能相关资源",
    websites: [
      {
        name: "OpenAI",
        description: "人工智能研究公司",
        url: "https://openai.com",
      },
      {
        name: "Hugging Face",
        description: "AI模型和数据集平台",
        url: "https://huggingface.co",
      },
      {
        name: "Ollama",
        description: "本地运行大语言模型",
        url: "https://ollama.com",
        logo: "https://ollama.com/public/icon-16x16.png",
      },
      {
        name: "百炼",
        description: "阿里云大模型平台",
        url: "https://bailian.console.aliyun.com",
        logo: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
      },
      {
        name: "Kimi",
        description: "Moonshot AI 智能助手",
        url: "https://kimi.moonshot.cn",
      },
      {
        name: "DeepSeek",
        description: "深度求索人工智能",
        url: "https://www.deepseek.com",
      },
      {
        name: "千问",
        description: "通义千问大模型",
        url: "https://tongyi.aliyun.com",
        logo: "https://img.alicdn.com/imgextra/i4/O1CN01Qd3F9s1ilWmLJo56P_!!6000000004453-55-tps-51-51.svg",
      },
    ],
  },
  {
    icon: "☁️",
    name: "云服务",
    description: "云服务相关资源",
    websites: [
      {
        name: "Amazon Web Services",
        description: "亚马逊云服务平台",
        url: "https://aws.amazon.com",
      },
      {
        name: "Microsoft Azure",
        description: "微软云服务平台",
        url: "https://azure.microsoft.com",
      },
      {
        name: "阿里云",
        description: "阿里巴巴云计算平台",
        url: "https://www.aliyun.com",
        logo: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
      },
      {
        name: "腾讯云",
        description: "腾讯云计算平台",
        url: "https://cloud.tencent.com",
      },
      {
        name: "Cloudflare",
        description: "全球领先的云服务提供商",
        url: "https://www.cloudflare.com/zh-cn/",
      },
      {
        name: "Namesilo",
        description: "域名注册和管理平台",
        url: "https://www.namesilo.com/",
      },
      {
        name: "Netlify",
        description: "静态网站托管平台",
        url: "https://app.netlify.com/",
      },
    ],
  },
  {
    icon: "🔒",
    name: "安全",
    description: "网络安全相关资源",
    websites: [
      {
        name: "OWASP",
        description: "开放式Web应用程序安全项目",
        url: "https://owasp.org",
        logo: "https://owasp.org/www--site-theme/favicon.ico",
      },
    ],
  },
  {
    icon: "📊",
    name: "数据分析",
    description: "数据分析相关资源",
    websites: [
      {
        name: "Kaggle",
        description: "数据科学竞赛平台",
        url: "https://www.kaggle.com",
      },
    ],
  },
  {
    icon: "🎬",
    name: "多媒体",
    description: "多媒体相关资源",
    websites: [
      {
        name: "YouTube",
        description: "视频分享平台",
        url: "https://www.youtube.com",
      },
      {
        name: "Bilibili",
        description: "视频分享平台",
        url: "https://www.bilibili.com",
      },
    ],
  },
  {
    icon: "💼",
    name: "效率工具",
    description: "效率提升相关工具",
    websites: [
      {
        name: "Z-Library",
        description: "电子书库",
        url: "https://zh.z-lib.gd/",
        logo: "https://zh.z-lib.gd/img/favicons/favicon.svg",
      },
      {
        name: "IT Tools",
        description: "IT 工具",
        url: "https://it-tools.tech/",
      },
      {
        name: "即时工具",
        description:
          "拥有视频工具、音频工具、图片工具、 PDF工具、办公辅助、设计工具、文本工具、数字工具、加密工具、单位转换等等工具。",
        url: "https://www.67tool.com/",
      },
      {
        name: "即刻工具",
        description: "一个便捷的在线工具网站",
        url: "https://tools.jikec.com/",
      },
      {
        name: "转换工具",
        description: "文件格式转换工具",
        url: "https://convertio.co/zh/",
      },
      {
        name: "Notion",
        description: "一体化工作空间",
        url: "https://www.notion.so",
        logo: "https://www.notion.com/front-static/favicon.ico",
      },
    ],
  },
  {
    icon: "✍️",
    name: "内容创作",
    description: "内容创作相关网站",
    websites: [
      {
        name: "公众号",
        description: "秋云的微信公众号后台",
        url: "https://mp.weixin.qq.com/cgi-bin/home",
        logo: "https://res.wx.qq.com/a/fed_upload/9300e7ac-cec5-4454-b75c-f92260dd5b47/logo-mp.ico",
      },
      {
        name: "掘金",
        description: "掘金创作者中心",
        url: "https://juejin.cn/creator/home",
        logo: "https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg",
      },
      {
        name: "CSDN",
        description: "CSDN 创作者中心",
        url: "https://mp.csdn.net",
        logo: "https://g.csdnimg.cn/static/logo/favicon32.ico",
      },
      {
        name: "知乎",
        description: "知乎创作者中心",
        url: "https://www.zhihu.com/creator",
        logo: "https://static.zhihu.com/heifetz/favicon.ico",
      },
      {
        name: "Markdown转公众号",
        description: "将 markdown 转换为微信公众号文章",
        url: "https://md.openwrite.cn",
        logo: "https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/favicon.png",
      },
    ],
  },
  {
    icon: "🌐",
    name: "站长工具",
    description: "站长工具相关网站",
    websites: [
      {
        name: "百度统计",
        description: "百度统计分析工具",
        url: "https://tongji.baidu.com/",
        logo: "https://tongji.baidu.com/web5/image/logo.png?__v=@version@",
      },
      {
        name: "Microsoft Clarity",
        description: "Microsoft Clarity 分析工具",
        url: "https://clarity.microsoft.com/",
        logo: "https://claritystatic.azureedge.net/images/logo.ico",
      },
      {
        name: "Google Analytics",
        description: "Google 分析工具",
        url: "https://analytics.google.com/analytics/web/",
        logo: "https://ssl.gstatic.com/analytics/analytics-frontend.indexpage_20260211.12_p0/index/static/analytics_standard_icon.png",
      },
      {
        name: "百度资源平台",
        description:
          "站点信息提供网站基础数据概览，搜索数据一目了然，便于网站维护、网站优化。",
        url: "https://ziyuan.baidu.com/dashboard/index",
      },
      {
        name: "Bing Webmaster Tools",
        description: "Bing 站长工具",
        url: "https://www.bing.com/webmasters/about?setlang=zh-cn",
        logo: "https://www.bing.com/sa/simg/favicon-2x.ico",
      },
      {
        name: "Google Search Console",
        description: "Google 搜索控制台",
        url: "https://search.google.com/search-console/welcome",
        logo: "https://www.gstatic.com/search-console/scfe/favicon.png",
      },
    ],
  },
  {
    icon: "👨‍💻",
    name: "个人作品集",
    description: "个人作品集相关网站",
    websites: [
      {
        name: "秋云导航",
        description: "精心整理的优质网址导航，为开发者和设计师提供便捷的资源访问渠道",
        url: "https://nav.qiuyun.dev",
        logo: "https://nav.qiuyun.dev/logo.svg",
      },
      {
        name: "秋云文档",
        description: "记录、沉淀、分享 · 全栈开发者的技术笔记",
        url: "https://docs.qiuyun.dev",
        logo: "https://docs.qiuyun.dev/favicon.svg",
      },
      {
        name: "秋云工具",
        description: "秋云的文档网站",
        url: "https://tool.qiuyun.dev",
        logo: "https://tool.qiuyun.dev/favicon.svg",
      },
    ],
  },
];
