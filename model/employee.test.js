const Employee = require('./employee')

describe('Employee Model Test', () => {
      test('Get Employee', async () => {
        const employee = new Employee()
        await employee.getAllEmployee()
      });

      test('Add Employee', async () => {
        const employee = new Employee()
        await employee.addEmployee({ "first_name" : "Mike" , "last_name" : "Winston" , "role_id" : 4 , "manager_id" : 4})
      });

      test('Update Employee Role', async () => {
        const employee = new Employee()
        await employee.updateEmployeeRole({ "emp_name" : "Mike Winston" , "role_id" : 3 , "id" : 9})
      });
});