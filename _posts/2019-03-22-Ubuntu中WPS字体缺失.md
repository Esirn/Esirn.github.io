---

title:		Ubuntu中WPS字体缺失
date:		2019-03-22
layout:		post
comments:	true
categories: Linux
tags:		Linux 办公
author:		Esirn
mathjax:	true
excerpt: 	启动WPS for Linux后，出现提示"系统缺失字体" 。出现提示的原因是因为WPS for Linux没有自带windows的字体，只要在Linux系统中加载字体即可。

---

# 简述
启动WPS for Linux后，出现提示"系统缺失字体" 。出现提示的原因是因为WPS for Linux没有自带windows的字体，只要在Linux系统中加载字体即可。

# 具体步骤
- 下载缺失的字体文件到Linux系统中的/usr/share/fonts文件夹中。

国外下载地址：[dropbox](https://www.dropbox.com/s/lfy4hvq95ilwyw5/wps_symbol_fonts.zip)

国内下载地址：[百度网盘](https://pan.baidu.com/s/1eS6xIzo)

（上述数据来源网络，侵删）

- 下载完成后，解压并进入目录中，继续执行`sudo cp * /usr/share/fonts`
- 执行以下命令,生成字体的索引信息：
~~~
sudo mkfontscale
sudo mkfontdir
~~~

- 更新字体缓存：`sudo fc-cache`
- 重启wps即可，字体缺失的提示不再出现。

# 参考资料
- [WPS for Linux 字体配置(字体缺失解决办法)](https://www.cnblogs.com/lujion/p/6897085.html)