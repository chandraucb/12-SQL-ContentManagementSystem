const Department = require('../model/department')
const Employee = require('../model/employee')
const Role = require('../model/role')

const department = new Department()
const employee = new Employee()
const role = new Role()

class Main {
    async getDepartment() {
        await department.getDepartments()
    }

    async addDepartment(name) {
        await department.addDepartment(name)
    }

    async getAllEmployee() {
        await employee.getAllEmployee()
    }

    async addEmployee(data) {
        await employee.addEmployee(data)
    }

    async getRoles() {
        await role.getRoles()
    }

    async addRole(data) {
        await role.addRole(data)
    }
}

module.exports = Main