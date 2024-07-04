import{_ as a,o as e,c as t,Q as o}from"./chunks/framework.d53bf09d.js";const u=JSON.parse('{"title":"arco篇 Arco Pro 在服务器上打包报错原因之—— mozjpeg 依赖安装报错","description":"","frontmatter":{"layout":"doc","tag":["bug"],"prev":{"text":"bug日志","link":"/bug-md/"},"next":{"text":"还没想好","link":"/bug-md/"}},"headers":[],"relativePath":"bug-md/mozjpeg.md","filePath":"bug-md/mozjpeg.md","lastUpdated":null}'),r={name:"bug-md/mozjpeg.md"},s=o('<h1 id="arco篇-arco-pro-在服务器上打包报错原因之——-mozjpeg-依赖安装报错" tabindex="-1">arco篇 Arco Pro 在服务器上打包报错原因之—— mozjpeg 依赖安装报错 <a class="header-anchor" href="#arco篇-arco-pro-在服务器上打包报错原因之——-mozjpeg-依赖安装报错" aria-label="Permalink to &quot;arco篇 Arco Pro 在服务器上打包报错原因之—— mozjpeg 依赖安装报错&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>大家好，我是你们的友好邻居 Talon ，最近在搞一些东西，所以停更了一段时间，现在又回来啦！</p><h2 id="一、问题描述" tabindex="-1">一、问题描述 <a class="header-anchor" href="#一、问题描述" aria-label="Permalink to &quot;一、问题描述&quot;">​</a></h2><p>最近使用jenkins在打包项目的时候，发现打包的时候报错了，报错信息如下：</p><img src="http://s4t9e3sug.bkt.clouddn.com/mozjpeg.jpg"><p>我整个人是蒙的，因为根本没有遇到过这个问题，百度了一下也没查明白。</p><p>报错场景如下：</p><ul><li><strong>操作系统 Linux/CentOS 7</strong></li><li><strong>node 版本 16.19.1</strong></li><li><strong>pnpm 版本 8.2.0</strong></li></ul><h2 id="二、问题解决" tabindex="-1">二、问题解决 <a class="header-anchor" href="#二、问题解决" aria-label="Permalink to &quot;二、问题解决&quot;">​</a></h2><p>执行以下命令安装依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install --ignore-scripts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install --ignore-scripts</span></span></code></pre></div><p>问题解决，神奇吧，就是这么神奇</p><h2 id="ignore-scripts-指令详解" tabindex="-1">--ignore-scripts 指令详解 <a class="header-anchor" href="#ignore-scripts-指令详解" aria-label="Permalink to &quot;--ignore-scripts 指令详解&quot;">​</a></h2><p>该选项将忽略所有预 install、install、postinstall 脚本的执行。这个选项可以用于提高安装速度，也可用于解决一些由于脚本执行顺序问题导致的依赖安装失败问题。</p><a href="https://www.python100.com/html/3716RLP8FZM2.html"><i>——转载至https://www.python100.com/html/3716RLP8FZM2.html</i></a><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>好了，今天的问题就到这里啦，希望对你们有帮助，祝大家工作顺利，生活愉快！ 读者有什么更好的方式想法，欢迎留言评论，一起学习一起进步！</p>',18),n=[s];function i(l,p,c,d,h,m){return e(),t("div",null,n)}const _=a(r,[["render",i]]);export{u as __pageData,_ as default};
