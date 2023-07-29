const db = require('../config/connection')

class Department {
    async getDepartments() {
        const query = 'SELECT id, name FROM DEPARTMENT'
        const results = await db.promise().query(query)
        return results
    }

    async addDepartment(name) {
        const query = 'INSERT INTO DEPARTMENT (NAME) VALUES (?)'
        const results = await db.promise().query(query,[name])
        console.log ('Department ' + name + ' created successfully!')
    }
}

module.exports=Department