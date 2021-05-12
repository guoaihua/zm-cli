// 拉取远程仓库
// 使用本地仓库
const download = require('download-git-repo');
const chalk = require("chalk");
const { github } = require('../config/repo');



module.exports = {
    getRemoteRepo: (distance) => {
        //拉取远程仓库模板

        return new Promise((res, rej)=>{
            download(github.default, distance,{ clone: true}, function (err) {
                if (err) {
                    console.log(chalk.red(err));
                    process.exit()
                }
                console.log(chalk.green("模板下载成功"));
                res();
            });
        }) 
    }
}