const Department = require('./department')

describe('Department Model Test', () => {
      test('Get Departments', async () => {
        const department = new Department()
        await department.getDepartments()
      });

      test('Add Departments', async () => {
        const department = new Department()
        await department.addDepartment('Human Resource')
      });
});