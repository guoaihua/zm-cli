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
        if(options.cli){
          var cli = options.cli;
          await installPackages('vue.cmd', [`create ${name}`]);
        }
     return;   
          // 开始交互式询问，获取项目信息
          // 1.合并配置
          const asker = new Asker();
          let userOpts = await asker.init();
          this.opts = Object.assign({},this.defaultOpts, userOpts);
          this.opts.distance = path.resolve(process.cwd(), this.opts.projectName);
          // 2.创建构造器，拉取模板并且完成编译
          await creator(this.opts);

          // 3.自动安装依赖
          const npm = process.platform === 'win32' ? 'npm.cmd' : 'cnpm'; //兼容window
          await installPackages(npm, ['install'], {
            cwd: `./${this.opts.projectName}`
          });
      })

    //commander 解析命令行参数
    program.parse(process.argv)  
   }
   
 }


 module.exports = Gee;