/* exported equal */
function equal(first, second) {
  var combinedArr = [];
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      combinedArr.push(first[i]);
    }
  }
  var isSameLength = second.length === combinedArr.length;
  if (isSameLength) {
    return true;
  }
  return false;
}
