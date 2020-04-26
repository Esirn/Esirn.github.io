---

title:		Ubuntu1604下使用MySQL与phpMyAdmin
date:		2019-05-24
layout:		post
comments:	true
categories: Linux
tags:		Linux 数据库 图形界面 C++
author:		Esirn
mathjax:	true
excerpt: 	关机大法好 && STFW

---

# 建议
- Ubuntu 16.04。因为MySQL对于Ubuntu 18.04不是很适配，会出现终端MySQL无法输入中文等问题。如果用Ubuntu 18.04，会需要多解决很多细节问题。
- 建议将软件源设为中国服务器，比如aliyun（阿里云）或huaweicloud（华为云）。
- 在Linux环境下写代码请尽可能用英文。
- 指令块中的各指令请逐条执行，不要同时复制多行指令执行。“#”为注释部分，仅供理解。
- 关机大法好 && STFW。
- 本教程结合了一些博客以及本校的三级项目指导书，但请阅读者在两教程不同时，选择用本教程的代码，因为其他来源代码总是有笔误，例如i*sn*tall、create database~~s~~、-lm**y**sqlclient

# 环境部署
## 基本环境部署
~~~
sudo apt update
sudo apt upgrade # 升级当前系统内可更新的内容。若升级项目较多，建议升级完成后重启一下。
sudo apt install g++ # 安装g++编译器，用于编译C/C++语言。
~~~

## MySQL安装
~~~
sudo apt install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
~~~
一路默认，密码设定建议与系统密码相同。

## 配置MySQL支持中文
~~~
sudo mysql -uroot -p #-u是账户，-p代表将要输入密码。
~~~
进入到MySQL终端后，输入`show variables like 'character%';`，显示如下：  
>Variable_name | Value |  
+————————–+—————————-+  
| character_set_client | utf8 |  
| character_set_connection | utf8 |  
| character_set_database | latin1 |  
| character_set_filesystem | binary |  
| character_set_results | utf8 |  
| character_set_server | latin1 |  
| character_set_system | utf8 |  
| character_sets_dir | /usr/share/mysql/charsets/ |  
+————————–+—————————-+  

latin1就是不能正常显示的原因,需要将编码格式更改为utf8格式： 
1. 修改MySQL的配置文件  
`sudo gedit /etc/mysql/conf.d/mysql.cnf`  
修改之后的配置文件如下所示：  
>[mysql]
>default-character-set=utf8
>[mysqld]
>character-set-server=utf8

2. `service mysql restart #重启一下MySQL`
注意：只对改动之后创建的数据库有效。改动之前就创建好的数据库依然无法插入中文。  

## 安装phpMyAdmin
1. `sudo apt-get install phpmyadmin`
2. 窗口提示选择服务器，注意不要直接回车，而是确定选中 apache2 回车。
3. 设定 phpMyAdmin 的密码，建议将所有密码都设成系统密码。
4. `sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin #建立/var/www/html 下的软连接`
5. `sudo /etc/init.d/apache2 restart #重启apache2`
6. 打开浏览器，地址栏输入`localhost/phpmyadmin`，账号输入root，密码输入MySQL密码即可登录。也可以账号phpmyadmin，密码按刚才安装phpmyadmin设的密码，只是本账户权限比root要低一些。

# 练手
## MySQL
~~~
sudo mysql -uroot -p #-u是账户，-p代表将要输入密码。
~~~
~~~
show databases; #显示当前所有数据库
use mysql;
show tables;
select host,user,password_last_changed from user;

create database aaa;
use aaa;
create table student (id int(3) auto_increment not null primary key, xm char(8),xb char(4),csny date);
insert into student values('1','Bai','F','1972-05-20');
insert into student values('2','白','女','1972-05-20');
~~~

## C++连接MySQL
`sudo gedit Test.cpp #用gedit编辑器创建并打开一个.cpp文件`  
填入以下代码，注意将password[]和database[]改为自己的密码和数据库。

~~~
#include <mysql/mysql.h>
#include <stdio.h>
#include <stdlib.h>
int main() 
{
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;
    char server[] = "localhost";
    char user[] = "root";
    char password[] = "1234";
    char database[] = "aaa";
    
    conn = mysql_init(NULL);
    
    if (!mysql_real_connect(conn, server,user, password, database, 0, NULL, 0)) 
    {
        fprintf(stderr, "%s\n", mysql_error(conn));
        exit(1);
    }
    mysql_query(conn, "SET NAMES UTF8"); 
	//以上，为连接数据库并声明SQL指令的编码类型为UTF8。
    if (mysql_query(conn, "show tables")) 
    {
        fprintf(stderr, "%s\n", mysql_error(conn));
        exit(1);
    }
    
    res = mysql_use_result(conn);
    
    printf("MySQL Tables in mysql database:\n");
    
    while ((row = mysql_fetch_row(res)) != NULL)
    {
        printf("%s \n", row[0]);
    }
    
	
    mysql_query(conn, "INSERT INTO `student` VALUES ('5', '李四', '男', null);"); 
    mysql_free_result(res);
    mysql_close(conn);
    
    printf("finish! \n");
    return 0;
}
~~~

~~~
g++ -W -Wall Test.cpp -o Test.out -lmysqlclient #编译并输出可执行文件Test.o，-l是用到mysqlclient库。
./Test.out #执行
~~~