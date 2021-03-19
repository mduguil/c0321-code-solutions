/* exported capitalize */
function capitalize(word) {
  var lastIndex = word.length;
  var capitalize = word[0].toUpperCase();
  var slicedWord = word.slice(1, lastIndex);
  slicedWord = slicedWord.toLowerCase();
  return capitalize + slicedWord;
}
