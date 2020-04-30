---
title:		Windows配置JDK环境
date:		2018-12-30
layout:		post
comments:	true
categories: 开发环境
tags:		开发环境 Windows Java
author:		Esirn
mathjax:	true
excerpt: 	官方各版本下载页面：<a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">www.oracle.com</a>
---
* content
{:toc}

# 步骤
以下举例JDK的安装路径为：`D:\Java\jdk1.8.0_241`

## 下载安装JDK
官方各版本下载页面为[www.oracle.com](https://www.oracle.com/technetwork/java/javase/downloads/index.html)，其中笔者用的是比较保守稳妥的[Java SE 8u241](https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html)，按照自己系统情况（64位Windows），笔者选择[jdk-8u181-windows-x64.exe](jdk-8u181-windows-x64.exe)。

下载完成后双击执行“jdk-8u241-windows-x64.exe”，下一步，选择路径`D:\Java\jdk1.8.0_241`以及是否安装JRE（默认是，建议取消），下一步，如果刚才没有取消勾选公共JRE的话，将弹出JRE安装窗口，建议将其路径改为与JDK并列的路径`D:\Java\jre1.8.0_241`，下一步，完成。 

## 配置环境变量
1. 打开“控制面板-系统-高级系统设置-高级-环境变量”，在“系统变量”中新建变量名为“JAVA_HOME”，变量值为JDK安装路径`D:\Java\jdk1.8.0_241`。 

2. 编辑系统变量中的Path，添加`%JAVA_HOME%\bin`和`%JAVA_HOME%\jre\bin`并移动到最前。 

## 查看JDK与JRE版本
在cmd窗口执行`javac -version`与`java -version`指令以分别查看JDK版本与JRE版本，若版本相同即成功，若版本不同则检查环境变量配置。

## 试运行
随便在一个地方创建“HelloJava.java”文件，用记事本编辑，保存以下简单代码，其实现结果应该是打印出“Hello Java”： 
~~~java
public class HelloJava{
	public static void main(String[] args){
		System.out.println("Hello Java");
	}
}
~~~
然后**在该目录**执行cmd窗口，敲入指令`javac HelloJava.java`，源程序会在同目录下被编译出同名.class文件，然后再在cmd中执行`java HelloJava`指令，实现结果正确即可。 

# 答疑
- Q：为什么安装JDK时建议取消安装公共JRE？  
  - A：即使取消安装公共JRE，程序安装JDK时也会在其目录中安装JDK自带的JRE，用户手动为该JRE目录配置环境变量后，也能照常使用；而如果按默认的安装公共JRE，程序不仅会为JDK安装**自带JRE**，还会在另一目录（可自定义）安装**公共JRE**，再然后还将**公共JRE**的三个`java*.exe`粘贴到`C:\Program Files (x86)\Common Files\Oracle\Java`目录中，并自动为该目录配置到系统环境变量。初学者操作不当容易引起JRE版本混乱，所以笔者建议取消安装公共JRE。
  - >公共JRE是一个独立的JRE系统，会单独安装在系统的其他路径下。公共JRE会向IE浏览器和系统中注册JAVA运行时环境。通过这种方式，系统中任何应用程序都可以使用公共JRE。由于现在在网页上执行Applet的机会越来越少，而且完全可以使用JDK目录下的JRE来运行JAVA程序，因此没有太大必要安装公共JRE。

# 参考文献
- Java SE 8的官方安装教程（Windows端）：[docs.oracle.com](https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ)
- [jdk，jre你真的懂吗？](https://ihyperwin.iteye.com/blog/1513754) 
- [关于JRE和JDK的区别](https://blog.csdn.net/shaochenshuo/article/details/78507132) 
- [Java运行环境变量配置中java与javac版本不一致的解决方法](https://www.cnblogs.com/alex-zou/p/8297541.html)
- [装jdk可以不装公共jre吗？](https://segmentfault.com/q/1010000014714440/)
