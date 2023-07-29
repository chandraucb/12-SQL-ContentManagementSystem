const db = require('../config/connection')

class Role {
    async getRoles() {
        const query = 'SELECT role.id AS id, role.title AS title, department.name AS department,salary FROM ROLE JOIN DEPARTMENT ON role.department_id = department.id'
        const results = await db.promise().query(query)
        return results
    }

    async addRole(data) {
        const query = 'INSERT INTO ROLE (title, salary,department_id) VALUES (?,?,?)'
        const results = await db.promise().query(query,[data.title, data.salary, data.department_id])
        console.log ('Role ' + data.title + ' added successfully!')

    }
}

module.exports=Role