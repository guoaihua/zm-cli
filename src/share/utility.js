const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

 const isExist =(filepath)=>{
    return fs.existsSync(filepath);
 }

 const log = (str)=>{
   console.log(chalk.green(str));
 }



 module.exports = { 
     isExist,
     log
}