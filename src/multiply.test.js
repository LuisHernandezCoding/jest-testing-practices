const multiply = require('./multiply');

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('multiplies 2 * 2 to NOT equal 1', () => {
  expect(multiply(2, 2)).not.toBe(1);
});

test('multiplies 2 * 2 to NOT equal 0', () => {
  expect(multiply(2, 2)).not.toBe(0);
});
