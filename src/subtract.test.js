const subtract = require('./subtract');

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('subtracts 2 - 1 to NOT equal 2', () => {
  expect(subtract(2, 1)).not.toBe(2);
});

test('subtracts 2 - 1 to NOT equal 0', () => {
  expect(subtract(2, 1)).not.toBe(0);
});
