const db = require('../config/connection')
const util = require('../lib/util')

class Employee {
    async getAllEmployee() {
        const query = "SELECT employee.id AS id, first_name, last_name, title, name AS department, salary , (SELECT CONCAT(first_name , ' ' ,last_name ) FROM employee AS manager_emp WHERE manager_emp.id = employee.manager_id ) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id"
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }

    async addEmployee(data) {
        const query = 'INSERT INTO EMPLOYEE (first_name, last_name,role_id,manager_id) VALUES (?,?,?,?)'
        const results = await db.promise().query(query,[data.first_name, data.last_name, data.role_id,data.manager_id])
        //util.formatSQLResult(results[0])
    }
}

module.exports=Employee