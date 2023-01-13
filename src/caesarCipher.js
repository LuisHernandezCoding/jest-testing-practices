// function to do the caesar cipher algorithm of encryption
function caesarCipher(str, num) {
  let output = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const newNum = num % 26;
  for (let i = 0; i < str.length; i += 1) {
    const currentLetter = str[i];
    if (currentLetter.match(/[a-z]/i)) {
      const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
      let newIndex = currentIndex + newNum;
      if (newIndex > 25) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;
      if (currentLetter === currentLetter.toUpperCase()) {
        output += alphabet[newIndex].toUpperCase();
      } else {
        output += alphabet[newIndex];
      }
    } else {
      output += currentLetter;
    }
  }
  return output;
}
module.exports = caesarCipher;