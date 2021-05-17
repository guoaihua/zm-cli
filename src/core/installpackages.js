const { spawn } = require('child_process');
const { log } = require('../share/utility');

function installPackages(command,args, options){
    log(`开始执行命令：${command}`);
    return new Promise((resolve)=>{
        const child = spawn(command, args, options);
        child.stdout.on('data',data=>console.log(data.toString()));
        child.stderr.on('data', data=>console.log(data.toString()));
        child.on('close', code=>{
            log('执行完毕');
            resolve()
        });
    });
    
}

module.exports = installPackages;