
## 一、安装
- 安装 `npm install -g hexo-cli`
- 查看hexo版本号 `hexo -v`
- 创建文件夹 `mkdir blog`
- 进入创建的文件夹 `cd blog/`
- 初始化  `hexo init`
    - Start blogging with Hexo! 即初始化完成
- 启动博客 `hexo s` 
    - http://localhost:4000 默认

## 二、新建文章
-  `hexo new "Hexo搭建笔记"`
    - `blog\source\_posts` 目录下会生成文章（使用markdown语法）
- 在blog目录下生成 `hexo g`
- 启动博客`hexo s` 

## 三、将博客部署到Github上
- 在github上新建仓库 `liuliang960206.github.io` (格式必须是 昵称.github.io)
- 安装git插件 `npm install --save hexo-deployer-git`
- 本地修改_config.yaml文件：在Hexo目录下，找到_config.yaml文件，在#Deployment做如下修改

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/DragonBaby308/DragonBaby308.github.io.git        #你的github.io的网址
  branch: master                                                            #“type:”、“repo:”和“branch:”后都要带一个空格

```
- 部署： `hexo d`
    - 刷新Github仓库会出现文件目录
    - 在浏览器上输入你的博客地址 `https://liuliang960206.github.io/`

## 四、更换博客主题

- 安装 `$ git clone https://github.com/iissnan/hexo-theme-next themes/next`
- 修改配置
    - 修改hexo根目录下的 `_config.yml ： theme: next`
- 清理 `hexo clean`
- 重新生成 `hexo g` (每次更换主题都需要重新生成)
- 启动博客 `hexo s`
- 部署到域名 `hexo d`

### yilia主题点击`所有文章`出现模块缺失的问题

> 参考链接： http://www.dragonbaby308.com/hexo/
>
> 自定义域名：https://blog.csdn.net/mculover666/article/details/90574782
>
> next主题： git clone https://github.com/iissnan/hexo-theme-next themes/next

## 五、next主题的优化改造
next主题官网：http://theme-next.iissnan.com/getting-started.html
### 1） 更换中文 
- 更改 `_config.yml` 文件的`language` (语言到官网查找)

### 2） 增加标签页和分类页
- 路径：blog\themes\next\_config.yml
- 找到menu 默认有home和archives 

```
menu:
  home: / || home  首页
  about: /about/ || user 关于
  tags: /tags/ || tags 标签页
  categories: /categories/ || th 分类页
  archives: /archives/ || archive 归档
  schedule: /schedule/ || calendar 日程表
  sitemap: /sitemap.xml || sitemap 站点地图
  commonweal: /404/ || heartbeat 公益404
```
想要哪个页面就把前面的#去掉

### 3） 创建标签页和分类页

#### 标签页
- 根目录 `hexo n page tags`
- 启动： `hexo s`
```
// /source/tags/index.md
---
title: 标签
date: 2019-07-09 19:06:01
type: "tags"
---
```

#### 分类页

- 根目录 `hexo n page categories`
- 启动： `hexo s`
```
// /source/tags/index.md
---
title: 标签
date: 2019-07-09 19:06:01
type: "categories"
---
```
其他页面同理

### 4） 修改主图样式
- 找到主题的配置文件 搜索`Schemes`
四种主题
```
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

### 5） 修改头像

- 找到主题的配置文件 搜索`avatar`
- 默认 `avatar: /images/avatar.gif`

### 6） 更改标题、作者及链接

- /blog/_config.yml
```
# Site
title: Alex's blog
subtitle:
description:
keywords:
author: Alex
language: zh-Hans
timezone:

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://alex.com
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

### 7） 启用侧边栏的社交链接
- 找到主题的配置文件 搜索 `social` 修改相应的链接即可

### 8） 友情链接
- 找到主题的配置文件 搜索 `links` 修改相应的链接即可

### 9） 开启打赏功能
- 找到主题的配置文件 搜索 `Reward` 修改相应的链接即可
```
 #Reward
reward_comment: 在这里打赏
wechatpay: /images/wechatpay.jpg
alipay: /images/alipay.jpg
#bitcoin: /images/bitcoin.png
```

### 10） 开启订阅公众号
- 搜索 `wechat`

### 11） 设置头像圆形可旋转
- blog\themes\next\source\css\_common\components\sidebar\sidebar-author.styl

```
.site-author-image {
  display: block;
  margin: 0 auto;
  padding: $site-author-image-padding;
  max-width: $site-author-image-width;
  height: $site-author-image-height;
  border: $site-author-image-border-width solid $site-author-image-border-color;
  border-radius: 50%;
  transition: 2s all;
}

.site-author-image:hover{
  transform: rotate(360deg);
}
```
### 12） 首页文章阅读全文
- 找到主题的配置文件 搜索 `auto_excerpt` 
```
auto_excerpt:
  enable: true
  length: 300
```

### 13) 添加动态背景
- 找到主题的配置文件 搜索 `Canvas` 
共四种动态背景
```
# Canvas-nest
canvas_nest: false

# three_waves
three_waves: true

# canvas_lines
canvas_lines: false

# canvas_sphere
canvas_sphere: false

```

### 14) 修改文章内链接样式
- blog\themes\next\source\css\_common\components\post\post.styl

在底部增加样式
```
.post-body p a {
  color: #345;
  border-bottom: none;
  &:hover{
    color: blue;
  }
}
```

### 15) 修改文章底部带#的标签
- blog\themes\next\layout\_macro\post.swig

css图标库 http://www.fontawesome.com.cn/icons
- 复制图标名  `fa-link`
- `<i class="fa-link"></i>`
- 把# 换成`<i class="fa fa-link"></i>`

```
<!-- 搜索关键词 tag -->
<!-- 359行  <a href="{{ url_for(tag.path) }}" rel="tag"><i class="fa fa-link"></i> {{ tag.name }}</a> -->

```
- 重新启动
