---
title:		关于iPhone在关闭WiFi后第二天又开启
date:		2018-10-04
layout:		post
comments:	true
categories:	iPhone
tags:		iPhone iOS 
author:		Esirn
mathjax:	true
excerpt: 	可以解决，但这不是bug，是feature。
---
* content
{:toc}

# 环境
iPhone 6S，iOS 12.0（16A366）  

# 现象
1. 在下拉控制中心关闭 WiFi 时，WiFi图标会从蓝色变成白色，顶部会出现“附近的无线局域网连接会在明天之前保持断开状态”字样，然而第二天又自动开启。  
2. 在下拉控制中心关闭 WiFi 后，到“设置”中会发现，“无线局域网”处显示的是“未连接”而不是“关闭”，进入“无线局域网”会发现其按钮并未关闭。  
3. 在“设置-无线局域网”中关闭 WiFi 按钮后，到“设置”中会发现，“无线局域网”处显示的是“关闭”，再到控制中心中查看，WiFi 图标会变成透明色，并且多出一条斜杠，此时 WiFi 被彻底关闭了。  

# 结论  
要想彻底关闭WiFi必须去设置中进行关闭。有 3D Touch 的话重压“设置”进入“无线局域网”也可以。  

# 其他
WiFi 除了上网以外，还有一个很大的作用——精准定位。与 GPS 定位相比，WiFi 定位在室内和公共场所更精准。所以在关闭 WiFi 的情况下使用一些需要定位的应用时，会接收到“打开WiFi将提高位置准确性”的提示。  

# 参考资料
- [iOS 11关闭WiFi后为什么第二天还是开启状态？该如何解决？](http://m.ifonebox.cn/news/wifi-guan-bi-0426.html?fdx_switcher=true)