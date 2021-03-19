/* exported isUpperCased */
function isUpperCased(word) {
  var upperCasedWord = word.toUpperCase();
  if (word === upperCasedWord) {
    return true;
  }
  return false;
}
