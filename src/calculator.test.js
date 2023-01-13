const Calculator = require('./calculator');

const calculator = new Calculator();

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

test('adds 2 + 2 to NOT equal 5', () => {
  expect(calculator.sum(2, 2)).not.toBe(5);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('subtracts 2 - 2 to equal 0', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtracts 2 - 2 to NOT equal 1', () => {
  expect(calculator.subtract(2, 2)).not.toBe(1);
});

test('divides 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('divides 4 / 2 to NOT equal 1', () => {
  expect(calculator.divide(4, 2)).not.toBe(1);
});

test('divides 4 / 2 to NOT equal 0', () => {
  expect(calculator.divide(4, 2)).not.toBe(0);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiplies 2 * 2 to NOT equal 1', () => {
  expect(calculator.multiply(2, 2)).not.toBe(1);
});

test('multiplies 2 * 2 to NOT equal 0', () => {
  expect(calculator.multiply(2, 2)).not.toBe(0);
});
