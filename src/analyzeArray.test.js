const analyzeArray = require('./analyzeArray');

test('analyzeArray', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyzeArray', () => {
  expect(analyzeArray([2, 3, 5, 7, 11, 13, 17, 19])).toEqual({
    average: 9,
    min: 2,
    max: 19,
    length: 8,
  });
});
