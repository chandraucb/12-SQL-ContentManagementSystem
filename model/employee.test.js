const Employee = require('./employee')

describe('Employee Model Test', () => {
      test('Get Employee', async () => {
        const employee = new Employee()
        await employee.getAllEmployee()
      });
});