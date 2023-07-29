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
});