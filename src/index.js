/*
 * @Author: ziming
 * @Date: 2021-02-08 16:50:48
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 17:38:44
 */

 const { program } = require('commander');
 const { resolve } = require("path");
 const Asker = require('./core/ask');
 

class  Gee {
   constructor(){
  
   }
   init(){
    // 注入命令

    // init 创建项目
    program
      .command('init [projectName]')
      .description('create a  new project')
      .action( async(name, options, command)=>{
          // 开始交互式询问，获取项目信息
          var userOpts = await new Asker(name, options);
          console.log(userOpts)
      })

    //commander 解析命令行参数
    program.parse(process.argv)  
   }
   
 }

 module.exports = Gee;