/* exported tail */
function tail(array) {
  var shortArr = [];
  for (var i = 1; i < array.length; i++) {
    shortArr.push(array[i]);
  }
  return shortArr;
}
