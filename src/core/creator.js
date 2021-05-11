/*
 * @Author: ziming
 * @Date: 2021-02-08 17:38:50
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 18:21:11
 */
const { isExist } = require('../share/utility');
const { getRemoteRepo} = require('./repo');

 async function create(opts){
    // 先检查文件夹是否存在
    if(isExist(opts.distance)){
        return;
    }

    /*
    * 模板来源
        1.自定义模板库拉取
        2.借助其他的cli生成
    */
    getRemoteRepo(opts.distance);



    // 模板下载成功之后开始进行编译
    // complieTemplate();
 }

 module.exports = create