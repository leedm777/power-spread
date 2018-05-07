# power-spread

Repo to demonstrate lack of support for spread operator in power-assert.

```
$ git clone https://github.com/leedm777/power-spread.git

$ cd power-spread

$ node --version
v8.11.1

$ npx mocha


  spread operator
    ✓ should work


  1 passing (6ms)


$ npx mocha --require intelli-espower-loader

/Users/dlee/prj/tmp/power-spread/node_modules/espower-source/index.js:165
    var err = new SyntaxError(detail);
              ^
SyntaxError:
     1: const assert = require('assert');
     2:
     3: describe('spread operator', () => {
     4:   it('should work', () => {
     5:     const obj = { a: 1, b: 2 };
     6:     const actual = { ...obj, c: 3 };
                            ^
     7:     assert.deepStrictEqual(actual, { a: 1, b: 2, c: 3 });
     8:   });
     9: });
    10:

Parse Error: Unexpected token (6:21) in /Users/dlee/prj/tmp/power-spread/test/spread.js
```
