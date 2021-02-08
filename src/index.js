/*
 * @Author: ziming
 * @Date: 2021-02-08 16:50:48
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 17:38:44
 */

 const { program } = require('commander');
 const { resolve } = require("path");
 
 program
   .command('init <projectName>')
   .description('init a project')
   .action((source,destination)=>{
       console.log(source,destination);
       require('./create')(source);
   })

 program.parse(program.argv)  