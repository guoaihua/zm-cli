const inquirer = require('inquirer');
 class Asker{
    constructor(){
        this.init();
    }

    init(){
        const prompt = [
            {
                type: 'input',
                name: 'project name',
                message: '请输入项目名称'
            }
        ]

       return new Promise((res, rej)=>{
            inquirer.prompt(prompt).then((answers)=>{
                console.log(answers);
                res(answers);
            })
       })
     
    }
}

module.exports = Asker;