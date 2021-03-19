/* exported isVowel */
function isVowel(character) {
  var smallChar = character.toLowerCase();
  if (
    smallChar === 'a' ||
    smallChar === 'e' ||
    smallChar === 'i' ||
    smallChar === 'o' ||
    smallChar === 'u') {
    return true;
  }
  return false;
}
