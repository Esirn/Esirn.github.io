---
title:		Foobar2000歌曲分级插件：Quick-Tag与Playcount
date:		2019-02-23
layout:		post
comments:	true
categories:	音乐播放器
tags:		音乐播放器 Foobar2000 插件
author:		Esirn
mathjax:	true
excerpt: 	Quick-Tag会修改歌曲文件元数据，Playcount会新建数据库。最好还是不要让这两个插件同时运行吧。
---
* content
{:toc}

# $meta(rating) 与 %rating%
前者为元数据，即歌曲文件属性中的分级属性（改之则会引发歌曲文件MD5值的变化）；后者在默认情况（无任何插件）下也会读取元数据，但在某些情况下（例如装有Playcount 插件时）会优先读取插件的数据库的数据。

# Quick Tag 插件与Playcount 插件
两个插件都可以更改歌曲的分级属性，但前者更改的是元数据，后者更改的只是自建数据库中的数据。
后者的数据库对于%rating%的优先级更高，即当两个插件同时存在时，%rating%优先读取Playcount 插件的数据库数据，而不是文件元数据。 

# 说人话
用Quick Tag插件给歌曲打星，会记录在歌曲文件中，用别的软件（比如Windows Media Player）也能看见该歌曲的星级。
用Playcount 插件给歌曲打星，会记录在某数据库中，用别的播放器看不见该歌曲的星级，甚至有可能重装Foobar2000后会丢失你辛辛苦苦评的所有星级数据。

但如果修改元数据，该歌曲文件的MD5会变化且也许不可逆。

# 个人设置
Rating为$meta(rating)即文件元数据；rating为%rating%即数据库数据。

装了Quick Tag插件的foobar2000可以编辑与查看.flac的分级元数据；Windows 10既不能编辑，也不能查看。

在Quick Tag插件情况下，右键→标签→快速标签→“设置<Rating>为”，可修改Rating即$meta(rating)即文件元数据；

在装了foo_playcount插件的情况下，右键→播放统计信息→等级 可修改数据库的rating。

最好还是不要让这两个插件同时运行吧。