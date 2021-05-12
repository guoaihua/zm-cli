const inquirer = require('inquirer');
class Asker {
    constructor(name) {
        this.name = name
    }

    init() {
        const prompt = [
            {
                type: 'input',
                name: 'projectName',
                message: '请输入项目名称',
                default: this.name
            },
            {
                type: 'input',
                name: 'author',
                message: '请输入作者',
                default: 'ziming'
            },
            {
                type: 'input',
                name: 'description',
                message: '项目描述',
                default: 'no description'
            },
            {
                type: 'checkbox',
                name: 'language-type',
                choices: [
                    {
                        name: 'js',
                        checked: true
                    }, {
                        name: 'typescript'
                    }

                ]
            },
            {
                type: 'checkbox',
                name: 'language',
                choices: [
                    {
                        name: 'vue',
                        checked:true
                    },
                    'react',
                    'miniprogram'
                ]
            },
            {
                type: 'checkbox',
                name: 'package-tools',
                choices: [
                    {
                        checked: true,
                        name: 'webpack'
                    },
                    'rollup'
                ]
            }
        ]

        return new Promise((resolve, reject) => {
            inquirer.prompt(prompt).then((answers) => {
                resolve(answers);
            })
        })

    }
}

module.exports = Asker;