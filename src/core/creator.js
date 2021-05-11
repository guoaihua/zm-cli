/*
 * @Author: ziming
 * @Date: 2021-02-08 17:38:50
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 18:21:11
 */
const { isExist } = require('../share/utility');
const  download = require('download-git-repo');
const chalk = require("chalk");

 async function create(projectName){
    // 先检查文件夹是否存在
    if(isExist(projectName)){
        return;
    }

    download("guoaihua/ddminiapp", projectName, function(err){
        if(err){
            console.log(chalk.red(err));
            process.exit()
        }
        console.log(chalk.green("模板下载成功"));
    });
 }

 module.exports = create