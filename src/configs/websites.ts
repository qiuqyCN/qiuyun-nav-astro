/**
 * 网站信息接口
 * 定义单个网站的基本信息
 */
export interface Website {
  name: string;
  description: string;
  url: string;
  logo?: string;
}

/**
 * 分类信息接口
 * 定义网站分类的基本信息
 */
export interface Category {
  icon: string;
  name: string;
  description?: string;
  websites?: Website[];
}

/**
 * 网站分类配置
 * 包含前端开发、后端开发、UI/UX设计、移动开发、开发工具、学习资源、游戏开发、人工智能、云服务、安全、数据分析、多媒体、效率工具等分类
 */
export const categories: Category[] = [
  {
    icon: '🔥',
    name: '前端开发',
    description: '前端开发相关资源',
    websites: [
      {
        name: 'MDN Web Docs',
        description: 'Web 开发者的权威文档',
        url: 'https://developer.mozilla.org'
      },
      {
        name: 'Vue.js 官方文档',
        description: '渐进式JavaScript框架',
        url: 'https://vuejs.org',
        logo: 'https://vuejs.org/logo.svg'
      },
      {
        name: 'React 官方文档',
        description: '用于构建用户界面的JavaScript库',
        url: 'https://reactjs.org'
      },
      {
        name: 'TypeScript 官方文档',
        description: 'JavaScript的超集，添加了类型系统',
        url: 'https://www.typescriptlang.org'
      },
      {
        name: 'TailwindCSS',
        description: '实用优先的CSS框架',
        url: 'https://tailwindcss.com'
      },
      {
        name: 'Nuxt',
        description: '基于 Vue.js 的通用应用框架',
        url: 'https://nuxt.com'
      },
      {
        name: 'Astro',
        description: '现代化的静态网站生成器',
        url: 'https://astro.build',
        logo: 'https://astro.build/favicon.svg'
      },
      {
        name: 'shadcn-vue',
        description: '基于 Radix Vue 的组件库',
        url: 'https://www.shadcn-vue.com'
      }
    ]
  },
  {
    icon: '⚙️',
    name: '后端开发',
    description: '后端开发相关资源',
    websites: [
      {
        name: 'Node.js 官方文档',
        description: '基于Chrome V8引擎的JavaScript运行时',
        url: 'https://nodejs.org'
      },
      {
        name: 'Python 官方文档',
        description: '简单易学的编程语言',
        url: 'https://www.python.org'
      },
      {
        name: 'Java 官方文档',
        description: '企业级应用开发首选语言',
        url: 'https://www.java.com'
      },
      {
        name: 'Go 官方文档',
        description: '简单高效的编程语言',
        url: 'https://golang.org'
      },
      {
        name: 'Spring Boot',
        description: '基于 Spring 框架的快速开发工具',
        url: 'https://spring.io/projects/spring-boot',
        logo: 'https://spring.io/favicon.svg'
      },
      {
        name: 'MyBatis-Plus',
        description: 'MyBatis 的增强工具',
        url: 'https://baomidou.com',
        logo: 'https://baomidou.com/favicon.svg'
      },
      {
        name: 'PostgreSQL',
        description: '强大的开源对象关系数据库',
        url: 'https://www.postgresql.org'
      },
      {
        name: 'Hutool',
        description: 'Java 工具类库',
        url: 'https://hutool.cn'
      }
    ]
  },
  {
    icon: '🎨',
    name: 'UI/UX设计',
    description: 'UI/UX设计相关资源',
    websites: [
      {
        name: 'Figma',
        description: '协作式界面设计工具',
        url: 'https://www.figma.com',
        logo: 'https://static.figma.com/app/icon/2/icon-128.png'
      },
      {
        name: 'Sketch',
        description: 'Mac平台的UI设计工具',
        url: 'https://www.sketch.com'
      },
      {
        name: 'Dribbble',
        description: '设计师灵感分享社区',
        url: 'https://dribbble.com',
        logo: 'https://cdn.dribbble.com/assets/favicon-99944ff731bb44d3a947810ca8728f177f8deac035a3a4342120c385fd7acb9d.svg'
      }
    ]
  },
  {
    icon: '📱',
    name: '移动开发',
    description: '移动端开发相关资源',
    websites: []
  },
  {
    icon: '🔧',
    name: '开发工具',
    description: '开发工具相关资源',
    websites: [
      {
        name: 'Visual Studio Code',
        description: '微软推出的免费代码编辑器',
        url: 'https://code.visualstudio.com'
      },
      {
        name: 'GitHub',
        description: '全球最大的代码托管平台',
        url: 'https://github.com'
      },
      {
        name: 'Stack Overflow',
        description: '程序员问答社区',
        url: 'https://stackoverflow.com'
      },
      {
        name: 'JetBrains',
        description: '专业的开发工具提供商',
        url: 'https://www.jetbrains.com'
      }
    ]
  },
  {
    icon: '📚',
    name: '学习资源',
    description: '学习资源相关网站',
    websites: [
      {
        name: 'freeCodeCamp',
        description: '免费的编程学习平台',
        url: 'https://www.freecodecamp.org',
        logo: 'https://www.freecodecamp.org/favicon-32x32.png'
      },
      {
        name: 'Coursera',
        description: '全球顶尖大学的在线课程',
        url: 'https://www.coursera.org'
      },
      {
        name: 'Udemy',
        description: '在线学习平台',
        url: 'https://www.udemy.com',
        logo: 'https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v8/favicon-32x32.png'
      }
    ]
  },
  {
    icon: '🎮',
    name: '游戏开发',
    description: '游戏开发相关资源',
    websites: [
      {
        name: 'Unity',
        description: '跨平台游戏开发引擎',
        url: 'https://unity.com'
      },
      {
        name: 'Unreal Engine',
        description: 'Epic Games推出的游戏引擎',
        url: 'https://www.unrealengine.com'
      }
    ]
  },
  {
    icon: '🤖',
    name: '人工智能',
    description: '人工智能相关资源',
    websites: [
      {
        name: 'OpenAI',
        description: '人工智能研究公司',
        url: 'https://openai.com'
      },
      {
        name: 'Hugging Face',
        description: 'AI模型和数据集平台',
        url: 'https://huggingface.co'
      },
      {
        name: 'Ollama',
        description: '本地运行大语言模型',
        url: 'https://ollama.com',
        logo: 'https://ollama.com/public/icon-16x16.png'
      },
      {
        name: '百炼',
        description: '阿里云大模型平台',
        url: 'https://bailian.console.aliyun.com',
        logo: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico'
      },
      {
        name: 'Kimi',
        description: 'Moonshot AI 智能助手',
        url: 'https://kimi.moonshot.cn'
      },
      {
        name: 'DeepSeek',
        description: '深度求索人工智能',
        url: 'https://www.deepseek.com'
      },
      {
        name: '千问',
        description: '通义千问大模型',
        url: 'https://tongyi.aliyun.com',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01Qd3F9s1ilWmLJo56P_!!6000000004453-55-tps-51-51.svg'
      }
    ]
  },
  {
    icon: '☁️',
    name: '云服务',
    description: '云服务相关资源',
    websites: [
      {
        name: 'Amazon Web Services',
        description: '亚马逊云服务平台',
        url: 'https://aws.amazon.com'
      },
      {
        name: 'Microsoft Azure',
        description: '微软云服务平台',
        url: 'https://azure.microsoft.com'
      },
      {
        name: '阿里云',
        description: '阿里巴巴云计算平台',
        url: 'https://www.aliyun.com',
        logo: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico'
      },
      {
        name: '腾讯云',
        description: '腾讯云计算平台',
        url: 'https://cloud.tencent.com'
      }
    ]
  },
  {
    icon: '🔒',
    name: '安全',
    description: '网络安全相关资源',
    websites: [
      {
        name: 'OWASP',
        description: '开放式Web应用程序安全项目',
        url: 'https://owasp.org',
        logo: 'https://owasp.org/www--site-theme/favicon.ico'
      }
    ]
  },
  {
    icon: '📊',
    name: '数据分析',
    description: '数据分析相关资源',
    websites: [
      {
        name: 'Kaggle',
        description: '数据科学竞赛平台',
        url: 'https://www.kaggle.com'
      }
    ]
  },
  {
    icon: '🎬',
    name: '多媒体',
    description: '多媒体相关资源',
    websites: []
  },
  {
    icon: '💼',
    name: '效率工具',
    description: '效率提升相关工具',
    websites: [
      {
        name: 'Markdown转公众号',
        description: '将 markdown 转换为微信公众号文章',
        url: 'https://md.openwrite.cn',
        logo: 'https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/favicon.png'
      },
      {
        name: 'Notion',
        description: '一体化工作空间',
        url: 'https://www.notion.so',
        logo: 'https://www.notion.com/front-static/favicon.ico'
      }
    ]
  },
   {
    icon: '✍️',
    name: '内容创作',
    description: '内容创作相关网站',
    websites: [
      {
        name: '公众号',
        description: '秋云的微信公众号后台',
        url: 'https://mp.weixin.qq.com/cgi-bin/home',
        logo: 'https://res.wx.qq.com/a/fed_upload/9300e7ac-cec5-4454-b75c-f92260dd5b47/logo-mp.ico'
      },
       {
        name: '掘金',
        description: '掘金创作者中心',
        url: 'https://juejin.cn/creator/home',
        logo: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg'
      },
      {
        name: 'CSDN',
        description: 'CSDN 创作者中心',
        url: 'https://mp.csdn.net',
        logo: 'https://g.csdnimg.cn/static/logo/favicon32.ico'
      },
      {
        name: '知乎',
        description: '知乎创作者中心',
        url: 'https://www.zhihu.com/creator',
        logo: 'https://static.zhihu.com/heifetz/favicon.ico'
      }
    ]
  }
];
