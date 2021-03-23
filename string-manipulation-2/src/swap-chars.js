/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var splitStr = string.split('');
  var newStrArr = string.split('');
  newStrArr[firstIndex] = splitStr[secondIndex];
  newStrArr[secondIndex] = splitStr[firstIndex];
  return newStrArr.join('');
}
