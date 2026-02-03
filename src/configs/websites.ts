export interface Website {
  name: string;
  description: string;
  url: string;
  logo?: string;
}

export interface Category {
  icon: string;
  name: string;
  description?: string;
  websites?: Website[];
}

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
        url: 'https://vuejs.org'
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
        url: 'https://www.figma.com'
      },
      {
        name: 'Sketch',
        description: 'Mac平台的UI设计工具',
        url: 'https://www.sketch.com'
      },
      {
        name: 'Dribbble',
        description: '设计师灵感分享社区',
        url: 'https://dribbble.com'
      },
      {
        name: 'Behance',
        description: 'Adobe旗下的设计师作品展示平台',
        url: 'https://www.behance.net'
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
        url: 'https://www.freecodecamp.org'
      },
      {
        name: 'Coursera',
        description: '全球顶尖大学的在线课程',
        url: 'https://www.coursera.org'
      },
      {
        name: 'Udemy',
        description: '在线学习平台',
        url: 'https://www.udemy.com'
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
        url: 'https://owasp.org'
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
        name: 'Notion',
        description: '一体化工作空间',
        url: 'https://www.notion.so'
      }
    ]
  }
];
