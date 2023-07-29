const util = require('./util')

describe('Util', () => {
      it('Test SQL Format Utility', () => {
        expect(() => {util.formatSQLResult()}).not.toThrowError();
      });
});