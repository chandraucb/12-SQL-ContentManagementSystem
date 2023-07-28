const Role = require('./role')

describe('Role Model Test', () => {
      test('Get Roles', async () => {
        const role = new Role()
        await role.getRoles()
      });
});