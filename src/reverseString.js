// function to reverse the string input
function reverseString(str) {
  // Split the string into an array of characters
  const characters = str.split('');

  // Reverse the array of characters
  const reversedCharacters = characters.reverse();

  // Join the array of characters back into a string
  const reversedString = reversedCharacters.join('');

  // Return the reversed string
  return reversedString;
}

module.exports = reverseString;
