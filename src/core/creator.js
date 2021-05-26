const { isExist } = require('../share/utility');
const { getRemoteRepo } = require('./repo');
const path = require('path');

const complieTpl = require('./complietpl');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora(`Loading ${chalk.green('template')}`);

async function create(opts) {
    // 先检查文件夹是否存在
    if (isExist(opts.distance)) {
        return;
    }

    /*
    * 模板来源
        1.自定义模板库拉取
        2.借助其他的cli生成
    */
    spinner.start();
    await getRemoteRepo(opts.distance);
    // 模板下面的package.json
    var templatePath = path.join(opts.distance, './package.json');
    // 自定义数据
    var data = {
        projectName: opts.projectName,
        description: opts.description,
        author: opts.author
    }

    // 模板下载成功之后开始进行编译
  
    await complieTpl(templatePath, data);
    spinner.succeed();
}

module.exports = create