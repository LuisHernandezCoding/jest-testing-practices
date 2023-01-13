const reverseString = require('./reverseString');

test('Reverse String', () => {
  // Create various test cases
  const testCases = [
    ['hello', 'olleh'],
    ['HELLO', 'OLLEH'],
    ['hello world', 'dlrow olleh'],
    ['hello world!', '!dlrow olleh'],
    ['nice to meet you', 'uoy teem ot ecin'],
    ['oh, hi mark', 'kram ih ,ho'],
  ];

  // Loop through each test case
  testCases.forEach((testCase) => {
    // Check if the function returns the expected value
    expect(reverseString(testCase[0])).toBe(testCase[1]);
  });
});
