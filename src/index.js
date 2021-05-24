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
      .option('-cli, --cli <type>', 'choose a official cli like vue、vite、react')
      .action( async(name, options, command)=>{
        if(options.cli){
          switch(options.cli){
            case 'vue': 
              await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/vue'), 'create', name],
                {stdio: [process.stdin, process.stdout, process.stderr]}
              );
              break;
            case 'vite':
              await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/create-vite-app'), name],
              {stdio: [process.stdin, process.stdout, process.stderr]}
              );
              break;
            case 'react':
              await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/create-react-app'), name],
              {stdio: [process.stdin, process.stdout, process.stderr]}
              );
              break;
          }
        }else {
          // 使用默认cli 开始交互式询问，获取项目信息
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
        }
      })

    //commander 解析命令行参数
    program.parse(process.argv)  
   }
   
 }


 module.exports = Gee;