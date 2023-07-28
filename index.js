const inquirer = require('inquirer');
const fs = require('fs');
const Main = require('./lib/main')


const showPrompt = function () {
    const actions = ['View All Employees', 
                'Add Employee', 
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit']
    inquirer.prompt([

        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'action',
          choices: actions ,
        }

    ]).then( async (data) => {

        //Exit Application
        if (data.action == 'Quit') {
            process.exit()
        }

        const main = new Main()

        switch (data.action) {
            case 'View All Employees':
                console.log(data.action)
                break
            case 'Add Employee':
                console.log(data.action)
                break
            case 'Update Employee Role':
                console.log(data.action)
                await main.getAllEmployee()
                break
            case 'View All Roles':
                console.log(data.action)
                break
            case 'Add Role':
                console.log(data.action)
                break
            case 'View All Departments':
                console.log(data.action)
                await main.getDepartment()
                break
            case 'Add Department':
                console.log(data.action)
                break
            default:
                break
        }

        showPrompt()
        //console.log('Display end of function')

    });
}

console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * *")
console.log("*                                                     *")
console.log("*    _____                 _                          *")
console.log("*   | ____|_ __ ___  _ __ | | ___  _   _  ___  ___    *")
console.log("*   |  _| | '_ ` _ \\| `_ \\| |/ _ \\| | | |/ _ \\/ _ \\   *")
console.log("*   | |___| | | | | | |_) | | (_) | |_| |  __/  __/   *")
console.log("*   |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|   *")
console.log("*                   |_|            |___/              *")
console.log("*                                                     *")
console.log("*    __  __                                           *")
console.log("*   |  \\/  | __ _ _ __   __ _  __ _  ___ _ __         *")
console.log("*   | |\\/| |/ _` | `_ \\ / _` |/ _` |/ _ \\ `__|        *")
console.log("*   | |  | | (_| | | | | (_| | (_| |  __/ |           *")
console.log("*   |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|           *")
console.log("*                             |___/                   *")
console.log("*                                                     *")
console.log("*                                                     *")
console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * *")

showPrompt()
  