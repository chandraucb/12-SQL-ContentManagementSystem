const db = require('../db/connection')
const util = require('./util')

class Department {
    async getDepartments() {
        const query = 'SELECT id, name FROM DEPARTMENT'
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }
}

module.exports=Department