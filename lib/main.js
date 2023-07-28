const Department = require('./department')
const Employee = require('./employee')

const department = new Department()

const employee = new Employee()

class Main {
    async getDepartment() {
        await department.getDepartments()
    }

    async getAllEmployee() {
        await employee.getAllEmployee()
    }
}

module.exports = Main