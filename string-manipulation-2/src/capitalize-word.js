/* exported capitalizeWord */
function capitalizeWord(word) {
  var smallWord = word.toLowerCase();
  if (smallWord === 'javascript') {
    return 'JavaScript';
  }

  var firstChar = smallWord[0].toUpperCase();
  var remaining = smallWord.slice(1);
  return firstChar + remaining;
}
