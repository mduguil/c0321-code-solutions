/* exported capitalizeWord */
function capitalizeWord(word) {
  var smallWord = word.toLowerCase();
  if (smallWord === 'javascript') {
    return 'JavaScript';
  }
  var lastIndex = smallWord.length;
  var firstChar = smallWord[0].toUpperCase();
  var remaining = smallWord.slice(1, lastIndex);
  return firstChar + remaining;
}
