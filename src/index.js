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
 const { getWorkDir, log } = require('./share/utility');
 const installPackages = require('./core/installPackages');

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
      .option('-cli, --cli [type]', 'Add cheese with optional type')
      .action( async(name, options, command)=>{
        console.log(name, options);
        let temp = path.resolve(__dirname, '../node_modules/.bin/vue');
        console.log(temp);
        if(options.cli){
          var cli = options.cli;
          await installPackages( 'node' , [temp,'create',name]);
        }
     return;   
      })

    //commander 解析命令行参数
    program.parse(process.argv)  
   }
   
 }


 module.exports = Gee;