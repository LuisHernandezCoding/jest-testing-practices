const caesarCipher = require('./caesarCipher');

test('caesarCipher is a function', () => {
  expect(typeof caesarCipher).toEqual('function');
});

test('caesarCipher returns a string', () => {
  expect(typeof caesarCipher('a', 1)).toEqual('string');
});

test('caesarCipher returns the correct output for "a" with a shift of 1', () => {
  expect(caesarCipher('a', 1)).toEqual('b');
});

test('caesarCipher returns the correct output for "a" with a shift of 25', () => {
  expect(caesarCipher('a', 25)).toEqual('z');
});

test('caesarCipher returns the correct output for "a" with a shift of 26', () => {
  expect(caesarCipher('a', 26)).toEqual('a');
});

test('caesarCipher returns the correct output for "a" with a shift of 27', () => {
  expect(caesarCipher('a', 27)).toEqual('b');
});

test('caesarCipher returns the correct output for "A" with a shift of 1', () => {
  expect(caesarCipher('A', 1)).toEqual('B');
});

test('caesarCipher returns the correct output for "A" with a shift of 25', () => {
  expect(caesarCipher('A', 25)).toEqual('Z');
});

test('caesarCipher returns the correct output for "A" with a shift of 26', () => {
  expect(caesarCipher('A', 26)).toEqual('A');
});

test('caesarCipher returns the correct output for "A" with a shift of 27', () => {
  expect(caesarCipher('A', 27)).toEqual('B');
});

test('caesarCipher returns the correct output for "abc" with a shift of 1', () => {
  expect(caesarCipher('abc', 1)).toEqual('bcd');
});

test('caesarCipher returns the correct output for "abc" with a shift of 25', () => {
  expect(caesarCipher('abc', 25)).toEqual('zab');
});

test('caesarCipher returns the correct output for "abc" with a shift of 26', () => {
  expect(caesarCipher('abc', 26)).toEqual('abc');
});

test('caesarCipher returns the correct output for "abc" with a shift of 27', () => {
  expect(caesarCipher('abc', 27)).toEqual('bcd');
});

test('caesarCipher returns the correct output for "ABC" with a shift of 1', () => {
  expect(caesarCipher('ABC', 1)).toEqual('BCD');
});

test('caesarCipher returns the correct output for "ABC" with a shift of 25', () => {
  expect(caesarCipher('ABC', 25)).toEqual('ZAB');
});

test('caesarCipher returns the correct output for "ABC" with a shift of 26', () => {
  expect(caesarCipher('ABC', 26)).toEqual('ABC');
});

test('caesarCipher returns the correct output for "ABC" with a shift of 27', () => {
  expect(caesarCipher('ABC', 27)).toEqual('BCD');
});

test('caesarCipher returns the correct output for "What a string!" with a shift of 5', () => {
  expect(caesarCipher('What a string!', 5)).toEqual('Bmfy f xywnsl!');
});

test('caesarCipher returns the correct output for "Hello, World!" with a shift of 5', () => {
  expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});

test('caesarCipher returns the correct output for "The quick brown fox jumps over the lazy dog." with a shift of 5', () => {
  expect(caesarCipher('The quick brown fox jumps over the lazy dog.', 5)).toEqual('Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.');
});

test('caesarCipher returns the correct output for "The five boxing wizards jump quickly." with a shift of 5', () => {
  expect(caesarCipher('The five boxing wizards jump quickly.', 5)).toEqual('Ymj knaj gtcnsl bnefwix ozru vznhpqd.');
});
