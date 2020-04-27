---
title:		WPS_word无法复制或编辑Visio对象
date:		2019-06-25
layout:		post
comments:	true
categories: 办公
tags:		办公 WPS Word Visio
author:		Esirn
mathjax:	true
excerpt: 	在“控制面板\所有控制面板项\程序和功能”中对Visio进行“快速修复”
---

# 前言
Win10，WPS2019，Visio2016。

每次在WPS里复制Visio对象，或双击编辑WPS word中以前的Visio对象都会失败，提示：WPS显示无法创建对象，请确认对象已在系统注册表中注册。

尝试修复WPS，但发现并不是WPS的问题，而是Visio的问题。具体是什么问题还不清楚，但修复之后可以使用了。

# 过程
1. 打开 控制面板\所有控制面板项\程序和功能 ，找到 Microsoft Visio。
2. 右键，单击“修复”。
![单击修复](https://img2018.cnblogs.com/blog/1672368/201906/1672368-20190625071407531-390653082.png)
3. 选择“快速修复”即可。
![](https://img2018.cnblogs.com/blog/1672368/201906/1672368-20190625071546356-974474542.png)
4. 结束后即可在WPS word中使用Visio对象。

# 后续
也许每个人出错的原因不尽相同，本方法仅适合本人使用。以下为笔者在网上其他博客看到的方法，只是不适合笔者本人。
- [WPS修复以及重新注册组件](https://jingyan.baidu.com/article/e3c78d646925903c4c85f5f4.html)
- [WPS兼容设置或更改注册表使WPS卸载干净](https://www.cnblogs.com/herd/p/5508296.html)
- [”ALT”键+双击左键或360更新补丁](https://blog.csdn.net/cv_jason/article/details/80982647)
- [重新启动后台程序 visio.exe](http://blog.sina.com.cn/s/blog_6dab2cbe0102wcl4.html)