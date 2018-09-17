const calc = require('../test.js');

describe('Test function', () => {
  describe('add', () => {
    it('Should add to numbers', () => {
      let val = calc.add(3, 2);
      expect(val).toBe(5);
    });
    it('Should add to numbers', () => {
      let val = calc.add(3, -1);
      expect(val).toBe(2);
    });
  });
});