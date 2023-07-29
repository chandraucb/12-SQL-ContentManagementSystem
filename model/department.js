const db = require('../config/connection')
const util = require('../lib/util')

class Department {
    async getDepartments() {
        const query = 'SELECT id, name FROM DEPARTMENT'
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }

    async addDepartment(name) {

        const query = 'INSERT INTO DEPARTMENT (NAME) VALUES (?)'
        const results = await db.promise().query(query,[name])
        //util.formatSQLResult(results[0])

    }
}

module.exports=Department