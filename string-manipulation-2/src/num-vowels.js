/* exported numVowels */
function numVowels(string) {
  var smallChar = string.toLowerCase();
  var count = 0;
  var splitStr = smallChar.split('');
  for (var item of splitStr) {
    if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
      count++;
    }
  }
  return count;
}
