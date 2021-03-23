/* exported ransomCase */
function ransomCase(string) {
  var smallStr = string.toLowerCase();
  var splitStr = smallStr.split('');
  for (var i = 0; i < splitStr.length; i++) {
    if (i % 2 === 1) {
      splitStr[i] = splitStr[i].toUpperCase();
    }
  }
  return splitStr.join('');
}
