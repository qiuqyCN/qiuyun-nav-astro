export interface SiteConfig {
  name: string;
  logo: string;
  description: string;
  keywords: string;
  icp: string;
  icpUrl: string;
  author: {
    name: string;
    email: string;
    website?: string;
  };
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
  description: '精心整理的优质网址导航，为开发者和设计师提供便捷的资源访问渠道',
  keywords: '网址导航,开发工具,设计资源,编程学习',
  icp: '',
  icpUrl: 'https://beian.miit.gov.cn',
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
