const capitalize = require('./capitalize');

test('capitalizes the first letter of a string', () => {
  // Create various test cases
  const testCases = [
    ['hello', 'Hello'],
    ['HELLO', 'HELLO'],
    ['hello world', 'Hello world'],
    ['hello world!', 'Hello world!'],
    ['nice to meet you', 'Nice to meet you'],
    ['oh, hi mark', 'Oh, hi mark'],
  ];

  // Loop through each test case
  testCases.forEach((testCase) => {
    // Check if the function returns the expected value
    expect(capitalize(testCase[0])).toBe(testCase[1]);
  });
});
