/* exported reverse */
function reverse(array) {
  var flippedArr = [];
  for (var i = array.length - 1; i > -1; i--) {
    flippedArr.push(array[i]);
  }
  return flippedArr;
}
