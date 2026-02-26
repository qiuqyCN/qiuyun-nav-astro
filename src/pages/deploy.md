---
layout: ../layouts/MarkdownPostLayout.astro
title: 部署到 Netlify
description: 将秋云导航部署到 Netlify 的完整教程
currentPath: /deploy

Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=60, must-revalidate');
---

# 部署到 Netlify

本教程将指导你如何将秋云导航项目部署到 Netlify，这是一个免费的静态网站托管平台。这样不用购买服务器，并且也支持自定义域名。

部署后的网站预览：
1. Netlify 默认分配的域名：[qiuyun-nav-astro.netlify.app](https://qiuyun-nav-astro.netlify.app/)
2. 自定义域名：https://nav.qiuyun.dev/

预览效果：
![预览效果](https://nav.qiuyun.dev/deploy/00_1.png)
![预览效果](https://nav.qiuyun.dev/deploy/00_2.png)

## 准备工作

在开始部署之前，请确保：

1. fork [秋云导航](https://github.com/qiuqyCN/qiuyun-nav-astro)
2. 拥有 Netlify 账号（可以使用 GitHub 账号直接登录）

## 部署步骤

### 1. 登录 Netlify

访问 [Netlify 官网](https://www.netlify.com/) 并登录你的账号。选择 Sign in with GitHub 登录。
![登录 Netlify](https://nav.qiuyun.dev/deploy/01.png)

### 2. 导入项目

1. 点击 **"Add new site"** → **"Import an existing project"**
2. 选择你的 Git 提供商（GitHub/GitLab/Bitbucket/Azure DevOps）,这里选中 GitHub
3. 授权 Netlify 访问你的仓库
4. 在仓库列表中找到并选择 **qiuyun-nav-astro** 项目

![导入项目](https://nav.qiuyun.dev/deploy/02.png)
### 3. 配置构建设置

在部署配置页面，填写以下信息：

| 配置项 | 值 |
|--------|-----|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

其他设置保持默认即可。

![配置构建设置](https://nav.qiuyun.dev/deploy/03.png)

### 4. 部署网站

点击 **"Deploy site"** 按钮，Netlify 将自动开始构建和部署流程。

构建完成后，Netlify 会为你分配一个随机子域名（如 `random-name-123456.netlify.app`）。

### 5. 自定义域名（可选）

如果你想使用自定义域名：

1. 进入站点设置 → **Domain management**
2. 点击 **"Add custom domain"**
3. 输入你的域名并按照提示配置 DNS 记录。
4. 阿里云域名的 DNS 配置可以参考 ![](https://nav.qiuyun.dev/deploy/06.png)。
5. cloudflare 域名的 DNS 配置可以参考 ![](https://nav.qiuyun.dev/deploy/05.png)。

## 自动部署

Netlify 会自动监听你的 Git 仓库变化。每次推送到主分支时，Netlify 都会自动重新构建和部署网站。

## 配置网站、导航分类和网址

1. 网站配置，参考代码：https://github.com/qiuqyCN/qiuyun-nav-astro/blob/main/src/configs/site-config.ts
3. 导航分类和网址，参考代码：https://github.com/qiuqyCN/qiuyun-nav-astro/blob/main/src/configs/websites.ts


## 更新网站

更新网站非常简单，只需：

1. 在本地修改代码
2. 提交并推送到 Git 仓库
3. Netlify 会自动检测变更并重新部署

```bash
git add .
git commit -m "更新网站内容"
git push origin main
```

推送后，Netlify 会在几分钟内完成自动部署。

## 更多资源

- [秋云导航](https://nav.qiuyun.dev/)

---

祝你部署顺利！如有问题，欢迎提交 Issue 或联系作者。
