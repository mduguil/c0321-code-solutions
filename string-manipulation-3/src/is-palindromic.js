/* exported isPalindromic */
function isPalindromic(string) {
  var splitStr = string.split('');
  var trimmedArr = [];
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== ' ') {
      trimmedArr.push(splitStr[i]);
    }
  }
  var trimmedStr = trimmedArr.join('');
  var reversedStr = trimmedArr.reverse().join('');
  return trimmedStr === reversedStr;
}
