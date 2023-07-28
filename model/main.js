const Department = require('./department')
const Employee = require('./employee')
const Role = require('./role')

const department = new Department()
const employee = new Employee()
const role = new Role()

class Main {
    async getDepartment() {
        await department.getDepartments()
    }

    async getAllEmployee() {
        await employee.getAllEmployee()
    }

    async getRoles() {
        await role.getRoles()
    }
}

module.exports = Main