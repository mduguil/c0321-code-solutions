/* exported zip */
function zip(first, second) {
  var shortArr = first;
  var combinedArr = [];
  if (second.length < first.length) {
    shortArr = second;
  }
  for (var i = 0; i < shortArr.length; i++) {
    var miniArr = [];
    miniArr.push(first[i]);
    miniArr.push(second[i]);
    combinedArr.push(miniArr);
  }
  return combinedArr;
}
