<!--
 * @Author: ziming
 * @Date: 2021-02-08 18:32:10
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 18:33:01
-->
# gee-cli
this is a custom cli for daliy work

1.在package.json文件中创建bin字段，该字段指定了指令对应的可执行文件
```javascript
{
"name": "gee-cli",

"version": "1.0.0",

"description": "",

"main": "index.js",

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"

},
"bin": {
"gee": "bin/gee” // 指定gee指令对应的可执行文件位置

},
"keywords": [],
"author": "",

"license": "ISC"

}
```

2.创建bin目录与bin文件（可执行文件），通过注释指定系统的解析器来解析二进制文件
这里是指定node环境来解释这个文件
#! /usr/bin/env node   

3.通过npm link ，创建一个软链接添加到global node_modules文夹下去，使gee指令称为一个全局指令
https://www.jianshu.com/p/aaa7db89a5b2

4.使用一些工具开发
Commander 定义一些命令行参数：https://github.com/tj/commander.js
Download-git-repo 下载模板   https://gitlab.com/flippidippi/download-git-repo#readme
chalk 美化命令行提示


5. 功能
    1.利用 gee init 创建项目
    2.询问一些项目相关的问题

        项目描述相关的 名字、描述...
        选择开发语言 ts、js
        打包工具 webpack、rollup
        选择模板 vue、react、小程序
        组件库 geeui、elementui
    3. 自定义一些命令
        init、create、build    
    4.开发编译
        下拉模板仓库
        合并项目配置

    5.运行    

