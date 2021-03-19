/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var fixedWords = [];
  for (var i = 0; i < words.length; i++) {
    fixedWords.push(words[i].concat(suffix));
  }
  return fixedWords;
}
