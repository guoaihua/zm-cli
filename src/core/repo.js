// 拉取远程仓库
// 使用本地仓库
const download = require('download-git-repo');
const chalk = require("chalk");
const { github } = require('../config/repo');



module.exports = {
    getRemoteRepo: async (distance) => {
        //拉取远程仓库模板

        await download(github.default, distance, function (err) {
            if (err) {
                console.log(chalk.red(err));
                process.exit()
            }
            console.log(chalk.green("模板下载成功"));
        });

    }
}