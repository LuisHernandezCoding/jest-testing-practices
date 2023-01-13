const divide = require('./divide');

test('divides 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('divides 4 / 2 to NOT equal 1', () => {
  expect(divide(4, 2)).not.toBe(1);
});

test('divides 4 / 2 to NOT equal 0', () => {
  expect(divide(4, 2)).not.toBe(0);
});
