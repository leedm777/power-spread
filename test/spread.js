const assert = require('assert');

describe('spread operator', () => {
  it('should work', () => {
    const obj = { a: 1, b: 2 };
    const actual = { ...obj, c: 3 };
    assert.deepStrictEqual(actual, { a: 1, b: 2, c: 3 });
  });
});
