/* exported reverseWord */
function reverseWord(word) {
  var flippedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    flippedWord += word[i];
  }
  return flippedWord;
}
