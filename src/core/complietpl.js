const fs = require('fs');
const ejs = require('ejs');

function complieTpl(templatePath, data){

  return new Promise((res, rej)=>{
    ejs.renderFile(templatePath, data, function(err, data){
        if(err){
            throw new Error(err);
        }
        // 覆盖源文件
        fs.writeFileSync(templatePath, data);
        res();
    })
  })  
}

module.exports = complieTpl;