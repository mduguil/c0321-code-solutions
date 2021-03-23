/* exported numVowels */
function numVowels(string) {
  var smallChar = string.toLowerCase();
  var count = 0;
  var splitStr = smallChar.split('');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === 'a' || splitStr[i] === 'e' || splitStr[i] === 'i' || splitStr[i] === 'o' || splitStr[i] === 'u') {
      count++;
    }
  }
  return count;
}
