/*
 * @Author: ziming
 * @Date: 2021-02-08 17:43:05
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-08 18:12:19
 */
const fs = require('fs');
const { resolve } = require('path');

 const isExist =(name)=>{
        if(fs.existsSync(name)){
            console.log("文件夹名已被占用，请更换名字重新创建");
            return true;
        }
        return false
 }

 module.exports = { 
     isExist
}