const fs = require('fs');
const path = require('path');

 const isExist =(filepath)=>{
    return fs.existsSync(filepath);
 }




 module.exports = { 
     isExist
}