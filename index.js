const inquirer = require('inquirer');
const fs = require('fs');
const Main = require('./lib/main')
const util = require('./lib/util')

const main = new Main()

//Add Department Inquirer Prompts
const addDepartment = function () {
    return inquirer.prompt([

        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'department',
        }

    ]).then(async (data) => {
        if (data.department)
            await main.addDepartment(data.department)
    })
}

//AddRole Prompt
const addRole = async function () {

    const departments = (await main.getDepartment())[0]
    return inquirer.prompt([

        {
          type: 'input',
          message: 'What is the title of the role?',
          name: 'title',
        },{
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary',
        },{
            type: 'list',
            message: 'What department does the role belong to?',
            name: 'department_name',
            choices: departments ,
        },

    ]).then(async (data) => {
        //find department id for selected department by name
        const selectDep = departments.filter( dep => {
            return dep.name === data.department_name
        })
        data.department_id = selectDep[0].id
        await main.addRole(data)
    })
}

//AddEmployee Prompt
const addEmployee = async function () {

    const roles = (await main.getRoles())[0]
    const rolesList = roles.map( (role) => {
        return role.title 
    })
    const employees = (await main.getAllEmployee())[0]
    const managersList = ['None',...employees.map( (employee) => {
        return employee.first_name + ' ' + employee.last_name
    })]

    return inquirer.prompt([
        {
          type: 'input',
          message: "What is the employee's first name?",
          name: 'first_name',
        },{
            type: 'input',
            message:  "What is the employee's last name?",
            name: 'last_name',
        },{
            type: 'list',
            message:"What is the employee's role?",
            name: 'role_name',
            choices: rolesList ,
        },{
            type: 'list',
            message:"Who is the employee's manager?",
            name: 'manager_name',
            choices: managersList ,
        },

    ]).then(async (data) => {
        //find role id for selected role by name
        const selectedRole = roles.filter( role => {
            return role.title === data.role_name
        })
        data.role_id = selectedRole[0].id

        //find manager emp id for selected manager by name
        const selectedEmp = employees.filter( emp => {
            return emp.first_name + ' ' + emp.last_name === data.manager_name
        })
        data.manager_id = selectedEmp[0]?selectedEmp[0].id:null
        await main.addEmployee(data)
    })
}

//Update Employee
const updateEmployeeRole = async function () {

    const roles = (await main.getRoles())[0]
    const rolesList = roles.map( (role) => {
        return role.title 
    })
    const employees = (await main.getAllEmployee())[0]
    const employeeList = employees.map( (employee) => {
        return employee.first_name + ' ' + employee.last_name
    })

    return inquirer.prompt([
        {
            type: 'list',
            message:"Who is the employee's manager?",
            name: 'emp_name',
            choices: employeeList ,
        },{
            type: 'list',
            message:"What is the employee's role?",
            name: 'role_name',
            choices: rolesList ,
        },

    ]).then(async (data) => {
        //find role id for selected role by name
        const selectedRole = roles.filter( role => {
            return role.title === data.role_name
        })
        data.role_id = selectedRole[0].id

        //find manager emp id for selected manager by name
        const selectedEmp = employees.filter( emp => {
            return emp.first_name + ' ' + emp.last_name === data.emp_name
        })
        data.id = selectedEmp[0]?selectedEmp[0].id:null
        await main.updateEmployeeRole(data)
    })
}

//Show main prompt
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

        switch (data.action) {
            case 'View All Employees':
                const empResult = await main.getAllEmployee()
                util.formatSQLResult(empResult[0])
                break
            case 'Add Employee':
                await addEmployee()
                break
            case 'Update Employee Role':
                await updateEmployeeRole()
                break
            case 'View All Roles':
                const rolesResult = await main.getRoles()
                util.formatSQLResult(rolesResult[0])
                break
            case 'Add Role':
                await addRole()
                break
            case 'View All Departments':
                const depResults = await main.getDepartment()
                util.formatSQLResult(depResults[0])
                break
            case 'Add Department':
                await addDepartment()
                break
            default:
                break
        }

        showPrompt()

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
  