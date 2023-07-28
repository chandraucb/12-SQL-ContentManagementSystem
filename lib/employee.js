const db = require('../db/connection')
const util = require('./util')

class Employee {
    async getAllEmployee() {
        const query = 'SELECT * FROM EMPLOYEE'
        const results = await db.promise().query(query)
        util.formatSQLResult(results[0])
    }
}

module.exports=Employee