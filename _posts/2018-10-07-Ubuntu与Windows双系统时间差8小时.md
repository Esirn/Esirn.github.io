---
title:		Ubuntu与Windows双系统时间差8小时
date:		2018-10-07
layout:		post
comments:	true
categories: 操作系统
tags:		操作系统 双系统 Ubuntu Windows 时间
author:		Esirn
mathjax:	true
excerpt: 	配置MinGW编译器，Notepad++增加运行命令。
---

# 原因
先说下两个概念：
- UTC即Universal Time Coordinated：协调世界时（世界统一时间）
- GMT 即Greenwich Mean Time：格林尼治平时

Windows 与 Mac/Linux 看待系统硬件时间的方式是不一样的：

Windows把计算机硬件时间当作本地时间(local time)，所以在Windows系统中显示的时间跟BIOS中显示的时间是一样的。
Linux/Unix/Mac把计算机硬件时间当作 UTC， 所以在Linux/Unix/Mac系统启动后在该时间的基础上，加上电脑设置的时区数（ 比如我们在中国，它就加上“8” ），因此，Linux/Unix/Mac系统中显示的时间总是比Windows系统中显示的时间快8个小时。

所以，当你在Linux/Unix/Mac系统中，把系统现实的时间设置正确后，其实计算机硬件时间是在这个时间上减去8小时，当你切换成Windows系统后，会发现时间慢了8小时。

# 解决方法
这里提供两种解决方法，个人倾向于使用第一种：

## 方法1. 让Ubuntu学Windows
即在Ubuntu中把计算机硬件时间改成系统显示的时间，这又有另一个需要注意的地方：

在 Ubuntu 16.04 版本以前，关闭UTC的方法是编辑/etc/default/rcS，将UTC=yes改成UTC=no， 但在Ubuntu 16.04使用systemd启动之后，时间改成了由timedatectl来管理，所以更改方法是：

```
timedatectl set-local-rtc 1 --adjust-system-clock
```

执行后重启Ubuntu，应该就没有问题了。

## 方法2. 让Windows学Ubuntu
打开命令行程序，在命令行中输入下面命令并回车：

```
Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
```

# 参考资料
- [怎样解决Windows10时间快和Ubuntu时间差问题？ - 滑稽的回答 - 知乎](https://www.zhihu.com/question/46525639/answer/157272414)