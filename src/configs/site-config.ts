export interface SiteConfig {
  // 网站名称
  name: string;
  // 网站logo
  logo: string;
  // 网站网址
  site: string;
  // 网站描述
  description: string;
  // 网站关键词
  keywords: string;
  // 网站ICP备案号
  icp?: string;
  // 网站ICP备案链接  
  icpUrl?: string;
  // 百度统计ID，用于分析网站流量，没有可以不配置
  baiduAnalytics?: {
    id?: string;
  };
  // 谷歌统计ID，用于分析网站流量，没有可以不配置
  googleAnalytics?: {
    id?: string;
  };
  // 微软Clarity统计ID，用于分析用户行为，没有可以不配置
  clarity?: {
    id?: string;
  };
  // 网站作者信息
  author: {
    name: string;
    email: string;
    website?: string;
  };
  // 网站联系信息
  contact: {
    email: string;
    wechat: {
      qrCode: string;
    };
    github: string;
    douyin: string;
    bilibili: string;
    xiaohongshu: string;
  };
}

export const siteConfig: SiteConfig = {
  name: '秋云导航',
  logo: '/logo.svg',
  site: 'https://nav.qiuyun.dev',
  description: '精心整理的优质网址导航，为开发者和设计师提供便捷的资源访问渠道',
  keywords: '网址导航,开发工具,设计资源,编程学习',
  icp: '',
  icpUrl: 'https://beian.miit.gov.cn',
  baiduAnalytics: {
    id: 'd9e47659655316432bae96955a189b4b'
  },
  googleAnalytics: {
    id: 'G-DVEGQKD5C8'
  },
  clarity: {
    id: 'vgjitzzwba'
  },
  author: {
    name: '秋云',
    email: '97208294@qq.com',
    website: 'https://qiuyun.dev'
  },
  contact: {
    email: '97208294@qq.com',
    wechat: {
      qrCode: '/wechat-qrcode.jpg'
    },
    github: 'https://github.com/qiuqyCN',
    douyin: 'https://www.douyin.com/user/MS4wLjABAAAAIAxnsIEUN50zHdMUA45a45k6n6TZyokegJv3dcM66SQ',
    bilibili: 'https://space.bilibili.com/4295116',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/5d115f50000000001202dd8f'
  }
};
