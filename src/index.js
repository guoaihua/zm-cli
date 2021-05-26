 const { program } = require('commander');
 const { resolve } = require("path");
 const asker = require('./core/ask');
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
          useCli(options.cli, name)
        }else {
          // 使用默认cli 开始交互式询问，获取项目信息
          // 1.合并配置
          let userOpts = await asker(name);
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


 const clis = {
  async vue(projectName){
      await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/vue'), 'create', projectName],
      {stdio: [process.stdin, process.stdout, process.stderr]}
      );
   },
   async vite(projectName){
     await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/create-vite-app'), projectName],
    {stdio: [process.stdin, process.stdout, process.stderr]}
    );
   },
   async react(projectName){
    await installPackages( 'node' , [path.resolve(__dirname, '../node_modules/.bin/create-react-app'), projectName],
    {stdio: [process.stdin, process.stdout, process.stderr]}
    );
   }
 }

 function useCli(cli, projectName){
    return clis[cli](projectName);
 }


 module.exports = Gee;