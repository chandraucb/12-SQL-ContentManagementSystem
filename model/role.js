const db = require('../config/connection')
const util = require('../lib/util')

class Role {
    async getRoles() {
        const query = 'SELECT role.id AS id, role.title AS title, department.name AS department,salary FROM ROLE JOIN DEPARTMENT ON role.department_id = department.id'
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }

    async addRole(data) {

        const query = 'INSERT INTO ROLE (title, salary,department_id) VALUES (?,?,?)'
        const results = await db.promise().query(query,[data.title, data.salary, data.department_id])
        //util.formatSQLResult(results[0])

    }
}

module.exports=Role