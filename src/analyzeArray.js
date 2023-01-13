// function that takes an array of numbers and returns an object with: average, min, max, and length
function analyzeArray(array) {
  const average = Math.floor(array.reduce((acc, curr) => acc + curr, 0) / array.length);
  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;
  return {
    average, min, max, length,
  };
}
module.exports = analyzeArray;
