const Role = require('./role')

describe('Role Model Test', () => {
      test('Get Roles', async () => {
        const role = new Role()
        await role.getRoles()
      });

      test('Add Role', async () => {
        const role = new Role()
        await role.addRole({ "title" : "Customer Representative" , "salary" : "100000", "department_id" : 5})
      });
});