/*
 * @Author: ziming
 * @Date: 2021-02-08 16:50:48
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 17:38:44
 */

 const { program } = require('commander');
 const { resolve } = require("path");
 const Asker = require('./core/ask');
 const creator = require('./core/creator');
 const path = require('path');
 const { getWorkDir } = require('./share/utility');

class  Gee {
   constructor(){
     this.defaultOpts = {};
   }
   init(){
    // 注入命令

    // init 创建项目
    program
      .command('init [projectName]')
      .description('create a  new project')
      .action( async(name, options, command)=>{
          // 开始交互式询问，获取项目信息
          const asker = new Asker(name);
          let userOpts = await asker.init();
          //合并配置
          this.opts = Object.assign({},this.defaultOpts, userOpts);

          // 项目目录
          this.opts.distance = path.resolve(process.cwd(), this.opts.projectName);
    
          creator(this.opts);
      })

    //commander 解析命令行参数
    program.parse(process.argv)  
   }
   
 }

 module.exports = Gee;