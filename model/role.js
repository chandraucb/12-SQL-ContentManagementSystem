const db = require('../config/connection')
const util = require('./util')

class Role {
    async getRoles() {
        const query = 'SELECT role.id AS id, role.title AS title, department.name AS department,salary FROM ROLE JOIN DEPARTMENT ON role.department_id = department.id'
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }

    async close() {
        db.end()
    }
}

module.exports=Role